// priority: 10

ServerEvents.recipes((event) => {
  event.remove({ id: "minecraft:campfire" })

  event.shaped(
    "minecraft:campfire",
    [
      " S ",
      "STS",
      "LLL",
    ],
    {
      L: "#minecraft:logs",
      S: "minecraft:stick",
      T: "farmersdelight:straw",
    }
  )
})
