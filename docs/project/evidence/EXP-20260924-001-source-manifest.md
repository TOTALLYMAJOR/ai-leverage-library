# EXP-20260924-001 Source Packet Manifest

Status: `PREPARED_NOT_EXECUTED`

This manifest defines the isolated input packet for the proposed `PROOF-002` repetition. It proves packet identity only. It does not prove practitioner independence, isolation during execution, a completed run, acceptance, or reproducibility.

## Retained reconstruction source (2026-10-20)

The preparation status above is historical. The later execution and qualified
human disposition are recorded in the experiment, controller comparison, and
[human disposition](EXP-20260924-001-human-disposition.md); packet integrity is
separate from each verdict.

The historical revision below is retained locally but cannot be fetched from
GitHub. Its five product files, plus the unchanged practitioner brief, are now
retained byte-for-byte under `packets/EXP-20260924-001/` beside this manifest.
All six hashes below remain unchanged. These files are frozen evidence, not
current project authorities. Do not update their content to reflect later state.

## Frozen product sources

Revision: `f0756da78ad0b985b0ac4997f5856ad4168d5e64`

| Packet path | SHA-256 |
| --- | --- |
| `BACKLOG.md` | `fe80fa0e0bf7611473ea9ebeed58834568b6c5b50ccdb0bd7f6c09f0bc31192b` |
| `PROJECT_STATE.md` | `da0597c6b936d4deb175b9cca2fde691f84bbf5afb317a4e0512f4e0e10ec72e` |
| `README.md` | `1af92560eb35c51804214b0d0df08c50b00afa787cece264c900245e860a946c` |
| `content/techniques/discover/constraint-compilation.md` | `3adeffddfa2643d9be80f1805afb32b8d618c3c947cd6f5d9b661b917039c664` |
| `docs/project/EXPLORATIONS.md` | `b8ce79e9bd3af927d9b0486b93711c1e1ff138c0aa47a4d1b3e3162b85cec094` |

These five hashes were regenerated from the frozen revision on 2026-09-24 and match the source hashes retained for `PROOF-001`.

## Coordination input

| Packet path | SHA-256 |
| --- | --- |
| `EXP-20260924-001-practitioner-brief.md` | `ffe7f2fb8f4566fb16a92e067df2a17310bb86b5e61aedf364eb0639faf2a64c` |

The practitioner brief constrains execution but is not product evidence and must not be used to derive product requirements.

## Reconstruction

From a fresh checkout of this PR or a later revision containing the retained
packet, run:

```sh
npm run validate:proof-packet
```

This command verifies the six retained files against the original hashes and
rejects missing, changed, extra, or symlinked files. It does not require Git
history, a network request, or access to the original local repository.

Create a new empty directory and copy only the six files from
`docs/project/evidence/packets/EXP-20260924-001/`, preserving their relative paths.
The original Git revision remains historical provenance; use the retained packet
for reconstruction. Before handing off the packet:

1. confirm the directory contains exactly six regular files;
2. recalculate every SHA-256 value and compare it with this manifest;
3. prevent access to the repository, its history, prior experiment outputs, network sources, and unrelated workspace files;
4. retain the calculated hashes, exact runtime boundary, and any deviation with the result.

Do not include this manifest in the practitioner packet. The controller uses it to verify the packet before and after the run.
