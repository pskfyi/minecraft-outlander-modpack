// priority: 0

const NATPROG_AXES = [
  "minecraft:golden_axe",
  "bettercopper:copper_axe",
  "aquaculture:neptunium_axe"
]

ServerEvents.tags('item', event => {
  global.items.remove.map(id => event.removeAllTagsFrom(id))
  NATPROG_AXES.map(id => event.add("natprog:axe", id))

  function addStripBarkTag(ids) {
    ids.map(id => event.add('outlander:strips_bark', id))
  }
  
  addStripBarkTag(event.get('natprog:axe').getObjectIds())
  addStripBarkTag(event.get('natprog:saw').getObjectIds())
  addStripBarkTag(event.get('forge:shears').getObjectIds())
})
