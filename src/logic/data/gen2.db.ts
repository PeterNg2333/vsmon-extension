import { IMonsterSpecies, MonsterRarity, MonsterType } from '../types/monster.interface';

export const POKEDEX_GEN2: Record<string, IMonsterSpecies> = {
    "152": {
        "id": 152,
        "name": "Chikorita",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 49,
            "def": 65,
            "spAtk": 49,
            "spDef": 65,
            "speed": 45
        },
        "catchRate": 45,
        "baseExp": 64,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/152.png",
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
            "weight": 64,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Leaf Pokémon"
        },
        "evolution": {
            "targetId": 153,
            "level": 25
        }
    },
    "153": {
        "id": 153,
        "name": "Bayleef",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 62,
            "def": 80,
            "spAtk": 63,
            "spDef": 80,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/153.png",
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
            "weight": 158,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Leaf Pokémon"
        },
        "evolution": {
            "targetId": 154,
            "level": 25
        }
    },
    "154": {
        "id": 154,
        "name": "Meganium",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 82,
            "def": 100,
            "spAtk": 83,
            "spDef": 100,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 236,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/154.png",
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
            "weight": 1005,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Herb Pokémon"
        }
    },
    "155": {
        "id": 155,
        "name": "Cyndaquil",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 39,
            "atk": 52,
            "def": 43,
            "spAtk": 60,
            "spDef": 50,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/155.png",
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
            "weight": 79,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fire Mouse Pokémon"
        },
        "evolution": {
            "targetId": 156,
            "level": 25
        }
    },
    "156": {
        "id": 156,
        "name": "Quilava",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 58,
            "atk": 64,
            "def": 58,
            "spAtk": 80,
            "spDef": 65,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/156.png",
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
            "weight": 190,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Volcano Pokémon"
        },
        "evolution": {
            "targetId": 157,
            "level": 25
        }
    },
    "157": {
        "id": 157,
        "name": "Typhlosion",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 78,
            "atk": 84,
            "def": 78,
            "spAtk": 109,
            "spDef": 85,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 240,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/157.png",
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
            "weight": 795,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Volcano Pokémon"
        }
    },
    "158": {
        "id": 158,
        "name": "Totodile",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 65,
            "def": 64,
            "spAtk": 44,
            "spDef": 48,
            "speed": 43
        },
        "catchRate": 45,
        "baseExp": 63,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/158.png",
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
            "genera": "Big Jaw Pokémon"
        },
        "evolution": {
            "targetId": 159,
            "level": 25
        }
    },
    "159": {
        "id": 159,
        "name": "Croconaw",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 80,
            "def": 80,
            "spAtk": 59,
            "spDef": 63,
            "speed": 58
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/159.png",
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
            "weight": 250,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Big Jaw Pokémon"
        },
        "evolution": {
            "targetId": 160,
            "level": 25
        }
    },
    "160": {
        "id": 160,
        "name": "Feraligatr",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 85,
            "atk": 105,
            "def": 100,
            "spAtk": 79,
            "spDef": 83,
            "speed": 78
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/160.png",
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
            "weight": 888,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Big Jaw Pokémon"
        }
    },
    "161": {
        "id": 161,
        "name": "Sentret",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 46,
            "def": 34,
            "spAtk": 35,
            "spDef": 45,
            "speed": 20
        },
        "catchRate": 255,
        "baseExp": 43,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/161.png",
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
            "weight": 60,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Scout Pokémon"
        },
        "evolution": {
            "targetId": 162,
            "level": 25
        }
    },
    "162": {
        "id": 162,
        "name": "Furret",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 85,
            "atk": 76,
            "def": 64,
            "spAtk": 45,
            "spDef": 55,
            "speed": 90
        },
        "catchRate": 90,
        "baseExp": 145,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/162.png",
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
            "weight": 325,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Long Body Pokémon"
        }
    },
    "163": {
        "id": 163,
        "name": "Hoothoot",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 30,
            "def": 30,
            "spAtk": 36,
            "spDef": 56,
            "speed": 50
        },
        "catchRate": 255,
        "baseExp": 52,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/163.png",
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
            "weight": 212,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Owl Pokémon"
        },
        "evolution": {
            "targetId": 164,
            "level": 25
        }
    },
    "164": {
        "id": 164,
        "name": "Noctowl",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 100,
            "atk": 50,
            "def": 50,
            "spAtk": 86,
            "spDef": 96,
            "speed": 70
        },
        "catchRate": 90,
        "baseExp": 158,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/164.png",
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
            "weight": 408,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Owl Pokémon"
        }
    },
    "165": {
        "id": 165,
        "name": "Ledyba",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 20,
            "def": 30,
            "spAtk": 40,
            "spDef": 80,
            "speed": 55
        },
        "catchRate": 255,
        "baseExp": 53,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/165.png",
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
            "weight": 108,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Five Star Pokémon"
        },
        "evolution": {
            "targetId": 166,
            "level": 25
        }
    },
    "166": {
        "id": 166,
        "name": "Ledian",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 35,
            "def": 50,
            "spAtk": 55,
            "spDef": 110,
            "speed": 85
        },
        "catchRate": 90,
        "baseExp": 137,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/166.png",
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
            "weight": 356,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Five Star Pokémon"
        }
    },
    "167": {
        "id": 167,
        "name": "Spinarak",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 60,
            "def": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 30
        },
        "catchRate": 255,
        "baseExp": 50,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/167.png",
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
            "weight": 85,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "String Spit Pokémon"
        },
        "evolution": {
            "targetId": 168,
            "level": 25
        }
    },
    "168": {
        "id": 168,
        "name": "Ariados",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 90,
            "def": 70,
            "spAtk": 60,
            "spDef": 70,
            "speed": 40
        },
        "catchRate": 90,
        "baseExp": 140,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/168.png",
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
            "genera": "Long Leg Pokémon"
        }
    },
    "169": {
        "id": 169,
        "name": "Crobat",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 85,
            "atk": 90,
            "def": 80,
            "spAtk": 70,
            "spDef": 80,
            "speed": 130
        },
        "catchRate": 90,
        "baseExp": 241,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/169.png",
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
            "weight": 750,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bat Pokémon"
        }
    },
    "170": {
        "id": 170,
        "name": "Chinchou",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 75,
            "atk": 38,
            "def": 38,
            "spAtk": 56,
            "spDef": 56,
            "speed": 67
        },
        "catchRate": 190,
        "baseExp": 66,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/170.png",
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
            "weight": 120,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Angler Pokémon"
        },
        "evolution": {
            "targetId": 171,
            "level": 25
        }
    },
    "171": {
        "id": 171,
        "name": "Lanturn",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 125,
            "atk": 58,
            "def": 58,
            "spAtk": 76,
            "spDef": 76,
            "speed": 67
        },
        "catchRate": 75,
        "baseExp": 161,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/171.png",
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
            "weight": 225,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Light Pokémon"
        }
    },
    "172": {
        "id": 172,
        "name": "Pichu",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 20,
            "atk": 40,
            "def": 15,
            "spAtk": 35,
            "spDef": 35,
            "speed": 60
        },
        "catchRate": 190,
        "baseExp": 41,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/172.png",
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
            "genera": "Tiny Mouse Pokémon"
        }
    },
    "173": {
        "id": 173,
        "name": "Cleffa",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 25,
            "def": 28,
            "spAtk": 45,
            "spDef": 55,
            "speed": 15
        },
        "catchRate": 150,
        "baseExp": 44,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/173.png",
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
            "weight": 30,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Star Shape Pokémon"
        }
    },
    "174": {
        "id": 174,
        "name": "Igglybuff",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 90,
            "atk": 30,
            "def": 15,
            "spAtk": 40,
            "spDef": 20,
            "speed": 15
        },
        "catchRate": 170,
        "baseExp": 42,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/174.png",
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
            "weight": 10,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Balloon Pokémon"
        }
    },
    "175": {
        "id": 175,
        "name": "Togepi",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 20,
            "def": 65,
            "spAtk": 40,
            "spDef": 65,
            "speed": 20
        },
        "catchRate": 190,
        "baseExp": 49,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/175.png",
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
            "weight": 15,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spike Ball Pokémon"
        },
        "evolution": {
            "targetId": 176,
            "level": 25
        }
    },
    "176": {
        "id": 176,
        "name": "Togetic",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 40,
            "def": 85,
            "spAtk": 80,
            "spDef": 105,
            "speed": 40
        },
        "catchRate": 75,
        "baseExp": 142,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/176.png",
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
            "weight": 32,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Happiness Pokémon"
        }
    },
    "177": {
        "id": 177,
        "name": "Natu",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 50,
            "def": 45,
            "spAtk": 70,
            "spDef": 45,
            "speed": 70
        },
        "catchRate": 190,
        "baseExp": 64,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/177.png",
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
            "genera": "Tiny Bird Pokémon"
        },
        "evolution": {
            "targetId": 178,
            "level": 25
        }
    },
    "178": {
        "id": 178,
        "name": "Xatu",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 75,
            "def": 70,
            "spAtk": 95,
            "spDef": 70,
            "speed": 95
        },
        "catchRate": 75,
        "baseExp": 165,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/178.png",
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
            "weight": 150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mystic Pokémon"
        }
    },
    "179": {
        "id": 179,
        "name": "Mareep",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 40,
            "def": 40,
            "spAtk": 65,
            "spDef": 45,
            "speed": 35
        },
        "catchRate": 235,
        "baseExp": 56,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/179.png",
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
            "weight": 78,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wool Pokémon"
        },
        "evolution": {
            "targetId": 180,
            "level": 25
        }
    },
    "180": {
        "id": 180,
        "name": "Flaaffy",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 55,
            "def": 55,
            "spAtk": 80,
            "spDef": 60,
            "speed": 45
        },
        "catchRate": 120,
        "baseExp": 128,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/180.png",
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
            "weight": 133,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wool Pokémon"
        },
        "evolution": {
            "targetId": 181,
            "level": 25
        }
    },
    "181": {
        "id": 181,
        "name": "Ampharos",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 90,
            "atk": 75,
            "def": 85,
            "spAtk": 115,
            "spDef": 90,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 230,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/181.png",
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
            "weight": 615,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Light Pokémon"
        }
    },
    "182": {
        "id": 182,
        "name": "Bellossom",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 80,
            "def": 95,
            "spAtk": 90,
            "spDef": 100,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 221,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/182.png",
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
            "weight": 58,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flower Pokémon"
        }
    },
    "183": {
        "id": 183,
        "name": "Marill",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 20,
            "def": 50,
            "spAtk": 20,
            "spDef": 50,
            "speed": 40
        },
        "catchRate": 190,
        "baseExp": 88,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/183.png",
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
            "weight": 85,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Aqua Mouse Pokémon"
        },
        "evolution": {
            "targetId": 184,
            "level": 25
        }
    },
    "184": {
        "id": 184,
        "name": "Azumarill",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 100,
            "atk": 50,
            "def": 80,
            "spAtk": 60,
            "spDef": 80,
            "speed": 50
        },
        "catchRate": 75,
        "baseExp": 189,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/184.png",
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
            "weight": 285,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Aqua Rabbit Pokémon"
        }
    },
    "185": {
        "id": 185,
        "name": "Sudowoodo",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 100,
            "def": 115,
            "spAtk": 30,
            "spDef": 65,
            "speed": 30
        },
        "catchRate": 65,
        "baseExp": 144,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/185.png",
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
            "weight": 380,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Imitation Pokémon"
        }
    },
    "186": {
        "id": 186,
        "name": "Politoed",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 75,
            "def": 75,
            "spAtk": 90,
            "spDef": 100,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 225,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/186.png",
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
            "weight": 339,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Frog Pokémon"
        }
    },
    "187": {
        "id": 187,
        "name": "Hoppip",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 35,
            "def": 40,
            "spAtk": 35,
            "spDef": 55,
            "speed": 50
        },
        "catchRate": 255,
        "baseExp": 50,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/187.png",
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
            "weight": 5,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cottonweed Pokémon"
        },
        "evolution": {
            "targetId": 188,
            "level": 25
        }
    },
    "188": {
        "id": 188,
        "name": "Skiploom",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 45,
            "def": 50,
            "spAtk": 45,
            "spDef": 65,
            "speed": 80
        },
        "catchRate": 120,
        "baseExp": 119,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/188.png",
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
            "genera": "Cottonweed Pokémon"
        },
        "evolution": {
            "targetId": 189,
            "level": 25
        }
    },
    "189": {
        "id": 189,
        "name": "Jumpluff",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 55,
            "def": 70,
            "spAtk": 55,
            "spDef": 95,
            "speed": 110
        },
        "catchRate": 45,
        "baseExp": 207,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/189.png",
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
            "weight": 30,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cottonweed Pokémon"
        }
    },
    "190": {
        "id": 190,
        "name": "Aipom",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 70,
            "def": 55,
            "spAtk": 40,
            "spDef": 55,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 72,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/190.png",
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
            "weight": 115,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Long Tail Pokémon"
        }
    },
    "191": {
        "id": 191,
        "name": "Sunkern",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 30,
            "def": 30,
            "spAtk": 30,
            "spDef": 30,
            "speed": 30
        },
        "catchRate": 235,
        "baseExp": 36,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/191.png",
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
            "weight": 18,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Seed Pokémon"
        },
        "evolution": {
            "targetId": 192,
            "level": 25
        }
    },
    "192": {
        "id": 192,
        "name": "Sunflora",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 75,
            "def": 55,
            "spAtk": 105,
            "spDef": 85,
            "speed": 30
        },
        "catchRate": 120,
        "baseExp": 149,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/192.png",
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
            "weight": 85,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sun Pokémon"
        }
    },
    "193": {
        "id": 193,
        "name": "Yanma",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 65,
            "atk": 65,
            "def": 45,
            "spAtk": 75,
            "spDef": 45,
            "speed": 95
        },
        "catchRate": 75,
        "baseExp": 78,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/193.png",
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
            "weight": 380,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Clear Wing Pokémon"
        }
    },
    "194": {
        "id": 194,
        "name": "Wooper",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 45,
            "def": 45,
            "spAtk": 25,
            "spDef": 25,
            "speed": 15
        },
        "catchRate": 255,
        "baseExp": 42,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/194.png",
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
            "weight": 85,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Water Fish Pokémon"
        },
        "evolution": {
            "targetId": 195,
            "level": 25
        }
    },
    "195": {
        "id": 195,
        "name": "Quagsire",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 95,
            "atk": 85,
            "def": 85,
            "spAtk": 65,
            "spDef": 65,
            "speed": 35
        },
        "catchRate": 90,
        "baseExp": 151,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/195.png",
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
            "weight": 750,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Water Fish Pokémon"
        }
    },
    "196": {
        "id": 196,
        "name": "Espeon",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 65,
            "atk": 65,
            "def": 60,
            "spAtk": 130,
            "spDef": 95,
            "speed": 110
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/196.png",
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
            "weight": 265,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sun Pokémon"
        }
    },
    "197": {
        "id": 197,
        "name": "Umbreon",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 95,
            "atk": 65,
            "def": 110,
            "spAtk": 60,
            "spDef": 130,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/197.png",
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
            "weight": 270,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Moonlight Pokémon"
        }
    },
    "198": {
        "id": 198,
        "name": "Murkrow",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 85,
            "def": 42,
            "spAtk": 85,
            "spDef": 42,
            "speed": 91
        },
        "catchRate": 30,
        "baseExp": 81,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/198.png",
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
            "weight": 21,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Darkness Pokémon"
        }
    },
    "199": {
        "id": 199,
        "name": "Slowking",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 95,
            "atk": 75,
            "def": 80,
            "spAtk": 100,
            "spDef": 110,
            "speed": 30
        },
        "catchRate": 70,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/199.png",
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
            "weight": 795,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Royal Pokémon"
        }
    },
    "200": {
        "id": 200,
        "name": "Misdreavus",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 60,
            "def": 60,
            "spAtk": 85,
            "spDef": 85,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 87,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/200.png",
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
            "weight": 10,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Screech Pokémon"
        }
    },
    "201": {
        "id": 201,
        "name": "Unown",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 48,
            "atk": 72,
            "def": 48,
            "spAtk": 72,
            "spDef": 48,
            "speed": 48
        },
        "catchRate": 225,
        "baseExp": 118,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/201.png",
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
            "genera": "Symbol Pokémon"
        }
    },
    "202": {
        "id": 202,
        "name": "Wobbuffet",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 190,
            "atk": 33,
            "def": 58,
            "spAtk": 33,
            "spDef": 58,
            "speed": 33
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/202.png",
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
            "weight": 285,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Patient Pokémon"
        }
    },
    "203": {
        "id": 203,
        "name": "Girafarig",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 80,
            "def": 65,
            "spAtk": 90,
            "spDef": 65,
            "speed": 85
        },
        "catchRate": 60,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/203.png",
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
            "weight": 415,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Long Neck Pokémon"
        }
    },
    "204": {
        "id": 204,
        "name": "Pineco",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 65,
            "def": 90,
            "spAtk": 35,
            "spDef": 35,
            "speed": 15
        },
        "catchRate": 190,
        "baseExp": 58,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/204.png",
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
            "weight": 72,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bagworm Pokémon"
        },
        "evolution": {
            "targetId": 205,
            "level": 25
        }
    },
    "205": {
        "id": 205,
        "name": "Forretress",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 90,
            "def": 140,
            "spAtk": 60,
            "spDef": 60,
            "speed": 40
        },
        "catchRate": 75,
        "baseExp": 163,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/205.png",
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
            "weight": 1258,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bagworm Pokémon"
        }
    },
    "206": {
        "id": 206,
        "name": "Dunsparce",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 100,
            "atk": 70,
            "def": 70,
            "spAtk": 65,
            "spDef": 65,
            "speed": 45
        },
        "catchRate": 190,
        "baseExp": 145,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/206.png",
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
            "weight": 140,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Land Snake Pokémon"
        }
    },
    "207": {
        "id": 207,
        "name": "Gligar",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 75,
            "def": 105,
            "spAtk": 35,
            "spDef": 65,
            "speed": 85
        },
        "catchRate": 60,
        "baseExp": 86,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/207.png",
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
            "weight": 648,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fly Scorpion Pokémon"
        }
    },
    "208": {
        "id": 208,
        "name": "Steelix",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 75,
            "atk": 85,
            "def": 200,
            "spAtk": 55,
            "spDef": 65,
            "speed": 30
        },
        "catchRate": 25,
        "baseExp": 179,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/208.png",
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
            "height": 92,
            "weight": 4000,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Iron Snake Pokémon"
        }
    },
    "209": {
        "id": 209,
        "name": "Snubbull",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 80,
            "def": 50,
            "spAtk": 40,
            "spDef": 40,
            "speed": 30
        },
        "catchRate": 190,
        "baseExp": 60,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/209.png",
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
            "weight": 78,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fairy Pokémon"
        },
        "evolution": {
            "targetId": 210,
            "level": 25
        }
    },
    "210": {
        "id": 210,
        "name": "Granbull",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 120,
            "def": 75,
            "spAtk": 60,
            "spDef": 60,
            "speed": 45
        },
        "catchRate": 75,
        "baseExp": 158,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/210.png",
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
            "weight": 487,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fairy Pokémon"
        }
    },
    "211": {
        "id": 211,
        "name": "Qwilfish",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 95,
            "def": 85,
            "spAtk": 55,
            "spDef": 55,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 88,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/211.png",
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
            "genera": "Balloon Pokémon"
        }
    },
    "212": {
        "id": 212,
        "name": "Scizor",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 130,
            "def": 100,
            "spAtk": 55,
            "spDef": 80,
            "speed": 65
        },
        "catchRate": 25,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/212.png",
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
            "weight": 1180,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Pincer Pokémon"
        }
    },
    "213": {
        "id": 213,
        "name": "Shuckle",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 20,
            "atk": 10,
            "def": 230,
            "spAtk": 10,
            "spDef": 230,
            "speed": 5
        },
        "catchRate": 190,
        "baseExp": 177,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/213.png",
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
            "weight": 205,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mold Pokémon"
        }
    },
    "214": {
        "id": 214,
        "name": "Heracross",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 125,
            "def": 75,
            "spAtk": 40,
            "spDef": 95,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 175,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/214.png",
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
            "weight": 540,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Single Horn Pokémon"
        }
    },
    "215": {
        "id": 215,
        "name": "Sneasel",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 95,
            "def": 55,
            "spAtk": 35,
            "spDef": 75,
            "speed": 115
        },
        "catchRate": 60,
        "baseExp": 86,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen2/215.png",
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
            "weight": 280,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sharp Claw Pokémon"
        }
    },
    "216": {
        "id": 216,
        "name": "Teddiursa",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 80,
            "def": 50,
            "spAtk": 50,
            "spDef": 50,
            "speed": 40
        },
        "catchRate": 120,
        "baseExp": 66,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/216.png",
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
            "weight": 88,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Little Bear Pokémon"
        },
        "evolution": {
            "targetId": 217,
            "level": 25
        }
    },
    "217": {
        "id": 217,
        "name": "Ursaring",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 130,
            "def": 75,
            "spAtk": 75,
            "spDef": 75,
            "speed": 55
        },
        "catchRate": 60,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/217.png",
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
            "weight": 1258,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hibernator Pokémon"
        }
    },
    "218": {
        "id": 218,
        "name": "Slugma",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 40,
            "def": 40,
            "spAtk": 70,
            "spDef": 40,
            "speed": 20
        },
        "catchRate": 190,
        "baseExp": 50,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/218.png",
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
            "weight": 350,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Lava Pokémon"
        },
        "evolution": {
            "targetId": 219,
            "level": 25
        }
    },
    "219": {
        "id": 219,
        "name": "Magcargo",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 50,
            "def": 120,
            "spAtk": 90,
            "spDef": 80,
            "speed": 30
        },
        "catchRate": 75,
        "baseExp": 151,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/219.png",
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
            "weight": 550,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Lava Pokémon"
        }
    },
    "220": {
        "id": 220,
        "name": "Swinub",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 50,
            "def": 40,
            "spAtk": 30,
            "spDef": 30,
            "speed": 50
        },
        "catchRate": 225,
        "baseExp": 50,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/220.png",
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
            "weight": 65,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Pig Pokémon"
        },
        "evolution": {
            "targetId": 221,
            "level": 25
        }
    },
    "221": {
        "id": 221,
        "name": "Piloswine",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 100,
            "atk": 100,
            "def": 80,
            "spAtk": 60,
            "spDef": 60,
            "speed": 50
        },
        "catchRate": 75,
        "baseExp": 158,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/221.png",
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
            "weight": 558,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Swine Pokémon"
        }
    },
    "222": {
        "id": 222,
        "name": "Corsola",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 55,
            "def": 95,
            "spAtk": 65,
            "spDef": 95,
            "speed": 35
        },
        "catchRate": 60,
        "baseExp": 144,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/222.png",
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
            "weight": 50,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Coral Pokémon"
        }
    },
    "223": {
        "id": 223,
        "name": "Remoraid",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 65,
            "def": 35,
            "spAtk": 65,
            "spDef": 35,
            "speed": 65
        },
        "catchRate": 190,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/223.png",
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
            "weight": 120,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Jet Pokémon"
        },
        "evolution": {
            "targetId": 224,
            "level": 25
        }
    },
    "224": {
        "id": 224,
        "name": "Octillery",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 105,
            "def": 75,
            "spAtk": 105,
            "spDef": 75,
            "speed": 45
        },
        "catchRate": 75,
        "baseExp": 168,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/224.png",
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
            "weight": 285,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Jet Pokémon"
        }
    },
    "225": {
        "id": 225,
        "name": "Delibird",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 55,
            "def": 45,
            "spAtk": 65,
            "spDef": 45,
            "speed": 75
        },
        "catchRate": 45,
        "baseExp": 116,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/225.png",
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
            "weight": 160,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Delivery Pokémon"
        }
    },
    "226": {
        "id": 226,
        "name": "Mantine",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 85,
            "atk": 40,
            "def": 70,
            "spAtk": 80,
            "spDef": 140,
            "speed": 70
        },
        "catchRate": 25,
        "baseExp": 170,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/226.png",
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
            "weight": 2200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Kite Pokémon"
        }
    },
    "227": {
        "id": 227,
        "name": "Skarmory",
        "types": [MonsterType.Steel],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 80,
            "def": 140,
            "spAtk": 40,
            "spDef": 70,
            "speed": 70
        },
        "catchRate": 25,
        "baseExp": 163,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/227.png",
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
            "weight": 505,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Armor Bird Pokémon"
        }
    },
    "228": {
        "id": 228,
        "name": "Houndour",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 60,
            "def": 30,
            "spAtk": 80,
            "spDef": 50,
            "speed": 65
        },
        "catchRate": 120,
        "baseExp": 66,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/228.png",
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
            "weight": 108,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dark Pokémon"
        },
        "evolution": {
            "targetId": 229,
            "level": 25
        }
    },
    "229": {
        "id": 229,
        "name": "Houndoom",
        "types": [MonsterType.Dark],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 90,
            "def": 50,
            "spAtk": 110,
            "spDef": 80,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 175,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/229.png",
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
            "weight": 350,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dark Pokémon"
        }
    },
    "230": {
        "id": 230,
        "name": "Kingdra",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 75,
            "atk": 95,
            "def": 95,
            "spAtk": 95,
            "spDef": 95,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 243,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/230.png",
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
            "weight": 1520,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        }
    },
    "231": {
        "id": 231,
        "name": "Phanpy",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 90,
            "atk": 60,
            "def": 60,
            "spAtk": 40,
            "spDef": 40,
            "speed": 40
        },
        "catchRate": 120,
        "baseExp": 66,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/231.png",
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
            "weight": 335,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Long Nose Pokémon"
        },
        "evolution": {
            "targetId": 232,
            "level": 25
        }
    },
    "232": {
        "id": 232,
        "name": "Donphan",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 120,
            "def": 120,
            "spAtk": 60,
            "spDef": 60,
            "speed": 50
        },
        "catchRate": 60,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/232.png",
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
            "weight": 1200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Armor Pokémon"
        }
    },
    "233": {
        "id": 233,
        "name": "Porygon2",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 85,
            "atk": 80,
            "def": 90,
            "spAtk": 105,
            "spDef": 95,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 180,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/233.png",
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
            "weight": 325,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Virtual Pokémon"
        }
    },
    "234": {
        "id": 234,
        "name": "Stantler",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 73,
            "atk": 95,
            "def": 62,
            "spAtk": 85,
            "spDef": 65,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 163,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/234.png",
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
            "weight": 712,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Big Horn Pokémon"
        }
    },
    "235": {
        "id": 235,
        "name": "Smeargle",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 20,
            "def": 35,
            "spAtk": 20,
            "spDef": 45,
            "speed": 75
        },
        "catchRate": 45,
        "baseExp": 88,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/235.png",
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
            "weight": 580,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Painter Pokémon"
        }
    },
    "236": {
        "id": 236,
        "name": "Tyrogue",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 35,
            "def": 35,
            "spAtk": 35,
            "spDef": 35,
            "speed": 35
        },
        "catchRate": 75,
        "baseExp": 42,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/236.png",
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
            "weight": 210,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Scuffle Pokémon"
        },
        "evolution": {
            "targetId": 237,
            "level": 25
        }
    },
    "237": {
        "id": 237,
        "name": "Hitmontop",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 95,
            "def": 95,
            "spAtk": 35,
            "spDef": 110,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/237.png",
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
            "weight": 480,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Handstand Pokémon"
        }
    },
    "238": {
        "id": 238,
        "name": "Smoochum",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 30,
            "def": 15,
            "spAtk": 85,
            "spDef": 65,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 61,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/238.png",
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
            "weight": 60,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Kiss Pokémon"
        }
    },
    "239": {
        "id": 239,
        "name": "Elekid",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 63,
            "def": 37,
            "spAtk": 65,
            "spDef": 55,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 72,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/239.png",
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
            "weight": 235,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Electric Pokémon"
        }
    },
    "240": {
        "id": 240,
        "name": "Magby",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 75,
            "def": 37,
            "spAtk": 70,
            "spDef": 55,
            "speed": 83
        },
        "catchRate": 45,
        "baseExp": 73,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen2/240.png",
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
            "weight": 214,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Live Coal Pokémon"
        }
    },
    "241": {
        "id": 241,
        "name": "Miltank",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 95,
            "atk": 80,
            "def": 105,
            "spAtk": 40,
            "spDef": 70,
            "speed": 100
        },
        "catchRate": 45,
        "baseExp": 172,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/241.png",
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
            "weight": 755,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Milk Cow Pokémon"
        }
    },
    "242": {
        "id": 242,
        "name": "Blissey",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 255,
            "atk": 10,
            "def": 10,
            "spAtk": 75,
            "spDef": 135,
            "speed": 55
        },
        "catchRate": 30,
        "baseExp": 608,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen2/242.png",
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
            "weight": 468,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Happiness Pokémon"
        }
    },
    "243": {
        "id": 243,
        "name": "Raikou",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 90,
            "atk": 85,
            "def": 75,
            "spAtk": 115,
            "spDef": 100,
            "speed": 115
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/243.png",
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
            "weight": 1780,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Thunder Pokémon"
        }
    },
    "244": {
        "id": 244,
        "name": "Entei",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 115,
            "atk": 115,
            "def": 85,
            "spAtk": 90,
            "spDef": 75,
            "speed": 100
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/244.png",
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
            "weight": 1980,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Volcano Pokémon"
        }
    },
    "245": {
        "id": 245,
        "name": "Suicune",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 100,
            "atk": 75,
            "def": 115,
            "spAtk": 90,
            "spDef": 115,
            "speed": 85
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/245.png",
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
            "weight": 1870,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Aurora Pokémon"
        }
    },
    "246": {
        "id": 246,
        "name": "Larvitar",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 64,
            "def": 50,
            "spAtk": 45,
            "spDef": 50,
            "speed": 41
        },
        "catchRate": 45,
        "baseExp": 60,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/246.png",
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
            "weight": 720,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rock Skin Pokémon"
        },
        "evolution": {
            "targetId": 247,
            "level": 25
        }
    },
    "247": {
        "id": 247,
        "name": "Pupitar",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 84,
            "def": 70,
            "spAtk": 65,
            "spDef": 70,
            "speed": 51
        },
        "catchRate": 45,
        "baseExp": 144,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/247.png",
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
            "weight": 1520,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hard Shell Pokémon"
        },
        "evolution": {
            "targetId": 248,
            "level": 25
        }
    },
    "248": {
        "id": 248,
        "name": "Tyranitar",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 100,
            "atk": 134,
            "def": 110,
            "spAtk": 95,
            "spDef": 100,
            "speed": 61
        },
        "catchRate": 45,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/248.png",
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
            "weight": 2020,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Armor Pokémon"
        }
    },
    "249": {
        "id": 249,
        "name": "Lugia",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 106,
            "atk": 90,
            "def": 130,
            "spAtk": 90,
            "spDef": 154,
            "speed": 110
        },
        "catchRate": 3,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/249.png",
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
            "height": 52,
            "weight": 2160,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Diving Pokémon"
        }
    },
    "250": {
        "id": 250,
        "name": "Ho-oh",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 106,
            "atk": 130,
            "def": 90,
            "spAtk": 110,
            "spDef": 154,
            "speed": 90
        },
        "catchRate": 3,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen2/250.png",
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
            "height": 38,
            "weight": 1990,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Rainbow Pokémon"
        }
    },
    "251": {
        "id": 251,
        "name": "Celebi",
        "types": [MonsterType.Psychic],
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
            "main": "sprites/gen2/251.png",
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
            "weight": 50,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "Time Travel Pokémon"
        }
    }
};

export const getSpecies = (id: string): IMonsterSpecies | undefined => POKEDEX_GEN2[id];