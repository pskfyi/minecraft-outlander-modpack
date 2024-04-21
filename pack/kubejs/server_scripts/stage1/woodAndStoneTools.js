// priority: 10

// Array<Filter, From, To>
const INPUT_REPLACEMENTS = [
  [{ id: "farmersdelight:cooking_pot" }, "minecraft:wooden_shovel", "minecraft:stick"],
  [{ id: "tinyredstone:trimming_panel_cover" }, "minecraft:wooden_axe", "minecraft:flint"],
  [{ id: "tinyredstone:block_chopper" }, "minecraft:wooden_axe", "minecraft:flint"],
]

ServerEvents.recipes((event) => {
  INPUT_REPLACEMENTS.map(r => event.replaceInput(r[0], r[1], r[2]))
})
