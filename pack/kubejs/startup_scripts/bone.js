// priority: 10

ItemEvents.modification(event => {
  const SHARD = "natprog:bone_shard"
  const PICKAXE = "natprog:bone_pickaxe"
  const NEEDLE = "sewingkit:bone_sewing_needle"

  event.modify(PICKAXE, item => {
    item.maxDamage = 32

    item.setTier(tier => {
			tier.level = 0
		})
  })

  event.modify(NEEDLE, item => {
    item.maxDamage = 32
  })

  event.modify(SHARD, item => {
    item.maxDamage = 0
  })
})
