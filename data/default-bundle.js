/** Auto-generated standalone offline data bundle for FLARE-X */
window.DEFAULT_FLARE_X_BUNDLE = {
  "experiments": [
    {
      "id": "EXP-BASS-PMMA-01",
      "name": "BASS PMMA Flat Slab Concurrent Flame Spread",
      "objective": "Determine the effect of low-speed concurrent forced airflow on the flame spread rate and extinction limits of thick polymethyl methacrylate (PMMA) slabs in microgravity.",
      "platform": "ISS Microgravity Science Glovebox (MSG)",
      "gravity_condition": "Microgravity (~10^-5 g)",
      "material_fuel": "Polymethyl Methacrylate (PMMA, 10mm thick)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.5%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.2 kPa"
      },
      "airflow": {
        "value": 5.0,
        "unit": "cm/s",
        "direction": "Concurrent forced flow",
        "uncertainty": "\u00b10.2 cm/s"
      },
      "measured_variables": [
        {
          "name": "Flame Spread Rate",
          "value": 1.85,
          "unit": "mm/s",
          "definition": "Linear velocity of the visible pyrolysis front advancing along the cast PMMA slab surface under concurrent flow.",
          "sensor_context": "Digital video camera at 30 fps aligned with optical measurement grid; spatial resolution 0.14 mm/pixel."
        },
        {
          "name": "Flame Length",
          "value": 34.2,
          "unit": "mm",
          "definition": "Tip-to-base visible luminous flame boundary measured along the centerline.",
          "sensor_context": "Calibrated color video photogrammetry; threshold at 10% maximum intensity."
        },
        {
          "name": "Peak Surface Temperature",
          "value": 412.0,
          "unit": "\u00b0C",
          "definition": "Maximum solid surface temperature recorded by embedded surface thermocouples immediately prior to flame front passage.",
          "sensor_context": "Type K micro-thermocouple (0.05 mm diameter wire) flush-mounted into the sample surface."
        },
        {
          "name": "Total Radiative Heat Flux",
          "value": 4.8,
          "unit": "kW/m\u00b2",
          "definition": "Peak radiant emission received at a fixed normal distance of 50 mm from the flame zone.",
          "sensor_context": "Narrow-angle calibrated radiometer with sapphire window (0.2 to 5.0 \u03bcm band)."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "spread_distance_mm": 0.0,
            "surface_temp_c": 24.0,
            "heat_flux_kw_m2": 0.0
          },
          {
            "time": 10,
            "spread_distance_mm": 18.2,
            "surface_temp_c": 210.0,
            "heat_flux_kw_m2": 2.1
          },
          {
            "time": 20,
            "spread_distance_mm": 37.0,
            "surface_temp_c": 365.0,
            "heat_flux_kw_m2": 4.2
          },
          {
            "time": 30,
            "spread_distance_mm": 55.4,
            "surface_temp_c": 412.0,
            "heat_flux_kw_m2": 4.8
          },
          {
            "time": 40,
            "spread_distance_mm": 73.9,
            "surface_temp_c": 408.0,
            "heat_flux_kw_m2": 4.6
          },
          {
            "time": 50,
            "spread_distance_mm": 92.5,
            "surface_temp_c": 410.0,
            "heat_flux_kw_m2": 4.7
          }
        ]
      },
      "data_files": [
        {
          "filename": "BASS_PMMA_Run04_Thermocouple_Array.csv",
          "type": "CSV",
          "size": "2.4 MB",
          "description": "Multi-channel surface and gas-phase thermocouple temperature traces at 10 Hz sampling rate."
        },
        {
          "filename": "BASS_PMMA_Run04_HighSpeed_Video.mp4",
          "type": "MP4",
          "size": "142 MB",
          "description": "Top-down synchronized color footage of flame spread and soot deposition."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.proci.2014.05.089",
      "source_document": "Olson, S. L. et al., 'Flame Spread Over Thin and Thick Fuels in Microgravity: Results from the BASS Investigation', Proc. Combust. Inst., 35(3), 2631-2638 (2015).",
      "retrieval_date": "2024-09-12",
      "notes": "Ignition achieved via hot Kanthal wire in contact with slab edge. Steady spread regime established after 15 seconds.",
      "provenance_per_field": {
        "airflow": "BASS Operations Logbook Rev C, Table 4.1, p. 42 (NASA GRC)",
        "oxygen_percent": "MSG Life Support telemetry feed record #MSG-2013-098",
        "pressure": "MSG Chamber barometric sensor P1",
        "measured_variables.Flame Spread Rate": "Olson et al. (2015) Table 2, p. 2634",
        "measured_variables.Peak Surface Temperature": "Thermocouple TC-03 primary channel data"
      }
    },
    {
      "id": "EXP-BASS-COTTON-02",
      "name": "BASS Cotton-Fiberglass Blend Quenching and Extinction",
      "objective": "Investigate low-speed forced flow extinction limits and flame quenching for thin cotton/fiberglass fabric samples under spacecraft-like ventilation regimes.",
      "platform": "ISS Microgravity Science Glovebox (MSG)",
      "gravity_condition": "Microgravity (~10^-5 g)",
      "material_fuel": "Cotton/Fiberglass Blend (Sibal fabric, 75% cotton / 25% fiberglass)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.4%"
      },
      "pressure": {
        "value": 98.5,
        "unit": "kPa",
        "uncertainty": "\u00b10.3 kPa"
      },
      "airflow": {
        "value": 2.5,
        "unit": "cm/s",
        "direction": "Concurrent forced flow",
        "uncertainty": "\u00b10.2 cm/s"
      },
      "measured_variables": [
        {
          "name": "Flame Spread Rate",
          "value": 2.4,
          "unit": "mm/s",
          "definition": "Velocity of the leading flame pyrolysis zone on thermally thin fabric prior to quenching.",
          "sensor_context": "Digital video camera at 30 fps; edge detection tracking algorithm."
        },
        {
          "name": "Quenching Distance",
          "value": 6.8,
          "unit": "mm",
          "definition": "Minimum stand-off distance between glowing char boundary and metallic holder edge at flame extinction.",
          "sensor_context": "High-magnification macro lens video imagery; calibrated against holder markings."
        },
        {
          "name": "Extinction Velocity",
          "value": 1.1,
          "unit": "cm/s",
          "definition": "Critical minimum concurrent airflow below which the flame fails to sustain combustion and self-extinguishes.",
          "sensor_context": "Hot-wire anemometer duct probe calibrated to \u00b10.1 cm/s."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "spread_distance_mm": 0.0,
            "surface_temp_c": 22.0,
            "heat_flux_kw_m2": 0.0
          },
          {
            "time": 8,
            "spread_distance_mm": 19.1,
            "surface_temp_c": 310.0,
            "heat_flux_kw_m2": 3.4
          },
          {
            "time": 16,
            "spread_distance_mm": 38.3,
            "surface_temp_c": 345.0,
            "heat_flux_kw_m2": 3.6
          },
          {
            "time": 24,
            "spread_distance_mm": 57.6,
            "surface_temp_c": 280.0,
            "heat_flux_kw_m2": 2.1
          },
          {
            "time": 30,
            "spread_distance_mm": 64.2,
            "surface_temp_c": 140.0,
            "heat_flux_kw_m2": 0.4
          }
        ]
      },
      "data_files": [
        {
          "filename": "BASS_Cotton_Run12_Extinction_Log.csv",
          "type": "CSV",
          "size": "1.1 MB",
          "description": "Flow speed step-down log and optical emission sensor values up to extinction event."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2016.03.011",
      "source_document": "Ferkul, P. V. and Olson, S. L., 'Extinction of Flame Spread Over Fabric Samples in Microgravity', Combustion and Flame, 166, 120-128 (2016).",
      "retrieval_date": "2024-09-15",
      "notes": "Hypoxic atmosphere (18% O2) simulated exploration atmosphere regime. Flame suffered radiative extinction when flow dropped below 1.2 cm/s.",
      "provenance_per_field": {
        "airflow": "MSG duct flow calibrated controller setting F-02",
        "oxygen_percent": "Chamber mass spectrometer oxygen partial pressure log",
        "pressure": "MSG ambient transducer PT-101",
        "measured_variables.Extinction Velocity": "Ferkul & Olson (2016) Section 3.2, p. 124"
      }
    },
    {
      "id": "EXP-ACME-CIR-01",
      "name": "ACME Methane Gaseous Diffusion Laminar Flame",
      "objective": "Characterize soot inception, radiative extinction limits, and flame geometry for spherical/cylindrical laminar methane diffusion flames in microgravity.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methane (CH4 gaseous diffusion burner)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.0,
        "unit": "kPa",
        "uncertainty": "\u00b10.1 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Flame Width",
          "value": 26.4,
          "unit": "mm",
          "definition": "Maximum transverse visible flame boundary diameter in quiescent microgravity environment.",
          "sensor_context": "Orthogonal calibrated CCD cameras; 1024x1024 pixel array with narrowband CH* chemiluminescence filter (430 nm)."
        },
        {
          "name": "Radiative Extinction Limit",
          "value": 14.8,
          "unit": "mg/s",
          "definition": "Minimum fuel mass flow rate at which flame self-extinguishes due to radiative heat loss exceeding chemical heat release.",
          "sensor_context": "Thermal mass flow meter MFM-01 with 0.1 mg/s precision."
        },
        {
          "name": "Soot Volume Fraction",
          "value": 2.8,
          "unit": "ppm",
          "definition": "Peak optical volume fraction of carbonaceous particulate soot within the annular luminous zone.",
          "sensor_context": "Line-of-sight laser extinction measurement at 632.8 nm (He-Ne)."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "fuel_flow_mg_s": 25.0,
            "soot_ppm": 0.1,
            "radiant_output_w": 0.2
          },
          {
            "time": 15,
            "fuel_flow_mg_s": 25.0,
            "soot_ppm": 2.7,
            "radiant_output_w": 3.8
          },
          {
            "time": 30,
            "fuel_flow_mg_s": 20.0,
            "soot_ppm": 2.4,
            "radiant_output_w": 3.1
          },
          {
            "time": 45,
            "fuel_flow_mg_s": 16.0,
            "soot_ppm": 1.8,
            "radiant_output_w": 2.4
          },
          {
            "time": 60,
            "fuel_flow_mg_s": 14.5,
            "soot_ppm": 0.0,
            "radiant_output_w": 0.0
          }
        ]
      },
      "data_files": [
        {
          "filename": "ACME_CIR_Run201_Soot_Spectroscopy.h5",
          "type": "HDF5",
          "size": "8.7 MB",
          "description": "Multi-angle laser extinction and chemiluminescence emission spectral matrices."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2019.04.015",
      "source_document": "Sunderland, P. B. et al., 'Structure and Extinction of Nonpremixed Methane Flames in Microgravity', Combustion and Flame, 206, 11-21 (2019).",
      "retrieval_date": "2024-09-20",
      "notes": "Absence of buoyant acceleration results in spherical flame morphology and significantly extended residence times compared to terrestrial 1g burners.",
      "provenance_per_field": {
        "airflow": "CIR sealed combustion chamber quiescent mode",
        "oxygen_percent": "Gas Delivery System mass flow mixer log #GDS-092",
        "pressure": "CIR chamber absolute pressure transducer PT-CIR-01",
        "measured_variables.Soot Volume Fraction": "Sunderland et al. (2019) Figure 6, p. 16"
      }
    },
    {
      "id": "EXP-ACME-CIR-02",
      "name": "ACME Ethylene Flame Soot and Radiation Dynamics",
      "objective": "Quantify soot generation rates and radiative heat loss fractions for ethylene flames under variable oxygen enrichment in microgravity.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Ethylene (C2H4 gaseous fuel)",
      "oxygen_percent": {
        "value": 40.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.3%"
      },
      "pressure": {
        "value": 100.0,
        "unit": "kPa",
        "uncertainty": "\u00b10.1 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Soot Volume Fraction",
          "value": 7.4,
          "unit": "ppm",
          "definition": "Maximum local concentration of particulate soot in the luminous flame sheet.",
          "sensor_context": "Planar laser-induced incandescence (LII) calibrated with multi-wavelength extinction."
        },
        {
          "name": "Radiative Fraction",
          "value": 0.46,
          "unit": "dimensionless (ratio)",
          "definition": "Fraction of total chemical heat release lost from the flame via electromagnetic thermal radiation.",
          "sensor_context": "Dual broad-band thermopile radiometers positioned at 45\u00b0 and 90\u00b0 azimuth."
        },
        {
          "name": "Peak Flame Temperature",
          "value": 1840.0,
          "unit": "\u00b0C",
          "definition": "Maximum corrected gas temperature within the reaction sheet.",
          "sensor_context": "Two-color optical pyrometry verified by radiation-corrected Pt/Rh thermocouple."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "soot_ppm": 0.0,
            "rad_fraction": 0.0,
            "temp_c": 25.0
          },
          {
            "time": 10,
            "soot_ppm": 5.1,
            "rad_fraction": 0.38,
            "temp_c": 1620.0
          },
          {
            "time": 20,
            "soot_ppm": 7.4,
            "rad_fraction": 0.46,
            "temp_c": 1840.0
          },
          {
            "time": 30,
            "soot_ppm": 7.2,
            "rad_fraction": 0.45,
            "temp_c": 1810.0
          }
        ]
      },
      "data_files": [
        {
          "filename": "ACME_C2H4_Radiation_Run08.csv",
          "type": "CSV",
          "size": "3.2 MB",
          "description": "Radiometer thermopile microvolt signals and computed heat flux."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.proci.2020.06.182",
      "source_document": "Urban, D. L. et al., 'Radiation and Soot Processes in Microgravity Nonpremixed Ethylene Flames', Proc. Combust. Inst., 38(3), 4785-4793 (2021).",
      "retrieval_date": "2024-09-22",
      "notes": "High soot yield observed due to lengthened microgravity diffusion residence time without buoyant purging.",
      "provenance_per_field": {
        "airflow": "CIR quiescent test chamber specification",
        "oxygen_percent": "Chamber O2 analyzer sensor OA-04",
        "pressure": "Transducer PT-CIR-01",
        "measured_variables.Radiative Fraction": "Urban et al. (2021) Table 1, p. 4788"
      }
    },
    {
      "id": "EXP-SAFFIRE-I-01",
      "name": "Saffire-I Large-Scale Sibal Fabric Flame Spread",
      "objective": "Conduct the first realistic-scale fire safety experiment in an uncrewed space vehicle, measuring flame growth and spread rate over large cotton-fiberglass fabric panels.",
      "platform": "Cygnus Spacecraft (Saffire Flow Duct, post-departure from ISS)",
      "gravity_condition": "Microgravity (~10^-4 g)",
      "material_fuel": "Cotton/Fiberglass Blend (Sibal fabric, 0.4m x 1.0m sheet)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.5%"
      },
      "pressure": {
        "value": 100.5,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 20.0,
        "unit": "cm/s",
        "direction": "Concurrent forced flow (fans)",
        "uncertainty": "\u00b11.0 cm/s"
      },
      "measured_variables": [
        {
          "name": "Flame Spread Rate",
          "value": 5.2,
          "unit": "mm/s",
          "definition": "Average velocity of flame front propagation across the large 1.0 m panel.",
          "sensor_context": "Synchronized camera array; optical flow tracking and thermocouple arrival time triangulation."
        },
        {
          "name": "Maximum Radiant Heat Flux",
          "value": 11.4,
          "unit": "kW/m\u00b2",
          "definition": "Peak radiant emission detected at duct wall during full panel involvement.",
          "sensor_context": "Schmidt-Boelter heat flux gauge mounted flush in duct upper plate."
        },
        {
          "name": "Oxygen Depletion Rate",
          "value": 0.18,
          "unit": "%/min",
          "definition": "Rate of atmospheric oxygen consumption measured in vehicle cabin during burn period.",
          "sensor_context": "Cygnus vehicle life-support electrochemical O2 sensor suite."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "spread_distance_mm": 0.0,
            "flame_temp_c": 25.0,
            "flux_kw_m2": 0.1
          },
          {
            "time": 30,
            "spread_distance_mm": 156.0,
            "flame_temp_c": 540.0,
            "flux_kw_m2": 4.8
          },
          {
            "time": 60,
            "spread_distance_mm": 312.0,
            "flame_temp_c": 710.0,
            "flux_kw_m2": 8.9
          },
          {
            "time": 90,
            "spread_distance_mm": 468.0,
            "flame_temp_c": 780.0,
            "flux_kw_m2": 11.4
          },
          {
            "time": 120,
            "spread_distance_mm": 624.0,
            "flame_temp_c": 760.0,
            "flux_kw_m2": 10.9
          }
        ]
      },
      "data_files": [
        {
          "filename": "Saffire_I_Telemetry_Run01.csv",
          "type": "CSV",
          "size": "15.4 MB",
          "description": "Full Cygnus cabin pressure, airflow fan RPM, 24 thermocouple channels, and radiometers."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.proci.2018.06.196",
      "source_document": "Urban, D. L. et al., 'The Spacecraft Fire Experiment: Saffire-I and Saffire-II Results', Proc. Combust. Inst., 37(3), 4153-4160 (2019).",
      "retrieval_date": "2024-09-25",
      "notes": "Large flame grew in a continuous triangular shape; burning sustained without self-extinguishing throughout the test window.",
      "provenance_per_field": {
        "airflow": "Saffire flow duct calibrated fan tachometer and differential pressure matrix",
        "oxygen_percent": "Pre-departure Cygnus cabin gas analysis log",
        "pressure": "Cygnus internal barometric sensor suite",
        "measured_variables.Flame Spread Rate": "Urban et al. (2019) Figure 4, p. 4156"
      }
    },
    {
      "id": "EXP-SAFFIRE-II-02",
      "name": "Saffire-II Multi-Material Sample Array Combustion",
      "objective": "Determine maximum burning rate and smoke generation for nine distinct spacecraft engineering plastic samples in low-speed flow in microgravity.",
      "platform": "Cygnus Spacecraft (Saffire Flow Duct, post-departure)",
      "gravity_condition": "Microgravity (~10^-4 g)",
      "material_fuel": "Polymethyl Methacrylate (PMMA, 50mm x 300mm strip)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.5%"
      },
      "pressure": {
        "value": 99.8,
        "unit": "kPa",
        "uncertainty": "\u00b10.4 kPa"
      },
      "airflow": {
        "value": 15.0,
        "unit": "cm/s",
        "direction": "Concurrent forced flow",
        "uncertainty": "\u00b10.8 cm/s"
      },
      "measured_variables": [
        {
          "name": "Flame Spread Rate",
          "value": 3.1,
          "unit": "mm/s",
          "definition": "Steady-state flame front velocity along PMMA strip.",
          "sensor_context": "Calibrated optical camera and photodiode arrival array."
        },
        {
          "name": "Smoke Optical Density",
          "value": 0.82,
          "unit": "1/m",
          "definition": "Attenuation coefficient of smoke obscuration measured downstream of the combustion zone.",
          "sensor_context": "Near-IR obscuration beam smoke meter at 880 nm."
        },
        {
          "name": "Peak Surface Temperature",
          "value": 435.0,
          "unit": "\u00b0C",
          "definition": "Maximum pyrolysis temperature of solid fuel before vaporization.",
          "sensor_context": "Thermocouple TC-PMMA-02 embedded 0.5 mm beneath sample surface."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "spread_distance_mm": 0.0,
            "smoke_od": 0.0,
            "temp_c": 24.0
          },
          {
            "time": 20,
            "spread_distance_mm": 62.0,
            "smoke_od": 0.35,
            "temp_c": 310.0
          },
          {
            "time": 40,
            "spread_distance_mm": 124.0,
            "smoke_od": 0.78,
            "temp_c": 420.0
          },
          {
            "time": 60,
            "spread_distance_mm": 186.0,
            "smoke_od": 0.82,
            "temp_c": 435.0
          }
        ]
      },
      "data_files": [
        {
          "filename": "Saffire_II_Sample04_PMMA_Trace.csv",
          "type": "CSV",
          "size": "5.6 MB",
          "description": "Video photodiode synchronization and smoke obscuration sensor time trace."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.proci.2018.06.196",
      "source_document": "Urban, D. L. et al., 'The Spacecraft Fire Experiment: Saffire-I and Saffire-II Results', Proc. Combust. Inst., 37(3), 4153-4160 (2019).",
      "retrieval_date": "2024-09-25",
      "notes": "PMMA sample showed steady bubbling and vigorous jetting at 15 cm/s concurrent flow.",
      "provenance_per_field": {
        "airflow": "Saffire airflow subassembly calibrated flow meter",
        "oxygen_percent": "Vehicle cabin atmosphere monitor log",
        "pressure": "Cygnus vehicle pressure telemetry",
        "measured_variables.Smoke Optical Density": "Saffire obscurometer log channel OD-1"
      }
    },
    {
      "id": "EXP-FLEX-CIR-01",
      "name": "FLEX Isolated Droplet Combustion and Cool Flame Extinction",
      "objective": "Observe spherical burning, radiative extinction, and low-temperature 'cool flame' quasi-steady burning of isolated alkane fuel droplets in microgravity.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "n-Heptane Droplet (initial diameter 2.8 mm, SiC fiber suspension)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.3%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.1 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burning Rate Constant",
          "value": 0.58,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law evaporation and consumption rate slope constant: -d(D\u00b2)/dt during the hot flame phase.",
          "sensor_context": "High-magnification backlit silhouette shadowgraphy at 100 fps."
        },
        {
          "name": "Extinction Diameter",
          "value": 1.42,
          "unit": "mm",
          "definition": "Droplet diameter at the moment the visible hot luminous flame extinguishes and cool flame begins.",
          "sensor_context": "Shadowgraphy camera paired with UV/visible ICCD camera."
        },
        {
          "name": "Cool Flame Duration",
          "value": 14.5,
          "unit": "s",
          "definition": "Elapsed time during which droplet continues invisible low-temperature combustion prior to final extinction.",
          "sensor_context": "Broadband radiometer in the 2.5-3.5 \u03bcm infrared band."
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "d_squared_mm2": 7.84,
            "emission_uv": 0.0,
            "rad_ir_w": 0.0
          },
          {
            "time": 2,
            "d_squared_mm2": 6.68,
            "emission_uv": 4.2,
            "rad_ir_w": 2.1
          },
          {
            "time": 4,
            "d_squared_mm2": 5.52,
            "emission_uv": 4.1,
            "rad_ir_w": 2.2
          },
          {
            "time": 6,
            "d_squared_mm2": 4.36,
            "emission_uv": 3.9,
            "rad_ir_w": 2.0
          },
          {
            "time": 7.5,
            "d_squared_mm2": 3.49,
            "emission_uv": 0.1,
            "rad_ir_w": 0.6
          },
          {
            "time": 15,
            "d_squared_mm2": 1.25,
            "emission_uv": 0.0,
            "rad_ir_w": 0.5
          },
          {
            "time": 22,
            "d_squared_mm2": 0.0,
            "emission_uv": 0.0,
            "rad_ir_w": 0.0
          }
        ]
      },
      "data_files": [
        {
          "filename": "FLEX_Heptane_CIR_Drop21_Shadowgraph.csv",
          "type": "CSV",
          "size": "4.1 MB",
          "description": "Droplet diameter squared time series extracted via automated ellipse fitting."
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015).",
      "retrieval_date": "2024-09-28",
      "notes": "Discovery of two-stage combustion in microgravity where hot flame radiative extinction triggers prolonged cool-flame consumption regime.",
      "provenance_per_field": {
        "airflow": "CIR quiescent chamber chamber log #FLEX-014",
        "oxygen_percent": "Chamber gas mixture mass spectrometry",
        "pressure": "CIR high-precision absolute pressure transducer",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) Table 1, p. 2143"
      }
    },
    {
      "id": "EXP-SLICES-MSG-01",
      "name": "SLICES Cylindrical HDPE Rod Concurrent Flame Spread",
      "objective": "Examine the influence of low-speed concurrent flow on flame spread along solid cylindrical thermoplastic fuel rods in microgravity.",
      "platform": "ISS Microgravity Science Glovebox (MSG)",
      "gravity_condition": "Microgravity (~10^-5 g)",
      "material_fuel": "High-Density Polyethylene (HDPE, 6.35mm diameter rod)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.5%"
      },
      "pressure": {
        "value": null,
        "unit": null,
        "uncertainty": null
      },
      "airflow": {
        "value": 10.0,
        "unit": "cm/s",
        "direction": "Concurrent forced flow",
        "uncertainty": "\u00b10.5 cm/s"
      },
      "measured_variables": [
        {
          "name": "Flame Spread Rate",
          "value": 1.25,
          "unit": "mm/s",
          "definition": "Axial regression velocity of the melting and burning front along the HDPE cylinder.",
          "sensor_context": "Digital video camera; frame-by-frame front tracking."
        },
        {
          "name": "Molten Receding Length",
          "value": null,
          "unit": null,
          "definition": null,
          "sensor_context": null
        }
      ],
      "timeseries_data": {
        "time_unit": "s",
        "series": [
          {
            "time": 0,
            "spread_distance_mm": 0.0
          },
          {
            "time": 20,
            "spread_distance_mm": 25.0
          },
          {
            "time": 40,
            "spread_distance_mm": 50.0
          },
          {
            "time": 60,
            "spread_distance_mm": 75.0
          }
        ]
      },
      "data_files": [],
      "source_url": "https://doi.org/10.2514/6.2017-3852",
      "source_document": "Bhattacharjee, S. et al., 'Concurrent Flame Spread Over Thick Cylindrical Fuels in Microgravity', AIAA Propulsion and Energy Forum, AIAA 2017-3852 (2017).",
      "retrieval_date": "2024-10-02",
      "notes": "Molten polymer beading observed at flame trailing edge due to surface tension in microgravity.",
      "provenance_per_field": {
        "airflow": "SLICES wind tunnel fan anemometer setting",
        "oxygen_percent": "MSG oxygen telemetry sensor",
        "pressure": null,
        "measured_variables.Flame Spread Rate": "Bhattacharjee et al. (2017) Figure 8, p. 7"
      }
    }
  ],
  "dataset_metadata": {
    "version": "1.0.0-placeholder",
    "status": "PLACEHOLDER SAMPLE DATA, replace with real NASA records",
    "is_placeholder": true,
    "total_records": 8,
    "last_updated": "2024-10-15",
    "curator": "FLARE-X Microgravity Research Engineering Working Group",
    "source_archive_note": "Sample schemas modeled after NASA Physical Sciences Informatics (PSI) system and published flight experiment reports."
  },
  "documents": [
    {
      "id": "DOC-OLSON-2015",
      "title": "Flame Spread Over Thin and Thick Fuels in Microgravity: Results from the BASS Investigation",
      "authors": "Olson, S. L., Ferkul, P. V., Tien, J. S.",
      "publication": "Proceedings of the Combustion Institute, Vol. 35, Issue 3, pp. 2631-2638",
      "year": 2015,
      "source_url": "https://doi.org/10.1016/j.proci.2014.05.089",
      "retrieval_date": "2024-09-12",
      "passages": [
        {
          "passage_id": "DOC-OLSON-2015-P01",
          "page": "2633",
          "section": "Concurrent Flame Spread Rates",
          "statement_type": "MEASURED FACT",
          "text": "For cast PMMA slabs (10 mm thick) tested in the Microgravity Science Glovebox at 21% O2 and 101.3 kPa, the concurrent flame spread rate was measured at 1.85 \u00b1 0.08 mm/s under a forced concurrent airflow of 5.0 cm/s.",
          "related_experiments": [
            "EXP-BASS-PMMA-01"
          ],
          "topics": [
            "PMMA",
            "flame spread",
            "forced airflow",
            "microgravity",
            "BASS"
          ]
        },
        {
          "passage_id": "DOC-OLSON-2015-P02",
          "page": "2635",
          "section": "Discussion on Flow Velocity Regimes",
          "statement_type": "PAPER CONCLUSION",
          "text": "In microgravity, unlike terrestrial buoyant flames, low forced flow velocities (below ~2 cm/s) limit oxygen transport to the reaction sheet via diffusion alone, driving thick solid flames toward radiative extinction. Increasing flow velocity between 2 cm/s and 10 cm/s enhances flame spread by replenishing oxidizer faster than convective cooling can quench the base.",
          "related_experiments": [
            "EXP-BASS-PMMA-01",
            "EXP-BASS-COTTON-02"
          ],
          "topics": [
            "oxygen transport",
            "flame spread",
            "extinction",
            "airflow",
            "convection"
          ]
        },
        {
          "passage_id": "DOC-OLSON-2015-P03",
          "page": "2637",
          "section": "Theoretical Flame Spread Formulation",
          "statement_type": "MODEL ESTIMATE",
          "text": "Simplified de Ris thermal flame spread models overestimate microgravity spread velocity by 35-45% because they omit solid-phase surface radiative losses, which become dominant when buoyant gas velocity is absent.",
          "related_experiments": [
            "EXP-BASS-PMMA-01"
          ],
          "topics": [
            "de Ris model",
            "radiative loss",
            "model estimate",
            "surface radiation"
          ]
        }
      ]
    },
    {
      "id": "DOC-FERKUL-2016",
      "title": "Extinction of Flame Spread Over Fabric Samples in Microgravity",
      "authors": "Ferkul, P. V., Olson, S. L.",
      "publication": "Combustion and Flame, Vol. 166, pp. 120-128",
      "year": 2016,
      "source_url": "https://doi.org/10.1016/j.combustflame.2016.03.011",
      "retrieval_date": "2024-09-15",
      "passages": [
        {
          "passage_id": "DOC-FERKUL-2016-P01",
          "page": "122",
          "section": "Quenching Limits for Sibal Fabric",
          "statement_type": "MEASURED FACT",
          "text": "Cotton-fiberglass blend (Sibal) fabric exposed to 18% O2 at 98.5 kPa achieved steady flame spread at 2.40 mm/s with 2.5 cm/s flow, but exhibited abrupt radiative extinction when the flow speed was stepped down below 1.1 cm/s.",
          "related_experiments": [
            "EXP-BASS-COTTON-02"
          ],
          "topics": [
            "cotton",
            "fiberglass",
            "extinction",
            "quiescent flow",
            "hypoxic"
          ]
        },
        {
          "passage_id": "DOC-FERKUL-2016-P02",
          "page": "126",
          "section": "Extinction Mechanism Interpretation",
          "statement_type": "PAPER CONCLUSION",
          "text": "At very low ventilation speeds, the heat release rate per unit flame area drops below the rate of gas and surface radiative heat loss, establishing a lower-bound flammability limit unique to microgravity environments.",
          "related_experiments": [
            "EXP-BASS-COTTON-02"
          ],
          "topics": [
            "radiative extinction",
            "flammability limit",
            "ventilation",
            "heat release"
          ]
        }
      ]
    },
    {
      "id": "DOC-SUNDERLAND-2019",
      "title": "Structure and Extinction of Nonpremixed Methane Flames in Microgravity",
      "authors": "Sunderland, P. B., Urban, D. L., Stocker, D. P., Chao, B. H.",
      "publication": "Combustion and Flame, Vol. 206, pp. 11-21",
      "year": 2019,
      "source_url": "https://doi.org/10.1016/j.combustflame.2019.04.015",
      "retrieval_date": "2024-09-20",
      "passages": [
        {
          "passage_id": "DOC-SUNDERLAND-2019-P01",
          "page": "14",
          "section": "Soot Volume Fraction and Geometry",
          "statement_type": "MEASURED FACT",
          "text": "Methane laminar diffusion flames in CIR with 30% O2 and quiescent flow displayed a maximum visible flame width of 26.4 mm and peak soot volume fraction of 2.8 ppm, remaining stable down to a critical fuel mass flow rate of 14.8 mg/s.",
          "related_experiments": [
            "EXP-ACME-CIR-01"
          ],
          "topics": [
            "methane",
            "soot",
            "diffusion flame",
            "CIR",
            "extinction"
          ]
        },
        {
          "passage_id": "DOC-SUNDERLAND-2019-P02",
          "page": "18",
          "section": "Microgravity vs 1g Residence Time",
          "statement_type": "PAPER CONCLUSION",
          "text": "Without buoyant acceleration, gaseous residence times in the flame zone increase by nearly an order of magnitude, resulting in distinct chemical kinetics pathways and enhanced radiative emission per mole of fuel consumed.",
          "related_experiments": [
            "EXP-ACME-CIR-01"
          ],
          "topics": [
            "buoyancy",
            "residence time",
            "chemical kinetics",
            "radiation"
          ]
        }
      ]
    },
    {
      "id": "DOC-URBAN-2019",
      "title": "The Spacecraft Fire Experiment: Saffire-I and Saffire-II Results",
      "authors": "Urban, D. L., Ruff, G. A., Ferkul, P. V., Olson, S. L., Fernandez-Pello, C., T'ien, J. S., Torero, J. L.",
      "publication": "Proceedings of the Combustion Institute, Vol. 37, Issue 3, pp. 4153-4160",
      "year": 2019,
      "source_url": "https://doi.org/10.1016/j.proci.2018.06.196",
      "retrieval_date": "2024-09-25",
      "passages": [
        {
          "passage_id": "DOC-URBAN-2019-P01",
          "page": "4155",
          "section": "Large-Scale Fabric Combustion in Cygnus",
          "statement_type": "MEASURED FACT",
          "text": "In Saffire-I, the 0.4 m x 1.0 m Sibal fabric burned continuously with an average flame spread rate of 5.20 mm/s in a 20.0 cm/s concurrent airflow at 21% O2 and 100.5 kPa, producing a peak radiant heat flux of 11.4 kW/m\u00b2.",
          "related_experiments": [
            "EXP-SAFFIRE-I-01"
          ],
          "topics": [
            "Saffire",
            "large-scale",
            "Sibal fabric",
            "Cygnus",
            "radiant heat flux"
          ]
        },
        {
          "passage_id": "DOC-URBAN-2019-P02",
          "page": "4158",
          "section": "Scale Effects and NASA-STD-6001 Comparison",
          "statement_type": "CROSS-STUDY INTERPRETATION",
          "text": "Comparison of Saffire-I large-scale burns with small glovebox samples (BASS) and ground standard NASA-STD-6001 Test 1 demonstrates that flame spread velocity scales nonlinearly with sample width due to lateral preheating and reduced edge heat loss in large geometries.",
          "related_experiments": [
            "EXP-SAFFIRE-I-01",
            "EXP-BASS-COTTON-02"
          ],
          "topics": [
            "scale effects",
            "NASA-STD-6001",
            "sample width",
            "fire safety"
          ]
        },
        {
          "passage_id": "DOC-URBAN-2019-P03",
          "page": "4159",
          "section": "PMMA Obscuration in Saffire-II",
          "statement_type": "MEASURED FACT",
          "text": "During Saffire-II sample 4 burns, PMMA strips in 15 cm/s flow generated smoke with peak optical density of 0.82 m\u207b\u00b9 and steady flame spread of 3.10 mm/s, demonstrating persistent smoke accumulation in enclosed spacecraft ducts.",
          "related_experiments": [
            "EXP-SAFFIRE-II-02"
          ],
          "topics": [
            "PMMA",
            "smoke optical density",
            "Saffire-II",
            "obscuration"
          ]
        }
      ]
    },
    {
      "id": "DOC-NAYAGAM-2015",
      "title": "Warm and Cool Flame Droplet Extinction in Microgravity",
      "authors": "Nayagam, V., Dietrich, D. L., Ferkul, P. V., Hicks, M. C., Williams, F. A.",
      "publication": "Combustion and Flame, Vol. 162, Issue 5, pp. 2140-2147",
      "year": 2015,
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "retrieval_date": "2024-09-28",
      "passages": [
        {
          "passage_id": "DOC-NAYAGAM-2015-P01",
          "page": "2142",
          "section": "Droplet Burning Rate and Second-Stage Combustion",
          "statement_type": "MEASURED FACT",
          "text": "Isolated n-heptane droplets in CIR microgravity displayed an initial burning rate constant K = 0.58 mm\u00b2/s, underwent hot flame extinction at diameter 1.42 mm, and then sustained an invisible cool flame burning regime for 14.5 seconds.",
          "related_experiments": [
            "EXP-FLEX-CIR-01"
          ],
          "topics": [
            "heptane",
            "droplet",
            "cool flame",
            "FLEX",
            "d2 law"
          ]
        },
        {
          "passage_id": "DOC-NAYAGAM-2015-P02",
          "page": "2145",
          "section": "Significance for Spacecraft Hazard Assessment",
          "statement_type": "PAPER CONCLUSION",
          "text": "The discovery of microgravity cool flames indicates that chemical reaction and fuel consumption can persist at temperatures below 800 K without visible radiation, presenting a stealth hazard where standard optical sensors would register flame extinction while combustion continues.",
          "related_experiments": [
            "EXP-FLEX-CIR-01"
          ],
          "topics": [
            "cool flame",
            "spacecraft hazard",
            "low-temperature",
            "optical detection"
          ]
        }
      ]
    },
    {
      "id": "DOC-BHATTACHARJEE-2017",
      "title": "Concurrent Flame Spread Over Thick Cylindrical Fuels in Microgravity",
      "authors": "Bhattacharjee, S., Paolini, C., Takahashi, S., Wakai, K.",
      "publication": "AIAA Propulsion and Energy Forum, AIAA 2017-3852",
      "year": 2017,
      "source_url": "https://doi.org/10.2514/6.2017-3852",
      "retrieval_date": "2024-10-02",
      "passages": [
        {
          "passage_id": "DOC-BHATTACHARJEE-2017-P01",
          "page": "6",
          "section": "HDPE Cylindrical Spread",
          "statement_type": "MEASURED FACT",
          "text": "In the SLICES MSG experiments, cylindrical HDPE fuel rods burning in 10 cm/s concurrent airflow exhibited a steady flame spread velocity of 1.25 mm/s at 21% O2.",
          "related_experiments": [
            "EXP-SLICES-MSG-01"
          ],
          "topics": [
            "HDPE",
            "cylinder",
            "SLICES",
            "flame spread"
          ]
        },
        {
          "passage_id": "DOC-BHATTACHARJEE-2017-P02",
          "page": "8",
          "section": "Limiting Airflow Boundary Estimates",
          "statement_type": "MODEL ESTIMATE",
          "text": "Scaling computations indicate that for thick cylindrical geometries, the maximum concurrent spread rate occurs near 15 cm/s airflow; at speeds above 35 cm/s, convective blow-off extinction is projected to dominate.",
          "related_experiments": [
            "EXP-SLICES-MSG-01"
          ],
          "topics": [
            "model estimate",
            "blow-off",
            "scaling",
            "critical airflow"
          ]
        }
      ]
    }
  ],
  "relationships": {
    "graph_metadata": {
      "version": "1.0.0-placeholder",
      "description": "FLARE-X Microgravity Combustion Knowledge Graph, connecting investigations, materials, conditions, measurements, publications, and findings.",
      "is_placeholder": true
    },
    "nodes": [
      {
        "id": "INV-BASS",
        "label": "BASS Investigation",
        "type": "investigation",
        "group": "investigation",
        "description": "Burning and Suppression of Solids aboard the ISS MSG"
      },
      {
        "id": "INV-ACME",
        "label": "ACME Investigation",
        "type": "investigation",
        "group": "investigation",
        "description": "Advanced Combustion via Microgravity Experiments in the CIR"
      },
      {
        "id": "INV-SAFFIRE",
        "label": "Saffire Investigation",
        "type": "investigation",
        "group": "investigation",
        "description": "Spacecraft Fire Safety Experiment in Cygnus Cargo Vehicles"
      },
      {
        "id": "INV-FLEX",
        "label": "FLEX Investigation",
        "type": "investigation",
        "group": "investigation",
        "description": "Flame Extinction Experiment in the CIR"
      },
      {
        "id": "INV-SLICES",
        "label": "SLICES Investigation",
        "type": "investigation",
        "group": "investigation",
        "description": "Solid Fuel Ignition and Extinction in MSG"
      },
      {
        "id": "MAT-PMMA",
        "label": "PMMA (Acrylic)",
        "type": "material",
        "group": "material",
        "description": "Polymethyl Methacrylate solid thermoplastic fuel"
      },
      {
        "id": "MAT-SIBAL",
        "label": "Sibal Fabric",
        "type": "material",
        "group": "material",
        "description": "75% Cotton / 25% Fiberglass blend standard fabric"
      },
      {
        "id": "MAT-CH4",
        "label": "Methane (CH4)",
        "type": "material",
        "group": "material",
        "description": "Gaseous hydrocarbon diffusion fuel"
      },
      {
        "id": "MAT-C2H4",
        "label": "Ethylene (C2H4)",
        "type": "material",
        "group": "material",
        "description": "Highly sooting gaseous fuel"
      },
      {
        "id": "MAT-HEPTANE",
        "label": "n-Heptane",
        "type": "material",
        "group": "material",
        "description": "Liquid alkane fuel droplet"
      },
      {
        "id": "MAT-HDPE",
        "label": "HDPE Rod",
        "type": "material",
        "group": "material",
        "description": "High-density polyethylene cylindrical rod"
      },
      {
        "id": "COND-U-GRAV",
        "label": "Microgravity (~10^-6 g)",
        "type": "condition",
        "group": "condition",
        "description": "Reduced buoyancy-driven convection environment"
      },
      {
        "id": "COND-FLOW-LOW",
        "label": "Low Forced Airflow (1-5 cm/s)",
        "type": "condition",
        "group": "condition",
        "description": "Spacecraft ambient cabin ventilation regime"
      },
      {
        "id": "COND-FLOW-HIGH",
        "label": "High Forced Airflow (15-20 cm/s)",
        "type": "condition",
        "group": "condition",
        "description": "Emergency duct / filter ventilation regime"
      },
      {
        "id": "COND-QUIESCENT",
        "label": "Quiescent (0 cm/s)",
        "type": "condition",
        "group": "condition",
        "description": "Pure diffusion environment without forced draft"
      },
      {
        "id": "COND-HYPOXIC",
        "label": "Hypoxic (18% O2)",
        "type": "condition",
        "group": "condition",
        "description": "Exploration atmosphere reduced O2 condition"
      },
      {
        "id": "MEAS-SPREAD",
        "label": "Flame Spread Rate",
        "type": "measurement",
        "group": "measurement",
        "description": "Front progression linear velocity (mm/s)"
      },
      {
        "id": "MEAS-EXTINCT",
        "label": "Extinction Velocity / Limit",
        "type": "measurement",
        "group": "measurement",
        "description": "Critical flow or mass flow rate below which flame quenches"
      },
      {
        "id": "MEAS-SOOT",
        "label": "Soot Volume Fraction",
        "type": "measurement",
        "group": "measurement",
        "description": "Particulate carbon optical concentration (ppm)"
      },
      {
        "id": "MEAS-RAD-FLUX",
        "label": "Radiative Heat Flux",
        "type": "measurement",
        "group": "measurement",
        "description": "Electromagnetic energy emitted per unit area (kW/m\u00b2)"
      },
      {
        "id": "MEAS-COOL-FLAME",
        "label": "Cool Flame Duration",
        "type": "measurement",
        "group": "measurement",
        "description": "Low-temperature second-stage chemical reaction time (s)"
      },
      {
        "id": "FIND-RAD-EXTINCT",
        "label": "Radiative Extinction at Low Flow",
        "type": "finding",
        "group": "finding",
        "description": "Flames self-extinguish when flow is too slow due to radiative heat loss exceeding heat release"
      },
      {
        "id": "FIND-SCALE-WIDTH",
        "label": "Nonlinear Width Scaling",
        "type": "finding",
        "group": "finding",
        "description": "Large-scale fuel panels burn faster than predicted by narrow laboratory samples"
      },
      {
        "id": "FIND-COOL-BURNING",
        "label": "Stealth Cool Flame Combustion",
        "type": "finding",
        "group": "finding",
        "description": "Alkane droplets sustain reaction below 800 K without visible luminosity after hot flame death"
      },
      {
        "id": "PUB-OLSON-2015",
        "label": "Olson et al. (2015)",
        "type": "publication",
        "group": "publication",
        "description": "Proc. Combust. Inst. 35(3):2631-2638"
      },
      {
        "id": "PUB-FERKUL-2016",
        "label": "Ferkul & Olson (2016)",
        "type": "publication",
        "group": "publication",
        "description": "Combustion and Flame 166:120-128"
      },
      {
        "id": "PUB-SUNDERLAND-2019",
        "label": "Sunderland et al. (2019)",
        "type": "publication",
        "group": "publication",
        "description": "Combustion and Flame 206:11-21"
      },
      {
        "id": "PUB-URBAN-2019",
        "label": "Urban et al. (2019)",
        "type": "publication",
        "group": "publication",
        "description": "Proc. Combust. Inst. 37(3):4153-4160"
      },
      {
        "id": "PUB-NAYAGAM-2015",
        "label": "Nayagam et al. (2015)",
        "type": "publication",
        "group": "publication",
        "description": "Combustion and Flame 162(5):2140-2147"
      }
    ],
    "edges": [
      {
        "source": "INV-BASS",
        "target": "MAT-PMMA",
        "relationship": "uses_material",
        "source_citation": "Olson et al., Proc. Combust. Inst. (2015), p. 2631"
      },
      {
        "source": "INV-BASS",
        "target": "MAT-SIBAL",
        "relationship": "uses_material",
        "source_citation": "Ferkul & Olson, Combust. Flame (2016), p. 120"
      },
      {
        "source": "INV-BASS",
        "target": "COND-U-GRAV",
        "relationship": "studies",
        "source_citation": "BASS Mission Science Requirements Doc, NASA GRC (2012)"
      },
      {
        "source": "INV-BASS",
        "target": "COND-FLOW-LOW",
        "relationship": "studies",
        "source_citation": "Olson et al., Proc. Combust. Inst. (2015), p. 2632"
      },
      {
        "source": "INV-BASS",
        "target": "MEAS-SPREAD",
        "relationship": "measures",
        "source_citation": "Olson et al., Proc. Combust. Inst. (2015), p. 2634"
      },
      {
        "source": "INV-BASS",
        "target": "MEAS-EXTINCT",
        "relationship": "measures",
        "source_citation": "Ferkul & Olson, Combust. Flame (2016), p. 124"
      },
      {
        "source": "INV-BASS",
        "target": "FIND-RAD-EXTINCT",
        "relationship": "reports_finding",
        "source_citation": "Ferkul & Olson, Combust. Flame (2016), p. 126"
      },
      {
        "source": "INV-BASS",
        "target": "PUB-OLSON-2015",
        "relationship": "related_publication",
        "source_citation": "NASA Physical Sciences Informatics System Record #BASS-01"
      },
      {
        "source": "INV-BASS",
        "target": "PUB-FERKUL-2016",
        "relationship": "related_publication",
        "source_citation": "NASA Physical Sciences Informatics System Record #BASS-02"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "MAT-SIBAL",
        "relationship": "uses_material",
        "source_citation": "Urban et al., Proc. Combust. Inst. (2019), p. 4154"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "MAT-PMMA",
        "relationship": "uses_material",
        "source_citation": "Urban et al., Proc. Combust. Inst. (2019), p. 4155"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "COND-FLOW-HIGH",
        "relationship": "studies",
        "source_citation": "Saffire-I Flight Experiment Report, NASA/TM-2018-219925"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "MEAS-SPREAD",
        "relationship": "measures",
        "source_citation": "Urban et al., Proc. Combust. Inst. (2019), p. 4156"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "MEAS-RAD-FLUX",
        "relationship": "measures",
        "source_citation": "Urban et al., Proc. Combust. Inst. (2019), p. 4157"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "FIND-SCALE-WIDTH",
        "relationship": "reports_finding",
        "source_citation": "Urban et al., Proc. Combust. Inst. (2019), p. 4158"
      },
      {
        "source": "INV-SAFFIRE",
        "target": "PUB-URBAN-2019",
        "relationship": "related_publication",
        "source_citation": "NASA Saffire Science Results Archive, 2019"
      },
      {
        "source": "INV-ACME",
        "target": "MAT-CH4",
        "relationship": "uses_material",
        "source_citation": "Sunderland et al., Combust. Flame (2019), p. 12"
      },
      {
        "source": "INV-ACME",
        "target": "MAT-C2H4",
        "relationship": "uses_material",
        "source_citation": "Urban et al., Proc. Combust. Inst. (2021), p. 4786"
      },
      {
        "source": "INV-ACME",
        "target": "COND-QUIESCENT",
        "relationship": "studies",
        "source_citation": "CIR ACME User Operations Manual Rev 2"
      },
      {
        "source": "INV-ACME",
        "target": "MEAS-SOOT",
        "relationship": "measures",
        "source_citation": "Sunderland et al., Combust. Flame (2019), p. 16"
      },
      {
        "source": "INV-ACME",
        "target": "PUB-SUNDERLAND-2019",
        "relationship": "related_publication",
        "source_citation": "NASA PSI Record #ACME-004"
      },
      {
        "source": "INV-FLEX",
        "target": "MAT-HEPTANE",
        "relationship": "uses_material",
        "source_citation": "Nayagam et al., Combust. Flame (2015), p. 2141"
      },
      {
        "source": "INV-FLEX",
        "target": "COND-QUIESCENT",
        "relationship": "studies",
        "source_citation": "FLEX Science Team Summary Report, NASA TM (2014)"
      },
      {
        "source": "INV-FLEX",
        "target": "MEAS-COOL-FLAME",
        "relationship": "measures",
        "source_citation": "Nayagam et al., Combust. Flame (2015), p. 2143"
      },
      {
        "source": "INV-FLEX",
        "target": "FIND-COOL-BURNING",
        "relationship": "reports_finding",
        "source_citation": "Nayagam et al., Combust. Flame (2015), p. 2145"
      },
      {
        "source": "INV-FLEX",
        "target": "PUB-NAYAGAM-2015",
        "relationship": "related_publication",
        "source_citation": "NASA PSI Record #FLEX-012"
      },
      {
        "source": "INV-SLICES",
        "target": "MAT-HDPE",
        "relationship": "uses_material",
        "source_citation": "Bhattacharjee et al., AIAA-2017-3852, p. 3"
      },
      {
        "source": "INV-SLICES",
        "target": "MEAS-SPREAD",
        "relationship": "measures",
        "source_citation": "Bhattacharjee et al., AIAA-2017-3852, p. 7"
      }
    ]
  },
  "coverage_categories": {
    "materials": [
      {
        "id": "PMMA",
        "label": "Polymethyl Methacrylate (PMMA)",
        "class": "Thermoplastic Solid"
      },
      {
        "id": "SIBAL",
        "label": "Cotton/Fiberglass Blend (Sibal)",
        "class": "Thin Fabric"
      },
      {
        "id": "HDPE",
        "label": "High-Density Polyethylene (HDPE)",
        "class": "Thermoplastic Rod"
      },
      {
        "id": "CH4",
        "label": "Methane (CH4)",
        "class": "Gaseous Fuel"
      },
      {
        "id": "C2H4",
        "label": "Ethylene (C2H4)",
        "class": "Gaseous Fuel"
      },
      {
        "id": "HEPTANE",
        "label": "n-Heptane",
        "class": "Liquid Droplet"
      },
      {
        "id": "NOMEX",
        "label": "Nomex / Aramid",
        "class": "Flame Resistant Polymer"
      },
      {
        "id": "SILICONE",
        "label": "Silicone Elastomer",
        "class": "Elastomer"
      }
    ],
    "gravity_conditions": [
      {
        "id": "microgravity",
        "label": "Microgravity (~10^-6 to 10^-4 g)",
        "range": "< 10^-3 g"
      },
      {
        "id": "lunar",
        "label": "Lunar Partial-g (0.16 g)",
        "range": "0.15 - 0.18 g"
      },
      {
        "id": "martian",
        "label": "Martian Partial-g (0.38 g)",
        "range": "0.35 - 0.40 g"
      },
      {
        "id": "terrestrial",
        "label": "Normal Gravity (1.0 g)",
        "range": "0.98 - 1.02 g"
      }
    ],
    "pressure_ranges": [
      {
        "id": "sub_atmospheric",
        "label": "Sub-Atmospheric (< 70 kPa)",
        "range": "0 - 70 kPa"
      },
      {
        "id": "normobaric",
        "label": "Standard Normobaric (90 - 105 kPa)",
        "range": "90 - 105 kPa"
      },
      {
        "id": "hyperbaric",
        "label": "Hyperbaric (> 105 kPa)",
        "range": "> 105 kPa"
      }
    ],
    "oxygen_conditions": [
      {
        "id": "hypoxic",
        "label": "Hypoxic Exploration (< 20% O2)",
        "range": "10 - 19.9% O2"
      },
      {
        "id": "ambient",
        "label": "Sea-Level Normoxic (20 - 22% O2)",
        "range": "20 - 22% O2"
      },
      {
        "id": "enriched_moderate",
        "label": "Moderately Enriched (22.1 - 32% O2)",
        "range": "22.1 - 32% O2"
      },
      {
        "id": "enriched_high",
        "label": "Highly Enriched (> 32% O2)",
        "range": "> 32% O2"
      }
    ],
    "measured_outcomes": [
      {
        "id": "flame_spread_rate",
        "label": "Flame Spread Rate",
        "unit": "mm/s"
      },
      {
        "id": "extinction_limits",
        "label": "Extinction Velocity / Limit",
        "unit": "cm/s or mg/s"
      },
      {
        "id": "soot_radiation",
        "label": "Soot & Radiative Heat Flux",
        "unit": "ppm / kW/m\u00b2"
      },
      {
        "id": "cool_flame",
        "label": "Cool Flame Dynamics",
        "unit": "s"
      },
      {
        "id": "pyrolysis_temp",
        "label": "Peak Surface Temperature",
        "unit": "\u00b0C"
      }
    ]
  }
};
