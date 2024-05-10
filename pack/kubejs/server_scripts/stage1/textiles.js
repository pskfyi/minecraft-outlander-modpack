// priority: 10

function sewingTableRecipe(tool, inputs, output, outputCount) {
  return {
    type: "sewingkit:sewing",
    materials: inputs.map(input => {
      const item = input[0]
      const count = input[1]
  
      return {
        count: count,
        ingredient: { item: item },
      }
    }),
    result: {
      item: output,
      count: outputCount
    },
    tool: tool,
  }
}

function sewingRecipe(inputs, output, outputCount) {
  if (!outputCount) outputCount = 1

  const tool = {
    type: "sewingkit:tool_ingredient",
    tool_type: "sewingkit_sew",
  }

  return sewingTableRecipe(tool, inputs, output, outputCount)
}

function shearsRecipe(inputs, output, outputCount) {
  if (!outputCount) outputCount = 1

  const tool = { tag: "forge:shears" }

  return sewingTableRecipe(tool, inputs, output, outputCount)
}

ServerEvents.recipes((event) => {
  const stick = "stick"
  const string = "string"

  event.remove({ id: "paraglider:cosmetic/paraglider" })

  global.colors.map((color) => {
    event.remove({ id: `${color}_carpet` });
    event.remove({ id: `${color}_banner` });
    event.remove({ id: `supplementaries:flags/flag_${color}` });

    const wool = `${color}_wool`
    const carpet = `${color}_carpet`
    const flag = `supplementaries:flag_${color}`
    const banner = `${color}_banner`

    event.custom(shearsRecipe([[wool, 1]], carpet, 4))
      .id(`outlander:${color}_carpet`);

    event.custom(sewingRecipe(
      [[stick, 1], [string, 2], [carpet, 2]],
      flag
    )).id(`outlander:${color}_flag`);

    event.custom(sewingRecipe(
      [[stick, 1], [string, 1], [flag, 1]],
      banner
    )).id(`outlander:${color}_banner`);
  });
});
