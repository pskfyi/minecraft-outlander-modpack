import { FarmersDelight, Minecraft } from "../../datagen/types.ts";
import { cuttingRecipe } from "../../datagen/utils.ts";

export function furniture(wood: string) {
  return `${wood}_furniture`;
}

export const SALVAGE_STICKS = "salvage_sticks";

export function salvagePlank(wood: string) {
  return `salvage_plank/${wood}`;
}

export function salvageContainer(wood: string) {
  return `salvage_container/${wood}`;
}

export function woodRecyclingRecipe(
  ingredient: Minecraft.Ingredient,
  result: Minecraft.ItemStack[],
): FarmersDelight.CuttingRecipe {
  return cuttingRecipe(ingredient, result, {
    type: "farmersdelight:tool_action",
    action: "axe_dig",
  });
}
