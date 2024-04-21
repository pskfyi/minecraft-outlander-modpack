// priority: 10

ServerEvents.recipes((event) => {
  // Use Create copper nuggets throughout.
  event.remove({ id: "bettercopper:copper_nugget_from_copper_ingot" })

  event.replaceOutput(
    { output: "bettercopper:copper_nugget" },
    "bettercopper:copper_nugget",
    "create:copper_nugget"
  )
})
