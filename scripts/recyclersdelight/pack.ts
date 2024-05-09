import { DataPack } from "../../datagen/DataPack.ts";
import { DATAPACKS_DIR } from "../../datagen/constants.ts";
import { NAMESPACE } from "./constants.ts";
import { RECIPES } from "./recipes.ts";
import { FURNITURE_TAGS } from "./furnitureTags.ts";

const DATAPACK = new DataPack(DATAPACKS_DIR, NAMESPACE);

DATAPACK.description =
  "More recycling recipes for Farmer's Delight cutting board.";

DATAPACK.requiredNamespaces = ["farmersdelight", NAMESPACE];

DATAPACK.tags = { [NAMESPACE]: { items: FURNITURE_TAGS } };
DATAPACK.recipes = RECIPES;

// TODO: Recycle chest boats into chest and boat
// TODO: Recycle boats into planks
// TODO: Recycle paintings, item frames, camp fires, candles, banners, flags
// TODO: Recycle rails
// TODO: Recylce composter, smoker, furnace, and all other tables
// TODO: Recycle create blocks
// TODO: Use wrenches to recycle metal and/or sturdy things
// TODO: Use knives to recycle stringy and textile things

export { DATAPACK };
