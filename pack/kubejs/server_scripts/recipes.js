// priority: 0

// Array<Filter, From, To>
const REPLACEMENTS = [
  [{ id: "farmersdelight:cooking_pot" }, "minecraft:wooden_shovel", "minecraft:stick"],
  [{ id: "tinyredstone:trimming_panel_cover" }, "minecraft:wooden_axe", "minecraft:flint"],
  [{ id: "tinyredstone:block_chopper" }, "minecraft:wooden_axe", "minecraft:flint"],
]

ServerEvents.recipes((event) => {
  global.items.remove.map(id => event.remove({ id: id }))

  REPLACEMENTS.map(r => event.replaceInput(r[0], r[1], r[2]))

  event.remove("exnihilosequentia:ens_stone_hammer")
  event.shaped(
    'exnihilosequentia:stone_hammer',
    [
      ' T ',
      ' ST',
      'S  '
    ],
    {
      S: 'minecraft:stick',
      T: ['#forge:stone','#forge:cobblestone']
    }
  )
})
