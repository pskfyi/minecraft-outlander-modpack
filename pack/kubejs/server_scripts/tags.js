ServerEvents.tags('item', event => {
  global.items.remove.map(id => event.removeAllTagsFrom(id))
})
