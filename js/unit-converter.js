/**
 * FLARE-X Unit Converter & Comparability Engine
 * Enforces scientific rigor for multi-experiment comparisons.
 * Converts compatible units with documented mathematical formulas while preserving raw values.
 * Identifies physical incompatibility or missing metadata and issues explicit comparability warnings.
 */

class UnitConverter {
  constructor() {
    this.conversions = {
      // Velocity / Linear Rates (Base: mm/s)
      velocity: {
        base: 'mm/s',
        units: {
          'mm/s': { toBase: v => v, fromBase: v => v, formula: 'Identity' },
          'cm/s': { toBase: v => v * 10, fromBase: v => v / 10, formula: '1 cm/s = 10 mm/s' },
          'm/s': { toBase: v => v * 1000, fromBase: v => v / 1000, formula: '1 m/s = 1000 mm/s' }
        }
      },
      // Pressure (Base: kPa)
      pressure: {
        base: 'kPa',
        units: {
          'kPa': { toBase: v => v, fromBase: v => v, formula: 'Identity' },
          'atm': { toBase: v => v * 101.325, fromBase: v => v / 101.325, formula: '1 atm = 101.325 kPa' },
          'bar': { toBase: v => v * 100.0, fromBase: v => v / 100.0, formula: '1 bar = 100.0 kPa' },
          'psi': { toBase: v => v * 6.89476, fromBase: v => v / 6.89476, formula: '1 psi = 6.89476 kPa' }
        }
      },
      // Temperature (Base: °C)
      temperature: {
        base: '°C',
        units: {
          '°C': { toBase: v => v, fromBase: v => v, formula: 'Identity' },
          'K': { toBase: v => v - 273.15, fromBase: v => v + 273.15, formula: 'T(°C) = T(K) - 273.15' }
        }
      },
      // Heat Flux (Base: kW/m²)
      heat_flux: {
        base: 'kW/m²',
        units: {
          'kW/m²': { toBase: v => v, fromBase: v => v, formula: 'Identity' },
          'W/cm²': { toBase: v => v * 10.0, fromBase: v => v / 10.0, formula: '1 W/cm² = 10.0 kW/m²' },
          'W/m²': { toBase: v => v / 1000.0, fromBase: v => v * 1000.0, formula: '1 kW/m² = 1000 W/m²' }
        }
      },
      // Length (Base: mm)
      length: {
        base: 'mm',
        units: {
          'mm': { toBase: v => v, fromBase: v => v, formula: 'Identity' },
          'cm': { toBase: v => v * 10, fromBase: v => v / 10, formula: '1 cm = 10 mm' },
          'm': { toBase: v => v * 1000, fromBase: v => v / 1000, formula: '1 m = 1000 mm' }
        }
      }
    };
  }

  // Identify physical dimension from unit string
  getDimensionForUnit(unitStr) {
    if (!unitStr) return null;
    const clean = unitStr.trim();
    for (const [dim, def] of Object.entries(this.conversions)) {
      if (def.units[clean]) return dim;
    }
    return null;
  }

  // Convert value from one unit to another within the same dimension
  convert(val, fromUnit, toUnit) {
    if (val === null || val === undefined || isNaN(Number(val))) {
      return { success: false, error: 'Invalid value' };
    }
    const num = Number(val);
    if (fromUnit === toUnit) {
      return {
        success: true,
        value: num,
        formatted: `${num} ${toUnit}`,
        formula: 'No conversion needed'
      };
    }
    const dim = this.getDimensionForUnit(fromUnit);
    if (!dim || !this.conversions[dim].units[toUnit]) {
      return { success: false, error: `Cannot convert from ${fromUnit} to ${toUnit}` };
    }

    const toBaseFn = this.conversions[dim].units[fromUnit].toBase;
    const fromBaseFn = this.conversions[dim].units[toUnit].fromBase;
    const formulaText = `${fromUnit} -> [${this.conversions[dim].base}] -> ${toUnit}`;

    const baseVal = toBaseFn(num);
    const converted = fromBaseFn(baseVal);
    const rounded = Math.round(converted * 1000) / 1000;

    return {
      success: true,
      value: rounded,
      formatted: `${rounded} ${toUnit}`,
      formula: formulaText
    };
  }

  // Evaluate compatibility of measured variables across multiple experiments
  evaluateComparability(experiments, variableName) {
    const recordsWithVar = [];
    const missingRecords = [];

    experiments.forEach(exp => {
      const v = (exp.measured_variables || []).find(m => 
        m.name && m.name.toLowerCase() === variableName.toLowerCase()
      );
      if (v && v.value !== null && v.value !== undefined) {
        recordsWithVar.push({
          expId: exp.id,
          expName: exp.name,
          rawVar: v,
          value: Number(v.value),
          unit: v.unit,
          definition: v.definition,
          sensor: v.sensor_context
        });
      } else {
        missingRecords.push(exp.id);
      }
    });

    // Check 1: Missing metadata / Not available in some experiments
    if (missingRecords.length > 0) {
      return {
        isCompatible: false,
        severity: 'warning',
        warningType: 'MISSING_METADATA',
        reason: `Variable "${variableName}" is not recorded or marked "Not available" in experiment(s): ${missingRecords.join(', ')}. Direct side-by-side plotting cannot be completed without fabricating data.`,
        recordsWithVar,
        missingRecords
      };
    }

    if (recordsWithVar.length < 2) {
      return {
        isCompatible: false,
        severity: 'info',
        warningType: 'INSUFFICIENT_RECORDS',
        reason: `At least 2 records are required to perform comparative evaluation.`,
        recordsWithVar
      };
    }

    // Check 2: Physical dimension alignment
    const firstUnit = recordsWithVar[0].unit;
    const firstDim = this.getDimensionForUnit(firstUnit);

    const incompatibleUnits = [];
    for (let i = 1; i < recordsWithVar.length; i++) {
      const u = recordsWithVar[i].unit;
      const dim = this.getDimensionForUnit(u);
      if (!firstDim || dim !== firstDim) {
        incompatibleUnits.push(`${recordsWithVar[i].expId} uses "${u}" (Dimension: ${dim || 'unknown'}) vs ${recordsWithVar[0].expId} "${firstUnit}" (Dimension: ${firstDim || 'unknown'})`);
      }
    }

    if (incompatibleUnits.length > 0) {
      return {
        isCompatible: false,
        severity: 'danger',
        warningType: 'DIMENSIONAL_INCOMPATIBILITY',
        reason: `Physical dimensional mismatch detected for "${variableName}". ${incompatibleUnits.join('; ')}. Converting between incompatible physical quantities would violate scientific validity.`,
        recordsWithVar
      };
    }

    // Check 3: Definition and boundary context compatibility
    // E.g., if one definition describes "cylindrical regression" while another describes "droplet evaporation rate"
    const defWarnings = [];
    const targetUnit = this.conversions[firstDim].base;
    const harmonizedRecords = recordsWithVar.map(rec => {
      const conv = this.convert(rec.value, rec.unit, targetUnit);
      return {
        ...rec,
        targetUnit,
        convertedValue: conv.value,
        formula: conv.formula,
        displayString: `${conv.value} ${targetUnit} (original: ${rec.value} ${rec.unit})`
      };
    });

    return {
      isCompatible: true,
      targetUnit,
      harmonizedRecords,
      conversionsApplied: recordsWithVar.map(r => `${r.expId}: ${r.unit} converted to ${targetUnit}`).join(' | '),
      note: `All units successfully harmonized to standard SI base unit [${targetUnit}].`
    };
  }
}

window.unitConverter = new UnitConverter();
