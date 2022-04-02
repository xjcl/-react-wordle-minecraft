class Recipe {
    // TODO: add image URL
    constructor(readonly recipe: string, readonly name: string, readonly use: boolean = true) {}
}

const RECIPES_RAW = [
    // basic planks
    new Recipe('pppp pppp', 'Chest'),
    new Recipe('pp pp pp ', 'Door'),
    new Recipe('   p pppp', 'Boat'),
    new Recipe('   pp pp ', 'Crafting table'),  // TODO: which corner
    new Recipe('  p ppppp', 'Stairs'),
    new Recipe('pppp pppp', 'Trapdoor'),
    new Recipe('   p p p ', 'Bowl'),
    new Recipe('   pp    ', 'Pressure plate'),
    new Recipe('    p    ', 'Button'),

    // sticks
    new Recipe('   psppsp', 'Fence'),
    new Recipe('   spssps', 'Fence gate'),
    new Recipe('s sssss s', 'Ladder'),
    new Recipe('pppppp s ', 'Sign'),


    // tools stick
    new Recipe(' i  s  s ', 'Shovel'),
    new Recipe('ii  s  s ', 'Hoe'),
    new Recipe('ii is  s ', 'Axe'),
    new Recipe('iii s  s ', 'Pickaxe'),
    new Recipe(' i  i  s ', 'Sword'),

    // tools non-stick
    new Recipe(' i  i  s ', 'Bucket'),
    new Recipe('    i i  ', 'Shears'),
    new Recipe('pipppp p ', 'Shield'),


    // armor
    new Recipe('iiii i   ', 'Helmet'),
    new Recipe('i iiiiiii', 'Chestplate'),
    new Recipe('iiii ii i', 'Leggings'),
    new Recipe('   i ii i', 'Boots'),


    // redstone
    new Recipe('rrrrrrrrr', 'Redstone block', false),
    new Recipe(' i iri i ', 'Compass'),
    new Recipe('pppprpppp', 'Note block'),
    new Recipe('    r  s ', 'Redstone torch'),
    new Recipe('pppciccrc', 'Piston', false),


    // iron-based
    new Recipe('   i iiii', 'Minecart'),
    new Recipe('i iisii i', 'Rails'),
    new Recipe('   iiiiii', 'Iron bars'),
    new Recipe('i ii iiii', 'Cauldron'),
    new Recipe('ii pp pp ', 'Smithing table'),

    // stone-based
    new Recipe('cccc cccc', 'Furnace', false),
    new Recipe('cccc ccrc', 'Dropper', false),
    new Recipe('    s  c ', 'Lever', false),
]

export const RECIPES = RECIPES_RAW.filter(r => r.use)
export const WORDS = RECIPES.map(r => r.recipe)
export const VALID_GUESSES = RECIPES_RAW.map(r => r.recipe)

