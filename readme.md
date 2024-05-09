# Outlander Minecraft Modpack Repo

A modpack and related tooling used in its production.

This is the readme for the full repo, including both the pack and its developer
tooling. For the pack's specific readme including modlist, refer to
[`pack/readme.md`](pack/readme.md) instead.

## Repository Structure

<!-- deno-fmt-ignore -->
| File or Directory | Description                                                          |
| :---------------- | :------------------------------------------------------------------- |
| `datagen`         | Deno library code for Datapack generation.                           |
| `datapacks`       | Shareable datapacks developed as part of the modpack's development.  |
| `pack`            | Outlander modpack, in [Packwiz](https://packwiz.infra.link/) format. |
| `scripts`         | Deno scripts.                                                        |
| `outlander.zip`   | A [MultiMC modpack instance](https://packwiz.infra.link/tutorials/installing/packwiz-installer/#creating-a-multimc-instance-for-your-modpack) used in Packwiz's development workflow.  |

## Development

This repo expects [Deno](https://deno.com/) to be globally installed, and for
[Packwiz](https://packwiz.infra.link/) to be locally added to the `pack`
directory.

The project relies on codegen. The generated code is committed in `datapacks/`
but also needs to be copied to a particular subdirectory within `pack/` for it
to be available for playtesting. Execute `deno task gen` to both regenerate the
data packs and to copy them into the modpack.
