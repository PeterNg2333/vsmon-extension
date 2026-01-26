import { IMonsterSpecies, MonsterRarity, MonsterType } from '../types/monster.interface';

export const POKEDEX_GEN3: Record<string, IMonsterSpecies> = {
    "252": {
        "id": 252,
        "name": "Treecko",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 45,
            "def": 35,
            "spAtk": 65,
            "spDef": 55,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/252.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 50,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wood Gecko Pokémon"
        },
        "evolution": {
            "targetId": 253,
            "level": 25
        }
    },
    "253": {
        "id": 253,
        "name": "Grovyle",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 65,
            "def": 45,
            "spAtk": 85,
            "spDef": 65,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/253.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 9,
            "weight": 216,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wood Gecko Pokémon"
        },
        "evolution": {
            "targetId": 254,
            "level": 25
        }
    },
    "254": {
        "id": 254,
        "name": "Sceptile",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 70,
            "atk": 85,
            "def": 65,
            "spAtk": 105,
            "spDef": 85,
            "speed": 120
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/254.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 17,
            "weight": 522,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Forest Pokémon"
        }
    },
    "255": {
        "id": 255,
        "name": "Torchic",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 60,
            "def": 40,
            "spAtk": 70,
            "spDef": 50,
            "speed": 45
        },
        "catchRate": 45,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/255.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 25,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Chick Pokémon"
        },
        "evolution": {
            "targetId": 256,
            "level": 25
        }
    },
    "256": {
        "id": 256,
        "name": "Combusken",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 85,
            "def": 60,
            "spAtk": 85,
            "spDef": 60,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/256.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 9,
            "weight": 195,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Young Fowl Pokémon"
        },
        "evolution": {
            "targetId": 257,
            "level": 25
        }
    },
    "257": {
        "id": 257,
        "name": "Blaziken",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 120,
            "def": 70,
            "spAtk": 110,
            "spDef": 70,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/257.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 19,
            "weight": 520,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Blaze Pokémon"
        }
    },
    "258": {
        "id": 258,
        "name": "Mudkip",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 70,
            "def": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 40
        },
        "catchRate": 45,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/258.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 76,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mud Fish Pokémon"
        },
        "evolution": {
            "targetId": 259,
            "level": 25
        }
    },
    "259": {
        "id": 259,
        "name": "Marshtomp",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 85,
            "def": 70,
            "spAtk": 60,
            "spDef": 70,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/259.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 280,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mud Fish Pokémon"
        },
        "evolution": {
            "targetId": 260,
            "level": 25
        }
    },
    "260": {
        "id": 260,
        "name": "Swampert",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 100,
            "atk": 110,
            "def": 90,
            "spAtk": 85,
            "spDef": 90,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 241,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/260.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 819,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mud Fish Pokémon"
        }
    },
    "261": {
        "id": 261,
        "name": "Poochyena",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 55,
            "def": 35,
            "spAtk": 30,
            "spDef": 30,
            "speed": 35
        },
        "catchRate": 255,
        "baseExp": 56,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/261.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 136,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bite Pokémon"
        },
        "evolution": {
            "targetId": 262,
            "level": 25
        }
    },
    "262": {
        "id": 262,
        "name": "Mightyena",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 90,
            "def": 70,
            "spAtk": 60,
            "spDef": 60,
            "speed": 70
        },
        "catchRate": 127,
        "baseExp": 147,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/262.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 370,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bite Pokémon"
        }
    },
    "263": {
        "id": 263,
        "name": "Zigzagoon",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 38,
            "atk": 30,
            "def": 41,
            "spAtk": 30,
            "spDef": 41,
            "speed": 60
        },
        "catchRate": 255,
        "baseExp": 56,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/263.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 175,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tiny Raccoon Pokémon"
        },
        "evolution": {
            "targetId": 264,
            "level": 25
        }
    },
    "264": {
        "id": 264,
        "name": "Linoone",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 78,
            "atk": 70,
            "def": 61,
            "spAtk": 50,
            "spDef": 61,
            "speed": 100
        },
        "catchRate": 90,
        "baseExp": 147,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/264.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 325,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rushing Pokémon"
        }
    },
    "265": {
        "id": 265,
        "name": "Wurmple",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 45,
            "def": 35,
            "spAtk": 20,
            "spDef": 30,
            "speed": 20
        },
        "catchRate": 255,
        "baseExp": 56,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/265.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 3,
            "weight": 36,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Worm Pokémon"
        },
        "evolution": {
            "targetId": 268,
            "level": 25
        }
    },
    "266": {
        "id": 266,
        "name": "Silcoon",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 35,
            "def": 55,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "catchRate": 120,
        "baseExp": 72,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/266.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 100,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cocoon Pokémon"
        },
        "evolution": {
            "targetId": 267,
            "level": 25
        }
    },
    "267": {
        "id": 267,
        "name": "Beautifly",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 70,
            "def": 50,
            "spAtk": 100,
            "spDef": 50,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 178,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/267.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 284,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Butterfly Pokémon"
        }
    },
    "268": {
        "id": 268,
        "name": "Cascoon",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 35,
            "def": 55,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "catchRate": 120,
        "baseExp": 72,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/268.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 115,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cocoon Pokémon"
        },
        "evolution": {
            "targetId": 269,
            "level": 25
        }
    },
    "269": {
        "id": 269,
        "name": "Dustox",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 50,
            "def": 70,
            "spAtk": 50,
            "spDef": 90,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/269.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 316,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Moth Pokémon"
        }
    },
    "270": {
        "id": 270,
        "name": "Lotad",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 30,
            "def": 30,
            "spAtk": 40,
            "spDef": 50,
            "speed": 30
        },
        "catchRate": 255,
        "baseExp": 44,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/270.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 26,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Water Weed Pokémon"
        },
        "evolution": {
            "targetId": 271,
            "level": 25
        }
    },
    "271": {
        "id": 271,
        "name": "Lombre",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 50,
            "def": 50,
            "spAtk": 60,
            "spDef": 70,
            "speed": 50
        },
        "catchRate": 120,
        "baseExp": 119,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/271.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 325,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Jolly Pokémon"
        },
        "evolution": {
            "targetId": 272,
            "level": 25
        }
    },
    "272": {
        "id": 272,
        "name": "Ludicolo",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 70,
            "def": 70,
            "spAtk": 90,
            "spDef": 100,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 216,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/272.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 550,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Carefree Pokémon"
        }
    },
    "273": {
        "id": 273,
        "name": "Seedot",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 40,
            "def": 50,
            "spAtk": 30,
            "spDef": 30,
            "speed": 30
        },
        "catchRate": 255,
        "baseExp": 44,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/273.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 40,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Acorn Pokémon"
        },
        "evolution": {
            "targetId": 274,
            "level": 25
        }
    },
    "274": {
        "id": 274,
        "name": "Nuzleaf",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 70,
            "def": 40,
            "spAtk": 60,
            "spDef": 40,
            "speed": 60
        },
        "catchRate": 120,
        "baseExp": 119,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/274.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 280,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wily Pokémon"
        },
        "evolution": {
            "targetId": 275,
            "level": 25
        }
    },
    "275": {
        "id": 275,
        "name": "Shiftry",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 100,
            "def": 60,
            "spAtk": 90,
            "spDef": 60,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 216,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/275.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 13,
            "weight": 596,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wicked Pokémon"
        }
    },
    "276": {
        "id": 276,
        "name": "Taillow",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 55,
            "def": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 85
        },
        "catchRate": 200,
        "baseExp": 54,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/276.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 3,
            "weight": 23,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tiny Swallow Pokémon"
        },
        "evolution": {
            "targetId": 277,
            "level": 25
        }
    },
    "277": {
        "id": 277,
        "name": "Swellow",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 85,
            "def": 60,
            "spAtk": 75,
            "spDef": 50,
            "speed": 125
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/277.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 198,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Swallow Pokémon"
        }
    },
    "278": {
        "id": 278,
        "name": "Wingull",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 30,
            "def": 30,
            "spAtk": 55,
            "spDef": 30,
            "speed": 85
        },
        "catchRate": 190,
        "baseExp": 54,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/278.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 95,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Seagull Pokémon"
        },
        "evolution": {
            "targetId": 279,
            "level": 25
        }
    },
    "279": {
        "id": 279,
        "name": "Pelipper",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 50,
            "def": 100,
            "spAtk": 95,
            "spDef": 70,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 154,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/279.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 280,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Water Bird Pokémon"
        }
    },
    "280": {
        "id": 280,
        "name": "Ralts",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 28,
            "atk": 25,
            "def": 25,
            "spAtk": 45,
            "spDef": 35,
            "speed": 40
        },
        "catchRate": 235,
        "baseExp": 40,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/280.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 66,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Feeling Pokémon"
        },
        "evolution": {
            "targetId": 281,
            "level": 25
        }
    },
    "281": {
        "id": 281,
        "name": "Kirlia",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 38,
            "atk": 35,
            "def": 35,
            "spAtk": 65,
            "spDef": 55,
            "speed": 50
        },
        "catchRate": 120,
        "baseExp": 97,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/281.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 202,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Emotion Pokémon"
        },
        "evolution": {
            "targetId": 282,
            "level": 25
        }
    },
    "282": {
        "id": 282,
        "name": "Gardevoir",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 68,
            "atk": 65,
            "def": 65,
            "spAtk": 125,
            "spDef": 115,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 233,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/282.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 16,
            "weight": 484,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Embrace Pokémon"
        }
    },
    "283": {
        "id": 283,
        "name": "Surskit",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 30,
            "def": 32,
            "spAtk": 50,
            "spDef": 52,
            "speed": 65
        },
        "catchRate": 200,
        "baseExp": 54,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/283.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 17,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Pond Skater Pokémon"
        },
        "evolution": {
            "targetId": 284,
            "level": 25
        }
    },
    "284": {
        "id": 284,
        "name": "Masquerain",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 60,
            "def": 62,
            "spAtk": 100,
            "spDef": 82,
            "speed": 80
        },
        "catchRate": 75,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/284.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 36,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Eyeball Pokémon"
        }
    },
    "285": {
        "id": 285,
        "name": "Shroomish",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 40,
            "def": 60,
            "spAtk": 40,
            "spDef": 60,
            "speed": 35
        },
        "catchRate": 255,
        "baseExp": 59,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/285.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 45,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mushroom Pokémon"
        },
        "evolution": {
            "targetId": 286,
            "level": 25
        }
    },
    "286": {
        "id": 286,
        "name": "Breloom",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 130,
            "def": 80,
            "spAtk": 60,
            "spDef": 60,
            "speed": 70
        },
        "catchRate": 90,
        "baseExp": 161,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/286.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 392,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mushroom Pokémon"
        }
    },
    "287": {
        "id": 287,
        "name": "Slakoth",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 60,
            "def": 60,
            "spAtk": 35,
            "spDef": 35,
            "speed": 30
        },
        "catchRate": 255,
        "baseExp": 56,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/287.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 240,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Slacker Pokémon"
        },
        "evolution": {
            "targetId": 288,
            "level": 25
        }
    },
    "288": {
        "id": 288,
        "name": "Vigoroth",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 80,
            "def": 80,
            "spAtk": 55,
            "spDef": 55,
            "speed": 90
        },
        "catchRate": 120,
        "baseExp": 154,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/288.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 14,
            "weight": 465,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wild Monkey Pokémon"
        },
        "evolution": {
            "targetId": 289,
            "level": 25
        }
    },
    "289": {
        "id": 289,
        "name": "Slaking",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 150,
            "atk": 160,
            "def": 100,
            "spAtk": 95,
            "spDef": 65,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 252,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/289.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 20,
            "weight": 1305,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Lazy Pokémon"
        }
    },
    "290": {
        "id": 290,
        "name": "Nincada",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 31,
            "atk": 45,
            "def": 90,
            "spAtk": 30,
            "spDef": 30,
            "speed": 40
        },
        "catchRate": 255,
        "baseExp": 53,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/290.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 55,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Trainee Pokémon"
        },
        "evolution": {
            "targetId": 292,
            "level": 25
        }
    },
    "291": {
        "id": 291,
        "name": "Ninjask",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 61,
            "atk": 90,
            "def": 45,
            "spAtk": 50,
            "spDef": 50,
            "speed": 160
        },
        "catchRate": 120,
        "baseExp": 160,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/291.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 120,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ninja Pokémon"
        }
    },
    "292": {
        "id": 292,
        "name": "Shedinja",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 1,
            "atk": 90,
            "def": 45,
            "spAtk": 30,
            "spDef": 30,
            "speed": 40
        },
        "catchRate": 45,
        "baseExp": 83,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/292.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 12,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shed Pokémon"
        }
    },
    "293": {
        "id": 293,
        "name": "Whismur",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 64,
            "atk": 51,
            "def": 23,
            "spAtk": 51,
            "spDef": 23,
            "speed": 28
        },
        "catchRate": 190,
        "baseExp": 48,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/293.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 163,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Whisper Pokémon"
        },
        "evolution": {
            "targetId": 294,
            "level": 25
        }
    },
    "294": {
        "id": 294,
        "name": "Loudred",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 84,
            "atk": 71,
            "def": 43,
            "spAtk": 71,
            "spDef": 43,
            "speed": 48
        },
        "catchRate": 120,
        "baseExp": 126,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/294.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 405,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Big Voice Pokémon"
        },
        "evolution": {
            "targetId": 295,
            "level": 25
        }
    },
    "295": {
        "id": 295,
        "name": "Exploud",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 104,
            "atk": 91,
            "def": 63,
            "spAtk": 91,
            "spDef": 73,
            "speed": 68
        },
        "catchRate": 45,
        "baseExp": 221,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/295.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 840,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Loud Noise Pokémon"
        }
    },
    "296": {
        "id": 296,
        "name": "Makuhita",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 72,
            "atk": 60,
            "def": 30,
            "spAtk": 20,
            "spDef": 30,
            "speed": 25
        },
        "catchRate": 180,
        "baseExp": 47,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/296.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 864,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Guts Pokémon"
        },
        "evolution": {
            "targetId": 297,
            "level": 25
        }
    },
    "297": {
        "id": 297,
        "name": "Hariyama",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 144,
            "atk": 120,
            "def": 60,
            "spAtk": 40,
            "spDef": 60,
            "speed": 50
        },
        "catchRate": 200,
        "baseExp": 166,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/297.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 23,
            "weight": 2538,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Arm Thrust Pokémon"
        }
    },
    "298": {
        "id": 298,
        "name": "Azurill",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 20,
            "def": 40,
            "spAtk": 20,
            "spDef": 40,
            "speed": 20
        },
        "catchRate": 150,
        "baseExp": 38,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/298.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 2,
            "weight": 20,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Polka Dot Pokémon"
        }
    },
    "299": {
        "id": 299,
        "name": "Nosepass",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 45,
            "def": 135,
            "spAtk": 45,
            "spDef": 90,
            "speed": 30
        },
        "catchRate": 255,
        "baseExp": 75,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/299.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 970,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Compass Pokémon"
        }
    },
    "300": {
        "id": 300,
        "name": "Skitty",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 45,
            "def": 45,
            "spAtk": 35,
            "spDef": 35,
            "speed": 50
        },
        "catchRate": 255,
        "baseExp": 52,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/300.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 110,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Kitten Pokémon"
        },
        "evolution": {
            "targetId": 301,
            "level": 25
        }
    },
    "301": {
        "id": 301,
        "name": "Delcatty",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 65,
            "def": 65,
            "spAtk": 55,
            "spDef": 55,
            "speed": 90
        },
        "catchRate": 60,
        "baseExp": 140,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/301.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 326,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Prim Pokémon"
        }
    },
    "302": {
        "id": 302,
        "name": "Sableye",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 75,
            "def": 75,
            "spAtk": 65,
            "spDef": 65,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 133,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/302.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 110,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Darkness Pokémon"
        }
    },
    "303": {
        "id": 303,
        "name": "Mawile",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 85,
            "def": 85,
            "spAtk": 55,
            "spDef": 55,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 133,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/303.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 115,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Deceiver Pokémon"
        }
    },
    "304": {
        "id": 304,
        "name": "Aron",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 70,
            "def": 100,
            "spAtk": 40,
            "spDef": 40,
            "speed": 30
        },
        "catchRate": 180,
        "baseExp": 66,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/304.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 600,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Armor Pokémon"
        },
        "evolution": {
            "targetId": 305,
            "level": 25
        }
    },
    "305": {
        "id": 305,
        "name": "Lairon",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 90,
            "def": 140,
            "spAtk": 50,
            "spDef": 50,
            "speed": 40
        },
        "catchRate": 90,
        "baseExp": 151,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/305.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 9,
            "weight": 1200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Armor Pokémon"
        },
        "evolution": {
            "targetId": 306,
            "level": 25
        }
    },
    "306": {
        "id": 306,
        "name": "Aggron",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 70,
            "atk": 110,
            "def": 180,
            "spAtk": 60,
            "spDef": 60,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/306.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 21,
            "weight": 3600,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Armor Pokémon"
        }
    },
    "307": {
        "id": 307,
        "name": "Meditite",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 40,
            "def": 55,
            "spAtk": 40,
            "spDef": 55,
            "speed": 60
        },
        "catchRate": 180,
        "baseExp": 56,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/307.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 112,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Meditate Pokémon"
        },
        "evolution": {
            "targetId": 308,
            "level": 25
        }
    },
    "308": {
        "id": 308,
        "name": "Medicham",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 60,
            "def": 75,
            "spAtk": 60,
            "spDef": 75,
            "speed": 80
        },
        "catchRate": 90,
        "baseExp": 144,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/308.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 13,
            "weight": 315,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Meditate Pokémon"
        }
    },
    "309": {
        "id": 309,
        "name": "Electrike",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 45,
            "def": 40,
            "spAtk": 65,
            "spDef": 40,
            "speed": 65
        },
        "catchRate": 120,
        "baseExp": 59,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/309.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 152,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Lightning Pokémon"
        },
        "evolution": {
            "targetId": 310,
            "level": 25
        }
    },
    "310": {
        "id": 310,
        "name": "Manectric",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 75,
            "def": 60,
            "spAtk": 105,
            "spDef": 60,
            "speed": 105
        },
        "catchRate": 45,
        "baseExp": 166,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/310.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 402,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Discharge Pokémon"
        }
    },
    "311": {
        "id": 311,
        "name": "Plusle",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 50,
            "def": 40,
            "spAtk": 85,
            "spDef": 75,
            "speed": 95
        },
        "catchRate": 200,
        "baseExp": 142,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/311.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 42,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cheering Pokémon"
        }
    },
    "312": {
        "id": 312,
        "name": "Minun",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 40,
            "def": 50,
            "spAtk": 75,
            "spDef": 85,
            "speed": 95
        },
        "catchRate": 200,
        "baseExp": 142,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/312.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 42,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cheering Pokémon"
        }
    },
    "313": {
        "id": 313,
        "name": "Volbeat",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 73,
            "def": 75,
            "spAtk": 47,
            "spDef": 85,
            "speed": 85
        },
        "catchRate": 150,
        "baseExp": 151,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/313.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 177,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Firefly Pokémon"
        }
    },
    "314": {
        "id": 314,
        "name": "Illumise",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 47,
            "def": 75,
            "spAtk": 73,
            "spDef": 85,
            "speed": 85
        },
        "catchRate": 150,
        "baseExp": 151,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/314.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 177,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Firefly Pokémon"
        }
    },
    "315": {
        "id": 315,
        "name": "Roselia",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 60,
            "def": 45,
            "spAtk": 100,
            "spDef": 80,
            "speed": 65
        },
        "catchRate": 150,
        "baseExp": 140,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/315.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 3,
            "weight": 20,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Thorn Pokémon"
        }
    },
    "316": {
        "id": 316,
        "name": "Gulpin",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 43,
            "def": 53,
            "spAtk": 43,
            "spDef": 53,
            "speed": 40
        },
        "catchRate": 225,
        "baseExp": 60,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/316.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 103,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Stomach Pokémon"
        },
        "evolution": {
            "targetId": 317,
            "level": 25
        }
    },
    "317": {
        "id": 317,
        "name": "Swalot",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 100,
            "atk": 73,
            "def": 83,
            "spAtk": 73,
            "spDef": 83,
            "speed": 55
        },
        "catchRate": 75,
        "baseExp": 163,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/317.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 17,
            "weight": 800,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Bag Pokémon"
        }
    },
    "318": {
        "id": 318,
        "name": "Carvanha",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 90,
            "def": 20,
            "spAtk": 65,
            "spDef": 20,
            "speed": 65
        },
        "catchRate": 225,
        "baseExp": 61,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/318.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 208,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Savage Pokémon"
        },
        "evolution": {
            "targetId": 319,
            "level": 25
        }
    },
    "319": {
        "id": 319,
        "name": "Sharpedo",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 120,
            "def": 40,
            "spAtk": 95,
            "spDef": 40,
            "speed": 95
        },
        "catchRate": 60,
        "baseExp": 161,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/319.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 18,
            "weight": 888,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Brutal Pokémon"
        }
    },
    "320": {
        "id": 320,
        "name": "Wailmer",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 130,
            "atk": 70,
            "def": 35,
            "spAtk": 70,
            "spDef": 35,
            "speed": 60
        },
        "catchRate": 125,
        "baseExp": 80,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/320.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 20,
            "weight": 1300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ball Whale Pokémon"
        },
        "evolution": {
            "targetId": 321,
            "level": 25
        }
    },
    "321": {
        "id": 321,
        "name": "Wailord",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 170,
            "atk": 90,
            "def": 45,
            "spAtk": 90,
            "spDef": 45,
            "speed": 60
        },
        "catchRate": 60,
        "baseExp": 175,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/321.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 145,
            "weight": 3980,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Float Whale Pokémon"
        }
    },
    "322": {
        "id": 322,
        "name": "Numel",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 60,
            "def": 40,
            "spAtk": 65,
            "spDef": 45,
            "speed": 35
        },
        "catchRate": 255,
        "baseExp": 61,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/322.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 240,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Numb Pokémon"
        },
        "evolution": {
            "targetId": 323,
            "level": 25
        }
    },
    "323": {
        "id": 323,
        "name": "Camerupt",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 100,
            "def": 70,
            "spAtk": 105,
            "spDef": 75,
            "speed": 40
        },
        "catchRate": 150,
        "baseExp": 161,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/323.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 19,
            "weight": 2200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Eruption Pokémon"
        }
    },
    "324": {
        "id": 324,
        "name": "Torkoal",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 85,
            "def": 140,
            "spAtk": 85,
            "spDef": 70,
            "speed": 20
        },
        "catchRate": 90,
        "baseExp": 165,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/324.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 804,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Coal Pokémon"
        }
    },
    "325": {
        "id": 325,
        "name": "Spoink",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 25,
            "def": 35,
            "spAtk": 70,
            "spDef": 80,
            "speed": 60
        },
        "catchRate": 255,
        "baseExp": 66,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/325.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 306,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bounce Pokémon"
        },
        "evolution": {
            "targetId": 326,
            "level": 25
        }
    },
    "326": {
        "id": 326,
        "name": "Grumpig",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 45,
            "def": 65,
            "spAtk": 90,
            "spDef": 110,
            "speed": 80
        },
        "catchRate": 60,
        "baseExp": 165,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/326.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 9,
            "weight": 715,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Manipulate Pokémon"
        }
    },
    "327": {
        "id": 327,
        "name": "Spinda",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 60,
            "def": 60,
            "spAtk": 60,
            "spDef": 60,
            "speed": 60
        },
        "catchRate": 255,
        "baseExp": 126,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/327.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 50,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spot Panda Pokémon"
        }
    },
    "328": {
        "id": 328,
        "name": "Trapinch",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 100,
            "def": 45,
            "spAtk": 45,
            "spDef": 45,
            "speed": 10
        },
        "catchRate": 255,
        "baseExp": 58,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/328.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ant Pit Pokémon"
        },
        "evolution": {
            "targetId": 329,
            "level": 25
        }
    },
    "329": {
        "id": 329,
        "name": "Vibrava",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 70,
            "def": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 70
        },
        "catchRate": 120,
        "baseExp": 119,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/329.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 153,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Vibration Pokémon"
        },
        "evolution": {
            "targetId": 330,
            "level": 25
        }
    },
    "330": {
        "id": 330,
        "name": "Flygon",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 100,
            "def": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 234,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/330.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 20,
            "weight": 820,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mystic Pokémon"
        }
    },
    "331": {
        "id": 331,
        "name": "Cacnea",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 85,
            "def": 40,
            "spAtk": 85,
            "spDef": 40,
            "speed": 35
        },
        "catchRate": 190,
        "baseExp": 67,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/331.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 513,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cactus Pokémon"
        },
        "evolution": {
            "targetId": 332,
            "level": 25
        }
    },
    "332": {
        "id": 332,
        "name": "Cacturne",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 115,
            "def": 60,
            "spAtk": 115,
            "spDef": 60,
            "speed": 55
        },
        "catchRate": 60,
        "baseExp": 166,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/332.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 13,
            "weight": 774,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Scarecrow Pokémon"
        }
    },
    "333": {
        "id": 333,
        "name": "Swablu",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 40,
            "def": 60,
            "spAtk": 40,
            "spDef": 75,
            "speed": 50
        },
        "catchRate": 255,
        "baseExp": 62,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/333.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 12,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cotton Bird Pokémon"
        },
        "evolution": {
            "targetId": 334,
            "level": 25
        }
    },
    "334": {
        "id": 334,
        "name": "Altaria",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 70,
            "def": 90,
            "spAtk": 70,
            "spDef": 105,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 172,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/334.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 206,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Humming Pokémon"
        }
    },
    "335": {
        "id": 335,
        "name": "Zangoose",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 73,
            "atk": 115,
            "def": 60,
            "spAtk": 60,
            "spDef": 60,
            "speed": 90
        },
        "catchRate": 90,
        "baseExp": 160,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/335.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 13,
            "weight": 403,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cat Ferret Pokémon"
        }
    },
    "336": {
        "id": 336,
        "name": "Seviper",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 73,
            "atk": 100,
            "def": 60,
            "spAtk": 100,
            "spDef": 60,
            "speed": 65
        },
        "catchRate": 90,
        "baseExp": 160,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/336.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 27,
            "weight": 525,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fang Snake Pokémon"
        }
    },
    "337": {
        "id": 337,
        "name": "Lunatone",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 55,
            "def": 65,
            "spAtk": 95,
            "spDef": 85,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 161,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/337.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 1680,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Meteorite Pokémon"
        }
    },
    "338": {
        "id": 338,
        "name": "Solrock",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 95,
            "def": 85,
            "spAtk": 55,
            "spDef": 65,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 161,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/338.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 1540,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Meteorite Pokémon"
        }
    },
    "339": {
        "id": 339,
        "name": "Barboach",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 48,
            "def": 43,
            "spAtk": 46,
            "spDef": 41,
            "speed": 60
        },
        "catchRate": 190,
        "baseExp": 58,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/339.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 19,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Whiskers Pokémon"
        },
        "evolution": {
            "targetId": 340,
            "level": 25
        }
    },
    "340": {
        "id": 340,
        "name": "Whiscash",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 110,
            "atk": 78,
            "def": 73,
            "spAtk": 76,
            "spDef": 71,
            "speed": 60
        },
        "catchRate": 75,
        "baseExp": 164,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/340.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 9,
            "weight": 236,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Whiskers Pokémon"
        }
    },
    "341": {
        "id": 341,
        "name": "Corphish",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 43,
            "atk": 80,
            "def": 65,
            "spAtk": 50,
            "spDef": 35,
            "speed": 35
        },
        "catchRate": 205,
        "baseExp": 62,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/341.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 115,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ruffian Pokémon"
        },
        "evolution": {
            "targetId": 342,
            "level": 25
        }
    },
    "342": {
        "id": 342,
        "name": "Crawdaunt",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 63,
            "atk": 120,
            "def": 85,
            "spAtk": 90,
            "spDef": 55,
            "speed": 55
        },
        "catchRate": 155,
        "baseExp": 164,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen3/342.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 328,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rogue Pokémon"
        }
    },
    "343": {
        "id": 343,
        "name": "Baltoy",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 40,
            "def": 55,
            "spAtk": 40,
            "spDef": 70,
            "speed": 55
        },
        "catchRate": 255,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/343.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 5,
            "weight": 215,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Clay Doll Pokémon"
        },
        "evolution": {
            "targetId": 344,
            "level": 25
        }
    },
    "344": {
        "id": 344,
        "name": "Claydol",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 70,
            "def": 105,
            "spAtk": 70,
            "spDef": 120,
            "speed": 75
        },
        "catchRate": 90,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/344.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 1080,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Clay Doll Pokémon"
        }
    },
    "345": {
        "id": 345,
        "name": "Lileep",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 66,
            "atk": 41,
            "def": 77,
            "spAtk": 61,
            "spDef": 87,
            "speed": 23
        },
        "catchRate": 45,
        "baseExp": 71,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/345.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 238,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Lily Pokémon"
        },
        "evolution": {
            "targetId": 346,
            "level": 25
        }
    },
    "346": {
        "id": 346,
        "name": "Cradily",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 86,
            "atk": 81,
            "def": 97,
            "spAtk": 81,
            "spDef": 107,
            "speed": 43
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/346.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 604,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Barnacle Pokémon"
        }
    },
    "347": {
        "id": 347,
        "name": "Anorith",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 95,
            "def": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 75
        },
        "catchRate": 45,
        "baseExp": 71,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/347.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 125,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Old Shrimp Pokémon"
        },
        "evolution": {
            "targetId": 348,
            "level": 25
        }
    },
    "348": {
        "id": 348,
        "name": "Armaldo",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 125,
            "def": 100,
            "spAtk": 70,
            "spDef": 80,
            "speed": 45
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/348.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 682,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Plate Pokémon"
        }
    },
    "349": {
        "id": 349,
        "name": "Feebas",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 20,
            "atk": 15,
            "def": 20,
            "spAtk": 10,
            "spDef": 55,
            "speed": 80
        },
        "catchRate": 255,
        "baseExp": 40,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/349.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 74,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fish Pokémon"
        },
        "evolution": {
            "targetId": 350,
            "level": 25
        }
    },
    "350": {
        "id": 350,
        "name": "Milotic",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 95,
            "atk": 60,
            "def": 79,
            "spAtk": 100,
            "spDef": 125,
            "speed": 81
        },
        "catchRate": 60,
        "baseExp": 189,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/350.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 62,
            "weight": 1620,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tender Pokémon"
        }
    },
    "351": {
        "id": 351,
        "name": "Castform",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 70,
            "def": 70,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 147,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/351.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 3,
            "weight": 8,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Weather Pokémon"
        }
    },
    "352": {
        "id": 352,
        "name": "Kecleon",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 90,
            "def": 70,
            "spAtk": 60,
            "spDef": 120,
            "speed": 40
        },
        "catchRate": 200,
        "baseExp": 154,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/352.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 220,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Color Swap Pokémon"
        }
    },
    "353": {
        "id": 353,
        "name": "Shuppet",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 44,
            "atk": 75,
            "def": 35,
            "spAtk": 63,
            "spDef": 33,
            "speed": 45
        },
        "catchRate": 225,
        "baseExp": 59,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/353.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 23,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Puppet Pokémon"
        },
        "evolution": {
            "targetId": 354,
            "level": 25
        }
    },
    "354": {
        "id": 354,
        "name": "Banette",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 64,
            "atk": 115,
            "def": 65,
            "spAtk": 83,
            "spDef": 63,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/354.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 125,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Marionette Pokémon"
        }
    },
    "355": {
        "id": 355,
        "name": "Duskull",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 20,
            "atk": 40,
            "def": 90,
            "spAtk": 30,
            "spDef": 90,
            "speed": 25
        },
        "catchRate": 190,
        "baseExp": 59,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/355.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Requiem Pokémon"
        },
        "evolution": {
            "targetId": 356,
            "level": 25
        }
    },
    "356": {
        "id": 356,
        "name": "Dusclops",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 40,
            "atk": 70,
            "def": 130,
            "spAtk": 60,
            "spDef": 130,
            "speed": 25
        },
        "catchRate": 90,
        "baseExp": 159,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/356.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 16,
            "weight": 306,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Beckon Pokémon"
        }
    },
    "357": {
        "id": 357,
        "name": "Tropius",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 99,
            "atk": 68,
            "def": 83,
            "spAtk": 72,
            "spDef": 87,
            "speed": 51
        },
        "catchRate": 200,
        "baseExp": 161,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/357.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 20,
            "weight": 1000,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fruit Pokémon"
        }
    },
    "358": {
        "id": 358,
        "name": "Chimecho",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 50,
            "def": 80,
            "spAtk": 95,
            "spDef": 90,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/358.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 10,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wind Chime Pokémon"
        }
    },
    "359": {
        "id": 359,
        "name": "Absol",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 130,
            "def": 60,
            "spAtk": 75,
            "spDef": 60,
            "speed": 75
        },
        "catchRate": 30,
        "baseExp": 163,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/359.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 470,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Disaster Pokémon"
        }
    },
    "360": {
        "id": 360,
        "name": "Wynaut",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 95,
            "atk": 23,
            "def": 48,
            "spAtk": 23,
            "spDef": 48,
            "speed": 23
        },
        "catchRate": 125,
        "baseExp": 52,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/360.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 140,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bright Pokémon"
        }
    },
    "361": {
        "id": 361,
        "name": "Snorunt",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 50,
            "def": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 50
        },
        "catchRate": 190,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/361.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 7,
            "weight": 168,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Snow Hat Pokémon"
        },
        "evolution": {
            "targetId": 362,
            "level": 25
        }
    },
    "362": {
        "id": 362,
        "name": "Glalie",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 80,
            "def": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 80
        },
        "catchRate": 75,
        "baseExp": 168,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen3/362.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 2565,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Face Pokémon"
        }
    },
    "363": {
        "id": 363,
        "name": "Spheal",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 40,
            "def": 50,
            "spAtk": 55,
            "spDef": 50,
            "speed": 25
        },
        "catchRate": 255,
        "baseExp": 58,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/363.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 8,
            "weight": 395,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Clap Pokémon"
        },
        "evolution": {
            "targetId": 364,
            "level": 25
        }
    },
    "364": {
        "id": 364,
        "name": "Sealeo",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 60,
            "def": 70,
            "spAtk": 75,
            "spDef": 70,
            "speed": 45
        },
        "catchRate": 120,
        "baseExp": 144,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/364.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 876,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ball Roll Pokémon"
        },
        "evolution": {
            "targetId": 365,
            "level": 25
        }
    },
    "365": {
        "id": 365,
        "name": "Walrein",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 110,
            "atk": 80,
            "def": 90,
            "spAtk": 95,
            "spDef": 90,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen3/365.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 14,
            "weight": 1506,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ice Break Pokémon"
        }
    },
    "366": {
        "id": 366,
        "name": "Clamperl",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 64,
            "def": 85,
            "spAtk": 74,
            "spDef": 55,
            "speed": 32
        },
        "catchRate": 255,
        "baseExp": 69,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/366.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 4,
            "weight": 525,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bivalve Pokémon"
        },
        "evolution": {
            "targetId": 368,
            "level": 25
        }
    },
    "367": {
        "id": 367,
        "name": "Huntail",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 104,
            "def": 105,
            "spAtk": 94,
            "spDef": 75,
            "speed": 52
        },
        "catchRate": 60,
        "baseExp": 170,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/367.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 17,
            "weight": 270,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Deep Sea Pokémon"
        }
    },
    "368": {
        "id": 368,
        "name": "Gorebyss",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 84,
            "def": 105,
            "spAtk": 114,
            "spDef": 75,
            "speed": 52
        },
        "catchRate": 60,
        "baseExp": 170,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen3/368.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 18,
            "weight": 226,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "South Sea Pokémon"
        }
    },
    "369": {
        "id": 369,
        "name": "Relicanth",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 100,
            "atk": 90,
            "def": 130,
            "spAtk": 45,
            "spDef": 65,
            "speed": 55
        },
        "catchRate": 25,
        "baseExp": 170,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/369.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 10,
            "weight": 234,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Longevity Pokémon"
        }
    },
    "370": {
        "id": 370,
        "name": "Luvdisc",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 43,
            "atk": 30,
            "def": 55,
            "spAtk": 40,
            "spDef": 65,
            "speed": 97
        },
        "catchRate": 225,
        "baseExp": 116,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen3/370.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 87,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rendezvous Pokémon"
        }
    },
    "371": {
        "id": 371,
        "name": "Bagon",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 75,
            "def": 60,
            "spAtk": 40,
            "spDef": 30,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 60,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/371.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 421,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rock Head Pokémon"
        },
        "evolution": {
            "targetId": 372,
            "level": 25
        }
    },
    "372": {
        "id": 372,
        "name": "Shelgon",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 95,
            "def": 100,
            "spAtk": 60,
            "spDef": 50,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 147,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/372.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 11,
            "weight": 1105,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Endurance Pokémon"
        },
        "evolution": {
            "targetId": 373,
            "level": 25
        }
    },
    "373": {
        "id": 373,
        "name": "Salamence",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 95,
            "atk": 135,
            "def": 80,
            "spAtk": 110,
            "spDef": 80,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/373.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 15,
            "weight": 1026,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        }
    },
    "374": {
        "id": 374,
        "name": "Beldum",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 55,
            "def": 80,
            "spAtk": 35,
            "spDef": 60,
            "speed": 30
        },
        "catchRate": 3,
        "baseExp": 60,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/374.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 6,
            "weight": 952,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Ball Pokémon"
        },
        "evolution": {
            "targetId": 375,
            "level": 25
        }
    },
    "375": {
        "id": 375,
        "name": "Metang",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 75,
            "def": 100,
            "spAtk": 55,
            "spDef": 80,
            "speed": 50
        },
        "catchRate": 3,
        "baseExp": 147,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/375.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 12,
            "weight": 2025,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Claw Pokémon"
        },
        "evolution": {
            "targetId": 376,
            "level": 25
        }
    },
    "376": {
        "id": 376,
        "name": "Metagross",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 135,
            "def": 130,
            "spAtk": 95,
            "spDef": 90,
            "speed": 70
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/376.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 16,
            "weight": 5500,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Leg Pokémon"
        }
    },
    "377": {
        "id": 377,
        "name": "Regirock",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 100,
            "def": 200,
            "spAtk": 50,
            "spDef": 100,
            "speed": 50
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/377.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 17,
            "weight": 2300,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Rock Peak Pokémon"
        }
    },
    "378": {
        "id": 378,
        "name": "Regice",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 50,
            "def": 100,
            "spAtk": 100,
            "spDef": 200,
            "speed": 50
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/378.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 18,
            "weight": 1750,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Iceberg Pokémon"
        }
    },
    "379": {
        "id": 379,
        "name": "Registeel",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 75,
            "def": 150,
            "spAtk": 75,
            "spDef": 150,
            "speed": 50
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/379.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 19,
            "weight": 2050,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Iron Pokémon"
        }
    },
    "380": {
        "id": 380,
        "name": "Latias",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 80,
            "def": 90,
            "spAtk": 110,
            "spDef": 130,
            "speed": 110
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/380.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 14,
            "weight": 400,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Eon Pokémon"
        }
    },
    "381": {
        "id": 381,
        "name": "Latios",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 90,
            "def": 80,
            "spAtk": 130,
            "spDef": 110,
            "speed": 110
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/381.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 20,
            "weight": 600,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Eon Pokémon"
        }
    },
    "382": {
        "id": 382,
        "name": "Kyogre",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 100,
            "atk": 100,
            "def": 90,
            "spAtk": 150,
            "spDef": 140,
            "speed": 90
        },
        "catchRate": 3,
        "baseExp": 302,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/382.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 45,
            "weight": 3520,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Sea Basin Pokémon"
        }
    },
    "383": {
        "id": 383,
        "name": "Groudon",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 100,
            "atk": 150,
            "def": 140,
            "spAtk": 100,
            "spDef": 90,
            "speed": 90
        },
        "catchRate": 3,
        "baseExp": 302,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/383.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 35,
            "weight": 9500,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Continent Pokémon"
        }
    },
    "384": {
        "id": 384,
        "name": "Rayquaza",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 105,
            "atk": 150,
            "def": 90,
            "spAtk": 150,
            "spDef": 90,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/384.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 70,
            "weight": 2065,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Sky High Pokémon"
        }
    },
    "385": {
        "id": 385,
        "name": "Jirachi",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 100,
            "atk": 100,
            "def": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/385.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 3,
            "weight": 11,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Wish Pokémon"
        }
    },
    "386": {
        "id": 386,
        "name": "Deoxys",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 50,
            "atk": 150,
            "def": 50,
            "spAtk": 150,
            "spDef": 50,
            "speed": 150
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen3/386.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 17,
            "weight": 608,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "DNA Pokémon"
        }
    }
};

export const getSpecies = (id: string): IMonsterSpecies | undefined => POKEDEX_GEN3[id];