const BLOCKS_THAT_REQUIRE_TOOLS = [
  "minecraft:furnace",
  
  "create:cogwheel",
  "create:large_cogwheel",
  "create:andesite_casing",
  "create:brass_casing",
  "create:gearbox",
  "create:vertical_gearbox",
  "create:clutch",
  "create:encased_chain_drive",
  "create:andesite_encased_shaft",
  "create:brass_encased_shaft",
  "create:andesite_encased_cogwheel",
  "create:brass_encased_cogwheel",
  "create:mechanical_press",
  "create:mechanical_mixer",
  "create:mechanical_saw",
  "create:mechanical_drill",
  "create:mechanical_crafter",
  "create:basin",
  "create:blaze_burner",
  "create:depot",
  "create:weighted_ejector",
  "create:chute",
  "create:smart_chute",
  "create:display_board",

  "createsifter:sifter",
]

BlockEvents.modification(event => {
  BLOCKS_THAT_REQUIRE_TOOLS.map(id =>
    event.modify(id, block => {
      block.requiresTool = false
    })
  )
})