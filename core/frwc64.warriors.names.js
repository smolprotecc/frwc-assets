frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}
frwc64.warriors = typeof frwc64.warriors != 'undefined' ? frwc64.warriors : {}

frwc64.warriors.names = {
    splitter: function(input) {
      let prefixes = this.prefixes
      let suffixes = this.suffixes
      let modify = input
      let prefix = ''
      let name   = ''
      let suffix = ''

      for (var i = 0; i < prefixes.length; i++) {
        let pattern = new RegExp('^' + prefixes[i] + '')
        if (modify.match(pattern)) {
          prefix = prefixes[i]
          modify = modify.replace(prefixes[i], '')
          break
        }
      }
      for (var i = 0; i < suffixes.length; i++) {
        let pattern = new RegExp('' + suffixes[i] + '$')
        if (modify.match(pattern)) {
          suffix = suffixes[i]
          modify = modify.replace(suffixes[i], '')
          break
        }
      }
      name = modify.trim()
      return {prefix: prefix, name: name, suffix: suffix, fullname: input} 
    },
    uniques: [
      'Achilles',
      'Atalanta',
      'Austringer',
      'Barbarella',
      'Beowulf',
      'Gligamesh',
      'Guardian Michael',
      'Heracles',
      'Lethal Deadly Venom',
      'Persefoni',
      'Roy G',
      'Soul Reaper',
      'The Emissary',
      'The Green Knight',
      'Wilson Wolf Master',
    ],
    prefixes: [
      'Ace',
      'Adventurer',
      'Amputator',
      'Anarchist',
      'Annihilator',
      'Antagonist',
      'Antihero',
      'Apocalypse',
      'Arbiter',
      'Archer',
      'Armageddon',
      'Ass',
      'Assailant',
      'Assasinator',
      'Assassin',
      'Assaulter',
      'Atomizer',
      'Attacker',
      'Axe',
      'Bandit',
      'Barbecuer',
      'Barrager',
      'Basher',
      'Battler',
      'Beast',
      'Beater',
      'Beheader',
      'Belligerent',
      'Bifurcator',
      'Blade',
      'Blaster',
      'Blazer',
      'Bloodbath',
      'Bloodletter',
      'Bludgeoner',
      'Bomb',
      'Boom',
      'Bow',
      'Boy',
      'Breaker',
      'Broiler',
      'Bruiser',
      'Burner',
      'Buster',
      'Cad',
      'Calamity',
      'Cap',
      'Carver',
      'Castigater',
      'Cataclysm',
      'Cauterizer',
      'Chainsaw',
      'Champion',
      'Chaos',
      'Charlatan',
      'Chastiser',
      'Chisler',
      'Chopper',
      'Cleaver',
      'Clobberer',
      'Clubber',
      'Combatant',
      'Combustor',
      'Conflagrator',
      'Conqueror',
      'Contaminator',
      'Contender',
      'Cooker',
      'Crasher',
      'Creeper',
      'Cremator',
      'Crook',
      'Crumbler',
      'Cruncher',
      'Crusher',
      'Cutter',
      'Danger',
      'Daredevil',
      'Deadeye',
      'Death',
      'Debilitator',
      'Decimator',
      'Deep',
      'Defeater',
      'Defender',
      'Delinquent',
      'Demolisher',
      'Despoiler',
      'Destroyer',
      'Detonator',
      'Devastator',
      'Devourer',
      'Dicer',
      'Dimwit',
      'Disintegrator',
      'Dismantler',
      'Dispatcher',
      'Dissector',
      'Dissolver',
      'Divider',
      'Dodger',
      'Doom',
      'Double-Crosser',
      'Dread',
      'Dueler',
      'Ear',
      'Eidolon',
      'Eliminator',
      'Enkindler',
      'Eradicator',
      'Executor',
      'Exploder',
      'Explorer',
      'Exterminator',
      'Fencer',
      'Fiend',
      'Flagellator',
      'Flame',
      'Flattener',
      'Flogger',
      'Fortune-Hunter',
      'Fracturer',
      'Fragmenter',
      'Fryer',
      'Gambler',
      'Granulator',
      'Grifter',
      'Griller',
      'Grinder',
      'Guardian',
      'Guillotiner',
      'Hacker',
      'Hammer',
      'Heater',
      'Hellraiser',
      'Hero',
      'Hoodlum',
      'Horror',
      'Hotshot',
      'Hunter',
      'Igniter',
      'Immolator',
      'Impaler',
      'Incinerator',
      'Invader',
      'Jackhammer',
      'Kablooey',
      'Killer',
      'Knave',
      'Knockout',
      'Lacerator',
      'Lady',
      'Lasher',
      'Leveler',
      'Lightbearer',
      'Liquidator',
      'Looter',
      'Lopper',
      'Lumper',
      'Madcap',
      'Maimer',
      'Malefactor',
      'Mangler',
      'Marauder',
      'Masher',
      'Master',
      'Mauler',
      'Menace',
      'Mercenary',
      'Mincer',
      'Mischief',
      'Miscreant',
      'Monk',
      'Musician',
      'Mutilater',
      'Nailer',
      'Neutralizer',
      'Nuker',
      'Nullifier',
      'Obliterator',
      'Opponent',
      'Outlaw',
      'Paragon',
      'Peacemaker',
      'Piercer',
      'Plunderer',
      'Poker',
      'Pounder',
      'Protector',
      'Provocateur',
      'Pulverizer',
      'Punisher',
      'Puppet',
      'Raider',
      'Ranger',
      'Rapscallion',
      'Rascal',
      'Rat',
      'Ravager',
      'Razer',
      'Render',
      'Reprobate',
      'Ripper',
      'Rival',
      'Roaster',
      'Robber',
      'Rogue',
      'Romantic',
      'Ruffian',
      'Ruin',
      'Savior',
      'Scalawag',
      'Scalder',
      'Scissor',
      'Scorcher',
      'Scoundrel',
      'Shadow',
      'Shark',
      'Sharpshooter',
      'Shatterer',
      'Shaver',
      'Slasher',
      'Slaughterer',
      'Slayer',
      'Slicer',
      'Synthesizer',
      'Smasher',
      'Sniper',
      'Sorrow',
      'Spanker',
      'Speaker',
      'Stabber',
      'Stalker',
      'Stinger',
      'Stormer',
      'Straight',
      'Striker',
      'Swashbuckler',
      'Swindler',
      'Sword',
      'Tamer',
      'Terror',
      'Thief',
      'Thrasher',
      'Toaster',
      'Torcher',
      'Tormenter',
      'Torturer',
      'Transgressor',
      'Trasher',
      'Traveler',
      'Trimmer',
      'Truncator',
      'Undoer',
      'Vagabond',
      'Vanquisher',
      'Vaporizer',
      'Vengeance',
      'Villain',
      'Vindicator',
      'Violator',
      'Voyager',
      'Wanderer',
      'Waster',
      'Whipper',
      'Wounder',
      'Wrecker',
    ],
    postfixes: [
      'the Beautiful Baboon',
      'the Conqueror',
      'the Degenerate',
      'The Graceful', // T
      'the Handsome Hyena',
      'the Joyous',
      'the Magnificent',
      'The Majestic', // T
      'The Mischievous', // T
      'the Pulverizing',
      'the Raptor Boy',
      'The Resourceful', // T
      'the Righteous',
      'the Sailor',
      'The Sassy', // T
      'The Seeing', // T
    ],
    suffixes: [
      // unclassed
      'for Freedom',
      'the Rune Raiders', // Fixed in main collection?
      'or Scalawags', // Typo?
      'in a Birthday Suit',
      // of ###
      'of Arcadia',
      'of Area 71',
      "of Atlanta's Pool",
      'of Atlantis',
      'of Avalon',
      'of Bandits',
      'of Bears',
      'of Beasts',
      'of Bees',
      'of Birds',
      'of Blades',
      'of Blood',
      'of Boulders',
      'of Brigands',
      'of Brown Wizards',
      'of Brown-Hat Wizards',
      'of Bugbears',
      'of Carnal Delights',
      'of Cataclysm',
      'of Ceremonies',
      'of Chains',
      'of Chaos',
      'of Chickens',
      'of Concrete',
      'of Courage',
      'of Crystals',
      'of Death',
      'of Deer',
      'of Demons',
      'of Destiny',
      'of Devils',
      'of Dirt',
      'of Dolphins',
      'of Domination',
      'of Doomsday',
      'of Dragons',
      'of Dusk',
      'of Eagles',
      'of Fire',
      'of First Blood',
      'of Fish',
      'of Flowers',
      'of Frogs',
      'of Furgnomes',
      'of Giants',
      'of Glory',
      'of Goblin Town',
      'of Goblins',
      'of Gross Gorge',
      'of Honor',
      'of Honor Mountain',
      'of Implings',
      'of Imps',
      'of Islands',
      'of Joy',
      'of Just Cause',
      'of Kelpies',
      'of Killers',
      'of Kink',
      'of Knights',
      'of Kobolds',
      'of Komodi',
      'of Leaves',
      'of Leviathan',
      'of Liches',
      'of Light',
      'of Lions',
      'of Lizards',
      'of Machines',
      'of Magic',
      'of Merfolk',
      'of Monsters',
      'of Mount Titan',
      'of Muscle Mountain',
      'of Nasty Town',
      'of Nature',
      'of Nightmare Paradise',
      'of Nothing',
      'of Octopus',
      'of Oni',
      'of Owls',
      'of Pain',
      'of Pandemonium',
      'of Penguins',
      'of Poisons',
      'of Power',
      'of Rainbows',
      'of Rats',
      'of Riffraff',
      'of Robots',
      'of Rogues',
      'of Ruffians',
      'of Runes',
      'of Scallywags',
      'of Scoundrels',
      'of Seven',
      'of Shadows',
      'of Sharks',
      'of Sheep',
      'of Snakes',
      'of Sorrow',
      'of Sound',
      'of Southtown',
      'of Tartarus',
      'of Thieves',
      'of Thunder Mountain',
      'of Tigers',
      'of Titans',
      'of Torment Manor',
      'of Turtles',
      'of Unicorns',
      'of Volcanoes',
      'of Warlocks',
      'of Wizards',
      'of Worlds',
      'of X',
      'of Xanadu',
      'of Zero',
      'of all that is Evil',
      'of all that is Holy',
      // of the ###
      'of the Alley',
      'of the Apocalypse',
      'of the Arc',
      'of the Archipelago',
      'of the Arena',
      'of the Atoll',
      'of the Back Alley',
      'of the Bamboo Forest',
      'of the Baobabs',
      'of the Battlefront',
      'of the Bay',
      'of the Berg',
      'of the Biv',
      'of the Bloodfalls',
      'of the Blue',
      'of the Brine',
      'of the Cage',
      'of the Canyon',
      'of the Capital',
      'of the Cave by the Beach',
      'of the Caves',
      'of the Chasm',
      'of the Chimera',
      'of the Citadel',
      'of the City',
      'of the Clouds',
      'of the Cockatrice',
      'of the Coliseum',
      'of the Crossroad',
      'of the Dark Sentinel',
      'of the Dawn',
      'of the Deep',
      'of the Delta',
      'of the Desert',
      'of the Disco',
      'of the Ditch',
      'of the Docks',
      'of the Dojo',
      'of the Downs',
      'of the Dread Tower',
      'of the Duck Alliance',
      'of the Earth',
      'of the East',
      'of the Elysian Fields',
      'of the Falls',
      'of the Fey',
      'of the First Flame',
      'of the Fist',
      'of the Flame',
      'of the Forest',
      'of the Gate',
      'of the Glitch',
      'of the Good Luck Squad',
      'of the Grass',
      'of the Guild',
      'of the Hall',
      'of the Havens',
      'of the Hell Chamber',
      'of the Highlands',
      'of the Hills',
      'of the Horde',
      'of the Ice',
      'of the Inferno',
      'of the Jungle',
      'of the Keep',
      'of the Kitsune',
      'of the Kraken',
      'of the Lake',
      'of the Lantern',
      'of the Lighthouse',
      'of the Lochs',
      'of the Lost City',
      'of the Lotus',
      'of the Lowlands',
      'of the Majestic Filth',
      'of the Marsh',
      'of the Mist',
      'of the Moon',
      'of the Mountain',
      'of the Mud',
      'of the Nightmare Dominion',
      'of the North',
      'of the Obelisk',
      'of the Ocean',
      'of the Palms',
      'of the Pantheon',
      'of the Pavillion',
      'of the Penthouse',
      'of the Phoenix',
      'of the Pile',
      'of the Plaguelands',
      'of the Plains',
      'of the Prism',
      'of the Quantapony',
      'of the Quantum Downs',
      'of the Range',
      'of the Realm',
      'of the Ridge',
      'of the Ring',
      'of the River',
      'of the Riverlands',
      'of the Riviera',
      'of the Road',
      'of the Rock',
      'of the Ruins',
      'of the Rune Raiders',
      'of the Sacred Pillars',
      'of the Salt',
      'of the Savannah',
      'of the Scum Barrel',
      'of the Sea',
      'of the Shadows',
      'of the Slime',
      'of the Slime Pits',
      'of the Snow',
      'of the South',
      'of the Storm',
      'of the Street',
      'of the Summit',
      'of the Sun',
      'of the Sunrise',
      'of the Sunset',
      'of the Swamp',
      'of the Swamps',
      'of the Temple',
      'of the Thorn',
      'of the Tiger Claw',
      'of the Tombs',
      'of the Tower',
      'of the Trail',
      'of the Trees',
      'of the Tundra',
      'of the Underground',
      'of the Valley',
      'of the Villa',
      'of the Waves',
      'of the West',
      'of the Wheel',
      'of the Wild',
      'of the Wood',
      'of the Woodlands',
      'of the Worms',
    ],
}