// priority: 10

ServerEvents.recipes((event) => {
  event.remove({ id: "natprog:crafting/flint_hatchet" })
  event.shaped(
    "natprog:flint_hatchet",
    [
      "FT",
      "FS"
    ],
    {
      F: "minecraft:flint",
      S: "minecraft:stick",
      T: "farmersdelight:straw",
    }
  )
})
