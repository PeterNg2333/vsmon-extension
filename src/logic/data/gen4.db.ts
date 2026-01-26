import { IMonsterSpecies, MonsterRarity, MonsterType } from '../types/monster.interface';

export const POKEDEX_GEN4: Record<string, IMonsterSpecies> = {
    "387": {
        "id": 387,
        "name": "Turtwig",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 68,
            "def": 64,
            "spAtk": 45,
            "spDef": 55,
            "speed": 31
        },
        "catchRate": 45,
        "baseExp": 64,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/387.png",
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
            "weight": 102,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tiny Leaf Pokémon"
        },
        "evolution": {
            "targetId": 388,
            "level": 25
        }
    },
    "388": {
        "id": 388,
        "name": "Grotle",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 89,
            "def": 85,
            "spAtk": 55,
            "spDef": 65,
            "speed": 36
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/388.png",
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
            "weight": 970,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Grove Pokémon"
        },
        "evolution": {
            "targetId": 389,
            "level": 25
        }
    },
    "389": {
        "id": 389,
        "name": "Torterra",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 95,
            "atk": 109,
            "def": 105,
            "spAtk": 75,
            "spDef": 85,
            "speed": 56
        },
        "catchRate": 45,
        "baseExp": 236,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/389.png",
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
            "height": 22,
            "weight": 3100,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Continent Pokémon"
        }
    },
    "390": {
        "id": 390,
        "name": "Chimchar",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 44,
            "atk": 58,
            "def": 44,
            "spAtk": 58,
            "spDef": 44,
            "speed": 61
        },
        "catchRate": 45,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/390.png",
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
            "weight": 62,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Chimp Pokémon"
        },
        "evolution": {
            "targetId": 391,
            "level": 25
        }
    },
    "391": {
        "id": 391,
        "name": "Monferno",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 64,
            "atk": 78,
            "def": 52,
            "spAtk": 78,
            "spDef": 52,
            "speed": 81
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/391.png",
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
            "weight": 220,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Playful Pokémon"
        },
        "evolution": {
            "targetId": 392,
            "level": 25
        }
    },
    "392": {
        "id": 392,
        "name": "Infernape",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 76,
            "atk": 104,
            "def": 71,
            "spAtk": 104,
            "spDef": 71,
            "speed": 108
        },
        "catchRate": 45,
        "baseExp": 240,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/392.png",
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
            "weight": 550,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flame Pokémon"
        }
    },
    "393": {
        "id": 393,
        "name": "Piplup",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 53,
            "atk": 51,
            "def": 53,
            "spAtk": 61,
            "spDef": 56,
            "speed": 40
        },
        "catchRate": 45,
        "baseExp": 63,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/393.png",
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
            "weight": 52,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Penguin Pokémon"
        },
        "evolution": {
            "targetId": 394,
            "level": 25
        }
    },
    "394": {
        "id": 394,
        "name": "Prinplup",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 64,
            "atk": 66,
            "def": 68,
            "spAtk": 81,
            "spDef": 76,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/394.png",
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
            "weight": 230,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Penguin Pokémon"
        },
        "evolution": {
            "targetId": 395,
            "level": 25
        }
    },
    "395": {
        "id": 395,
        "name": "Empoleon",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 84,
            "atk": 86,
            "def": 88,
            "spAtk": 111,
            "spDef": 101,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/395.png",
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
            "weight": 845,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Emperor Pokémon"
        }
    },
    "396": {
        "id": 396,
        "name": "Starly",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 55,
            "def": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 60
        },
        "catchRate": 255,
        "baseExp": 49,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/396.png",
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
            "genera": "Starling Pokémon"
        },
        "evolution": {
            "targetId": 397,
            "level": 25
        }
    },
    "397": {
        "id": 397,
        "name": "Staravia",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 75,
            "def": 50,
            "spAtk": 40,
            "spDef": 40,
            "speed": 80
        },
        "catchRate": 120,
        "baseExp": 119,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/397.png",
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
            "weight": 155,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Starling Pokémon"
        },
        "evolution": {
            "targetId": 398,
            "level": 25
        }
    },
    "398": {
        "id": 398,
        "name": "Staraptor",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 85,
            "atk": 120,
            "def": 70,
            "spAtk": 50,
            "spDef": 60,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 218,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/398.png",
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
            "weight": 249,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Predator Pokémon"
        }
    },
    "399": {
        "id": 399,
        "name": "Bidoof",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 59,
            "atk": 45,
            "def": 40,
            "spAtk": 35,
            "spDef": 40,
            "speed": 31
        },
        "catchRate": 255,
        "baseExp": 50,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/399.png",
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
            "weight": 200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Plump Mouse Pokémon"
        },
        "evolution": {
            "targetId": 400,
            "level": 25
        }
    },
    "400": {
        "id": 400,
        "name": "Bibarel",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 79,
            "atk": 85,
            "def": 60,
            "spAtk": 55,
            "spDef": 60,
            "speed": 71
        },
        "catchRate": 127,
        "baseExp": 144,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/400.png",
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
            "weight": 315,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Beaver Pokémon"
        }
    },
    "401": {
        "id": 401,
        "name": "Kricketot",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 37,
            "atk": 25,
            "def": 41,
            "spAtk": 25,
            "spDef": 41,
            "speed": 25
        },
        "catchRate": 255,
        "baseExp": 39,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/401.png",
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
            "weight": 22,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cricket Pokémon"
        },
        "evolution": {
            "targetId": 402,
            "level": 25
        }
    },
    "402": {
        "id": 402,
        "name": "Kricketune",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 77,
            "atk": 85,
            "def": 51,
            "spAtk": 55,
            "spDef": 51,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 134,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/402.png",
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
            "weight": 255,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cricket Pokémon"
        }
    },
    "403": {
        "id": 403,
        "name": "Shinx",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 65,
            "def": 34,
            "spAtk": 40,
            "spDef": 34,
            "speed": 45
        },
        "catchRate": 235,
        "baseExp": 53,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/403.png",
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
            "weight": 95,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flash Pokémon"
        },
        "evolution": {
            "targetId": 404,
            "level": 25
        }
    },
    "404": {
        "id": 404,
        "name": "Luxio",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 85,
            "def": 49,
            "spAtk": 60,
            "spDef": 49,
            "speed": 60
        },
        "catchRate": 120,
        "baseExp": 127,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/404.png",
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
            "weight": 305,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spark Pokémon"
        },
        "evolution": {
            "targetId": 405,
            "level": 25
        }
    },
    "405": {
        "id": 405,
        "name": "Luxray",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 120,
            "def": 79,
            "spAtk": 95,
            "spDef": 79,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 235,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/405.png",
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
            "weight": 420,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Gleam Eyes Pokémon"
        }
    },
    "406": {
        "id": 406,
        "name": "Budew",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 30,
            "def": 35,
            "spAtk": 50,
            "spDef": 70,
            "speed": 55
        },
        "catchRate": 255,
        "baseExp": 56,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/406.png",
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
            "weight": 12,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bud Pokémon"
        }
    },
    "407": {
        "id": 407,
        "name": "Roserade",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 60,
            "atk": 70,
            "def": 65,
            "spAtk": 125,
            "spDef": 105,
            "speed": 90
        },
        "catchRate": 75,
        "baseExp": 232,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/407.png",
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
            "weight": 145,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bouquet Pokémon"
        }
    },
    "408": {
        "id": 408,
        "name": "Cranidos",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 67,
            "atk": 125,
            "def": 40,
            "spAtk": 30,
            "spDef": 30,
            "speed": 58
        },
        "catchRate": 45,
        "baseExp": 70,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen4/408.png",
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
            "weight": 315,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Head Butt Pokémon"
        },
        "evolution": {
            "targetId": 409,
            "level": 25
        }
    },
    "409": {
        "id": 409,
        "name": "Rampardos",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 97,
            "atk": 165,
            "def": 60,
            "spAtk": 65,
            "spDef": 50,
            "speed": 58
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen4/409.png",
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
            "weight": 1025,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Head Butt Pokémon"
        }
    },
    "410": {
        "id": 410,
        "name": "Shieldon",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 42,
            "def": 118,
            "spAtk": 42,
            "spDef": 88,
            "speed": 30
        },
        "catchRate": 45,
        "baseExp": 70,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen4/410.png",
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
            "weight": 570,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shield Pokémon"
        },
        "evolution": {
            "targetId": 411,
            "level": 25
        }
    },
    "411": {
        "id": 411,
        "name": "Bastiodon",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 52,
            "def": 168,
            "spAtk": 47,
            "spDef": 138,
            "speed": 30
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen4/411.png",
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
            "weight": 1495,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shield Pokémon"
        }
    },
    "412": {
        "id": 412,
        "name": "Burmy",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 29,
            "def": 45,
            "spAtk": 29,
            "spDef": 45,
            "speed": 36
        },
        "catchRate": 120,
        "baseExp": 45,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/412.png",
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
            "weight": 34,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bagworm Pokémon"
        },
        "evolution": {
            "targetId": 414,
            "level": 25
        }
    },
    "413": {
        "id": 413,
        "name": "Wormadam",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 59,
            "def": 85,
            "spAtk": 79,
            "spDef": 105,
            "speed": 36
        },
        "catchRate": 45,
        "baseExp": 148,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/413.png",
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
            "weight": 65,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bagworm Pokémon"
        }
    },
    "414": {
        "id": 414,
        "name": "Mothim",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 94,
            "def": 50,
            "spAtk": 94,
            "spDef": 50,
            "speed": 66
        },
        "catchRate": 45,
        "baseExp": 148,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/414.png",
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
            "weight": 233,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Moth Pokémon"
        }
    },
    "415": {
        "id": 415,
        "name": "Combee",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 30,
            "def": 42,
            "spAtk": 30,
            "spDef": 42,
            "speed": 70
        },
        "catchRate": 120,
        "baseExp": 49,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/415.png",
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
            "weight": 55,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tiny Bee Pokémon"
        },
        "evolution": {
            "targetId": 416,
            "level": 25
        }
    },
    "416": {
        "id": 416,
        "name": "Vespiquen",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 80,
            "def": 102,
            "spAtk": 80,
            "spDef": 102,
            "speed": 40
        },
        "catchRate": 45,
        "baseExp": 166,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/416.png",
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
            "weight": 385,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Beehive Pokémon"
        }
    },
    "417": {
        "id": 417,
        "name": "Pachirisu",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 45,
            "def": 70,
            "spAtk": 45,
            "spDef": 90,
            "speed": 95
        },
        "catchRate": 200,
        "baseExp": 142,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/417.png",
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
            "weight": 39,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "EleSquirrel Pokémon"
        }
    },
    "418": {
        "id": 418,
        "name": "Buizel",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 65,
            "def": 35,
            "spAtk": 60,
            "spDef": 30,
            "speed": 85
        },
        "catchRate": 190,
        "baseExp": 66,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/418.png",
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
            "weight": 295,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Weasel Pokémon"
        },
        "evolution": {
            "targetId": 419,
            "level": 25
        }
    },
    "419": {
        "id": 419,
        "name": "Floatzel",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 85,
            "atk": 105,
            "def": 55,
            "spAtk": 85,
            "spDef": 50,
            "speed": 115
        },
        "catchRate": 75,
        "baseExp": 173,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/419.png",
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
            "weight": 335,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Weasel Pokémon"
        }
    },
    "420": {
        "id": 420,
        "name": "Cherubi",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 35,
            "def": 45,
            "spAtk": 62,
            "spDef": 53,
            "speed": 35
        },
        "catchRate": 190,
        "baseExp": 55,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/420.png",
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
            "weight": 33,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cherry Pokémon"
        },
        "evolution": {
            "targetId": 421,
            "level": 25
        }
    },
    "421": {
        "id": 421,
        "name": "Cherrim",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 60,
            "def": 70,
            "spAtk": 87,
            "spDef": 78,
            "speed": 85
        },
        "catchRate": 75,
        "baseExp": 158,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/421.png",
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
            "weight": 93,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Blossom Pokémon"
        }
    },
    "422": {
        "id": 422,
        "name": "Shellos",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 76,
            "atk": 48,
            "def": 48,
            "spAtk": 57,
            "spDef": 62,
            "speed": 34
        },
        "catchRate": 190,
        "baseExp": 65,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/422.png",
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
            "weight": 63,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Slug Pokémon"
        },
        "evolution": {
            "targetId": 423,
            "level": 25
        }
    },
    "423": {
        "id": 423,
        "name": "Gastrodon",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 111,
            "atk": 83,
            "def": 68,
            "spAtk": 92,
            "spDef": 82,
            "speed": 39
        },
        "catchRate": 75,
        "baseExp": 166,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/423.png",
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
            "weight": 299,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Slug Pokémon"
        }
    },
    "424": {
        "id": 424,
        "name": "Ambipom",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 100,
            "def": 66,
            "spAtk": 60,
            "spDef": 66,
            "speed": 115
        },
        "catchRate": 45,
        "baseExp": 169,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/424.png",
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
            "weight": 203,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Long Tail Pokémon"
        }
    },
    "425": {
        "id": 425,
        "name": "Drifloon",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 90,
            "atk": 50,
            "def": 34,
            "spAtk": 60,
            "spDef": 44,
            "speed": 70
        },
        "catchRate": 125,
        "baseExp": 70,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen4/425.png",
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
            "genera": "Balloon Pokémon"
        },
        "evolution": {
            "targetId": 426,
            "level": 25
        }
    },
    "426": {
        "id": 426,
        "name": "Drifblim",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 150,
            "atk": 80,
            "def": 44,
            "spAtk": 90,
            "spDef": 54,
            "speed": 80
        },
        "catchRate": 60,
        "baseExp": 174,
        "growthRate": "fast-then-very-slow",
        "spriteInfo": {
            "main": "sprites/gen4/426.png",
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
            "weight": 150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Blimp Pokémon"
        }
    },
    "427": {
        "id": 427,
        "name": "Buneary",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 66,
            "def": 44,
            "spAtk": 44,
            "spDef": 56,
            "speed": 85
        },
        "catchRate": 190,
        "baseExp": 70,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/427.png",
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
            "weight": 55,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rabbit Pokémon"
        },
        "evolution": {
            "targetId": 428,
            "level": 25
        }
    },
    "428": {
        "id": 428,
        "name": "Lopunny",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 76,
            "def": 84,
            "spAtk": 54,
            "spDef": 96,
            "speed": 105
        },
        "catchRate": 60,
        "baseExp": 168,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/428.png",
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
            "weight": 333,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rabbit Pokémon"
        }
    },
    "429": {
        "id": 429,
        "name": "Mismagius",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 60,
            "def": 60,
            "spAtk": 105,
            "spDef": 105,
            "speed": 105
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/429.png",
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
            "weight": 44,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Magical Pokémon"
        }
    },
    "430": {
        "id": 430,
        "name": "Honchkrow",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 100,
            "atk": 125,
            "def": 52,
            "spAtk": 105,
            "spDef": 52,
            "speed": 71
        },
        "catchRate": 30,
        "baseExp": 177,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/430.png",
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
            "weight": 273,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Big Boss Pokémon"
        }
    },
    "431": {
        "id": 431,
        "name": "Glameow",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 49,
            "atk": 55,
            "def": 42,
            "spAtk": 42,
            "spDef": 37,
            "speed": 85
        },
        "catchRate": 190,
        "baseExp": 62,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/431.png",
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
            "weight": 39,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Catty Pokémon"
        },
        "evolution": {
            "targetId": 432,
            "level": 25
        }
    },
    "432": {
        "id": 432,
        "name": "Purugly",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 71,
            "atk": 82,
            "def": 64,
            "spAtk": 64,
            "spDef": 59,
            "speed": 112
        },
        "catchRate": 75,
        "baseExp": 158,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/432.png",
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
            "weight": 438,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tiger Cat Pokémon"
        }
    },
    "433": {
        "id": 433,
        "name": "Chingling",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 30,
            "def": 50,
            "spAtk": 65,
            "spDef": 50,
            "speed": 45
        },
        "catchRate": 120,
        "baseExp": 57,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/433.png",
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
            "weight": 6,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bell Pokémon"
        }
    },
    "434": {
        "id": 434,
        "name": "Stunky",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 63,
            "atk": 63,
            "def": 47,
            "spAtk": 41,
            "spDef": 41,
            "speed": 74
        },
        "catchRate": 225,
        "baseExp": 66,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/434.png",
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
            "weight": 192,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Skunk Pokémon"
        },
        "evolution": {
            "targetId": 435,
            "level": 25
        }
    },
    "435": {
        "id": 435,
        "name": "Skuntank",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 103,
            "atk": 93,
            "def": 67,
            "spAtk": 71,
            "spDef": 61,
            "speed": 84
        },
        "catchRate": 60,
        "baseExp": 168,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/435.png",
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
            "weight": 380,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Skunk Pokémon"
        }
    },
    "436": {
        "id": 436,
        "name": "Bronzor",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 57,
            "atk": 24,
            "def": 86,
            "spAtk": 24,
            "spDef": 86,
            "speed": 23
        },
        "catchRate": 255,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/436.png",
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
            "weight": 605,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bronze Pokémon"
        },
        "evolution": {
            "targetId": 437,
            "level": 25
        }
    },
    "437": {
        "id": 437,
        "name": "Bronzong",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 67,
            "atk": 89,
            "def": 116,
            "spAtk": 79,
            "spDef": 116,
            "speed": 33
        },
        "catchRate": 90,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/437.png",
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
            "weight": 1870,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bronze Bell Pokémon"
        }
    },
    "438": {
        "id": 438,
        "name": "Bonsly",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 80,
            "def": 95,
            "spAtk": 10,
            "spDef": 45,
            "speed": 10
        },
        "catchRate": 255,
        "baseExp": 58,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/438.png",
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
            "weight": 150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bonsai Pokémon"
        }
    },
    "439": {
        "id": 439,
        "name": "Mime-jr",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 20,
            "atk": 25,
            "def": 45,
            "spAtk": 70,
            "spDef": 90,
            "speed": 60
        },
        "catchRate": 145,
        "baseExp": 62,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/439.png",
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
            "weight": 130,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mime Pokémon"
        }
    },
    "440": {
        "id": 440,
        "name": "Happiny",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 100,
            "atk": 5,
            "def": 5,
            "spAtk": 15,
            "spDef": 65,
            "speed": 30
        },
        "catchRate": 130,
        "baseExp": 110,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/440.png",
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
            "weight": 244,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Playhouse Pokémon"
        }
    },
    "441": {
        "id": 441,
        "name": "Chatot",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 76,
            "atk": 65,
            "def": 45,
            "spAtk": 92,
            "spDef": 42,
            "speed": 91
        },
        "catchRate": 30,
        "baseExp": 144,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/441.png",
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
            "weight": 19,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Music Note Pokémon"
        }
    },
    "442": {
        "id": 442,
        "name": "Spiritomb",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 92,
            "def": 108,
            "spAtk": 92,
            "spDef": 108,
            "speed": 35
        },
        "catchRate": 100,
        "baseExp": 170,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/442.png",
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
            "weight": 1080,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Forbidden Pokémon"
        }
    },
    "443": {
        "id": 443,
        "name": "Gible",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 58,
            "atk": 70,
            "def": 45,
            "spAtk": 40,
            "spDef": 45,
            "speed": 42
        },
        "catchRate": 45,
        "baseExp": 60,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/443.png",
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
            "weight": 205,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Land Shark Pokémon"
        },
        "evolution": {
            "targetId": 444,
            "level": 25
        }
    },
    "444": {
        "id": 444,
        "name": "Gabite",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 68,
            "atk": 90,
            "def": 65,
            "spAtk": 50,
            "spDef": 55,
            "speed": 82
        },
        "catchRate": 45,
        "baseExp": 144,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/444.png",
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
            "weight": 560,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cave Pokémon"
        },
        "evolution": {
            "targetId": 445,
            "level": 25
        }
    },
    "445": {
        "id": 445,
        "name": "Garchomp",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 108,
            "atk": 130,
            "def": 95,
            "spAtk": 80,
            "spDef": 85,
            "speed": 102
        },
        "catchRate": 45,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/445.png",
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
            "weight": 950,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mach Pokémon"
        }
    },
    "446": {
        "id": 446,
        "name": "Munchlax",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 135,
            "atk": 85,
            "def": 40,
            "spAtk": 40,
            "spDef": 85,
            "speed": 5
        },
        "catchRate": 50,
        "baseExp": 78,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/446.png",
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
            "weight": 1050,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Big Eater Pokémon"
        }
    },
    "447": {
        "id": 447,
        "name": "Riolu",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 70,
            "def": 40,
            "spAtk": 35,
            "spDef": 40,
            "speed": 60
        },
        "catchRate": 75,
        "baseExp": 57,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/447.png",
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
            "weight": 202,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Emanation Pokémon"
        },
        "evolution": {
            "targetId": 448,
            "level": 25
        }
    },
    "448": {
        "id": 448,
        "name": "Lucario",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 70,
            "atk": 110,
            "def": 70,
            "spAtk": 115,
            "spDef": 70,
            "speed": 90
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/448.png",
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
            "weight": 540,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Aura Pokémon"
        }
    },
    "449": {
        "id": 449,
        "name": "Hippopotas",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 68,
            "atk": 72,
            "def": 78,
            "spAtk": 38,
            "spDef": 42,
            "speed": 32
        },
        "catchRate": 140,
        "baseExp": 66,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/449.png",
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
            "weight": 495,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hippo Pokémon"
        },
        "evolution": {
            "targetId": 450,
            "level": 25
        }
    },
    "450": {
        "id": 450,
        "name": "Hippowdon",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 108,
            "atk": 112,
            "def": 118,
            "spAtk": 68,
            "spDef": 72,
            "speed": 47
        },
        "catchRate": 60,
        "baseExp": 184,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/450.png",
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
            "weight": 3000,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Heavyweight Pokémon"
        }
    },
    "451": {
        "id": 451,
        "name": "Skorupi",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 50,
            "def": 90,
            "spAtk": 30,
            "spDef": 55,
            "speed": 65
        },
        "catchRate": 120,
        "baseExp": 66,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/451.png",
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
            "genera": "Scorpion Pokémon"
        },
        "evolution": {
            "targetId": 452,
            "level": 25
        }
    },
    "452": {
        "id": 452,
        "name": "Drapion",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 90,
            "def": 110,
            "spAtk": 60,
            "spDef": 75,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 175,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/452.png",
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
            "weight": 615,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ogre Scorpion Pokémon"
        }
    },
    "453": {
        "id": 453,
        "name": "Croagunk",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 48,
            "atk": 61,
            "def": 40,
            "spAtk": 61,
            "spDef": 40,
            "speed": 50
        },
        "catchRate": 140,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/453.png",
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
            "weight": 230,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Toxic Mouth Pokémon"
        },
        "evolution": {
            "targetId": 454,
            "level": 25
        }
    },
    "454": {
        "id": 454,
        "name": "Toxicroak",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 83,
            "atk": 106,
            "def": 65,
            "spAtk": 86,
            "spDef": 65,
            "speed": 85
        },
        "catchRate": 75,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/454.png",
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
            "weight": 444,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Toxic Mouth Pokémon"
        }
    },
    "455": {
        "id": 455,
        "name": "Carnivine",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 74,
            "atk": 100,
            "def": 72,
            "spAtk": 90,
            "spDef": 72,
            "speed": 46
        },
        "catchRate": 200,
        "baseExp": 159,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/455.png",
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
            "weight": 270,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bug Catcher Pokémon"
        }
    },
    "456": {
        "id": 456,
        "name": "Finneon",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 49,
            "atk": 49,
            "def": 56,
            "spAtk": 49,
            "spDef": 61,
            "speed": 66
        },
        "catchRate": 190,
        "baseExp": 66,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen4/456.png",
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
            "weight": 70,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wing Fish Pokémon"
        },
        "evolution": {
            "targetId": 457,
            "level": 25
        }
    },
    "457": {
        "id": 457,
        "name": "Lumineon",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 69,
            "atk": 69,
            "def": 76,
            "spAtk": 69,
            "spDef": 86,
            "speed": 91
        },
        "catchRate": 75,
        "baseExp": 161,
        "growthRate": "slow-then-very-fast",
        "spriteInfo": {
            "main": "sprites/gen4/457.png",
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
            "weight": 240,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Neon Pokémon"
        }
    },
    "458": {
        "id": 458,
        "name": "Mantyke",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 20,
            "def": 50,
            "spAtk": 60,
            "spDef": 120,
            "speed": 50
        },
        "catchRate": 25,
        "baseExp": 69,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/458.png",
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
            "weight": 650,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Kite Pokémon"
        }
    },
    "459": {
        "id": 459,
        "name": "Snover",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 62,
            "def": 50,
            "spAtk": 62,
            "spDef": 60,
            "speed": 40
        },
        "catchRate": 120,
        "baseExp": 67,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/459.png",
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
            "weight": 505,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Frost Tree Pokémon"
        },
        "evolution": {
            "targetId": 460,
            "level": 25
        }
    },
    "460": {
        "id": 460,
        "name": "Abomasnow",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 92,
            "def": 75,
            "spAtk": 92,
            "spDef": 85,
            "speed": 60
        },
        "catchRate": 60,
        "baseExp": 173,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/460.png",
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
            "height": 22,
            "weight": 1355,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Frost Tree Pokémon"
        }
    },
    "461": {
        "id": 461,
        "name": "Weavile",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 70,
            "atk": 120,
            "def": 65,
            "spAtk": 45,
            "spDef": 85,
            "speed": 125
        },
        "catchRate": 45,
        "baseExp": 179,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/461.png",
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
            "weight": 340,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sharp Claw Pokémon"
        }
    },
    "462": {
        "id": 462,
        "name": "Magnezone",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 70,
            "atk": 70,
            "def": 115,
            "spAtk": 130,
            "spDef": 90,
            "speed": 60
        },
        "catchRate": 30,
        "baseExp": 241,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/462.png",
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
            "weight": 1800,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Magnet Area Pokémon"
        }
    },
    "463": {
        "id": 463,
        "name": "Lickilicky",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 110,
            "atk": 85,
            "def": 95,
            "spAtk": 80,
            "spDef": 95,
            "speed": 50
        },
        "catchRate": 30,
        "baseExp": 180,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/463.png",
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
            "weight": 1400,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Licking Pokémon"
        }
    },
    "464": {
        "id": 464,
        "name": "Rhyperior",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 115,
            "atk": 140,
            "def": 130,
            "spAtk": 55,
            "spDef": 55,
            "speed": 40
        },
        "catchRate": 30,
        "baseExp": 241,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/464.png",
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
            "height": 24,
            "weight": 2828,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Drill Pokémon"
        }
    },
    "465": {
        "id": 465,
        "name": "Tangrowth",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 100,
            "atk": 100,
            "def": 125,
            "spAtk": 110,
            "spDef": 50,
            "speed": 50
        },
        "catchRate": 30,
        "baseExp": 187,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/465.png",
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
            "weight": 1286,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Vine Pokémon"
        }
    },
    "466": {
        "id": 466,
        "name": "Electivire",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 75,
            "atk": 123,
            "def": 67,
            "spAtk": 95,
            "spDef": 85,
            "speed": 95
        },
        "catchRate": 30,
        "baseExp": 243,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/466.png",
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
            "weight": 1386,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Thunderbolt Pokémon"
        }
    },
    "467": {
        "id": 467,
        "name": "Magmortar",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 75,
            "atk": 95,
            "def": 67,
            "spAtk": 125,
            "spDef": 95,
            "speed": 83
        },
        "catchRate": 30,
        "baseExp": 243,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/467.png",
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
            "weight": 680,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Blast Pokémon"
        }
    },
    "468": {
        "id": 468,
        "name": "Togekiss",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 85,
            "atk": 50,
            "def": 95,
            "spAtk": 120,
            "spDef": 115,
            "speed": 80
        },
        "catchRate": 30,
        "baseExp": 245,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/468.png",
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
            "weight": 380,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Jubilee Pokémon"
        }
    },
    "469": {
        "id": 469,
        "name": "Yanmega",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 86,
            "atk": 76,
            "def": 86,
            "spAtk": 116,
            "spDef": 56,
            "speed": 95
        },
        "catchRate": 30,
        "baseExp": 180,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/469.png",
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
            "weight": 515,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ogre Darner Pokémon"
        }
    },
    "470": {
        "id": 470,
        "name": "Leafeon",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 65,
            "atk": 110,
            "def": 130,
            "spAtk": 60,
            "spDef": 65,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/470.png",
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
            "weight": 255,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Verdant Pokémon"
        }
    },
    "471": {
        "id": 471,
        "name": "Glaceon",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 65,
            "atk": 60,
            "def": 110,
            "spAtk": 130,
            "spDef": 95,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/471.png",
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
            "weight": 259,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fresh Snow Pokémon"
        }
    },
    "472": {
        "id": 472,
        "name": "Gliscor",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 75,
            "atk": 95,
            "def": 125,
            "spAtk": 45,
            "spDef": 75,
            "speed": 95
        },
        "catchRate": 30,
        "baseExp": 179,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/472.png",
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
            "weight": 425,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fang Scorpion Pokémon"
        }
    },
    "473": {
        "id": 473,
        "name": "Mamoswine",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 110,
            "atk": 130,
            "def": 80,
            "spAtk": 70,
            "spDef": 60,
            "speed": 80
        },
        "catchRate": 50,
        "baseExp": 239,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/473.png",
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
            "height": 25,
            "weight": 2910,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Twin Tusk Pokémon"
        }
    },
    "474": {
        "id": 474,
        "name": "Porygon-z",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 85,
            "atk": 80,
            "def": 70,
            "spAtk": 135,
            "spDef": 75,
            "speed": 90
        },
        "catchRate": 30,
        "baseExp": 241,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/474.png",
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
            "weight": 340,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Virtual Pokémon"
        }
    },
    "475": {
        "id": 475,
        "name": "Gallade",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 68,
            "atk": 125,
            "def": 65,
            "spAtk": 65,
            "spDef": 115,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 233,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/475.png",
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
            "weight": 520,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Blade Pokémon"
        }
    },
    "476": {
        "id": 476,
        "name": "Probopass",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 60,
            "atk": 55,
            "def": 145,
            "spAtk": 75,
            "spDef": 150,
            "speed": 40
        },
        "catchRate": 60,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/476.png",
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
            "weight": 3400,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Compass Pokémon"
        }
    },
    "477": {
        "id": 477,
        "name": "Dusknoir",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 45,
            "atk": 100,
            "def": 135,
            "spAtk": 65,
            "spDef": 135,
            "speed": 45
        },
        "catchRate": 45,
        "baseExp": 236,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen4/477.png",
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
            "height": 22,
            "weight": 1066,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Gripper Pokémon"
        }
    },
    "478": {
        "id": 478,
        "name": "Froslass",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 80,
            "def": 70,
            "spAtk": 80,
            "spDef": 70,
            "speed": 110
        },
        "catchRate": 75,
        "baseExp": 168,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/478.png",
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
            "weight": 266,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Snow Land Pokémon"
        }
    },
    "479": {
        "id": 479,
        "name": "Rotom",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 50,
            "def": 77,
            "spAtk": 95,
            "spDef": 77,
            "speed": 91
        },
        "catchRate": 45,
        "baseExp": 154,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen4/479.png",
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
            "weight": 3,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Plasma Pokémon"
        }
    },
    "480": {
        "id": 480,
        "name": "Uxie",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 75,
            "atk": 75,
            "def": 130,
            "spAtk": 75,
            "spDef": 130,
            "speed": 95
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/480.png",
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
            "weight": 3,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Knowledge Pokémon"
        }
    },
    "481": {
        "id": 481,
        "name": "Mesprit",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 105,
            "def": 105,
            "spAtk": 105,
            "spDef": 105,
            "speed": 80
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/481.png",
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
            "weight": 3,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Emotion Pokémon"
        }
    },
    "482": {
        "id": 482,
        "name": "Azelf",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 75,
            "atk": 125,
            "def": 70,
            "spAtk": 125,
            "spDef": 70,
            "speed": 115
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/482.png",
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
            "weight": 3,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Willpower Pokémon"
        }
    },
    "483": {
        "id": 483,
        "name": "Dialga",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 100,
            "atk": 120,
            "def": 120,
            "spAtk": 150,
            "spDef": 100,
            "speed": 90
        },
        "catchRate": 3,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/483.png",
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
            "height": 54,
            "weight": 6830,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Temporal Pokémon"
        }
    },
    "484": {
        "id": 484,
        "name": "Palkia",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 90,
            "atk": 120,
            "def": 100,
            "spAtk": 150,
            "spDef": 120,
            "speed": 100
        },
        "catchRate": 3,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/484.png",
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
            "height": 42,
            "weight": 3360,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Spatial Pokémon"
        }
    },
    "485": {
        "id": 485,
        "name": "Heatran",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 91,
            "atk": 90,
            "def": 106,
            "spAtk": 130,
            "spDef": 106,
            "speed": 77
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/485.png",
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
            "weight": 4300,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Lava Dome Pokémon"
        }
    },
    "486": {
        "id": 486,
        "name": "Regigigas",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 110,
            "atk": 160,
            "def": 110,
            "spAtk": 80,
            "spDef": 110,
            "speed": 100
        },
        "catchRate": 3,
        "baseExp": 302,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/486.png",
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
            "height": 37,
            "weight": 4200,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Colossal Pokémon"
        }
    },
    "487": {
        "id": 487,
        "name": "Giratina",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 150,
            "atk": 100,
            "def": 120,
            "spAtk": 100,
            "spDef": 120,
            "speed": 90
        },
        "catchRate": 3,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/487.png",
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
            "weight": 7500,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Renegade Pokémon"
        }
    },
    "488": {
        "id": 488,
        "name": "Cresselia",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 120,
            "atk": 70,
            "def": 110,
            "spAtk": 75,
            "spDef": 120,
            "speed": 85
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/488.png",
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
            "weight": 856,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Lunar Pokémon"
        }
    },
    "489": {
        "id": 489,
        "name": "Phione",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 80,
            "atk": 80,
            "def": 80,
            "spAtk": 80,
            "spDef": 80,
            "speed": 80
        },
        "catchRate": 30,
        "baseExp": 216,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/489.png",
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
            "weight": 31,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Sea Drifter Pokémon"
        }
    },
    "490": {
        "id": 490,
        "name": "Manaphy",
        "types": [MonsterType.Water],
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
            "main": "sprites/gen4/490.png",
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
            "weight": 14,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Seafaring Pokémon"
        }
    },
    "491": {
        "id": 491,
        "name": "Darkrai",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 70,
            "atk": 90,
            "def": 90,
            "spAtk": 135,
            "spDef": 90,
            "speed": 125
        },
        "catchRate": 3,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/491.png",
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
            "weight": 505,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Pitch-Black Pokémon"
        }
    },
    "492": {
        "id": 492,
        "name": "Shaymin",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 100,
            "atk": 100,
            "def": 100,
            "spAtk": 100,
            "spDef": 100,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 270,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen4/492.png",
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
            "weight": 21,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Gratitude Pokémon"
        }
    },
    "493": {
        "id": 493,
        "name": "Arceus",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 120,
            "atk": 120,
            "def": 120,
            "spAtk": 120,
            "spDef": 120,
            "speed": 120
        },
        "catchRate": 3,
        "baseExp": 324,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen4/493.png",
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
            "height": 32,
            "weight": 3200,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Alpha Pokémon"
        }
    }
};

export const getSpecies = (id: string): IMonsterSpecies | undefined => POKEDEX_GEN4[id];