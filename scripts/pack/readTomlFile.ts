import { parseToml } from "./deps.ts";

export async function readTomlFile(path: string) {
  return parseToml(await Deno.readTextFile(path));
}
