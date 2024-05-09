import { join, load as loadEnv, resolve } from "./deps.ts";

const DIRNAME = import.meta.dirname;
if (!DIRNAME) Deno.exit();

export const ENV = await loadEnv();

export const ROOT_DIR = resolve(DIRNAME, "..");
export const DATAPACKS_DIR = join(ROOT_DIR, "datapacks");
export const MODPACK_DATAPACKS_DIR = join(
  ROOT_DIR,
  "pack/config/openloader/data",
);
export const INSTANCE_DATAPACKS_DIR =
  "/Users/pskfyi/Library/Application Support/PolyMC/instances/outlander/.minecraft/config/openloader/data";
