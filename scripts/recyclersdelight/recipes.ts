import { DataPack } from "../../datagen/DataPack.ts";
import { cuttingRecipe } from "../../datagen/utils.ts";
import {
  ALL_WOODS,
  NAMESPACE,
  QUARK_WOODS,
  VANILLA_WOODS,
} from "./constants.ts";
import {
  SALVAGE_STICKS,
  salvageContainer,
  salvagePlank,
  woodRecyclingRecipe,
} from "./utils.ts";

const RECIPES: DataPack.Recipes = {
  [NAMESPACE]: {},
  farmersdelight: {},
};

function woodPlanksFromFurniture(wood: string, resultPrefix: string = "") {
  const recipeName = `cutting/${wood}_planks_from_furniture`;
  const ingredient = { tag: `${NAMESPACE}:${salvagePlank(wood)}` };

  RECIPES[NAMESPACE][recipeName] = woodRecyclingRecipe(
    ingredient,
    [{ item: `${resultPrefix}${wood}_planks` }],
  );
}

function severalPlanksFromContainers(wood: string, resultPrefix: string = "") {
  const recipeName = `cutting/${wood}_planks_from_container`;
  const ingredient = { tag: `${NAMESPACE}:${salvageContainer(wood)}` };

  RECIPES[NAMESPACE][recipeName] = woodRecyclingRecipe(
    ingredient,
    [{ item: `${resultPrefix}${wood}_planks`, count: 4 }],
  );
}

function recycleBookshelf(wood: string, resultPrefix: string = "") {
  const recipeName = `cutting/recycle_${wood}_bookshelf`;
  const ingredient = {
    item: wood === "oak" ? "bookshelf" : `quark:${wood}_bookshelf`,
  };

  RECIPES[NAMESPACE][recipeName] = cuttingRecipe(
    ingredient,
    [
      { item: `${resultPrefix}${wood}_planks`, count: 3 },
      { item: "book", count: 3 },
    ],
    { type: "farmersdelight:tool_action", action: "axe_dig" },
  );
}

function removeRecipe(recipeName: string) {
  RECIPES.farmersdelight[recipeName] = {};
}

const EXISTING_RECYCLING_RECIPE_FURNITURE_TYPES = [
  "door",
  "sign",
  "trapdoor",
  "hanging_sign",
];

ALL_WOODS.map((wood) => {
  recycleBookshelf(wood);
});

VANILLA_WOODS.map((wood) => {
  woodPlanksFromFurniture(wood);
  severalPlanksFromContainers(wood);
  EXISTING_RECYCLING_RECIPE_FURNITURE_TYPES.map((type) =>
    removeRecipe(`cutting/${wood}_${type}`)
  );
});

QUARK_WOODS.map((wood) => {
  woodPlanksFromFurniture(wood, "quark:");
  severalPlanksFromContainers(wood, "quark:");
});

RECIPES[NAMESPACE]["cutting/sticks_from_knicknacks"] = woodRecyclingRecipe(
  { tag: `${NAMESPACE}:${SALVAGE_STICKS}` },
  [{ item: "stick", count: 2 }],
);

export { RECIPES };
