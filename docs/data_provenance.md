# Data provenance and verification policy

## Dataset states
- `pending_source_verification`: imported file; primary-source values have not yet been independently audited.
- `verified`: each included value, unit, test identifier and source locator has been checked against the primary source.
- `derived`: value calculated from cited measurements; formula and inputs must be recorded.
- `simulated`: output from a model; model version, assumptions and validation status must be recorded.
- `rejected`: source or transcription could not be substantiated.

## Required provenance fields
Each dataset should include:
- investigation and experiment/test identifier
- source organization, title, authors and publication date
- DOI or stable URL (never invent one)
- page/table/figure/row locator
- measurement unit and method/instrument, when available
- gravity condition and platform
- measured/derived/simulated classification
- uncertainty and quality notes
- review status and reviewer/date

## Imported files
The files in `data/datasets/` are carried over from the project workspace. The catalog intentionally marks them `pending_source_verification`. Do not use them as validated training data or safety-critical evidence until reviewed against primary NASA repository records and original reports.
