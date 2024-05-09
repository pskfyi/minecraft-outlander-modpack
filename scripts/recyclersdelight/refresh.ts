import { ENV, MODPACK_DATAPACKS_DIR } from "../../datagen/constants.ts";
import { DATAPACK } from "./pack.ts";

await DATAPACK.generate();
await DATAPACK.install(MODPACK_DATAPACKS_DIR);

if (ENV.INSTANCE_DATAPACKS_DIR) {
  await DATAPACK.install(ENV.INSTANCE_DATAPACKS_DIR);
}
