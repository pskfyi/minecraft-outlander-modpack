// priority: 0

// REIEvents.removeCategories(event => {
//   event.yeet("minecraft:plugins/tag");
// })

// Adding custom
JEIAddedEvents.registerCategories((event) => {
  event.custom("natprog:knapping", (category) => {
    const guiHelper = category.jeiHelpers.guiHelper;
 
    category
      .title("Knapping")
      .background(guiHelper
        .createBlankDrawable(150, 100))
      .icon(guiHelper
        .createDrawableItemStack(Item.of("minecraft:flint")))
      .isRecipeHandled(() => true)
      .handleLookup((builder, recipe) => {
        builder
          .addSlot("INPUT", 67, 10)
          .addItemStack(Item.of(recipe.data.name))
          .setSlotName("input");
        builder
          .addInvisibleIngredients("OUTPUT")
          .addItemStack(Item.of(recipe.data.name));
      })
      .setDrawHandler((recipe, _recipeSlotsView, guiGraphics) => {
        guiGraphics
          .drawWordWrap(Client.font, Text.of(recipe.data.description), 2, 36, 146, 0);
      });
  });
});
 
JEIAddedEvents.registerRecipes((event) => {
  event
    .custom("natprog:knapping")
    .add({
      name: "minecraft:flint",
      description: "Hold pebbles in both hands, then hold right-click to clack them together. There is a chance that they will produce sharp flint."
    })
    .add({
      name: "natprog:bone_shard",
      description: "Hold flint in one hand and bone in the other, then hold right-click to clack them together. There is a chance that they will produce sharp bone shards."
    })
});

const HIDE_IN_REI = [
  "farmersdelight:rope",

  "quark:rope",
  "quark:chute",
  "quark:blackstone_furnace",
  "quark:deepslate_furnace",
  "quark:rope",
  "#quark:posts", // Everycompat issue fix
  "#quark:vertical_slab",

  /.+[\:\/]vertical_.+_planks/,

  "supplementaries:tater_in_a_jar",
  /^supplementaries:trapped_present/,
]

REIEvents.hide('item', event => {
  global.items.remove.map(id => event.hide(id))
  HIDE_IN_REI.map(id => event.hide(id))
})
