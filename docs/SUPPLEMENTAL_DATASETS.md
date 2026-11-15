# Supplemental research datasets

The files in `data/research_archive/` are carried forward from the earlier FLARE-X starter project. They are intentionally **not** connected to the active experiment database, charts, comparison engine, knowledge graph, gap matrix, or prediction explorer.

## Why they are separate

The earlier JSON files have not yet completed record-by-record verification against their cited NASA source material. Keeping them separate prevents unverified transcription or interpretation from silently appearing as verified measurements in the Windows dashboard.

## Promotion workflow

Before any dataset is promoted into the active application database:

1. Open the cited NASA PSI record or NTRS publication.
2. Verify each numeric value against its original table, figure, or data file.
3. Record source URL/DOI, page/table/figure, original units, gravity condition, and measurement method.
4. Preserve missing values as `null`; do not infer missing measurements.
5. Label values as measured, derived, simulation, not reported, or not applicable.
6. Run schema and scientific review, then update the active database intentionally.

See `manifest.json` for the current per-file status.
