# Notes on Mod Configurations

## Aquaculture 2

### Worm Farm

The worm farm is extremely efficient and not configurable, turning a handfull of
seeds into almost as many worms. Since I want worms to be an ingredient in
Organic Compost, which I want to become very important, I don't want worms to be
too easy to obtain. The worm farm's recipe has been reworked to now cost worms
itself, which explains its efficiency. The initial worms can be obtained as
uncommon drops from sifting dirt.

## Better Copper

Most of the items have been removed. This is in the pack primarily so that
copper shovels, hoes, and picks can precede iron and serve as the first metal
tools.

## Block Runner

Configured all smooth, polished, brick, and tile blocks to be as fast as paved
dirt.

## Botany Pots

### Growth Speed

The role of this mod within this pack is to provide early game tech that leads
into automation. One of this pack's goals is that automation should be slow - it
should be churning away while the player is off exploring or tending to other
concerns. In the default configuration, most crops are harvestable every 1min or
2mins, meaning that a single weat seed can be harvested 20 times per day.
Compare to a vanilla plot of farmland with wheat, which is lucky to yield a
harvest every day and a half. In addition to speed, the pots add predictability,
convenience by being untramplable and self-replanting, and in the early midgame
they become trivially automateable.

For these reasons I have nerfed soils so that harvests are once per day by
default. Some crops have special soils which will double this rate. Rich Soil
from Farmers Delight quadruples the base rate, making it of central importance,
it has been made more complex to craft to balance against this.

### Soil Varieties

The great number of soil varieties and lack of tag-based recipes led to several
hundred JEI entries, making the recipe screen almost unusable and daunting. I
have opted to remove almost all soils to declutter this. Most of them were
functionally redundant and merely aesthetic, ex. being able to use any wood as a
soil for any fungus, and each pairing taking up a separate recipe entry.

Importantly, I have also removed the ability to till dirt in-pot and the ability
for farmland to be used as potted soil. Partly this was about decluttering, but
functionally only acted as a small idiot tax, penalizing players who did not
realize that this could be done by depriving them of a 5% efficiency bonus.

Now almost all crops support just 2 soils: vanilla Dirt, and Farmer's Delight
Rich Soil.

### Tiers

Due to clutter in JEI's crafting catalyst view (the items in the box on the left
side of a recipe screen) this mod outstayed its welcome almost immediately.
Additionally it makes no sense. This has instead been replanced by tweaking Rich
Soil from Farmer's Delight to act as the speed tier bottleneck.

It's possible that unique, magical soils will be added to represent additional
tiers.

(Note: Significant investigation was done to hide JEI catalysts. It's not
possible within REI. I made a request in the REI Discord and the author
immediately responded positively, so it's possible this issue will be resolved.)

## Cold Sweat

Added a Curios charm slot to hold the thermometer.

## Create, Create Vintage Improvements, and Quark

These are configured to remove their custom menu icons because I find them
cluttersome and distracting.

## Embeddium

- Disabled FPS display.

- Enabled Darkness Mode, set to Dark.

## Forge

Disabled the version check, which otherwise adds distraction to the landing page
and encourages players to update deps which is dangerous.

## FTB Ultimine

Configured to require tools, for better support of the Altered Progression
design pillar.

Lowered amount of blocks from 64 to 16. This quarter-stack size still feels like
a noticeable convenience without making the pack's slow automation processes
feel obsolete.

## Jade

Configured to hide mod names. This reduces visual clutter and promotes the
feeling of Integration that the pack is going for. It also removes an
omnipresent feeling of moddedness by not constantly reminding the player about
specific mods. Lastly it adds a small amount of mystery.

This is a rare setting and is likely to be polarizing.

## Map Altases

Configured to hide coords and biome names which IMO violate the vanilla
aesthetic, and to prevent the map from rotating with the player which I found
distracting and divergent from vanilla map behavior.

## Natural Progression

- Disabled the nagging popup that you don't have the right tool. It's on me to
  make sure pack players understand this, not a constant popup.

- Disabled the damage effect when trying to mine an unmineable block because it
  triggers at inappropriate times when playing with a trackpad.

- Removed the bone knife.

- Lowered bone pickaxe tool tier to match wood rather than stone tools,
  preventing it from mining iron and copper.

- Adjusted durability of all tools.

- Added custom JEI/REI integration for knapping, using KubeJS.

- Customized all tool recipes and added a table recipe for bone shards.

## Paragliders

Disabled everything except the glider itself (no worldgen, no stamina, no heart
containers) and turned down the speed by 40% to balance against the loss of the
stamina system.

## Parcool

TBD

## Quark

- Disabled emotes. They add many entries to the Controls screeen and cause
  clutter in the in-game talk GUI.
- Disabled Limestone in favor of Create's variant.
- Repurposed "Stury Stone" as "Sturdy Cobblestone" crafted from pebbles and used
  as the early precursor to Stone proper as well as a building material for the
  vanilla Furnace.

## REI

Using configuration to hide uncraftable items and items which the modpack
intends to treat as removed.

## Sewing Kit

- Removed the basic Sewing Station entirely in favor of its variant "Sewing
  Station with Drawers" which retains its inventory.
  - Renamed the variant to just "Sewing Station."

- Disabled all needles except bone and iron.

- Tweaked recipe for bone needle to allow use of knives rather than the file.

## Spice of Life: Carrot Edition

- Player starting health set exceptionally low - just 2 hearts. However, eating
  just 1 food meets the first milestone to unlock more hearts.
- Milestones grant 1 heart.
- There are enough milestones to get a double health bar, roughly every 10 foods
  eaten.
- All foods count, no matter how trivial to craft. (May be reconfigured only to
  count foods that restore 2-3+ pips.)

## Storage Drawers

### Upgrades

Upgrades are removed. This pack isn't super heavy on lategame automation and
isn't in urgent need of a robust storage management solution. I feel these
upgrade systems are clumsy and confusing, not fitting with the rest of the game,
and would prefer to remove them if they aren't necessary.

### Recipe Cost

With a Sawmill, each drawer or trim can be fashioned from a single log. No
microcrafting required.

## Supplementaries

- This version of the mod has a splash screen to warn about some items which
  were separated into a companion mod. I've configured this screen not to
  appear.
- Disabled trapped presents. I don't have a user for them in the pack and they
  add clutter in REI.

## Waystones

Enabled feature to force Waystones to spawn in villages because I love them and
I feel they support the Adventure, Convenience, and Integration design pillars.

## Vinery

Scrubbed out the flower box and flower pot items. The ones that Supplementaries
added are functionally superior.
