import { FarmersDelight, Minecraft } from "./types.ts";

export function optional(value: string): Minecraft.Tag.OptionalValue {
  return { id: value, required: false };
}

export function cuttingRecipe(
  ingredient: Minecraft.Ingredient,
  result: Minecraft.ItemStack[],
  tool: FarmersDelight.CuttingRecipe["tool"],
): FarmersDelight.CuttingRecipe {
  return {
    type: "farmersdelight:cutting",
    ingredients: [ingredient],
    result,
    tool,
  };
}
