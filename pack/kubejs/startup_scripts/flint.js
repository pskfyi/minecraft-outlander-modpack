// priority: 10

ItemEvents.modification(event => {
  const HATCHET = "natprog:flint_hatchet"
  const TROWEL = "all_the_flint_tools:flintshovel"
  const HAND_HOE = "all_the_flint_tools:flinthoe"
  const SAW = "natprog:flint_saw"
  const KNIFE = "farmersdelight:flint_knife"

  event.modify(HATCHET, item => {
    item.maxDamage = 32
  })
  event.modify(SAW, item => {
    item.maxDamage = 32
  })
  event.modify(KNIFE, item => {
    item.maxDamage = 16
  })
  event.modify(TROWEL, item => {
    item.maxDamage = 32
  })
  event.modify(HAND_HOE, item => {
    item.maxDamage = 32
  })
})
