import { ROOT_DIR } from "../../datagen/constants.ts";
import { copy, exists, load as loadEnv, resolve } from "./deps.ts";

const ENV = await loadEnv();
if (!ENV.INSTANCE_DATAPACKS_DIR) Deno.exit();

const SOURCE_DIR = resolve(ROOT_DIR, "pack/config/openloader/data/modpack");
const TARGET_DIR = resolve(ENV.INSTANCE_DATAPACKS_DIR, "modpack");

if (await exists(TARGET_DIR)) {
  await Deno.remove(TARGET_DIR, { recursive: true });
}

await copy(SOURCE_DIR, TARGET_DIR, { overwrite: true });
