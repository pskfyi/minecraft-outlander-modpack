# Design

## Game Loop

```mermaid
flowchart LR
    A(Explore) --> B(Gather)
    B --> C(Craft)
    C -->D(Advance)
    D --> A
```

## Pillars

### 1. French Vanilla

The themes and aesthetic of the pack should remain familiar and well-integrated
with the base game.

- Tech level should not exceed the
  [First Industrial Revolution](https://en.wikipedia.org/wiki/Industrial_Revolution)
  except through fantastical means such as redstone and ender pearls.

- No overhauls to the core look and feel of the vanilla game. No bundled
  shaders, audio overhauls, etc. Only vanilla-esque texture packs should be
  considered.

- Strong preference for environmental interaction in lieu of GUIs.

### 2. Altered Progression

Like a Skyblock pack, the pack should alter recipes and add mechanics which
alter the standard flow of advancement.

- This is a quest-driven pack with stages.

- Stages should be gated by resources with unusual means of acquisition.

- The early game is slower and more difficult to encourage caution and
  engagement, and to nudge players into settling down.

### 3. Adventure

Exploration, survival, and to a lesser extent combat, should all be accentuated.

- New structures, biomes, crops, and animals.

  - Materials gathered from these sources should facilitate new recipes. This
    connects exploration, gathering, crafting, and advancement, forming the core
    game loop.

- Enhanced danger and limitations.

- Collection mechanics to make every new item worthwhile.

### 4. Settlement

To complement the focus on Adventure, there should be a corresponding focus on
developing a compelling home base to return to between expeditions.

- Aesthetic customization options should be plentiful.

- Bases should be places to construct new crafting stations and large machines,
  which would otherwise be too numerous and cumbersome to transport. The
  machines and the recipes they facilitate require materials which the player
  will incrementally gain access to, making them a constant touch point.

- Slow automation mechanics should provide rewarding returns on time investment
  while encouraging players to set-it-and-forget-it and explore while their
  machines churn away.

### 5. Integration

As much as it makes sense, mods should be integrated with one another. This will
involve both mods which have built-in integrations and modded recipes to create
integrations.

### 6. Convenience

Except when another design pillar requires it, the pack and progress within it
should as much as possible reduce tedium and grind, and should provide helpful
shortcuts for common tasks. The pack should respect the player's time.

## Features

These hook into more than one pillar.

### Expanded Travel Options

Arguably the biggest enhancement to the moment-to-moment gameplay. Hooks into
Adventure and Convenience.

### Expanded Agriculture

As new biomes add new plants to gather and animals to tame, they create new
options for farming, husbandry, and cooking. Connects Adventure and Settlement.

### Expanded Villages

Villages are both places to uncover and places to call home, bridging Adventure
and Settlement. They are also key Integration points in the modding scene.

## Standpoints

### Magic

I evaluated every major magic mod for 1.20.1 and found that none were suitable
for this pack. Most add new GUI elements that don't meet my french vanilla
requirement. The only two outliers are Hexerei which isn't on this version yet,
and Mana & Artifice which wouldn't run. Here are my slightly more detailed
notes:

<details>
<summary>Hide/Show Notes</summary>

#### Not Available

- Hexerei

### Rejected

- Ars Nouveau
  - Adds new HUD elements
  - Radically non-Vanilla GUIs
- Embers Rekindled
  - Too tech-y
- Forcecraft
  - Too tech-y
- Nature's Aura
  - Adds new HUD elements
  - Too tech-y
- Totemic
  - Noisy
  - Narrow scope
  - Adds new HUD elements
  - Art style is not French Vanilla
- ForceCraft
  - Too tech-y, and too high-tech
- Biomancy
  - Too creepy for me
  - Too evil
  - Several redundant features
- Primal Magic
  - Far too much stuff
  - Undesirable worldgen
  - Art style is not French Vanilla
- Forbidden and Arcanus
  - Undesirable worldgen
  - Unfocused
  - Excessive dependencies
  - Underdocumented
- Eidolon: Repraised
  - Too evil
  - Unfinished
- Theurgy
  - Radically non-Vanilla GUI
  - GUI-driven learning
- Occultism
  - Too evil
- Rune Craft
  - Grindy
  - Too disconnected from core gameplay
  - Undesirable worldgen

#### Didn't Work

- Mana and Artifice

</details>

Rather than leaning on one of these, I would prefer to use many Lychee recipes
to simulate environmental magic.
