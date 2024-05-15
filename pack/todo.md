# TODO

## Temporarily Removed

- Cold Sweat, pending release of bugfix which impacts Supplementaries Sack items
  w/ Quark's renderer.
  - https://github.com/Momo-Softworks/Cold-Sweat/issues/267 (marked resolved,
    but issue persists)
- [Compost](https://www.curseforge.com/minecraft/mc-mods/compost) is broken w/
  REI: [Compost/#7](https://github.com/yurisuika/Compost/issues/7)

## Known Issues

- When hunger drops to 3 shanks, the player moves exceptionally slowly.
  - This is an intended feature of the current build of Parcool when using
    hunger as the stamina system. Undocumented but noted in the Curseforge
    comments section. There's an open request to make it configurable.
- Loot tables contain OP items, especially in villages. This warps the early
  game too much.
- Some Lychee interactions show Chinese characters which are not translateable
  via lang files. Opened https://github.com/Snownee/Lychee/issues/84 to
  document.

## Action Items

- Use
  [KubeJS default options handling](https://kubejs.com/wiki/tutorials/default-options)
  for keybinds.

## Mods Not Yet Ready

[Grappling Hook Mod](https://www.curseforge.com/minecraft/mc-mods/grappling-hook-mod)
is stuck on an old version of Forge and I'm not willing to downgrade for it. I'd
also prefer a much simpler implementation.

[Create Style Modded Compats](https://www.curseforge.com/minecraft/texture-packs/create-style-modded-compats)
is stuck on 1.19.3.

[Simply Ceramics](https://www.curseforge.com/minecraft/mc-mods/simply-ceramics)
needs to be slightly more proven before I dive in.

[Item Obliterator](https://www.curseforge.com/minecraft/mc-mods/item-obliterator)
currently does not perform and of the desired functions in the Forge release.
(Can't ban items throughout REI.)

Both
[Roughly Enough Loot Tables](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-loot-tables)
and
[Roughly Enough Trades](https://www.curseforge.com/minecraft/mc-mods/roughly-enough-trades)
are stuck on 1.19.x.

[HUD Compass] does not support
[Map Atlases](https://github.com/gigaherz/HudCompass/issues/14) or
[Curios](https://github.com/gigaherz/HudCompass/issues/21). I created
[data and resource packs](https://github.com/pskfyi/minecraft-compass-curio) to
test this.

## Mods Under Consideration

- Modpack Tools (Mostly new recipe/crafting mechanisms)
  - [Custom Fluid Mixin](https://www.curseforge.com/minecraft/mc-mods/custom-fluid-mixin)
    allows for fluid interactions like cobble generators
- Visuals & Branding
  - Possible alternative to Packmenu:
    https://legacy.curseforge.com/minecraft/mc-mods/its-the-little-things
  - https://www.curseforge.com/minecraft/mc-mods/custom-skyboxes
  - https://www.curseforge.com/minecraft/mc-mods/drippy-loading-screen
