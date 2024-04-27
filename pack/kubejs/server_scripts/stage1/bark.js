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
  // "regions_unexplored:alpha_log", // no stripped variant
  // "regions_unexplored:ashen_log", // no stripped variant
  "regions_unexplored:baobab_log",
  "regions_unexplored:blackwood_log",
  "regions_unexplored:brimwood_log",
  "regions_unexplored:cobalt_log",
  "regions_unexplored:cypress_log",
  "regions_unexplored:dead_log",
  "regions_unexplored:eucalyptus_log",
  "regions_unexplored:joshua_log",
  "regions_unexplored:kapok_log",
  "regions_unexplored:larch_log",
  "regions_unexplored:magnolia_log",
  "regions_unexplored:maple_log",
  "regions_unexplored:mauve_log",
  "regions_unexplored:palm_log",
  "regions_unexplored:pine_log",
  "regions_unexplored:redwood_log",
  // "regions_unexplored:silver_birch_log", // no stripped variant
  "regions_unexplored:socotra_log",
  "regions_unexplored:willow_log",
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
