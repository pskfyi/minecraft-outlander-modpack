import { resolve } from "https://deno.land/std@0.224.0/path/resolve.ts";
import { join } from "https://deno.land/std@0.224.0/path/join.ts";
import { load as loadEnv } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const DIRNAME = import.meta.dirname;
if (!DIRNAME) Deno.exit();

export const ENV = await loadEnv();

export const ROOT_DIR = resolve(DIRNAME);
export const MODPACK_DIR = resolve(ROOT_DIR, "pack");
export const MODPACK_CONFIG_DIR = resolve(MODPACK_DIR, "config");
export const MODPACK_DATAPACKS_DIR = join(
  MODPACK_CONFIG_DIR,
  "openloader/data",
);
export const MODPACK_MODS_DIR = resolve(MODPACK_DIR, "mods");
