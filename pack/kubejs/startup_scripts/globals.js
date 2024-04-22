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

    "vinery:flower_box",
    "vinery:flower_pot"
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
