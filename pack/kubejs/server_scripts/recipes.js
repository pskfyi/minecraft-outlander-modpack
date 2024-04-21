// priority: 10

// Most recipe edits are in sub-files within this directory.

ServerEvents.recipes((event) => {
  global.items.remove.map(id => event.remove({ id: id }))
})
