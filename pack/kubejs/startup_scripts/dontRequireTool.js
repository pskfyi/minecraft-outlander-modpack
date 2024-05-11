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
  "create:basin",
  "create:blaze_burner",
  "create:brass_casing",
  "create:brass_encased_shaft",
  "create:brass_encased_cogwheel",
  "create:clutch",
  "create:chute",
  "create:copper_casing",
  "create:cogwheel",
  "create:crushing_wheel",
  "create:depot",
  "create:display_board",
  "create:encased_chain_drive",
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

  /additional_lights:/
]

BlockEvents.modification(event => {
  BLOCKS_THAT_REQUIRE_TOOLS.map(id =>
    event.modify(id, block => {
      block.requiresTool = false
    })
  )
})