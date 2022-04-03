class Recipe {
    constructor(readonly recipe: string, readonly name: string, readonly imgurl: string, readonly use: boolean = true) {}
}

export const RECIPES_RAW = [
    // basic planks
    new Recipe('pppp pppp', 'Chest', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Chest_%28S%29_JE2.png'),
    new Recipe('pp pp pp ', 'Door', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0e/Oak_Door_JE8.png'),
    new Recipe('   p pppp', 'Boat', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f4/Oak_Boat_JE4_BE2.png'),
    new Recipe('   pp pp ', 'Crafting table', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Crafting_Table_JE4_BE3.png'),
    new Recipe('  p ppppp', 'Stairs', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a0/Oak_Stairs_%28N%29_JE7_BE6.png'),
    new Recipe('   pppppp', 'Trapdoor', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Oak_Trapdoor_%28D%29_JE1_BE1.png'),
    new Recipe('   p p p ', 'Bowl', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Bowl_JE2_BE2.png'),
    new Recipe('   pp    ', 'Pressure plate', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Oak_Pressure_Plate_JE5_BE2.png'),
    new Recipe('    p  p ', 'Stick', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png'),
    new Recipe('    p    ', 'Button', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/94/Oak_Button_%28S%29_JE4.png'),

    // sticks
    new Recipe('   psppsp', 'Fence', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f6/Oak_Fence_JE4_BE2.png'),
    new Recipe('   spssps', 'Fence gate', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Oak_Fence_Gate_JE4_BE2.png'),
    new Recipe('s sssss s', 'Ladder', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Ladder_%28texture%29_JE3_BE2.png'),
    new Recipe('pppppp s ', 'Sign', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ee/Oak_Sign_JE2_BE2.png'),

    // tools stick
    new Recipe(' i  s  s ', 'Shovel', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/aa/Iron_Shovel_JE3_BE2.png'),
    new Recipe('ii  s  s ', 'Hoe', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Iron_Hoe_JE2_BE2.png'),
    new Recipe('ii is  s ', 'Axe', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png'),
    new Recipe('iii s  s ', 'Pickaxe', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Iron_Pickaxe_JE3_BE2.png'),
    new Recipe(' i  i  s ', 'Sword', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png'),

    // tools non-stick
    new Recipe('   i i i ', 'Bucket', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Bucket_JE2_BE2.png'),
    new Recipe('    i i  ', 'Shears', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Shears_JE2_BE2.png'),
    new Recipe('pipppp p ', 'Shield', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c6/Shield_JE2_BE1.png'),

    // armor
    new Recipe('iiii i   ', 'Helmet', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Iron_Helmet_%28item%29_JE2_BE2.png'),
    new Recipe('i iiiiiii', 'Chestplate', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Iron_Chestplate_%28item%29_JE2_BE2.png'),
    new Recipe('iiii ii i', 'Leggings', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1c/Iron_Leggings_%28item%29_JE2_BE2.png'),
    new Recipe('   i ii i', 'Boots', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Iron_Boots_%28item%29_JE2_BE2.png'),

    // iron-based
    new Recipe('   i iiii', 'Minecart', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a5/Minecart_%28item%29_JE3_BE2.png'),
    new Recipe('i iisii i', 'Rail', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/14/Rail_%28texture%29_JE3_BE2.png'),
    new Recipe('   iiiiii', 'Iron bars', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8d/Iron_Bars_%28texture%29_JE2_BE2.png'),
    new Recipe('i ii iiii', 'Cauldron', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/65/Cauldron_%28item%29_JE2_BE2.png'),
    new Recipe('ii pp pp ', 'Smithing table', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/Smithing_Table_JE2_BE2.png'),

    // redstone
    new Recipe('rrrrrrrrr', 'Redstone block', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Block_of_Redstone_JE2_BE2.png'),
    new Recipe(' i iri i ', 'Compass', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1b/Compass_JE2.png'),
    new Recipe('pppprpppp', 'Note block', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png'),
    new Recipe('    r  s ', 'Redstone torch', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/21/Off_Redstone_Torch_%28texture%29_JE2_BE2.png'),

    // stone-based
    new Recipe('cccc cccc', 'Furnace', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Furnace_%28S%29_JE4.png', false),
    new Recipe('cccc ccrc', 'Dropper', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/Dropper_%28S%29_JE3.png', false),
    new Recipe('    s  c ', 'Lever', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Lever_%28texture%29_JE2_BE2.png', false),
    new Recipe('pppciccrc', 'Piston', 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5b/Piston_%28U%29_JE2_BE1.png', false),
]

export const RECIPES = RECIPES_RAW.filter(r => r.use)
export const WORDS = RECIPES.map(r => r.recipe)
export const VALID_GUESSES = RECIPES_RAW.map(r => r.recipe)
