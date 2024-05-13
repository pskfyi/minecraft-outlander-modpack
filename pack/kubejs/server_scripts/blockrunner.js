// priority: 0

// Block Runner makes some blocks faster or slower to run on.
// It's easier to configure this with tags, which need to be applied to blocks.

ServerEvents.tags('block', event => {
  // function tagRegex(pattern, tag) {
  //   Ingredient.of(pattern).forEach(stone => {
  //     if (!blacklist.test(stone)) event.add('c:stone', stone)
  //   })
  // }

  event.add('outlander:smooth_blocks', /smooth/)
  event.add('outlander:polished_blocks', /polished/)
  event.add('outlander:brick_blocks', /brick/)
  event.add('outlander:tile_blocks', /tile/)
})
