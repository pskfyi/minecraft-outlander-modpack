import { Minecraft } from "../../datagen/types.ts";
import {
  ALL_WOODS,
  NAMESPACE,
  QUARK_WOODS,
  VANILLA_WOODS,
} from "./constants.ts";
import {
  furniture,
  SALVAGE_STICKS,
  salvageContainer,
  salvagePlank,
} from "./utils.ts";

// deno-fmt-ignore
const VANILLA_FURNITURE_TYPES_WITH_SALVAGEABLE_PLANKS = [
  "door", "trapdoor",
  "sign", "hanging_sign",
  "fence", "fence_gate",
  "stairs",
  "pressure_plate",
  // boats are handled separately b/c bamboo has a raft instead
];

const TAGS: Record<string, Minecraft.Tag.Value[]> = {
  furniture: [],
  ladders: [],
  bamboo_furniture: [
    "bamboo_raft",
    "bamboo_chest_raft",
    "bamboo_mosaic_stairs",
  ],
  [SALVAGE_STICKS]: [
    `#${NAMESPACE}:ladders`,
    `#supplementaries:sign_posts`,
    `#suppsquared:item_shelves`,
  ],
};

function register(value: Minecraft.Tag.Value, tag: string) {
  TAGS[tag].push(value);
}

function registerStorageDrawers(
  wood: string,
  tag: string,
  prefix = "storagedrawers:",
) {
  TAGS[tag].push(
    `${prefix}${wood}_full_drawers_1`,
    `${prefix}${wood}_full_drawers_2`,
    `${prefix}${wood}_full_drawers_4`,
    `${prefix}${wood}_half_drawers_1`,
    `${prefix}${wood}_half_drawers_2`,
    `${prefix}${wood}_half_drawers_4`,
  );
}

ALL_WOODS.map((wood) => {
  const furnitureTag = furniture(wood);
  const planksTag = salvagePlank(wood);
  const containerTag = salvageContainer(wood);

  TAGS[furnitureTag] = [
    `#${NAMESPACE}:${planksTag}`,
    `#${NAMESPACE}:${containerTag}`,
  ];
  TAGS[planksTag] = [];
  TAGS[containerTag] = [];

  const ladder = wood === "oak" ? "ladder" : `quark:${wood}_ladder`;
  register(ladder, "ladders");
  register(ladder, furnitureTag);

  register(
    wood === "oak" ? "bookshelf" : `quark:${wood}_bookshelf`,
    furnitureTag,
  );
  register(`quark:${wood}_chest`, containerTag);
  register(`quark:${wood}_trapped_chest`, containerTag);
  TAGS.furniture.push(`#${NAMESPACE}:${furnitureTag}`);
});

VANILLA_WOODS.map((wood) => {
  const furnitureTag = furniture(wood);
  const planksTag = salvagePlank(wood);
  const containerTag = salvageContainer(wood);

  VANILLA_FURNITURE_TYPES_WITH_SALVAGEABLE_PLANKS
    .map((furniture) => register(`${wood}_${furniture}`, planksTag));

  if (wood !== "bamboo") registerStorageDrawers(wood, containerTag);
  if (wood !== "bamboo" && wood !== "warped" && wood !== "crimson") {
    register(`${wood}_boat`, furnitureTag);
    register(`${wood}_chest_boat`, furnitureTag);
  }

  register(`supplementaries:sign_post_${wood}`, furnitureTag);
  register(`suppsquared:item_shelf_${wood}`, furnitureTag);
  register(`farmersdelight:${wood}_cabinet`, containerTag);
  register(`create:${wood}_window`, planksTag);
  register(`storagedrawers:${wood}_trim`, planksTag);
});

QUARK_WOODS.map((wood) => {
  const furnitureTag = furniture(wood);
  const planksTag = salvagePlank(wood);
  const containerTag = salvageContainer(wood);

  VANILLA_FURNITURE_TYPES_WITH_SALVAGEABLE_PLANKS
    .map((furniture) => register(`quark:${wood}_${furniture}`, planksTag));

  register(`supplementaries:quark/sign_post_${wood}`, furnitureTag);
  register(`suppsquared:quark/item_shelf_${wood}`, furnitureTag);
  register(`quark:${wood}_boat`, furnitureTag);
  register(`quark:${wood}_chest_boat`, furnitureTag);
  register(`everycomp:fd/quark/${wood}_cabinet`, containerTag);
  register(`everycomp:c/quark/${wood}_window`, planksTag);
  register(`everycomp:c/quark/${wood}_window`, planksTag);
  register(`everycomp:sd/quark/${wood}_trim`, planksTag);
  registerStorageDrawers(wood, containerTag, "everycomp:sd/quark/");
});

register(`chest`, salvageContainer("oak"));
register(`trapped_chest`, salvageContainer("oak"));
register(`barrel`, salvageContainer("oak"));

export { TAGS as FURNITURE_TAGS };
