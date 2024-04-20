// priority: 0

const REMOVED_RECIPES = [
  "bettercopper:copper_nugget_from_copper_ingot" 
]

// Array<Filter, From, To>
const INPUT_REPLACEMENTS = [
  [{ id: "farmersdelight:cooking_pot" }, "minecraft:wooden_shovel", "minecraft:stick"],
  [{ id: "tinyredstone:trimming_panel_cover" }, "minecraft:wooden_axe", "minecraft:flint"],
  [{ id: "tinyredstone:block_chopper" }, "minecraft:wooden_axe", "minecraft:flint"],
]

// Array<Filter, From, To>
const OUTPUT_REPLACEMENTS = [
  [{ output: "bettercopper:copper_nugget" }, "bettercopper:copper_nugget", "create:copper_nugget"],
]

ServerEvents.recipes((event) => {
  REMOVED_RECIPES.map(id => event.remove({ id: id }))

  INPUT_REPLACEMENTS.map(r => event.replaceInput(r[0], r[1], r[2]))
  OUTPUT_REPLACEMENTS.map(r => event.replaceOutput(r[0], r[1], r[2]))

  global.items.remove.map(id => event.remove({ id: id }))
})
