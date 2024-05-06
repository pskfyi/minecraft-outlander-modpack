// priority: 10

function registerSawmillRecipe(event, input, output, partialID) {
  event.recipes.sawmillWoodcutting(output, input)
    .id(`outlander:sawmill/${partialID}`)
}

function tag(wood, variant) {
  return variant === "quark"
    ? `#quark:${wood}_logs`
    : variant === "fungi"
    ? `#minecraft:${wood}_stems`
    : `#minecraft:${wood}_logs`
}

function registerCabinetRecipe(event, wood, variant) {
  const partialID = `${wood}_cabinet`
  const output = variant === "quark"
    ? `everycomp:fd/quark/${partialID}`
    : `farmersdelight:${partialID}`

  registerSawmillRecipe(event, tag(wood, variant), output, partialID)
}

function registerStorageDrawerRecipe(event, wood, itemType, variant) {
  const partialID = `${wood}_${itemType}`
  const output = variant === "quark"
    ? `everycomp:sd/quark/${partialID}`
    : `storagedrawers:${partialID}`

  registerSawmillRecipe(event, tag(wood, variant), output, partialID)
}

const SAWMILL_WOODS = {
  minecraft: [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "cherry",
    "dark_oak",
    "mangrove"
  ],
  minecraftFungi: [
    "crimson",
    "warped",
  ],
  quark: [
    "ancient",
    "azalea",
    "blossom"
  ]
}

const NO_STORAGE_DRAWERS = ["cherry", "mangrove"]

ServerEvents.recipes((event) => {
  SAWMILL_WOODS.minecraft.map(wood => {
    registerCabinetRecipe(event, wood)
    if (NO_STORAGE_DRAWERS.includes(wood)) return;
    registerStorageDrawerRecipe(event, wood, "trim")
    registerStorageDrawerRecipe(event, wood, "full_drawers_1")
    registerStorageDrawerRecipe(event, wood, "full_drawers_2")
    registerStorageDrawerRecipe(event, wood, "full_drawers_4")
  })

  SAWMILL_WOODS.minecraftFungi.map(wood => {
    registerCabinetRecipe(event, wood, "fungi")
    registerStorageDrawerRecipe(event, wood, "trim", "fungi")
    registerStorageDrawerRecipe(event, wood, "full_drawers_1", "fungi")
    registerStorageDrawerRecipe(event, wood, "full_drawers_2", "fungi")
    registerStorageDrawerRecipe(event, wood, "full_drawers_4", "fungi")
  })

  SAWMILL_WOODS.quark.map(wood => {
    registerCabinetRecipe(event, wood, "quark")
    registerStorageDrawerRecipe(event, wood, "trim", "quark")
    registerStorageDrawerRecipe(event, wood, "full_drawers_1", "quark")
    registerStorageDrawerRecipe(event, wood, "full_drawers_2", "quark")
    registerStorageDrawerRecipe(event, wood, "full_drawers_4", "quark")
  })

  for (const mod in STRIPPABLE_WOODS) {
    STRIPPABLE_WOODS[mod].map(wood => {
      const log = `${mod}:${wood}_log`
      const strippedLog = `${mod}:stripped_${wood}_log`

      if (mod === "minecraft") {
        // remove builtin natprog stripping recipes,
        // which are erroneously under the minecraft namespace
        event.remove({ id: `minecraft:saw/${wood}_wood_to_stripped_${wood}_wood` })
        event.remove({ id: `minecraft:saw/${wood}_log_to_stripped_${wood}_log` })
      }
        
      event.custom(stripAndDropBarkRecipe(log, strippedLog))
      event.custom(stripInCraftingGridRecipe(log, strippedLog))
      event.custom(stripInCraftingGridRecipe(
        `${mod}:${wood}_wood`,
        `${mod}:stripped_${wood}_wood`
      ))
    })
  }
})
