import { MODPACK_MODS_DIR } from "../../datagen/constants.ts";
import { join } from "./deps.ts";
import { readTomlFile } from "./readTomlFile.ts";

export type ModFileData = {
  name: string;
  filename: string;
  side: "client" | "server" | "both";
  download: {
    "hash-format": string;
    hash: string;
    mode: string;
  };
  update: {
    curseforge: {
      "file-id": number;
      "project-id": number;
    };
  };
};

export async function readModFile(modSlug: string, exitOnError = true) {
  try {
    return await readTomlFile(
      join(MODPACK_MODS_DIR, `${modSlug}.pw.toml`),
    ) as ModFileData;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      console.error(`Mod file not found for "${modSlug}"`);
    } else {
      console.error(`Unknown error: ${e.message}`);
    }
    if (exitOnError) Deno.exit(1);
    throw e;
  }
}
