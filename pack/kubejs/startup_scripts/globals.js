// priority: 0

// https://kubejs.com/wiki/global-scope
global.items = {
  remove: [
    "minecraft:wooden_sword",
    "minecraft:wooden_shovel",
    "minecraft:wooden_pickaxe",
    "minecraft:wooden_axe",
    "minecraft:wooden_hoe",
    "minecraft:stone_sword",
    "minecraft:stone_shovel",
    "minecraft:stone_pickaxe",
    "minecraft:stone_axe",
    "minecraft:stone_hoe",

    "aquaculture:wooden_fillet_knife",

    "bettercopper:copper_heart",
    "bettercopper:copper_nugget",
    
    "natprog:quark_marble_pebble",
    "natprog:quark_basalt_pebble",
    "natprog:quark_slate_pebble",
    "natprog:bone_shard", // Skipping bone tools
    "natprog:bone_knife",
    "natprog:bone_pickaxe",
    "natprog:bronze_saw", // No bronze in the pack
    "natprog:steel_saw",  // No steel in the pack

    "ftbquests:loot_crate_opener",
  ],
  strippableLogs: [ // for editing bark stripping
    "minecraft:oak_log",
    "minecraft:spruce_log",
    "minecraft:birch_log",
    "minecraft:jungle_log",
    "minecraft:acacia_log",
    "minecraft:cherry_log",
    "minecraft:dark_oak_log",
    "minecraft:mangrove_log",
    // "vinery:apple_log", // no stripped variant
    "vinery:cherry_log",
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
  ],
  planks: {
    minecraft: [ // these are all already handled by NatProg
      "oak",
      "spruce",
      "birch",
      "jungle",
      "acacia",
      "cherry",
      "dark_oak",
      "mangrove",
      "bamboo", // wants special ratios
      "crimson", // mushroom blocks
      "warped", // mushroom blocks
    ],
    aquaculture: [
      "driftwood" // special blocks, oak planks
    ],
    vinery: [
      "apple", // all oak except unstripped log
      "cherry"
    ],
    "regions_unexplored": [
      "alpha", // no stripped variant
      "baobab",
      "blackwood",
      "blue_bioshroom", // mushroom blocks
      "brimwood",
      "cobalt",
      "cypress",
      "dead",
      "eucalyptus",
      "green_bioshroom", // mushroom blocks
      "joshua",
      "kapok",
      "larch",
      "magnolia",
      "maple",
      "mauve",
      "palm",
      "pine",
      "pink_bioshroom", // mushroom blocks
      "redwood",
      "socotra",
      "willow",
      "yellow_bioshroom", // mushroom blocks
    ],
    quark: [
      "ancient",
      "azalea",
      "blossom"
    ]
  }
}
