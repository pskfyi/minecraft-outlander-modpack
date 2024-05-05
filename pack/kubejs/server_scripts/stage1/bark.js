// priority: 10

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

const MISSING_NATPROG_AXES = [
  "minecraft:golden_axe",
  "bettercopper:copper_axe",
  "aquaculture:neptunium_axe"
]

const STRIPPABLE_LOGS = [ // for editing bark stripping
  "minecraft:oak_log",
  "minecraft:spruce_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:acacia_log",
  "minecraft:cherry_log",
  "minecraft:dark_oak_log",
  "minecraft:mangrove_log",
  "quark:ancient_log",
  "quark:azalea_log",
  "quark:blossom_log",
]

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
  STRIPPABLE_LOGS.map(log => event.custom(stripAndDropBark(log)))
})
