const BLOCKS_THAT_REQUIRE_TOOLS = [
  "cobblestone",
  "cobbled_deepslate",
  "furnace",
  
  "natprog:cobbled_andesite",
  "natprog:cobbled_diorite",
  "natprog:cobbled_granite",
  "natprog:cobbled_sanstone",
  "natprog:cobbled_red_sandstone",
  "natprog:cobbled_tuff",
  "natprog:cobbled_dripstone_block",
  "natprog:cobbled_nettherack",
  "natprog:cobbled_end_stone",
  
  "create:andesite_casing",
  "create:andesite_encased_cogwheel",
  "create:andesite_encased_shaft",
  "create:andesite_funnel",
  "create:blaze_burner",
  "create:brass_casing",
  "create:brass_encased_shaft",
  "create:brass_encased_cogwheel",
  "create:clutch",
  "create:chute",
  "create:copper_casing",
  "create:cogwheel",
  "create:crushing_wheel",
  "create:display_board",
  "create:gearbox",
  "create:large_cogwheel",
  "create:mechanical_bearing",
  "create:mechanical_crafter",
  "create:mechanical_drill",
  "create:mechanical_harvester",
  "create:mechanical_mixer",
  "create:mechanical_piston",
  "create:mechanical_press",
  "create:mechanical_pump",
  "create:mechanical_saw",
  "create:millstone",
  "create:shaft",
  "create:smart_chute",
  "create:vertical_gearbox",
  "create:weighted_ejector",
  
  "createsifter:sifter",
  "sliceanddice:slicer",
  
  // "#outlander:made_of/deepslate_alloy", // doesn't support tags at this time
  // snippet to get ids in a tag:
  //
  //   const ids = Ingredient.of('#outlander:made_of/deepslate_alloy').itemIds
  //  
  //   // Some events fire multiple times, and some of those times the result
  //   // will be empty.
  //   if (ids.length) {
  //     JsonIO.write(
  //       'kubejs/config/my_file_name.json',
  //       { values: ids }
  //     )
  //   }

  "vintagedelight:cheese_mold",
  "supplementaries:faucet",
  "supplementaries:cage",
  "rechiseled:chisel",
  "minecraft:smithing_table",
  "minecraft:hopper",
  "minecraft:chain",
  "minecraft:cauldron",
  "minecraft:blast_furnace",
  "minecraft:anvil",
  "farmersdelight:stove",
  "farmersdelight:skillet",
  "farmersdelight:cooking_pot",
  "create:metal_bracket",
  "create:depot",
  "create:chute",
  "create:basin",
  "create:mechanical_press",
  "create:encased_chain_drive",

  /additional_lights:/
]

BlockEvents.modification(event => {
  BLOCKS_THAT_REQUIRE_TOOLS.map(id =>
    event.modify(id, block => {
      block.requiresTool = false
    })
  )
})