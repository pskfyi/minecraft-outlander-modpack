// priority: 10

const STRING = "minecraft:string"
const CANVAS = "farmersdelight:canvas"
const STRAW = "farmersdelight:straw"
const ROPE = "farmersdelight:rope"
const SACK = "supplementaries:sack"
const FLAX = "supplementaries:flax"
const LOOM = "minecraft:loom"

ServerEvents.recipes((event) => {
  // TODO: Pick 1 rope and get all recipes to use it.
  // TODO: Canvas should be craftable at a sewing table.

  // These recipes have the same ID as the items they produce.
  event.remove({ id: ROPE })
  event.remove({ id: SACK })
  event.remove({ id: LOOM })

  event.shaped( // TODO: Remove this when changing Canvas crafting.
    CANVAS,
    [
      "FF ",
      "FF ",
    ],
    {
      F: FLAX,
    }
  )

  event.shaped(
    LOOM,
    [
      "SS ",
      "PP ",
      "PP ",
    ],
    {
      S: STRING,
      P: "#minecraft:planks",
    }
  )

  event.shaped(
    Item.of(ROPE, 3),
    [
      "TT ",
      "TT ",
      "TT ",
    ],
    {
      T: STRAW,
    }
  )

  event.shaped(
    STRING,
    [
      "T  ",
      "T  ",
      "T  ",
    ],
    {
      T: STRAW,
    }
  )

  event.shaped(
    SACK,
    [
      "CSC",
      "C C",
      "CCC",
    ],
    {
      C: CANVAS,
      S: STRING,
    }
  )
})