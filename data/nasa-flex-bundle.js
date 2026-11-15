/** Pre-processed real NASA FLEX flight dataset (274 records) */
window.NASA_FLEX_BUNDLE = {
  "dataset_metadata": {
    "name": "NASA FLEX Flight Telemetry Dataset (274 Experiments)",
    "investigation": "Flame Extinction Experiment (FLEX)",
    "platform": "ISS Combustion Integrated Rack (CIR)",
    "total_records": 274,
    "is_placeholder": false,
    "status": "Verified NASA Flight Telemetry",
    "source": "NASA Physical Sciences Informatics (PSI) System"
  },
  "experiments": [
    {
      "id": "EXP-FLEX-20CAL08",
      "name": "FLEX Run #1 (20CAL08) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.02,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.69,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.89,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_20CAL08_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #1"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/5/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 17:22:03. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 757.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 757.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-20CAL10",
      "name": "FLEX Run #2 (20CAL10) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.59,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.94,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_20CAL10_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #2"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/5/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 19:20:06. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 762.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-20CAL12",
      "name": "FLEX Run #3 (20CAL12) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.88,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.61,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.92,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.58,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_20CAL12_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #3"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/5/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 21:17:46. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 764.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-30CAL02",
      "name": "FLEX Run #4 (30CAL02) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.32,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.06,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.64,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_30CAL02_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #4"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/31/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 17:16:18. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 760.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-30CAL03",
      "name": "FLEX Run #5 (30CAL03) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.32,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.92,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.81,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.48,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.34,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_30CAL03_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #5"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/31/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 19:00:48. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 760.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-40CAL01",
      "name": "FLEX Run #6 (40CAL01) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.32,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.54,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.53,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_40CAL01_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #6"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/31/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 20:05:49. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 760.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-20CAL13",
      "name": "FLEX Run #7 (20CAL13) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.5,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.87,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.67,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_20CAL13_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #7"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/10/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 13:26:11. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 761.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-30CAL06",
      "name": "FLEX Run #8 (30CAL06) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.64,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.95,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.79,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_30CAL06_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #8"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/10/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 18:07:15. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 762.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-30CAL07",
      "name": "FLEX Run #9 (30CAL07) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.32,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [],
      "data_files": [
        {
          "filename": "FLEX_Run_30CAL07_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #9"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/10/2009",
      "notes": "Test End Mode: Disruption. Test GMT: . Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 760.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-256F002",
      "name": "FLEX Run #10 (256F002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 309.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 13.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_256F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #10"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/22/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 14:53:27. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2319.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2319.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-256R001",
      "name": "FLEX Run #11 (256R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 309.15,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.03,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.4,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 16.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_256R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #11"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/22/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 15:33:47. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2318.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2318.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-264F003",
      "name": "FLEX Run #12 (264F003) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 309.29,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.74,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_264F003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #12"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/22/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 19:23:35. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2319.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2319.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-256R002",
      "name": "FLEX Run #13 (256R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 276.54,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.59,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_256R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #13"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/25/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 15:33:05. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2074.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2074.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-256F007",
      "name": "FLEX Run #14 (256F007) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 274.06,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.7,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burn Duration",
          "value": 11.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_256F007_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #14"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 12:26:06. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2055.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2055.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-256F008",
      "name": "FLEX Run #15 (256F008) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 275.52,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.42,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burn Duration",
          "value": 23.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_256F008_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #15"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 13:56:06. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2066.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2066.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-256F009",
      "name": "FLEX Run #16 (256F009) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 276.26,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.66,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_256F009_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #16"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 15:34:58. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 2072.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 2072.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-240R003",
      "name": "FLEX Run #17 (240R003) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 206.08,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.67,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burn Duration",
          "value": 2.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_240R003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #17"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "7/1/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 12:28:41. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 1545.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 1545.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-248F001",
      "name": "FLEX Run #18 (248F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 207.16,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.74,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.77,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.61,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_248F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #18"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "7/1/2009",
      "notes": "Test End Mode: Extinction. Test GMT: 16:28:56. Chamber gas composition: 21.0% O2, 9.0% N2, 70.0% CO2. Raw ambient pressure: 1553.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 1553.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-196F001",
      "name": "FLEX Run #19 (196F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.87,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.39,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.9,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_196F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #19"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/26/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 19:07:28. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 539.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 539.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-192F001",
      "name": "FLEX Run #20 (192F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.93,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.56,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_192F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #20"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/24/09",
      "notes": "Test End Mode: Completion. Test GMT: 14:09:04. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 539.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 539.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-192F002",
      "name": "FLEX Run #21 (192F002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.07,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.49,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.95,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.66,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_192F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #21"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/24/09",
      "notes": "Test End Mode: Disruption. Test GMT: 15:15:24. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 540.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 540.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-192F003",
      "name": "FLEX Run #22 (192F003) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.06,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.5,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.65,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 18.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_192F003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #22"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/24/09",
      "notes": "Test End Mode: Disruption. Test GMT: 15:39:48. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 540.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 540.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-196F002",
      "name": "FLEX Run #23 (196F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.01,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.73,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 13.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_196F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #23"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/24/09",
      "notes": "Test End Mode: Disruption. Test GMT: 18:29:53. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 541.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 541.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-196F003",
      "name": "FLEX Run #24 (196F003) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.37,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [],
      "data_files": [
        {
          "filename": "FLEX_Run_196F003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #24"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/24/09",
      "notes": "Test End Mode: Disruption. Test GMT: 19:44:04. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 542.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 542.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-191R001",
      "name": "FLEX Run #25 (191R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.63,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.6,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.59,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.65,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_191R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #25"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/9/2009",
      "notes": "Test End Mode: Completion. Test GMT: 11:42:23. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 537.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-191F001",
      "name": "FLEX Run #26 (191F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.78,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.63,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.4,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.62,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 22.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_191F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #26"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/9/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 11:59:59. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 538.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 538.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-195F001",
      "name": "FLEX Run #27 (195F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.09,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.87,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.64,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_195F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #27"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/9/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 14:04:11. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 540.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 540.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-195F002",
      "name": "FLEX Run #28 (195F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.95,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.36,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.64,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_195F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #28"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/9/2009",
      "notes": "Test End Mode: Disruption. Test GMT: 14:56:05. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 539.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 539.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-178R001",
      "name": "FLEX Run #29 (178R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.24,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.57,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.74,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_178R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #29"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/13/09",
      "notes": "Test End Mode: Completion. Test GMT: 13:11:23. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 766.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-178F001",
      "name": "FLEX Run #30 (178F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.55,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.26,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.32,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.59,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_178F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #30"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/13/09",
      "notes": "Test End Mode: Extinction. Test GMT: 14:03:46. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 769.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 769.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-182F001",
      "name": "FLEX Run #31 (182F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.72,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.39,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.85,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 18.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_182F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #31"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/13/09",
      "notes": "Test End Mode: Disruption. Test GMT: 18:33:39. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 770.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-182F002",
      "name": "FLEX Run #32 (182F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.79,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.07,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.68,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_182F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #32"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/13/09",
      "notes": "Test End Mode: Completion. Test GMT: 19:04:33. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 771.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 771.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-177R002",
      "name": "FLEX Run #33 (177R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.92,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.62,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.25,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.48,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_177R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #33"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/27/09",
      "notes": "Test End Mode: Extinction. Test GMT: 10:02:15. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 764.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-177F001",
      "name": "FLEX Run #34 (177F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.35,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.89,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.44,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 27.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_177F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #34"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/27/09",
      "notes": "Test End Mode: Extinction. Test GMT: 11:15:38. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 767.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-181F001",
      "name": "FLEX Run #35 (181F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.4,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.85,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.34,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.43,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_181F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #35"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/27/09",
      "notes": "Test End Mode: Extinction. Test GMT: 13:01:24. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 768.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-190R002",
      "name": "FLEX Run #36 (190R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.86,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.67,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_190R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #36"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/15/09",
      "notes": "Test End Mode: Extinction. Test GMT: 10:39:35. Chamber gas composition: 20.0% O2, 80.0% N2. Raw ambient pressure: 539.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 539.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-220R001",
      "name": "FLEX Run #37 (220R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.31,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.72,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_220R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #37"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/7/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 19:08:46. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 534.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-220R002",
      "name": "FLEX Run #38 (220R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.25,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.59,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.71,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_220R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #38"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/7/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 19:20:38. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 534.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-224F001",
      "name": "FLEX Run #39 (224F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 34.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.91,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.8,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_224F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #39"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/7/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 21:51:19. Chamber gas composition: 34.0% O2, 66.0% N2. Raw ambient pressure: 534.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-219R001",
      "name": "FLEX Run #40 (219R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.77,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.62,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 19.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_219R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #40"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/8/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 5:02:52. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 535.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-219F001",
      "name": "FLEX Run #41 (219F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.35,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.65,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_219F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #41"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/8/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 4:41:55. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 534.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-223F001",
      "name": "FLEX Run #42 (223F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.33,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.92,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.58,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_223F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #42"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/8/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 1:02:04. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 535.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-223F002",
      "name": "FLEX Run #43 (223F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.97,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.78,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_223F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #43"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/8/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 3:16:16. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 534.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-206F001",
      "name": "FLEX Run #44 (206F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.49,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.63,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 16.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_206F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #44"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/11/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 10:33:22. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 766.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-206R001",
      "name": "FLEX Run #45 (206R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.43,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.42,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.01,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.73,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_206R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #45"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/11/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 10:54:25. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 768.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-205R001",
      "name": "FLEX Run #46 (205R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.59,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.78,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.08,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 13.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_205R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #46"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/12/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 13:14:25. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 769.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 769.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-209F001",
      "name": "FLEX Run #47 (209F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.67,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.36,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.5,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_209F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #47"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/12/2010",
      "notes": "Test End Mode: Completion. Test GMT: 15:48:17. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 770.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-205F001",
      "name": "FLEX Run #48 (205F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.48,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.66,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.27,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_205F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #48"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/12/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 12:14:55. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 768.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-209F003",
      "name": "FLEX Run #49 (209F003) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.98,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.46,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.78,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.59,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_209F003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #49"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 9:09:16. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 764.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-209F004",
      "name": "FLEX Run #50 (209F004) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.67,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.57,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.98,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_209F004_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #50"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 14:08:17. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 770.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-209F005",
      "name": "FLEX Run #51 (209F005) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.84,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.41,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.65,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_209F005_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #51"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/19/2010",
      "notes": "Test End Mode: Completion. Test GMT: 16:38:35. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 771.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 771.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-210F002",
      "name": "FLEX Run #52 (210F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 30.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.8,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.53,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.7,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 18.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_210F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #52"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/11/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 13:46:44. Chamber gas composition: 30.0% O2, 70.0% N2. Raw ambient pressure: 771.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 771.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-209F002",
      "name": "FLEX Run #53 (209F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.68,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 18.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_209F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #53"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/12/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 16:29:37. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 770.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-190F003",
      "name": "FLEX Run #54 (190F003) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.18,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.56,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 29.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_190F003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #54"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 11:27:01. Chamber gas composition: 20.0% O2, 80.0% N2. Raw ambient pressure: 541.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 541.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-218F001",
      "name": "FLEX Run #55 (218F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.37,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.39,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 20.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_218F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #55"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/29/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 16:06:50. Chamber gas composition: 20.0% O2, 80.0% N2. Raw ambient pressure: 542.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 542.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-194F001",
      "name": "FLEX Run #56 (194F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.54,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.56,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.04,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.44,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_194F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #56"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/29/2010",
      "notes": "Test End Mode: Completion. Test GMT: 19:13:22. Chamber gas composition: 20.0% O2, 79.0% N2. Raw ambient pressure: 544.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 544.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-303F001",
      "name": "FLEX Run #57 (303F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 72.58,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.1,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.49,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_303F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #57"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:50:16. Chamber gas composition: 20.0% O2, 79.0% N2. Raw ambient pressure: 544.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 544.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-176F001",
      "name": "FLEX Run #58 (176F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 103.1,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.69,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 29.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_176F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #58"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 2:32:01. Chamber gas composition: 18.0% O2, 82.0% N2. Raw ambient pressure: 773.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 773.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-176R001",
      "name": "FLEX Run #59 (176R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.55,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.93,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.39,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.43,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_176R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #59"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 0:26:28. Chamber gas composition: 18.0% O2, 82.0% N2. Raw ambient pressure: 769.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 769.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-204F001",
      "name": "FLEX Run #60 (204F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 103.15,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.43,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_204F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #60"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 3:26:05. Chamber gas composition: 18.0% O2, 82.0% N2. Raw ambient pressure: 773.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 773.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-204R001",
      "name": "FLEX Run #61 (204R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 103.2,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.68,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 25.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_204R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #61"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 3:52:39. Chamber gas composition: 18.0% O2, 82.0% N2. Raw ambient pressure: 774.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 774.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-301F001",
      "name": "FLEX Run #62 (301F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.56,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.43,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.17,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_301F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #62"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/11/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 21:37:48. Chamber gas composition: 18.0% O2, 82.0% N2. Raw ambient pressure: 761.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-301F002",
      "name": "FLEX Run #63 (301F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.15,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_301F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #63"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/11/2010",
      "notes": "Test End Mode: Completion. Test GMT: 23:07:51. Chamber gas composition: 18.0% O2, 81.0% N2. Raw ambient pressure: 767.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-302F001",
      "name": "FLEX Run #64 (302F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.94,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.69,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.07,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_302F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #64"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/11/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 22:12:39. Chamber gas composition: 18.0% O2, 81.0% N2. Raw ambient pressure: 764.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-189R001",
      "name": "FLEX Run #65 (189R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.11,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.37,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.4,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 24.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_189R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #65"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 8:42:53. Chamber gas composition: 15.0% O2, 85.0% N2. Raw ambient pressure: 765.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-189F001",
      "name": "FLEX Run #66 (189F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.52,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.32,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_189F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #66"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 9:26:45. Chamber gas composition: 15.0% O2, 85.0% N2. Raw ambient pressure: 766.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-189F002",
      "name": "FLEX Run #67 (189F002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.35,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.97,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.3,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.36,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_189F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #67"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 10:17:06. Chamber gas composition: 15.0% O2, 85.0% N2. Raw ambient pressure: 767.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-189R003",
      "name": "FLEX Run #68 (189R003) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.5,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.38,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.29,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_189R003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #68"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 12:04:45. Chamber gas composition: 15.0% O2, 84.0% N2. Raw ambient pressure: 768.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-193R002",
      "name": "FLEX Run #69 (193R002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.1,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.94,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_193R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #69"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/23/2010",
      "notes": "Test End Mode: Completion. Test GMT: 10:23:00. Chamber gas composition: 14.0% O2, 84.0% N2. Raw ambient pressure: 767.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-193F001",
      "name": "FLEX Run #70 (193F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.46,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.67,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 4.6,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_193F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #70"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/23/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 7:25:43. Chamber gas composition: 15.0% O2, 84.0% N2. Raw ambient pressure: 761.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-189R002",
      "name": "FLEX Run #71 (189R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.43,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.4,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_189R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #71"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 11:19:22. Chamber gas composition: 15.0% O2, 84.0% N2. Raw ambient pressure: 768.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-193R001",
      "name": "FLEX Run #72 (193R001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.02,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.13,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_193R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #72"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/23/2010",
      "notes": "Test End Mode: Completion. Test GMT: 9:06:37. Chamber gas composition: 15.0% O2, 84.0% N2. Raw ambient pressure: 765.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-193F001",
      "name": "FLEX Run #73 (193F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.46,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.64,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 4.58,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_193F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #73"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/23/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 7:25:43. Chamber gas composition: 15.0% O2, 84.0% N2. Raw ambient pressure: 761.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-221F001",
      "name": "FLEX Run #74 (221F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.11,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.33,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.77,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_221F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #74"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/23/2010",
      "notes": "Test End Mode: Completion. Test GMT: 9:44:36. Chamber gas composition: 15.0% O2, 84.0% N2. Raw ambient pressure: 765.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-203R002",
      "name": "FLEX Run #75 (203R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.76,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.54,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.78,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_203R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #75"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 21:06:40. Chamber gas composition: 13.0% O2, 85.0% N2. Raw ambient pressure: 770.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-203F001",
      "name": "FLEX Run #76 (203F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.59,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.21,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.78,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_203F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #76"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:24:36. Chamber gas composition: 13.0% O2, 85.0% N2. Raw ambient pressure: 769.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 769.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-175R001",
      "name": "FLEX Run #77 (175R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.44,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.33,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.91,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.34,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_175R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #77"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 18:39:20. Chamber gas composition: 14.0% O2, 85.0% N2. Raw ambient pressure: 768.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-175F001",
      "name": "FLEX Run #78 (175F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.12,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.66,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.66,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_175F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #78"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 17:49:23. Chamber gas composition: 14.0% O2, 85.0% N2. Raw ambient pressure: 766.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-179F001",
      "name": "FLEX Run #79 (179F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.4,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.92,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.86,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.25,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_179F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #79"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/30/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 0:40:16. Chamber gas composition: 13.0% O2, 85.0% N2. Raw ambient pressure: 768.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-207F001",
      "name": "FLEX Run #80 (207F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.66,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 1.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_207F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #80"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/30/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 2:29:19. Chamber gas composition: 13.0% O2, 85.0% N2. Raw ambient pressure: 770.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-207F002",
      "name": "FLEX Run #81 (207F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.68,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 1.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_207F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #81"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "3/30/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 3:59:28. Chamber gas composition: 13.0% O2, 85.0% N2. Raw ambient pressure: 770.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-304F001",
      "name": "FLEX Run #82 (304F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.94,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.84,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.39,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_304F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #82"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 17:19:17. Chamber gas composition: 13.0% O2, 87.0% N2. Raw ambient pressure: 764.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-304F002",
      "name": "FLEX Run #83 (304F002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.92,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 5.45,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_304F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #83"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 21:18:05. Chamber gas composition: 12.0% O2, 87.0% N2. Raw ambient pressure: 772.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 772.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-304R001",
      "name": "FLEX Run #84 (304R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.28,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.35,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.42,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_304R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #84"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 17:51:24. Chamber gas composition: 12.0% O2, 87.0% N2. Raw ambient pressure: 767.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-304R002",
      "name": "FLEX Run #85 (304R002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.77,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_304R002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #85"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 20:12:58. Chamber gas composition: 12.0% O2, 87.0% N2. Raw ambient pressure: 771.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 771.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-305F002",
      "name": "FLEX Run #86 (305F002) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.66,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.07,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.56,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_305F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #86"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:16:37. Chamber gas composition: 12.0% O2, 87.0% N2. Raw ambient pressure: 770.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 770.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-305F003",
      "name": "FLEX Run #87 (305F003) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.64,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.92,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_305F003_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #87"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/19/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 20:38:54. Chamber gas composition: 12.0% O2, 87.0% N2. Raw ambient pressure: 771.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 771.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-053R001",
      "name": "FLEX Run #88 (053R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 25.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.66,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.01,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_053R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #88"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/5/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 22:37:54. Chamber gas composition: 25.0% O2, 60.0% N2, 15.0% CO2. Raw ambient pressure: 537.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-053F001",
      "name": "FLEX Run #89 (053F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 25.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.65,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.7,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 24.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_053F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #89"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/5/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 22:19:33. Chamber gas composition: 25.0% O2, 60.0% N2, 15.0% CO2. Raw ambient pressure: 537.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-141R001",
      "name": "FLEX Run #90 (141R001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 25.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.89,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.62,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 20.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_141R001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #90"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 0:07:51. Chamber gas composition: 25.0% O2, 60.0% N2, 15.0% CO2. Raw ambient pressure: 539.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 539.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-141F001",
      "name": "FLEX Run #91 (141F001) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 25.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.77,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.51,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 18.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_141F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #91"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "5/5/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 23:10:01. Chamber gas composition: 25.0% O2, 60.0% N2, 15.0% CO2. Raw ambient pressure: 538.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 538.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-061F002",
      "name": "FLEX Run #92 (061F002) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 25.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.5,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.41,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.55,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 21.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_061F002_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #92"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/14/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 22:54:56. Chamber gas composition: 25.0% O2, 60.0% N2, 15.0% CO2. Raw ambient pressure: 536.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-149F001",
      "name": "FLEX Run #93 (149F001) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 25.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.63,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.48,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.71,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_149F001_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #93"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/15/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 0:32:31. Chamber gas composition: 25.0% O2, 60.0% N2, 15.0% CO2. Raw ambient pressure: 537.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08H101",
      "name": "FLEX Run #94 (C08H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.14,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.53,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.76,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #94"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/15/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 2:10:43. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 533.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 533.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08H201",
      "name": "FLEX Run #95 (C08H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.25,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.6,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.04,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.58,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #95"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/15/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 3:22:41. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 534.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08H301",
      "name": "FLEX Run #96 (C08H301) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.25,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 5.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08H301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #96"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/15/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 4:37:39. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 534.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08M101",
      "name": "FLEX Run #97 (C08M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.6,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 26.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #97"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/16/2010",
      "notes": "Test End Mode: Completion. Test GMT: 22:43:35. Chamber gas composition: 23.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 534.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M201",
      "name": "FLEX Run #98 (C09M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.61,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.64,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.74,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.47,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 22.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #98"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/21/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 14:21:26. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 537.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M101",
      "name": "FLEX Run #99 (C09M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.33,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.28,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.32,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 33.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #99"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/21/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 12:57:34. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 535.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09H101",
      "name": "FLEX Run #100 (C09H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.55,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.14,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.98,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.34,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #100"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 8:30:46. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 536.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09H201",
      "name": "FLEX Run #101 (C09H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.88,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.45,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.5,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #101"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 9:38:10. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 538.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 538.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C10H101",
      "name": "FLEX Run #102 (C10H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.57,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.43,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.33,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C10H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #102"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 11:21:09. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% CO2. Raw ambient pressure: 534.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C10H201",
      "name": "FLEX Run #103 (C10H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.0,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.88,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C10H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #103"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/29/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 11:56:02. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% CO2. Raw ambient pressure: 534.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08M201",
      "name": "FLEX Run #104 (C08M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.21,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.6,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.58,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #104"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/16/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 23:04:00. Chamber gas composition: 23.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 534.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08M301",
      "name": "FLEX Run #105 (C08M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.17,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.47,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 30.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #105"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/16/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 23:29:19. Chamber gas composition: 23.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 534.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M401",
      "name": "FLEX Run #106 (C09M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.77,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.08,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.75,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #106"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/21/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 15:52:51. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 538.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 538.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08M401",
      "name": "FLEX Run #107 (C08M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.33,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.18,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #107"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/16/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 23:51:26. Chamber gas composition: 23.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 535.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M301",
      "name": "FLEX Run #108 (C09M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.77,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.75,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.47,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 24.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #108"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "6/21/2010",
      "notes": "Test End Mode: Completion. Test GMT: 15:35:57. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 538.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 538.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C10M102",
      "name": "FLEX Run #109 (C10M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.53,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.56,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.92,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C10M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #109"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/31/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 5:38:01. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% CO2. Raw ambient pressure: 536.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C10M201",
      "name": "FLEX Run #110 (C10M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.59,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.83,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.57,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 13.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C10M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #110"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/31/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 7:16:40. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% CO2. Raw ambient pressure: 537.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C10M303",
      "name": "FLEX Run #111 (C10M303) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.58,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.37,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.1,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 16.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C10M303_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #111"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/31/2010",
      "notes": "Test End Mode: Completion. Test GMT: 8:58:24. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% CO2. Raw ambient pressure: 536.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C10M401",
      "name": "FLEX Run #112 (C10M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.75,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.99,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.35,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.43,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 25.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C10M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #112"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2010",
      "notes": "Test End Mode: Completion. Test GMT: 15:27:44. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% CO2. Raw ambient pressure: 530.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 530.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C11M101",
      "name": "FLEX Run #113 (C11M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.2,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.85,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 18.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C11M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #113"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:17:58. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% CO2. Raw ambient pressure: 534.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C11M201",
      "name": "FLEX Run #114 (C11M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": null,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.23,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.68,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 18.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C11M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #114"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/6/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:14:22. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% CO2. Raw ambient pressure: 0.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 0.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C11M301",
      "name": "FLEX Run #115 (C11M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.43,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.97,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.61,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 22.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C11M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #115"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 20:40:16. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% CO2. Raw ambient pressure: 535.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C11M401",
      "name": "FLEX Run #116 (C11M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.5,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.16,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.57,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 16.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C11M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #116"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 20:57:41. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% CO2. Raw ambient pressure: 536.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C11H101",
      "name": "FLEX Run #117 (C11H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.81,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.84,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.77,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.25,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C11H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #117"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/6/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 18:14:53. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% CO2. Raw ambient pressure: 531.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C11H201",
      "name": "FLEX Run #118 (C11H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.03,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.03,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.93,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C11H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #118"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/6/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:14:22. Chamber gas composition: 20.0% O2, 44.0% N2, 35.0% CO2. Raw ambient pressure: 532.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C12H103",
      "name": "FLEX Run #119 (C12H103) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.01,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.6,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.48,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C12H103_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #119"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/7/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 1:50:01. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2. Raw ambient pressure: 532.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C12H201",
      "name": "FLEX Run #120 (C12H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.99,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.45,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.39,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.43,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C12H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #120"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/7/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 1:08:26. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2. Raw ambient pressure: 532.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C12M101",
      "name": "FLEX Run #121 (C12M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.17,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.92,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.34,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C12M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #121"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:21:31. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2. Raw ambient pressure: 526.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 526.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C12M201",
      "name": "FLEX Run #122 (C12M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.46,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.58,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 13.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C12M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #122"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 21:44:37. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2. Raw ambient pressure: 531.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C12M301",
      "name": "FLEX Run #123 (C12M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.93,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.13,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.79,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C12M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #123"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 22:16:51. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2. Raw ambient pressure: 532.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C12M401",
      "name": "FLEX Run #124 (C12M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.98,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.87,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.74,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.3,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C12M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #124"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 22:45:54. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2. Raw ambient pressure: 532.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13M103",
      "name": "FLEX Run #125 (C13M103) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.62,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.63,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.37,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13M103_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #125"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/13/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 21:07:02. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 537.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13M201",
      "name": "FLEX Run #126 (C13M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.47,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.8,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.84,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.4,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #126"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/13/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 18:11:39. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 536.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13M301",
      "name": "FLEX Run #127 (C13M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.55,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.22,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.53,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #127"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/13/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:22:49. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 536.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13M401",
      "name": "FLEX Run #128 (C13M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.63,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.91,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #128"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/13/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:49:24. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 537.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13H102",
      "name": "FLEX Run #129 (C13H102) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.49,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.33,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.34,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.33,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 0.55,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13H102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #129"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/17/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 1:32:49. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 536.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13H201",
      "name": "FLEX Run #130 (C13H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.62,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.91,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.89,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.05,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 0.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #130"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/17/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 3:55:59. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 537.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H101",
      "name": "FLEX Run #131 (C21H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.84,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.72,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.52,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.61,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #131"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 11:28:52. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 763.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H201",
      "name": "FLEX Run #132 (C21H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.02,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.63,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.53,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #132"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 12:59:06. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 765.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H301",
      "name": "FLEX Run #133 (C21H301) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.55,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 19.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #133"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 13:59:59. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 766.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H401",
      "name": "FLEX Run #134 (C21H401) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.28,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.66,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.88,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #134"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 14:57:06. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 767.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H501",
      "name": "FLEX Run #135 (C21H501) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.42,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.78,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.0,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.59,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #135"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Completion. Test GMT: 16:22:15. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 768.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H302",
      "name": "FLEX Run #136 (C21H302) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.4,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.08,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H302_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #136"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Completion. Test GMT: 17:30:58. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 768.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H303",
      "name": "FLEX Run #137 (C21H303) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.42,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.13,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.55,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H303_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #137"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 17:53:35. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 768.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H304",
      "name": "FLEX Run #138 (C21H304) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.47,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H304_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #138"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 18:08:43. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 768.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C21H305",
      "name": "FLEX Run #139 (C21H305) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.39,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.75,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.63,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C21H305_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #139"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/6/2010",
      "notes": "Test End Mode: Disruption. Test GMT: 19:09:45. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 768.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C14M101",
      "name": "FLEX Run #140 (C14M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.13,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.98,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.95,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.2,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C14M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #140"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 16:52:39. Chamber gas composition: 15.0% O2, 35.0% N2, 50.0% CO2. Raw ambient pressure: 533.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 533.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C14M201",
      "name": "FLEX Run #141 (C14M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.21,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.73,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.3,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C14M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #141"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 18:07:51. Chamber gas composition: 15.0% O2, 35.0% N2, 50.0% CO2. Raw ambient pressure: 534.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C14M301",
      "name": "FLEX Run #142 (C14M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.26,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.48,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C14M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #142"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 19:11:39. Chamber gas composition: 15.0% O2, 35.0% N2, 50.0% CO2. Raw ambient pressure: 534.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C14M302",
      "name": "FLEX Run #143 (C14M302) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.29,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.06,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.36,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C14M302_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #143"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/4/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 20:19:22. Chamber gas composition: 15.0% O2, 35.0% N2, 50.0% CO2. Raw ambient pressure: 534.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01M101",
      "name": "FLEX Run #144 (C01M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.58,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.53,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.53,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #144"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/16/10",
      "notes": "Test End Mode: Extinction. Test GMT: 9:42:08. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 761.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01M201",
      "name": "FLEX Run #145 (C01M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.79,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.33,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.61,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.45,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 20.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #145"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/16/10",
      "notes": "Test End Mode: Extinction. Test GMT: 10:21:24. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 763.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01M301",
      "name": "FLEX Run #146 (C01M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.06,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.35,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.95,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 39.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #146"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/16/10",
      "notes": "Test End Mode: Extinction. Test GMT: 10:54:23. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 765.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C13M102",
      "name": "FLEX Run #147 (C13M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.42,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.02,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.49,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.4,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C13M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #147"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/13/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 17:35:49. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% CO2. Raw ambient pressure: 535.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01H101",
      "name": "FLEX Run #148 (C01H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.91,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.58,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.15,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #148"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/10",
      "notes": "Test End Mode: Disruption. Test GMT: 8:39:27. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 764.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01H201",
      "name": "FLEX Run #149 (C01H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.15,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.21,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.82,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #149"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/10",
      "notes": "Test End Mode: Disruption. Test GMT: 9:25:38. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 766.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01H302",
      "name": "FLEX Run #150 (C01H302) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.18,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.54,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01H302_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #150"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/10",
      "notes": "Test End Mode: Extinction. Test GMT: 10:17:02. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 767.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03M101",
      "name": "FLEX Run #151 (C03M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.66,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.36,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 31.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #151"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/8/2010",
      "notes": "Test End Mode: Completion. Test GMT: 18:31:22. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 762.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03M201",
      "name": "FLEX Run #152 (C03M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.99,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.33,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.23,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.43,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #152"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/8/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 20:10:32. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 765.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03M301",
      "name": "FLEX Run #153 (C03M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.07,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.78,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.19,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #153"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/8/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 21:08:17. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 765.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H101",
      "name": "FLEX Run #154 (C03H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.63,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.7,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.6,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.34,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #154"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/9/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 16:02:14. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 762.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H201",
      "name": "FLEX Run #155 (C03H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.98,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.73,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.52,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #155"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/9/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 17:49:08. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 764.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H401",
      "name": "FLEX Run #156 (C03H401) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.08,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.34,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.45,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.48,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #156"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/9/2010",
      "notes": "Test End Mode: Completion. Test GMT: 19:12:27. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 765.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C05M101",
      "name": "FLEX Run #157 (C05M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.6,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.24,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.96,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.3,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C05M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #157"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/14/10",
      "notes": "Test End Mode: Extinction. Test GMT: 13:41:00. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% CO2. Raw ambient pressure: 762.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C05M201",
      "name": "FLEX Run #158 (C05M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.91,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.7,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.22,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C05M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #158"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/14/10",
      "notes": "Test End Mode: Extinction. Test GMT: 14:30:46. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% CO2. Raw ambient pressure: 764.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C05M301",
      "name": "FLEX Run #159 (C05M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.06,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.71,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.34,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C05M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #159"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/14/10",
      "notes": "Test End Mode: Extinction. Test GMT: 15:17:59. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% CO2. Raw ambient pressure: 765.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C05M401",
      "name": "FLEX Run #160 (C05M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.77,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.52,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C05M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #160"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/14/10",
      "notes": "Test End Mode: Extinction. Test GMT: 17:51:58. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% CO2. Raw ambient pressure: 767.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C06M101",
      "name": "FLEX Run #161 (C06M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.76,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.72,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.5,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.28,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C06M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #161"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/28/10",
      "notes": "Test End Mode: Extinction. Test GMT: 11:41:39. Chamber gas composition: 15.0% O2, 54.0% N2, 32.0% CO2. Raw ambient pressure: 763.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C06M201",
      "name": "FLEX Run #162 (C06M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.91,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.05,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.54,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C06M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #162"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/28/10",
      "notes": "Test End Mode: Extinction. Test GMT: 12:05:23. Chamber gas composition: 15.0% O2, 53.0% N2, 32.0% CO2. Raw ambient pressure: 764.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C06M301",
      "name": "FLEX Run #163 (C06M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.11,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.59,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.63,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C06M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #163"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/28/10",
      "notes": "Test End Mode: Extinction. Test GMT: 13:00:43. Chamber gas composition: 15.0% O2, 53.0% N2, 32.0% CO2. Raw ambient pressure: 765.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C06M401",
      "name": "FLEX Run #164 (C06M401) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.14,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.59,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.79,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C06M401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #164"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/28/10",
      "notes": "Test End Mode: Extinction. Test GMT: 13:36:43. Chamber gas composition: 15.0% O2, 53.0% N2, 32.0% CO2. Raw ambient pressure: 766.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H302",
      "name": "FLEX Run #165 (C03H302) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.04,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.96,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.39,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H302_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #165"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/9/2010",
      "notes": "Test End Mode: Extinction. Test GMT: 18:51:34. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 765.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C07M101",
      "name": "FLEX Run #166 (C07M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.43,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.22,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.08,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.28,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C07M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #166"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/12/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 21:56:45. Chamber gas composition: 14.0% O2, 50.0% N2, 36.0% CO2. Raw ambient pressure: 760.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C07M201",
      "name": "FLEX Run #167 (C07M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.54,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.32,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.84,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C07M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #167"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/12/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:11:40. Chamber gas composition: 14.0% O2, 50.0% N2, 36.0% CO2. Raw ambient pressure: 761.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C15M101",
      "name": "FLEX Run #168 (C15M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.78,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.03,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.57,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.48,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C15M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #168"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/18/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 12:54:25. Chamber gas composition: 21.0% O2, 64.0% N2, 15.0% CO2. Raw ambient pressure: 763.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C15M201",
      "name": "FLEX Run #169 (C15M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.14,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.05,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.28,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 16.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C15M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #169"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/18/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 14:19:29. Chamber gas composition: 21.0% O2, 64.0% N2, 15.0% CO2. Raw ambient pressure: 766.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C15M301",
      "name": "FLEX Run #170 (C15M301) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.53,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.59,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C15M301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #170"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "1/18/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 15:58:46. Chamber gas composition: 21.0% O2, 64.0% N2, 15.0% CO2. Raw ambient pressure: 766.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H501",
      "name": "FLEX Run #171 (C03H501) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.74,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.68,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #171"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/21/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:56:40. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 759.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H601",
      "name": "FLEX Run #172 (C03H601) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.59,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.96,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #172"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/21/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 19:07:48. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 762.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03H701",
      "name": "FLEX Run #173 (C03H701) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.6,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.35,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.47,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.5,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03H701_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #173"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/21/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 19:17:37. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 762.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08H502",
      "name": "FLEX Run #174 (C08H502) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.89,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.5,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.21,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08H502_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #174"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/21/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 22:15:54. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 531.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08H601",
      "name": "FLEX Run #175 (C08H601) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.94,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.88,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.55,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08H601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #175"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "2/21/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 22:43:37. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 532.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08M501",
      "name": "FLEX Run #176 (C08M501) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.58,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.53,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 38.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08M501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #176"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/18/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 20:27:36. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 536.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C08M601",
      "name": "FLEX Run #177 (C08M601) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.59,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.02,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.35,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C08M601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #177"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/18/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 20:52:24. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% CO2. Raw ambient pressure: 537.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 537.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09H501",
      "name": "FLEX Run #178 (C09H501) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.14,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.32,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.61,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.5,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09H501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #178"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/20/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:56:25. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 533.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 533.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09H601",
      "name": "FLEX Run #179 (C09H601) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.25,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.07,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.48,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.57,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09H601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #179"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/20/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 18:22:58. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 534.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C02H101",
      "name": "FLEX Run #180 (C02H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.11,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.13,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C02H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #180"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/20/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 20:00:24. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% CO2. Raw ambient pressure: 758.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 758.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C02H201",
      "name": "FLEX Run #181 (C02H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.2,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.48,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.68,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C02H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #181"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/20/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 21:14:08. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% CO2. Raw ambient pressure: 759.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C02H202",
      "name": "FLEX Run #182 (C02H202) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.19,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.64,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.49,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C02H202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #182"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "4/20/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 21:26:02. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% CO2. Raw ambient pressure: 759.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M501",
      "name": "FLEX Run #183 (C09M501) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.25,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.72,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 26.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #183"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 13:14:11. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 534.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M502",
      "name": "FLEX Run #184 (C09M502) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.42,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M502_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #184"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 13:30:14. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 535.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M601",
      "name": "FLEX Run #185 (C09M601) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.35,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.8,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.33,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #185"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 13:42:04. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 535.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 535.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C09M701",
      "name": "FLEX Run #186 (C09M701) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.49,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.47,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.21,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C09M701_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #186"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 14:52:15. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% CO2. Raw ambient pressure: 536.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 536.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C02M101",
      "name": "FLEX Run #187 (C02M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.06,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.38,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.29,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.47,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 21.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C02M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #187"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 16:16:48. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% CO2. Raw ambient pressure: 758.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 758.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C02M201",
      "name": "FLEX Run #188 (C02M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.07,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.47,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.08,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C02M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #188"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:49:19. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% CO2. Raw ambient pressure: 758.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 758.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03M501",
      "name": "FLEX Run #189 (C03M501) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.48,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.77,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.78,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 30.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03M501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #189"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 10:53:21. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 761.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03M601",
      "name": "FLEX Run #190 (C03M601) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.94,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.74,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.95,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.5,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03M601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #190"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 12:28:41. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 764.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C03M701",
      "name": "FLEX Run #191 (C03M701) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.03,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.76,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.81,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C03M701_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #191"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 12:46:53. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% CO2. Raw ambient pressure: 765.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C04M101",
      "name": "FLEX Run #192 (C04M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.26,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.46,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 21.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C04M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #192"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:07:27. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% CO2. Raw ambient pressure: 759.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C04M201",
      "name": "FLEX Run #193 (C04M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.2,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.77,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.27,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.4,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C04M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #193"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 18:26:45. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% CO2. Raw ambient pressure: 759.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C04H101",
      "name": "FLEX Run #194 (C04H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.26,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.76,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.71,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.29,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C04H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #194"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/17/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:31:20. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% CO2. Raw ambient pressure: 752.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 752.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C04H201",
      "name": "FLEX Run #195 (C04H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.32,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.9,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.79,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.36,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C04H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #195"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/17/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:53:58. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% CO2. Raw ambient pressure: 752.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 752.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01H501",
      "name": "FLEX Run #196 (C01H501) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.11,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.06,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.28,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01H501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #196"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/18/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 0:24:31. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 758.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 758.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01H601",
      "name": "FLEX Run #197 (C01H601) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.04,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.33,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01H601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #197"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/18/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 1:38:10. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 759.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01H701",
      "name": "FLEX Run #198 (C01H701) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.12,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.13,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01H701_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #198"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/18/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 1:55:56. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 760.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01M501",
      "name": "FLEX Run #199 (C01M501) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.52,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.37,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.98,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 21.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01M501_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #199"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/24/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 15:07:47. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 754.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 754.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01M602",
      "name": "FLEX Run #200 (C01M602) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.8,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.57,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.13,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.47,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01M602_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #200"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/24/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 15:56:17. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 756.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 756.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-C01M603",
      "name": "FLEX Run #201 (C01M603) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.91,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.05,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.48,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_C01M603_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #201"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/24/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 16:18:58. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% CO2. Raw ambient pressure: 756.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 756.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01M101",
      "name": "FLEX Run #202 (N01M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.35,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.3,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.42,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.47,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 19.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #202"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/24/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 21:05:01. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 760.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01M201",
      "name": "FLEX Run #203 (N01M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.54,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.75,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.11,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #203"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/24/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 21:58:36. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 761.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H101",
      "name": "FLEX Run #204 (N01H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.86,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.56,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.43,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 23.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #204"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 19:04:50. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 756.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 756.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H102",
      "name": "FLEX Run #205 (N01H102) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.96,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.58,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 24.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #205"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 19:21:49. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 757.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 757.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H201",
      "name": "FLEX Run #206 (N01H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.35,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.96,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.47,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.5,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #206"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 20:28:30. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 760.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H202",
      "name": "FLEX Run #207 (N01H202) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.68,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.72,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.13,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #207"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Completion. Test GMT: 21:54:40. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 762.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H301",
      "name": "FLEX Run #208 (N01H301) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.71,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.92,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.69,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H301_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #208"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Completion. Test GMT: 22:19:47. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 762.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 762.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N02H101",
      "name": "FLEX Run #209 (N02H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.34,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.18,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.34,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N02H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #209"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 23:36:18. Chamber gas composition: 16.0% O2, 84.0% N2. Raw ambient pressure: 759.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N02H201",
      "name": "FLEX Run #210 (N02H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [],
      "data_files": [
        {
          "filename": "FLEX_Run_N02H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #210"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/29/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 23:51:11. Chamber gas composition: 16.0% O2, 84.0% N2. Raw ambient pressure: 759.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N02H203",
      "name": "FLEX Run #211 (N02H203) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.52,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.13,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.42,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N02H203_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #211"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "8/30/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 0:58:06. Chamber gas composition: 16.0% O2, 84.0% N2. Raw ambient pressure: 759.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N03H101",
      "name": "FLEX Run #212 (N03H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.86,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.55,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.31,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.37,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N03H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #212"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 19:44:42. Chamber gas composition: 15.0% O2, 85.0% N2. Raw ambient pressure: 764.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N04H101",
      "name": "FLEX Run #213 (N04H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 4.16,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 4.15,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.24,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N04H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #213"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:54:16. Chamber gas composition: 14.0% O2, 86.0% N2. Raw ambient pressure: 759.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N04H201",
      "name": "FLEX Run #214 (N04H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.83,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.39,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N04H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #214"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 23:17:17. Chamber gas composition: 14.0% O2, 86.0% N2. Raw ambient pressure: 759.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N04M101",
      "name": "FLEX Run #215 (N04M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.0,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.5,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.3,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 26.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N04M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #215"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:00:27. Chamber gas composition: 14.0% O2, 86.0% N2. Raw ambient pressure: 757.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 757.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N04M201",
      "name": "FLEX Run #216 (N04M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.1,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.67,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.27,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 15.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N04M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #216"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:21:15. Chamber gas composition: 14.0% O2, 86.0% N2. Raw ambient pressure: 758.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 758.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N05M101",
      "name": "FLEX Run #217 (N05M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.24,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.46,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.96,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.36,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N05M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #217"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 19:00:48. Chamber gas composition: 13.0% O2, 87.0% N2. Raw ambient pressure: 759.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N05M201",
      "name": "FLEX Run #218 (N05M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.4,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.75,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.46,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 16.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N05M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #218"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 20:24:20. Chamber gas composition: 13.0% O2, 87.0% N2. Raw ambient pressure: 760.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N06M101",
      "name": "FLEX Run #219 (N06M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.54,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.6,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.09,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.36,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N06M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #219"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 13:09:53. Chamber gas composition: 12.0% O2, 88.0% N2. Raw ambient pressure: 761.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N06M201",
      "name": "FLEX Run #220 (N06M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.58,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.94,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.05,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.35,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N06M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #220"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 13:28:43. Chamber gas composition: 12.0% O2, 88.0% N2. Raw ambient pressure: 761.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N06M202",
      "name": "FLEX Run #221 (N06M202) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 12.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.84,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.04,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.38,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N06M202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #221"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 14:26:07. Chamber gas composition: 12.0% O2, 88.0% N2. Raw ambient pressure: 763.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H01M102",
      "name": "FLEX Run #222 (H01M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.91,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.12,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 14.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H01M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #222"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 17:41:47. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% He. Raw ambient pressure: 759.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H01M104",
      "name": "FLEX Run #223 (H01M104) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [],
      "data_files": [
        {
          "filename": "FLEX_Run_H01M104_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #223"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/9/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 18:27:14. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% He. Raw ambient pressure: 759.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H01H102",
      "name": "FLEX Run #224 (H01H102) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.7,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.57,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H01H102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #224"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/13/2011",
      "notes": "Test End Mode: Completion. Test GMT: 11:55:40. Chamber gas composition: 20.0% O2, 75.0% N2, 5.0% He. Raw ambient pressure: 755.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 755.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H02M101",
      "name": "FLEX Run #225 (H02M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.44,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.78,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.57,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H02M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #225"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/21/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:28:54. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% He. Raw ambient pressure: 753.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 753.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H03M101",
      "name": "FLEX Run #226 (H03M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.79,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.3,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H03M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #226"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/22/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 0:02:52. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% He. Raw ambient pressure: 759.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H03M201",
      "name": "FLEX Run #227 (H03M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.36,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.95,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.67,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.53,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H03M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #227"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/22/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 0:44:55. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% He. Raw ambient pressure: 760.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 760.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H401",
      "name": "FLEX Run #228 (N01H401) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.32,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.37,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.52,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H401_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #228"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/23/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 23:18:09. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 767.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 767.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H502",
      "name": "FLEX Run #229 (N01H502) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.4,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.39,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.57,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H502_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #229"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/24/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 0:06:41. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 768.1 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 768.1 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-N01H601",
      "name": "FLEX Run #230 (N01H601) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.55,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.65,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.85,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.57,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_N01H601_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #230"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/24/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 1:06:33. Chamber gas composition: 21.0% O2, 79.0% N2. Raw ambient pressure: 769.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 769.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H02H101",
      "name": "FLEX Run #231 (H02H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 19.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.16,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.59,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.54,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H02H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #231"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/24/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 2:44:09. Chamber gas composition: 19.0% O2, 71.0% N2, 10.0% He. Raw ambient pressure: 758.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 758.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H03H101",
      "name": "FLEX Run #232 (H03H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.52,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.28,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.41,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H03H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #232"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 12:08:14. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% He. Raw ambient pressure: 763.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H03H201",
      "name": "FLEX Run #233 (H03H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.11,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.3,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H03H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #233"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Completion. Test GMT: 13:00:54. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% He. Raw ambient pressure: 765.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 765.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H03H202",
      "name": "FLEX Run #234 (H03H202) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.19,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.27,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H03H202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #234"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Completion. Test GMT: 13:25:07. Chamber gas composition: 18.0% O2, 67.0% N2, 15.0% He. Raw ambient pressure: 766.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H04H101",
      "name": "FLEX Run #235 (H04H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.85,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.6,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.46,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H04H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #235"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 15:00:33. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% He. Raw ambient pressure: 759.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H04H201",
      "name": "FLEX Run #236 (H04H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.12,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.39,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.59,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H04H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #236"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 15:12:24. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% He. Raw ambient pressure: 759.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H04H302",
      "name": "FLEX Run #237 (H04H302) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 1.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H04H302_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #237"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Disruption. Test GMT: 16:18:19. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% He. Raw ambient pressure: 759.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H04H303",
      "name": "FLEX Run #238 (H04H303) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.61,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.91,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H04H303_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #238"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "9/27/2011",
      "notes": "Test End Mode: Completion. Test GMT: 16:40:04. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% He. Raw ambient pressure: 759.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H04M101",
      "name": "FLEX Run #239 (H04M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.55,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.99,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.49,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 9.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H04M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #239"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 0:34:58. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% He. Raw ambient pressure: 754.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 754.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H04M202",
      "name": "FLEX Run #240 (H04M202) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.92,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.9,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.42,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 13.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H04M202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #240"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 1:21:41. Chamber gas composition: 17.0% O2, 63.0% N2, 20.0% He. Raw ambient pressure: 757.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 757.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H05M102",
      "name": "FLEX Run #241 (H05M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.31,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.4,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.79,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H05M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #241"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 2:58:40. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% He. Raw ambient pressure: 759.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H05M202",
      "name": "FLEX Run #242 (H05M202) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.46,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Burn Duration",
          "value": 5.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H05M202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #242"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/1/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 4:26:52. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% He. Raw ambient pressure: 761.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 761.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H05H103",
      "name": "FLEX Run #243 (H05H103) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 16.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.04,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.49,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.69,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H05H103_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #243"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/5/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 14:58:32. Chamber gas composition: 16.0% O2, 59.0% N2, 25.0% He. Raw ambient pressure: 757.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 757.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H06M102",
      "name": "FLEX Run #244 (H06M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.74,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.67,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.47,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.43,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H06M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #244"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/7/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 12:12:14. Chamber gas composition: 15.0% O2, 55.0% N2, 30.0% He. Raw ambient pressure: 755.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 755.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H06M201",
      "name": "FLEX Run #245 (H06M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 15.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 100.88,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.52,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.06,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H06M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #245"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/7/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 13:00:56. Chamber gas composition: 15.0% O2, 55.0% N2, 30.0% He. Raw ambient pressure: 756.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 756.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H07M101",
      "name": "FLEX Run #246 (H07M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.22,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.44,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.26,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H07M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #246"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/7/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 14:25:42. Chamber gas composition: 14.0% O2, 51.0% N2, 35.0% He. Raw ambient pressure: 759.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H07M202",
      "name": "FLEX Run #247 (H07M202) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 14.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.3,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.88,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.73,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.58,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H07M202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #247"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/7/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 15:06:17. Chamber gas composition: 14.0% O2, 51.0% N2, 35.0% He. Raw ambient pressure: 759.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 759.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H08M101",
      "name": "FLEX Run #248 (H08M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 13.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.79,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.56,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.54,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.51,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 0.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H08M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #248"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/11/11",
      "notes": "Test End Mode: Extinction. Test GMT: 12:11:56. Chamber gas composition: 13.0% O2, 47.0% N2, 40.0% He. Raw ambient pressure: 763.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 763.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H10H101",
      "name": "FLEX Run #249 (H10H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.19,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.78,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.52,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.72,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H10H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #249"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/12/11",
      "notes": "Test End Mode: Extinction. Test GMT: 20:16:43. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% He. Raw ambient pressure: 534.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H11H101",
      "name": "FLEX Run #250 (H11H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.95,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.8,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.12,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.71,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H11H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #250"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "10/12/11",
      "notes": "Test End Mode: Completion. Test GMT: 21:58:55. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% He. Raw ambient pressure: 532.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H10M101",
      "name": "FLEX Run #251 (H10M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.23,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.82,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.03,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.62,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.2,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H10M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #251"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Extinction. Test GMT: 14:48:10. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% He. Raw ambient pressure: 534.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H10M102",
      "name": "FLEX Run #252 (H10M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 24.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.27,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.79,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.53,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.7,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H10M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #252"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Disruption. Test GMT: 15:19:28. Chamber gas composition: 24.0% O2, 56.0% N2, 20.0% He. Raw ambient pressure: 534.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 534.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H11M101",
      "name": "FLEX Run #253 (H11M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.89,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.45,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.86,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 8.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H11M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #253"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Extinction. Test GMT: 16:59:20. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% He. Raw ambient pressure: 531.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H11M102",
      "name": "FLEX Run #254 (H11M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 23.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.9,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.61,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.73,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 6.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H11M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #254"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Disruption. Test GMT: 17:51:23. Chamber gas composition: 23.0% O2, 52.0% N2, 25.0% He. Raw ambient pressure: 531.8 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.8 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H12M101",
      "name": "FLEX Run #255 (H12M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.91,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.22,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.56,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H12M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #255"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Extinction. Test GMT: 18:53:50. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% He. Raw ambient pressure: 531.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H12M102",
      "name": "FLEX Run #256 (H12M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.25,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.78,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.65,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 12.1,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H12M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #256"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Extinction. Test GMT: 21:29:35. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% He. Raw ambient pressure: 531.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H12M201",
      "name": "FLEX Run #257 (H12M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.82,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.67,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.42,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.7,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H12M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #257"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/18/11",
      "notes": "Test End Mode: Extinction. Test GMT: 21:53:16. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% He. Raw ambient pressure: 531.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H12H101",
      "name": "FLEX Run #258 (H12H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.61,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.23,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.33,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.67,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H12H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #258"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/22/11",
      "notes": "Test End Mode: Extinction. Test GMT: 13:04:17. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% He. Raw ambient pressure: 529.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 529.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H12H201",
      "name": "FLEX Run #259 (H12H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.53,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.71,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.7,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H12H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #259"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/22/11",
      "notes": "Test End Mode: Extinction. Test GMT: 15:49:36. Chamber gas composition: 21.0% O2, 49.0% N2, 30.0% He. Raw ambient pressure: 529.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 529.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H13H101",
      "name": "FLEX Run #260 (H13H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.99,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.69,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 3.32,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.61,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.3,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H13H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #260"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/22/11",
      "notes": "Test End Mode: Extinction. Test GMT: 20:40:42. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% He. Raw ambient pressure: 532.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H13H201",
      "name": "FLEX Run #261 (H13H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.93,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.08,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.69,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.67,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H13H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #261"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/22/11",
      "notes": "Test End Mode: Extinction. Test GMT: 20:58:21. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% He. Raw ambient pressure: 532.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H13M102",
      "name": "FLEX Run #262 (H13M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.34,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.87,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.24,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.6,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 17.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H13M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #262"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/28/11",
      "notes": "Test End Mode: Extinction. Test GMT: 13:13:31. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% He. Raw ambient pressure: 527.6 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 527.6 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H13M201",
      "name": "FLEX Run #263 (H13M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 20.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.38,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.95,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.5,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.63,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 10.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H13M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #263"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/28/11",
      "notes": "Test End Mode: Extinction. Test GMT: 13:24:55. Chamber gas composition: 20.0% O2, 45.0% N2, 35.0% He. Raw ambient pressure: 527.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 527.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H14M101",
      "name": "FLEX Run #264 (H14M101) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.98,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.5,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.67,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.59,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.8,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H14M101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #264"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/28/11",
      "notes": "Test End Mode: Extinction. Test GMT: 15:07:28. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% He. Raw ambient pressure: 532.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H14M201",
      "name": "FLEX Run #265 (H14M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.05,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.7,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.92,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.63,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 5.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H14M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #265"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/28/11",
      "notes": "Test End Mode: Extinction. Test GMT: 15:35:38. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% He. Raw ambient pressure: 532.9 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.9 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H14M202",
      "name": "FLEX Run #266 (H14M202) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 71.09,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.3,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.62,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 2.3,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H14M202_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #266"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/28/11",
      "notes": "Test End Mode: . Test GMT: 15:54:09. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% CO2, 184.0% He. Raw ambient pressure: 533.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 533.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H14H101",
      "name": "FLEX Run #267 (H14H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.39,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.27,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.64,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.71,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H14H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #267"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/30/11",
      "notes": "Test End Mode: Extinction. Test GMT: 8:39:18. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% He. Raw ambient pressure: 528.0 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 528.0 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H14H201",
      "name": "FLEX Run #268 (H14H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 18.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.7,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.86,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.84,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.77,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 3.5,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H14H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #268"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/30/11",
      "notes": "Test End Mode: Extinction. Test GMT: 9:49:07. Chamber gas composition: 18.0% O2, 42.0% N2, 40.0% He. Raw ambient pressure: 530.3 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 530.3 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H15H101",
      "name": "FLEX Run #269 (H15H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.95,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.22,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 1.86,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.76,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H15H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #269"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/30/11",
      "notes": "Test End Mode: Extinction. Test GMT: 11:30:51. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% He. Raw ambient pressure: 532.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H15H201",
      "name": "FLEX Run #270 (H15H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.99,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 1.61,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.91,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 1.06,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 1.4,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H15H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #270"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "11/30/11",
      "notes": "Test End Mode: Completion. Test GMT: 12:09:00. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% He. Raw ambient pressure: 532.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 532.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H15M102",
      "name": "FLEX Run #271 (H15M102) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.71,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.79,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.3,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.63,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 4.0,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H15M102_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #271"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/5/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:54:10. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% He. Raw ambient pressure: 530.4 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 530.4 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H15M201",
      "name": "FLEX Run #272 (H15M201) Methanol Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Methanol in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Methanol Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 17.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 70.86,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.68,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.31,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.66,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 2.9,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H15M201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Methanol run #272"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/5/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 23:39:04. Chamber gas composition: 17.0% O2, 38.0% N2, 45.0% He. Raw ambient pressure: 531.5 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 531.5 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H19H101",
      "name": "FLEX Run #273 (H19H101) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 101.95,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 3.54,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 2.91,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.55,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 7.6,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H19H101_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #273"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 22:29:44. Chamber gas composition: 21.0% O2, 64.0% N2, 15.0% He. Raw ambient pressure: 764.7 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 764.7 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    },
    {
      "id": "EXP-FLEX-H19H201",
      "name": "FLEX Run #274 (H19H201) Heptane Droplet Burn",
      "objective": "Investigate microgravity spherical droplet combustion, burning rate, and extinction dynamics for Heptane in CIR.",
      "platform": "ISS Combustion Integrated Rack (CIR)",
      "gravity_condition": "Microgravity (~10^-6 g)",
      "material_fuel": "Heptane Droplet (liquid alkane/alcohol)",
      "oxygen_percent": {
        "value": 21.0,
        "unit": "% O2 by volume",
        "uncertainty": "\u00b10.2%"
      },
      "pressure": {
        "value": 102.15,
        "unit": "kPa",
        "uncertainty": "\u00b10.5 kPa"
      },
      "airflow": {
        "value": 0.0,
        "unit": "cm/s",
        "direction": "Quiescent (no forced flow)",
        "uncertainty": "\u00b10.05 cm/s"
      },
      "measured_variables": [
        {
          "name": "Initial Droplet Diameter",
          "value": 2.82,
          "unit": "mm",
          "definition": "Pre-ignition spherical droplet diameter suspended on fiber",
          "sensor_context": "Backlit silhouette shadowgraphy at 100 fps with automated ellipse fitting"
        },
        {
          "name": "Extinction Diameter",
          "value": 0.73,
          "unit": "mm",
          "definition": "Droplet diameter at visible flame extinction / cool flame transition",
          "sensor_context": "High-magnification shadowgraphy paired with UV/visible ICCD camera"
        },
        {
          "name": "Burning Rate Constant",
          "value": 0.65,
          "unit": "mm\u00b2/s",
          "definition": "d\u00b2-law consumption slope constant: -d(D\u00b2)/dt during hot flame phase",
          "sensor_context": "Automated regression tracking of droplet diameter squared"
        },
        {
          "name": "Burn Duration",
          "value": 11.7,
          "unit": "s",
          "definition": "Elapsed duration of luminous flame combustion",
          "sensor_context": "Broadband radiometer and photodiode arrival array"
        }
      ],
      "data_files": [
        {
          "filename": "FLEX_Run_H19H201_Telemetry.csv",
          "type": "CSV",
          "size": "1.2 MB",
          "description": "Shadowgraphy time-series and radiometer trace for Heptane run #274"
        }
      ],
      "source_url": "https://doi.org/10.1016/j.combustflame.2014.07.021",
      "source_document": "Nayagam, V. et al., 'Warm and Cool Flame Droplet Extinction in Microgravity', Combustion and Flame, 162(5), 2140-2147 (2015). NASA PSI Record #FLEX",
      "retrieval_date": "12/8/2011",
      "notes": "Test End Mode: Extinction. Test GMT: 23:41:45. Chamber gas composition: 21.0% O2, 64.0% N2, 15.0% He. Raw ambient pressure: 766.2 mmHg.",
      "provenance_per_field": {
        "pressure": "CIR chamber barometer: 766.2 mmHg converted to kPa (factor 0.133322)",
        "oxygen_percent": "CIR Gas Delivery System mass spectrometry feed",
        "measured_variables.Burning Rate Constant": "Nayagam et al. (2015) PSI database record"
      }
    }
  ]
};
