// priority: 10

const MAP = "minecraft:map"
const CARTOGRAPHY_TABLE = "minecraft:cartography_table"

ServerEvents.recipes((event) => {
  // Note: Map Atlas mod's recipe cannot be modified!

  event.remove({ id: MAP })
  event.remove({ id: CARTOGRAPHY_TABLE })

  event.shaped(
    MAP,
    [
      " D ",
      "DPD",
      " D ",
    ],
    {
      P: "minecraft:paper",
      D: "#forge:dyes",
    }
  )

  event.shaped(
    CARTOGRAPHY_TABLE,
    [
      "MM ",
      "PP ",
      "PP ",
    ],
    {
      M: MAP,
      P: "#minecraft:planks",
    }
  )
})
