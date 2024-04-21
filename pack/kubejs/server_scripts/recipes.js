// priority: 10

const REMOVED_RECIPES = [
  "bettercopper:copper_nugget_from_copper_ingot",
  "minecraft:campfire"
]

// Array<Filter, From, To>
const INPUT_REPLACEMENTS = [
  [{ id: "farmersdelight:cooking_pot" }, "minecraft:wooden_shovel", "minecraft:stick"],
  [{ id: "tinyredstone:trimming_panel_cover" }, "minecraft:wooden_axe", "minecraft:flint"],
  [{ id: "tinyredstone:block_chopper" }, "minecraft:wooden_axe", "minecraft:flint"],
]

// Array<Filter, From, To>
const OUTPUT_REPLACEMENTS = [
  [{ output: "bettercopper:copper_nugget" }, "bettercopper:copper_nugget", "create:copper_nugget"],
]

function lycheeBlockInteract(hand, target, then) {
  return {
    type: "lychee:block_interacting",
    item_in: hand,
    "block_in": target,
    "post": then
  }
}

function stripped(id) {
  const [mod, log] = id.split(":")

  return `${mod}:stripped_${log}`
}

function stripAndDropBark(log, strippedLog) {
  if (!strippedLog) strippedLog = stripped(log)

  return lycheeBlockInteract(
    { tag: "outlander:strips_bark" },
    log,
    [
        {
          type: "drop_item",
          item: "farmersdelight:tree_bark"
        },
        {
          type: "place",
          block: strippedLog
        },
        {
          type: "damage_item"
        }
    ]
  )
}

ServerEvents.recipes((event) => {
  REMOVED_RECIPES.map(id => event.remove({ id: id }))

  INPUT_REPLACEMENTS.map(r => event.replaceInput(r[0], r[1], r[2]))
  OUTPUT_REPLACEMENTS.map(r => event.replaceOutput(r[0], r[1], r[2]))

  global.items.strippableLogs
    .map(log => event.custom(stripAndDropBark(log)))
  event.custom(stripAndDropBark("vinery:apple_log", "minecraft:stripped_oak_log"))

  event.remove({ id: "natprog:crafting/flint_hatchet" })
  event.shaped(
    "natprog:flint_hatchet",
    [
      "FT",
      "FS"
    ],
    {
      F: "minecraft:flint",
      S: "minecraft:stick",
      T: "farmersdelight:straw",
    }
  )

  event.shaped(
    "minecraft:campfire",
    [
      " S ",
      "STS",
      "LLL",
    ],
    {
      L: "#minecraft:logs",
      S: "minecraft:stick",
      T: "farmersdelight:straw",
    }
  )

  global.items.remove.map(id => event.remove({ id: id }))
})
