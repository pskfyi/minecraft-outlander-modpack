ClientEvents.lang("en_us", (e) => {
  const rename = (item, newName) =>
    e.add(Item.of(item).item.getDescriptionId(), newName);

  rename("clayworks:kiln", "Clay Oven");
});
