// priority: 10

ServerEvents.recipes((event) => {
  const AXE = "#natprog:axe"
  const SAW = "#natprog:saw"

  function rm(id) {
    event.remove({ id: id })
  }

  function standardizePlankRecipes(mod, wood) {
    const PLANKS = `${mod}:${wood}_planks`
    const STRIPPED_LOG = `${mod}:stripped_${wood}_log`
    const LOG = `${mod}:${wood}_log`
    const WOOD = `${mod}:${wood}_wood`
    const STRIPPED_WOOD = `${mod}:stripped_${wood}_wood`
    const STRIPPED_LOGLIKE = [STRIPPED_LOG, STRIPPED_WOOD]

    rm(PLANKS)
    rm(`${mod}:axe/stripped_${wood}_wood_to_${wood}_planks`)
    rm(`${mod}:axe/stripped_${wood}_log_to_${wood}_planks`)
    rm(`${mod}:saw/stripped_${wood}_wood_to_${wood}_planks`)

    event.shapeless(Item.of(PLANKS, 2), [AXE, STRIPPED_LOGLIKE])
      .damageIngredient(AXE)
      .id(`outlander:${wood}_planks_axe_manual_only`)

    event.shapeless(Item.of(PLANKS, 3), [SAW, STRIPPED_LOGLIKE])
      .damageIngredient(SAW)
      .id(`outlander:${wood}_planks_shapeless_saw_manual_only`)
  
    event.shaped(
      Item.of(PLANKS, 8),
      ["S", "L", "L"],
      { S: SAW, L: STRIPPED_LOGLIKE }
    ).damageIngredient(SAW)
    .id(`outlander:${wood}_planks_shaped_saw_manual_only`)

    event.recipes.sawmillWoodcutting(
      Item.of(PLANKS, 5),
      [LOG, WOOD, STRIPPED_LOG, STRIPPED_WOOD]
    )
  }

  function createCuttingRecipes(mod, wood) {
    const PLANKS = `${mod}:${wood}_planks`
    const STRIPPED_LOG = `${mod}:stripped_${wood}_log`
    const LOG = `${mod}:${wood}_log`
    const WOOD = `${mod}:${wood}_wood`
    const STRIPPED_WOOD = `${mod}:stripped_${wood}_wood`

    event.recipes.createCutting(
      Item.of(PLANKS, 6),
      STRIPPED_LOG
    )
      .processingTime(30)
      .id(`outlander:create/stripped_log_to_${wood}_planks`)
      
    event.recipes.createCutting(
      Item.of(PLANKS, 6),
      STRIPPED_WOOD
    )
      .processingTime(30)
      .id(`outlander:create/stripped_wood_to_${wood}_planks`)

    event.recipes.createCutting(STRIPPED_LOG, LOG)
      .processingTime(30)
      .id(`outlander:create/strip_${wood}_log`)

    event.recipes.createCutting(STRIPPED_WOOD, WOOD)
      .processingTime(30)
      .id(`outlander:create/strip_${wood}_wood`)
  }

  global.items.planks.minecraft.map(wood => {
    standardizePlankRecipes("minecraft", wood)
  })

  global.items.planks.quark.map(wood => {
    rm(`quark:world/crafting/woodsets/${wood}/planks`)
    standardizePlankRecipes("quark", wood)
    createCuttingRecipes("quark", wood)
  })

  // TODO: Handle non-standard woods
  // TODO: Handle Aquaculture driftwood
  // TODO: Disable Quark recipes Easy Sticks, Easy Hopper
})
