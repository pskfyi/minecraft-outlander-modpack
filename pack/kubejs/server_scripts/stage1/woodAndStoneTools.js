// priority: 10

// Array<Filter, From, To>
const INPUT_REPLACEMENTS = [
  [{ id: "tinyredstone:trimming_panel_cover" }, "wooden_axe", "flint"],
  [{ id: "tinyredstone:block_chopper" }, "wooden_axe", "flint"],
]

ServerEvents.recipes((event) => {
  INPUT_REPLACEMENTS.map(r => event.replaceInput(r[0], r[1], r[2]))
})
