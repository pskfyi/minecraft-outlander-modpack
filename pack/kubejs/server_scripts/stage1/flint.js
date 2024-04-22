// priority: 10

// See startup script that alters durability of flint items

ServerEvents.recipes((event) => {
  const FLINT = "minecraft:flint"
  const STICK = "minecraft:stick"
  const STRAW = "farmersdelight:straw"
  const HATCHET = "natprog:flint_hatchet"

  event.remove({ id: "natprog:crafting/flint_hatchet" })
  event.shaped(
    HATCHET,
    [
      "FT",
      "FS"
    ],
    {
      F: FLINT,
      S: STICK,
      T: STRAW,
    }
  )
})
