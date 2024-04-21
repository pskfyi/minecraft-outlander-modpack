// priority: 0

// Most tag edits are in sub-files within this directory.

ServerEvents.tags('item', event => {
  global.items.remove.map(id => event.removeAllTagsFrom(id))
})
