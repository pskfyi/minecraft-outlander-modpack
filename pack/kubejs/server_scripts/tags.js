ServerEvents.tags('item', event => {
  global.items.remove.map(id => event.removeAllTagsFrom(id))

  const hammers = event.get('exnihilosequentia:hammer').getObjectIds()
  hammers.map(id => event.add('natprog:considered_as_pickaxe', id))
})
