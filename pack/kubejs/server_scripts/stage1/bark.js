// priority: 10

function lycheeBlockInteract(hand, target, then) {
  return {
    type: "lychee:block_interacting",
    item_in: hand,
    "block_in": target,
    "post": then
  }
}

function stripAndDropBarkRecipe(log, strippedLog) {
  return lycheeBlockInteract(
    { tag: "outlander:strips_bark" },
    log,
    [
        {
          type: "drop_item",
          item: "farmersdelight:tree_bark",
          contextual: {
            type: "chance",
            chance: 0.25
          }
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

function stripInCraftingGridRecipe(input, output) {
  return {
    type: "natprog:damage_tools",
    ingredients: [
      { item: input },
      { tag: "outlander:strips_bark" }
    ],
    result: { item: output },
    group: "carpentry"
  }
}

const MISSING_NATPROG_AXES = [
  "minecraft:golden_axe",
  "bettercopper:copper_axe",
  "aquaculture:neptunium_axe"
]

const STRIPPABLE_WOODS = {
  minecraft: [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "cherry",
    "dark_oak",
    "mangrove"
  ],
  quark: [
    "ancient",
    "azalea",
    "blossom"
  ]
}

ServerEvents.tags('item', event => {
  MISSING_NATPROG_AXES.map(id => event.add("natprog:axe", id))

  function addStripBarkTag(ids) {
    ids.map(id => event.add('outlander:strips_bark', id))
  }
  
  addStripBarkTag(event.get('natprog:axe').getObjectIds())
  addStripBarkTag(event.get('natprog:saw').getObjectIds())
  addStripBarkTag(event.get('forge:shears').getObjectIds())
})

ServerEvents.recipes((event) => {
  for (const mod in STRIPPABLE_WOODS) {
    STRIPPABLE_WOODS[mod].map(wood => {
      const log = `${mod}:${wood}_log`
      const strippedLog = `${mod}:stripped_${wood}_log`

      if (mod === "minecraft") {
        // remove builtin natprog stripping recipes,
        // which are erroneously under the minecraft namespace
        event.remove({ id: `minecraft:saw/${wood}_wood_to_stripped_${wood}_wood` })
        event.remove({ id: `minecraft:saw/${wood}_log_to_stripped_${wood}_log` })
      }
        
      event.custom(stripAndDropBarkRecipe(log, strippedLog))
      event.custom(stripInCraftingGridRecipe(log, strippedLog))
      event.custom(stripInCraftingGridRecipe(
        `${mod}:${wood}_wood`,
        `${mod}:stripped_${wood}_wood`
      ))
    })
  }
})
