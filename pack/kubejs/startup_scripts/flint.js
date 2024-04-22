// priority: 10


ItemEvents.modification(event => {
  const HATCHET = "natprog:flint_hatchet"
  const SAW = "natprog:flint_saw"
  const KNIFE = "farmersdelight:flint_knife"

  event.modify(HATCHET, item => {
    item.maxDamage = 32
  })
  event.modify(SAW, item => {
    item.maxDamage = 32
  })
  event.modify(KNIFE, item => {
    item.maxDamage = 32
  })
})
