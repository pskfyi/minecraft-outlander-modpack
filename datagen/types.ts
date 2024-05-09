export declare namespace Minecraft {
  export namespace Tag {
    /** See: https://minecraft.fandom.com/wiki/Tag#Java_Edition */
    export type Type =
      | "items"
      | "blocks"
      | "fluids"
      | "entity_types"
      | "game_events";
    export type OptionalValue = { id: string; required: false };
    export type Value = string | OptionalValue;
    export type Data = {
      replace?: boolean;
      values: Value[];
    };
  }

  export type Ingredient = { item: string } | { tag: string };
  export type ItemStack = { item: string; count?: number };

  export type ShapedRecipe = {
    type: "minecraft:crafting_shaped";
    pattern: [string, string, string] | [string, string];
    key: Record<string, Ingredient>;
    result: ItemStack;
  };

  export type ShapelessRecipe = {
    type: "minecraft:crafting_shapeless";
    ingredients: { item: string; data?: number }[];
    result: string;
  };

  export type RemovedRecipe = Record<string | number | symbol, never>;

  export type Recipe = ShapedRecipe | ShapelessRecipe | RemovedRecipe;
}

export declare namespace FarmersDelight {
  export type CuttingRecipe = {
    type: "farmersdelight:cutting";
    ingredients: [Minecraft.Ingredient];
    result: Minecraft.ItemStack[];
    tool: Minecraft.Ingredient | {
      type: "farmersdelight:tool_action";
      action: "pickaxe_dig" | "axe_dig" | "axe:strip" | "shovel_dig";
    };
    sound?: string;
  };

  export type Recipe = CuttingRecipe;
}
