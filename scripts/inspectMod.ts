import { ENV, ROOT_DIR } from "../constants.ts";
import { assert, copy, join } from "./deps.ts";
import { readModFile } from "./utils.ts";

const MOD_SLUG = Deno.args[0];
assert(MOD_SLUG, "No mod slug provided.");

const MOD_FILENAME = (await readModFile(MOD_SLUG)).filename;
const MOD_FILEPATH = join(ENV.INSTANCE_DIR, "mods", MOD_FILENAME);

const INSPECT_DIR = join(ROOT_DIR, ".inspect");
const MOD_INSPECT_DIR = join(INSPECT_DIR, MOD_SLUG);

try {
  Deno.mkdir(MOD_INSPECT_DIR, { recursive: true });
} catch { /* ignore */ }

await copy(MOD_FILEPATH, join(MOD_INSPECT_DIR, MOD_FILENAME), {
  overwrite: true,
});

const command = new Deno.Command("jar", {
  args: ["xf", MOD_FILENAME],
  cwd: MOD_INSPECT_DIR,
});
await command.output();
