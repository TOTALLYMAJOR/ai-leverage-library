# EXP-20260924-001 Source Packet Manifest

Status: `PREPARED_NOT_EXECUTED`

This manifest defines the isolated input packet for the proposed `PROOF-002` repetition. It proves packet identity only. It does not prove practitioner independence, isolation during execution, a completed run, acceptance, or reproducibility.

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

Create a new empty directory, extract only the five named product sources from the frozen revision, and copy the practitioner brief into that directory. Before handing off the packet:

1. confirm the directory contains exactly six regular files;
2. recalculate every SHA-256 value and compare it with this manifest;
3. prevent access to the repository, its history, prior experiment outputs, network sources, and unrelated workspace files;
4. retain the calculated hashes, exact runtime boundary, and any deviation with the result.

Do not include this manifest in the practitioner packet. The controller uses it to verify the packet before and after the run.
