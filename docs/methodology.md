# Scientific methodology

## Common parameter families
- Gravity condition: microgravity, lunar, Martian, Earth
- Extinction velocity / extinction limit
- Soot volume fraction
- Radiant heat flux
- Cool-flame dynamics
- Peak surface temperature
- Flame-spread rate

## Missing data
Use `null` only when the numeric value is not available, and pair it with a status such as `not_reported`, `not_measured`, or `not_applicable`. A missing value is never zero.

## Comparability
Do not compare measurements without checking fuel, geometry, oxygen concentration, pressure, flow regime, ignition method, instrument calibration and gravity condition. Keep units explicit and convert only through documented transformations.

## Model validation
No predictive fire model is enabled by default. Any future extinction, flame-spread or thermal model must include:
- governing equations and assumptions
- training/calibration dataset identifiers
- held-out validation cases
- error metrics and uncertainty
- domain-of-validity statement
- versioned model card
