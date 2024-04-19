// priority: 0

// REIEvents.removeCategories(event => {
//   event.yeet("minecraft:plugins/tag");
// })

REIEvents.hide('item', event => {
  global.items.remove.map(id => event.hide(id))
})
