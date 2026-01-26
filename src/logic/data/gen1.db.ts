import { IMonsterSpecies, MonsterRarity, MonsterType } from '../types/monster.interface';

export const POKEDEX_GEN1: Record<string, IMonsterSpecies> = {
    "1": {
        "id": 1,
        "name": "Bulbasaur",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 49,
            "def": 49,
            "spAtk": 65,
            "spDef": 65,
            "speed": 45
        },
        "catchRate": 45,
        "baseExp": 64,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/1.png",
            "frameSize": {
                "width": 96,
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
            "weight": 69,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Seed Pokémon"
        },
        "evolution": {
            "targetId": 2,
            "level": 25
        }
    },
    "2": {
        "id": 2,
        "name": "Ivysaur",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 62,
            "def": 63,
            "spAtk": 80,
            "spDef": 80,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/2.png",
            "frameSize": {
                "width": 96,
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
            "weight": 130,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Seed Pokémon"
        },
        "evolution": {
            "targetId": 3,
            "level": 25
        }
    },
    "3": {
        "id": 3,
        "name": "Venusaur",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 82,
            "def": 83,
            "spAtk": 100,
            "spDef": 100,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 236,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/3.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Seed Pokémon"
        }
    },
    "4": {
        "id": 4,
        "name": "Charmander",
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
            "main": "sprites/gen1/4.png",
            "frameSize": {
                "width": 96,
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
            "weight": 85,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Lizard Pokémon"
        },
        "evolution": {
            "targetId": 5,
            "level": 25
        }
    },
    "5": {
        "id": 5,
        "name": "Charmeleon",
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
            "main": "sprites/gen1/5.png",
            "frameSize": {
                "width": 96,
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
            "weight": 190,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flame Pokémon"
        },
        "evolution": {
            "targetId": 6,
            "level": 25
        }
    },
    "6": {
        "id": 6,
        "name": "Charizard",
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
            "main": "sprites/gen1/6.png",
            "frameSize": {
                "width": 96,
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
            "weight": 905,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flame Pokémon"
        }
    },
    "7": {
        "id": 7,
        "name": "Squirtle",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 44,
            "atk": 48,
            "def": 65,
            "spAtk": 50,
            "spDef": 64,
            "speed": 43
        },
        "catchRate": 45,
        "baseExp": 63,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/7.png",
            "frameSize": {
                "width": 96,
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
            "weight": 90,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tiny Turtle Pokémon"
        },
        "evolution": {
            "targetId": 8,
            "level": 25
        }
    },
    "8": {
        "id": 8,
        "name": "Wartortle",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 59,
            "atk": 63,
            "def": 80,
            "spAtk": 65,
            "spDef": 80,
            "speed": 58
        },
        "catchRate": 45,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/8.png",
            "frameSize": {
                "width": 96,
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
            "weight": 225,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Turtle Pokémon"
        },
        "evolution": {
            "targetId": 9,
            "level": 25
        }
    },
    "9": {
        "id": 9,
        "name": "Blastoise",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 79,
            "atk": 83,
            "def": 100,
            "spAtk": 85,
            "spDef": 105,
            "speed": 78
        },
        "catchRate": 45,
        "baseExp": 239,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/9.png",
            "frameSize": {
                "width": 96,
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
            "weight": 855,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shellfish Pokémon"
        }
    },
    "10": {
        "id": 10,
        "name": "Caterpie",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 30,
            "def": 35,
            "spAtk": 20,
            "spDef": 20,
            "speed": 45
        },
        "catchRate": 255,
        "baseExp": 39,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/10.png",
            "frameSize": {
                "width": 96,
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
            "weight": 29,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Worm Pokémon"
        },
        "evolution": {
            "targetId": 11,
            "level": 25
        }
    },
    "11": {
        "id": 11,
        "name": "Metapod",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 20,
            "def": 55,
            "spAtk": 25,
            "spDef": 25,
            "speed": 30
        },
        "catchRate": 120,
        "baseExp": 72,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/11.png",
            "frameSize": {
                "width": 96,
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
            "weight": 99,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cocoon Pokémon"
        },
        "evolution": {
            "targetId": 12,
            "level": 25
        }
    },
    "12": {
        "id": 12,
        "name": "Butterfree",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 45,
            "def": 50,
            "spAtk": 90,
            "spDef": 80,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 178,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/12.png",
            "frameSize": {
                "width": 96,
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
            "weight": 320,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Butterfly Pokémon"
        }
    },
    "13": {
        "id": 13,
        "name": "Weedle",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 35,
            "def": 30,
            "spAtk": 20,
            "spDef": 20,
            "speed": 50
        },
        "catchRate": 255,
        "baseExp": 39,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/13.png",
            "frameSize": {
                "width": 96,
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
            "weight": 32,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hairy Bug Pokémon"
        },
        "evolution": {
            "targetId": 14,
            "level": 25
        }
    },
    "14": {
        "id": 14,
        "name": "Kakuna",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 25,
            "def": 50,
            "spAtk": 25,
            "spDef": 25,
            "speed": 35
        },
        "catchRate": 120,
        "baseExp": 72,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/14.png",
            "frameSize": {
                "width": 96,
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
            "targetId": 15,
            "level": 25
        }
    },
    "15": {
        "id": 15,
        "name": "Beedrill",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 65,
            "atk": 90,
            "def": 40,
            "spAtk": 45,
            "spDef": 80,
            "speed": 75
        },
        "catchRate": 45,
        "baseExp": 178,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/15.png",
            "frameSize": {
                "width": 96,
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
            "weight": 295,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Bee Pokémon"
        }
    },
    "16": {
        "id": 16,
        "name": "Pidgey",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 45,
            "def": 40,
            "spAtk": 35,
            "spDef": 35,
            "speed": 56
        },
        "catchRate": 255,
        "baseExp": 50,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/16.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Tiny Bird Pokémon"
        },
        "evolution": {
            "targetId": 17,
            "level": 25
        }
    },
    "17": {
        "id": 17,
        "name": "Pidgeotto",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 63,
            "atk": 60,
            "def": 55,
            "spAtk": 50,
            "spDef": 50,
            "speed": 71
        },
        "catchRate": 120,
        "baseExp": 122,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/17.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bird Pokémon"
        },
        "evolution": {
            "targetId": 18,
            "level": 25
        }
    },
    "18": {
        "id": 18,
        "name": "Pidgeot",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 83,
            "atk": 80,
            "def": 75,
            "spAtk": 70,
            "spDef": 70,
            "speed": 101
        },
        "catchRate": 45,
        "baseExp": 216,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/18.png",
            "frameSize": {
                "width": 96,
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
            "weight": 395,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bird Pokémon"
        }
    },
    "19": {
        "id": 19,
        "name": "Rattata",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 56,
            "def": 35,
            "spAtk": 25,
            "spDef": 35,
            "speed": 72
        },
        "catchRate": 255,
        "baseExp": 51,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/19.png",
            "frameSize": {
                "width": 96,
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
            "weight": 35,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mouse Pokémon"
        },
        "evolution": {
            "targetId": 20,
            "level": 25
        }
    },
    "20": {
        "id": 20,
        "name": "Raticate",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 81,
            "def": 60,
            "spAtk": 50,
            "spDef": 70,
            "speed": 97
        },
        "catchRate": 127,
        "baseExp": 145,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/20.png",
            "frameSize": {
                "width": 96,
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
            "weight": 185,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mouse Pokémon"
        }
    },
    "21": {
        "id": 21,
        "name": "Spearow",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 60,
            "def": 30,
            "spAtk": 31,
            "spDef": 31,
            "speed": 70
        },
        "catchRate": 255,
        "baseExp": 52,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/21.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Tiny Bird Pokémon"
        },
        "evolution": {
            "targetId": 22,
            "level": 25
        }
    },
    "22": {
        "id": 22,
        "name": "Fearow",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 90,
            "def": 65,
            "spAtk": 61,
            "spDef": 61,
            "speed": 100
        },
        "catchRate": 90,
        "baseExp": 155,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/22.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Beak Pokémon"
        }
    },
    "23": {
        "id": 23,
        "name": "Ekans",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 60,
            "def": 44,
            "spAtk": 40,
            "spDef": 54,
            "speed": 55
        },
        "catchRate": 255,
        "baseExp": 58,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/23.png",
            "frameSize": {
                "width": 96,
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
            "weight": 69,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Snake Pokémon"
        },
        "evolution": {
            "targetId": 24,
            "level": 25
        }
    },
    "24": {
        "id": 24,
        "name": "Arbok",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 95,
            "def": 69,
            "spAtk": 65,
            "spDef": 79,
            "speed": 80
        },
        "catchRate": 90,
        "baseExp": 157,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/24.png",
            "frameSize": {
                "width": 96,
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
            "weight": 650,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Cobra Pokémon"
        }
    },
    "25": {
        "id": 25,
        "name": "Pikachu",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 55,
            "def": 40,
            "spAtk": 50,
            "spDef": 50,
            "speed": 90
        },
        "catchRate": 190,
        "baseExp": 112,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/25.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Mouse Pokémon"
        },
        "evolution": {
            "targetId": 26,
            "level": 25
        }
    },
    "26": {
        "id": 26,
        "name": "Raichu",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 90,
            "def": 55,
            "spAtk": 90,
            "spDef": 80,
            "speed": 110
        },
        "catchRate": 75,
        "baseExp": 218,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/26.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mouse Pokémon"
        }
    },
    "27": {
        "id": 27,
        "name": "Sandshrew",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 75,
            "def": 85,
            "spAtk": 20,
            "spDef": 30,
            "speed": 40
        },
        "catchRate": 255,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/27.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Mouse Pokémon"
        },
        "evolution": {
            "targetId": 28,
            "level": 25
        }
    },
    "28": {
        "id": 28,
        "name": "Sandslash",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 100,
            "def": 110,
            "spAtk": 45,
            "spDef": 55,
            "speed": 65
        },
        "catchRate": 90,
        "baseExp": 158,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/28.png",
            "frameSize": {
                "width": 96,
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
            "weight": 295,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mouse Pokémon"
        }
    },
    "29": {
        "id": 29,
        "name": "Nidoran-f",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 47,
            "def": 52,
            "spAtk": 40,
            "spDef": 40,
            "speed": 41
        },
        "catchRate": 235,
        "baseExp": 55,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/29.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Poison Pin Pokémon"
        },
        "evolution": {
            "targetId": 30,
            "level": 25
        }
    },
    "30": {
        "id": 30,
        "name": "Nidorina",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 62,
            "def": 67,
            "spAtk": 55,
            "spDef": 55,
            "speed": 56
        },
        "catchRate": 120,
        "baseExp": 128,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/30.png",
            "frameSize": {
                "width": 96,
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
            "weight": 200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Pin Pokémon"
        },
        "evolution": {
            "targetId": 31,
            "level": 25
        }
    },
    "31": {
        "id": 31,
        "name": "Nidoqueen",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 90,
            "atk": 92,
            "def": 87,
            "spAtk": 75,
            "spDef": 85,
            "speed": 76
        },
        "catchRate": 45,
        "baseExp": 227,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/31.png",
            "frameSize": {
                "width": 96,
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
            "weight": 600,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Drill Pokémon"
        }
    },
    "32": {
        "id": 32,
        "name": "Nidoran-m",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 46,
            "atk": 57,
            "def": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 50
        },
        "catchRate": 235,
        "baseExp": 55,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/32.png",
            "frameSize": {
                "width": 96,
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
            "weight": 90,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Pin Pokémon"
        },
        "evolution": {
            "targetId": 33,
            "level": 25
        }
    },
    "33": {
        "id": 33,
        "name": "Nidorino",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 61,
            "atk": 72,
            "def": 57,
            "spAtk": 55,
            "spDef": 55,
            "speed": 65
        },
        "catchRate": 120,
        "baseExp": 128,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/33.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Poison Pin Pokémon"
        },
        "evolution": {
            "targetId": 34,
            "level": 25
        }
    },
    "34": {
        "id": 34,
        "name": "Nidoking",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 81,
            "atk": 102,
            "def": 77,
            "spAtk": 85,
            "spDef": 75,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 227,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/34.png",
            "frameSize": {
                "width": 96,
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
            "weight": 620,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Drill Pokémon"
        }
    },
    "35": {
        "id": 35,
        "name": "Clefairy",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 45,
            "def": 48,
            "spAtk": 60,
            "spDef": 65,
            "speed": 35
        },
        "catchRate": 150,
        "baseExp": 113,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen1/35.png",
            "frameSize": {
                "width": 96,
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
            "weight": 75,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fairy Pokémon"
        },
        "evolution": {
            "targetId": 36,
            "level": 25
        }
    },
    "36": {
        "id": 36,
        "name": "Clefable",
        "types": [MonsterType.Fairy],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 95,
            "atk": 70,
            "def": 73,
            "spAtk": 95,
            "spDef": 90,
            "speed": 60
        },
        "catchRate": 25,
        "baseExp": 217,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen1/36.png",
            "frameSize": {
                "width": 96,
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
            "weight": 400,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fairy Pokémon"
        }
    },
    "37": {
        "id": 37,
        "name": "Vulpix",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 38,
            "atk": 41,
            "def": 40,
            "spAtk": 50,
            "spDef": 65,
            "speed": 65
        },
        "catchRate": 190,
        "baseExp": 60,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/37.png",
            "frameSize": {
                "width": 96,
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
            "weight": 99,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fox Pokémon"
        },
        "evolution": {
            "targetId": 38,
            "level": 25
        }
    },
    "38": {
        "id": 38,
        "name": "Ninetales",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 73,
            "atk": 76,
            "def": 75,
            "spAtk": 81,
            "spDef": 100,
            "speed": 100
        },
        "catchRate": 75,
        "baseExp": 177,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/38.png",
            "frameSize": {
                "width": 96,
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
            "weight": 199,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fox Pokémon"
        }
    },
    "39": {
        "id": 39,
        "name": "Jigglypuff",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 115,
            "atk": 45,
            "def": 20,
            "spAtk": 45,
            "spDef": 25,
            "speed": 20
        },
        "catchRate": 170,
        "baseExp": 95,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen1/39.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Balloon Pokémon"
        },
        "evolution": {
            "targetId": 40,
            "level": 25
        }
    },
    "40": {
        "id": 40,
        "name": "Wigglytuff",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 140,
            "atk": 70,
            "def": 45,
            "spAtk": 85,
            "spDef": 50,
            "speed": 45
        },
        "catchRate": 50,
        "baseExp": 196,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen1/40.png",
            "frameSize": {
                "width": 96,
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
            "weight": 120,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Balloon Pokémon"
        }
    },
    "41": {
        "id": 41,
        "name": "Zubat",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 45,
            "def": 35,
            "spAtk": 30,
            "spDef": 40,
            "speed": 55
        },
        "catchRate": 255,
        "baseExp": 49,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/41.png",
            "frameSize": {
                "width": 96,
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
            "weight": 75,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bat Pokémon"
        },
        "evolution": {
            "targetId": 42,
            "level": 25
        }
    },
    "42": {
        "id": 42,
        "name": "Golbat",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 80,
            "def": 70,
            "spAtk": 65,
            "spDef": 75,
            "speed": 90
        },
        "catchRate": 90,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/42.png",
            "frameSize": {
                "width": 96,
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
            "weight": 550,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bat Pokémon"
        }
    },
    "43": {
        "id": 43,
        "name": "Oddish",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 50,
            "def": 55,
            "spAtk": 75,
            "spDef": 65,
            "speed": 30
        },
        "catchRate": 255,
        "baseExp": 64,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/43.png",
            "frameSize": {
                "width": 96,
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
            "weight": 54,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Weed Pokémon"
        },
        "evolution": {
            "targetId": 44,
            "level": 25
        }
    },
    "44": {
        "id": 44,
        "name": "Gloom",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 65,
            "def": 70,
            "spAtk": 85,
            "spDef": 75,
            "speed": 40
        },
        "catchRate": 120,
        "baseExp": 138,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/44.png",
            "frameSize": {
                "width": 96,
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
            "weight": 86,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Weed Pokémon"
        },
        "evolution": {
            "targetId": 45,
            "level": 25
        }
    },
    "45": {
        "id": 45,
        "name": "Vileplume",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 80,
            "def": 85,
            "spAtk": 110,
            "spDef": 90,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 221,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/45.png",
            "frameSize": {
                "width": 96,
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
            "weight": 186,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flower Pokémon"
        }
    },
    "46": {
        "id": 46,
        "name": "Paras",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 70,
            "def": 55,
            "spAtk": 45,
            "spDef": 55,
            "speed": 25
        },
        "catchRate": 190,
        "baseExp": 57,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/46.png",
            "frameSize": {
                "width": 96,
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
            "weight": 54,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mushroom Pokémon"
        },
        "evolution": {
            "targetId": 47,
            "level": 25
        }
    },
    "47": {
        "id": 47,
        "name": "Parasect",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 95,
            "def": 80,
            "spAtk": 60,
            "spDef": 80,
            "speed": 30
        },
        "catchRate": 75,
        "baseExp": 142,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/47.png",
            "frameSize": {
                "width": 96,
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
            "weight": 295,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mushroom Pokémon"
        }
    },
    "48": {
        "id": 48,
        "name": "Venonat",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 55,
            "def": 50,
            "spAtk": 40,
            "spDef": 55,
            "speed": 45
        },
        "catchRate": 190,
        "baseExp": 61,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/48.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Insect Pokémon"
        },
        "evolution": {
            "targetId": 49,
            "level": 25
        }
    },
    "49": {
        "id": 49,
        "name": "Venomoth",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 65,
            "def": 60,
            "spAtk": 90,
            "spDef": 75,
            "speed": 90
        },
        "catchRate": 75,
        "baseExp": 158,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/49.png",
            "frameSize": {
                "width": 96,
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
            "weight": 125,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Moth Pokémon"
        }
    },
    "50": {
        "id": 50,
        "name": "Diglett",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 10,
            "atk": 55,
            "def": 25,
            "spAtk": 35,
            "spDef": 45,
            "speed": 95
        },
        "catchRate": 255,
        "baseExp": 53,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/50.png",
            "frameSize": {
                "width": 96,
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
            "weight": 8,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mole Pokémon"
        },
        "evolution": {
            "targetId": 51,
            "level": 25
        }
    },
    "51": {
        "id": 51,
        "name": "Dugtrio",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 35,
            "atk": 100,
            "def": 50,
            "spAtk": 50,
            "spDef": 70,
            "speed": 120
        },
        "catchRate": 50,
        "baseExp": 149,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/51.png",
            "frameSize": {
                "width": 96,
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
            "weight": 333,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mole Pokémon"
        }
    },
    "52": {
        "id": 52,
        "name": "Meowth",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 45,
            "def": 35,
            "spAtk": 40,
            "spDef": 40,
            "speed": 90
        },
        "catchRate": 255,
        "baseExp": 58,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/52.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Scratch Cat Pokémon"
        },
        "evolution": {
            "targetId": 53,
            "level": 25
        }
    },
    "53": {
        "id": 53,
        "name": "Persian",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 70,
            "def": 60,
            "spAtk": 65,
            "spDef": 65,
            "speed": 115
        },
        "catchRate": 90,
        "baseExp": 154,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/53.png",
            "frameSize": {
                "width": 96,
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
            "weight": 320,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Classy Cat Pokémon"
        }
    },
    "54": {
        "id": 54,
        "name": "Psyduck",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 52,
            "def": 48,
            "spAtk": 65,
            "spDef": 50,
            "speed": 55
        },
        "catchRate": 190,
        "baseExp": 64,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/54.png",
            "frameSize": {
                "width": 96,
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
            "weight": 196,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Duck Pokémon"
        },
        "evolution": {
            "targetId": 55,
            "level": 25
        }
    },
    "55": {
        "id": 55,
        "name": "Golduck",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 82,
            "def": 78,
            "spAtk": 95,
            "spDef": 80,
            "speed": 85
        },
        "catchRate": 75,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/55.png",
            "frameSize": {
                "width": 96,
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
            "weight": 766,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Duck Pokémon"
        }
    },
    "56": {
        "id": 56,
        "name": "Mankey",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 80,
            "def": 35,
            "spAtk": 35,
            "spDef": 45,
            "speed": 70
        },
        "catchRate": 190,
        "baseExp": 61,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/56.png",
            "frameSize": {
                "width": 96,
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
            "weight": 280,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Pig Monkey Pokémon"
        },
        "evolution": {
            "targetId": 57,
            "level": 25
        }
    },
    "57": {
        "id": 57,
        "name": "Primeape",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 105,
            "def": 60,
            "spAtk": 60,
            "spDef": 70,
            "speed": 95
        },
        "catchRate": 75,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/57.png",
            "frameSize": {
                "width": 96,
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
            "weight": 320,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Pig Monkey Pokémon"
        }
    },
    "58": {
        "id": 58,
        "name": "Growlithe",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 70,
            "def": 45,
            "spAtk": 70,
            "spDef": 50,
            "speed": 60
        },
        "catchRate": 190,
        "baseExp": 70,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/58.png",
            "frameSize": {
                "width": 96,
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
            "weight": 190,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Puppy Pokémon"
        },
        "evolution": {
            "targetId": 59,
            "level": 25
        }
    },
    "59": {
        "id": 59,
        "name": "Arcanine",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 90,
            "atk": 110,
            "def": 80,
            "spAtk": 100,
            "spDef": 80,
            "speed": 95
        },
        "catchRate": 75,
        "baseExp": 194,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/59.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1550,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Legendary Pokémon"
        }
    },
    "60": {
        "id": 60,
        "name": "Poliwag",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 50,
            "def": 40,
            "spAtk": 40,
            "spDef": 40,
            "speed": 90
        },
        "catchRate": 255,
        "baseExp": 60,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/60.png",
            "frameSize": {
                "width": 96,
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
            "weight": 124,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tadpole Pokémon"
        },
        "evolution": {
            "targetId": 61,
            "level": 25
        }
    },
    "61": {
        "id": 61,
        "name": "Poliwhirl",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 65,
            "atk": 65,
            "def": 65,
            "spAtk": 50,
            "spDef": 50,
            "speed": 90
        },
        "catchRate": 120,
        "baseExp": 135,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/61.png",
            "frameSize": {
                "width": 96,
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
            "weight": 200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tadpole Pokémon"
        },
        "evolution": {
            "targetId": 62,
            "level": 25
        }
    },
    "62": {
        "id": 62,
        "name": "Poliwrath",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 90,
            "atk": 95,
            "def": 95,
            "spAtk": 70,
            "spDef": 90,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 230,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/62.png",
            "frameSize": {
                "width": 96,
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
            "weight": 540,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Tadpole Pokémon"
        }
    },
    "63": {
        "id": 63,
        "name": "Abra",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 25,
            "atk": 20,
            "def": 15,
            "spAtk": 105,
            "spDef": 55,
            "speed": 90
        },
        "catchRate": 200,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/63.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Psi Pokémon"
        },
        "evolution": {
            "targetId": 64,
            "level": 25
        }
    },
    "64": {
        "id": 64,
        "name": "Kadabra",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 35,
            "def": 30,
            "spAtk": 120,
            "spDef": 70,
            "speed": 105
        },
        "catchRate": 100,
        "baseExp": 140,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/64.png",
            "frameSize": {
                "width": 96,
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
            "weight": 565,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Psi Pokémon"
        },
        "evolution": {
            "targetId": 65,
            "level": 25
        }
    },
    "65": {
        "id": 65,
        "name": "Alakazam",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 50,
            "def": 45,
            "spAtk": 135,
            "spDef": 95,
            "speed": 120
        },
        "catchRate": 50,
        "baseExp": 225,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/65.png",
            "frameSize": {
                "width": 96,
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
            "weight": 480,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Psi Pokémon"
        }
    },
    "66": {
        "id": 66,
        "name": "Machop",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 70,
            "atk": 80,
            "def": 50,
            "spAtk": 35,
            "spDef": 35,
            "speed": 35
        },
        "catchRate": 180,
        "baseExp": 61,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/66.png",
            "frameSize": {
                "width": 96,
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
            "weight": 195,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Superpower Pokémon"
        },
        "evolution": {
            "targetId": 67,
            "level": 25
        }
    },
    "67": {
        "id": 67,
        "name": "Machoke",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 100,
            "def": 70,
            "spAtk": 50,
            "spDef": 60,
            "speed": 45
        },
        "catchRate": 90,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/67.png",
            "frameSize": {
                "width": 96,
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
            "weight": 705,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Superpower Pokémon"
        },
        "evolution": {
            "targetId": 68,
            "level": 25
        }
    },
    "68": {
        "id": 68,
        "name": "Machamp",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 90,
            "atk": 130,
            "def": 80,
            "spAtk": 65,
            "spDef": 85,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 227,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/68.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Superpower Pokémon"
        }
    },
    "69": {
        "id": 69,
        "name": "Bellsprout",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 75,
            "def": 35,
            "spAtk": 70,
            "spDef": 30,
            "speed": 40
        },
        "catchRate": 255,
        "baseExp": 60,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/69.png",
            "frameSize": {
                "width": 96,
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
            "weight": 40,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flower Pokémon"
        },
        "evolution": {
            "targetId": 70,
            "level": 25
        }
    },
    "70": {
        "id": 70,
        "name": "Weepinbell",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 65,
            "atk": 90,
            "def": 50,
            "spAtk": 85,
            "spDef": 45,
            "speed": 55
        },
        "catchRate": 120,
        "baseExp": 137,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/70.png",
            "frameSize": {
                "width": 96,
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
            "weight": 64,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flycatcher Pokémon"
        },
        "evolution": {
            "targetId": 71,
            "level": 25
        }
    },
    "71": {
        "id": 71,
        "name": "Victreebel",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 105,
            "def": 65,
            "spAtk": 100,
            "spDef": 70,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 221,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/71.png",
            "frameSize": {
                "width": 96,
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
            "weight": 155,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flycatcher Pokémon"
        }
    },
    "72": {
        "id": 72,
        "name": "Tentacool",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 40,
            "def": 35,
            "spAtk": 50,
            "spDef": 100,
            "speed": 70
        },
        "catchRate": 190,
        "baseExp": 67,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/72.png",
            "frameSize": {
                "width": 96,
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
            "weight": 455,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Jellyfish Pokémon"
        },
        "evolution": {
            "targetId": 73,
            "level": 25
        }
    },
    "73": {
        "id": 73,
        "name": "Tentacruel",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 70,
            "def": 65,
            "spAtk": 80,
            "spDef": 120,
            "speed": 100
        },
        "catchRate": 60,
        "baseExp": 180,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/73.png",
            "frameSize": {
                "width": 96,
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
            "weight": 550,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Jellyfish Pokémon"
        }
    },
    "74": {
        "id": 74,
        "name": "Geodude",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 80,
            "def": 100,
            "spAtk": 30,
            "spDef": 30,
            "speed": 20
        },
        "catchRate": 255,
        "baseExp": 60,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/74.png",
            "frameSize": {
                "width": 96,
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
            "weight": 200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rock Pokémon"
        },
        "evolution": {
            "targetId": 75,
            "level": 25
        }
    },
    "75": {
        "id": 75,
        "name": "Graveler",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 95,
            "def": 115,
            "spAtk": 45,
            "spDef": 45,
            "speed": 35
        },
        "catchRate": 120,
        "baseExp": 137,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/75.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1050,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rock Pokémon"
        },
        "evolution": {
            "targetId": 76,
            "level": 25
        }
    },
    "76": {
        "id": 76,
        "name": "Golem",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 120,
            "def": 130,
            "spAtk": 55,
            "spDef": 65,
            "speed": 45
        },
        "catchRate": 45,
        "baseExp": 223,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/76.png",
            "frameSize": {
                "width": 96,
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
            "weight": 3000,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Megaton Pokémon"
        }
    },
    "77": {
        "id": 77,
        "name": "Ponyta",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 85,
            "def": 55,
            "spAtk": 65,
            "spDef": 65,
            "speed": 90
        },
        "catchRate": 190,
        "baseExp": 82,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/77.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fire Horse Pokémon"
        },
        "evolution": {
            "targetId": 78,
            "level": 25
        }
    },
    "78": {
        "id": 78,
        "name": "Rapidash",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 100,
            "def": 70,
            "spAtk": 80,
            "spDef": 80,
            "speed": 105
        },
        "catchRate": 60,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/78.png",
            "frameSize": {
                "width": 96,
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
            "weight": 950,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fire Horse Pokémon"
        }
    },
    "79": {
        "id": 79,
        "name": "Slowpoke",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 90,
            "atk": 65,
            "def": 65,
            "spAtk": 40,
            "spDef": 40,
            "speed": 15
        },
        "catchRate": 190,
        "baseExp": 63,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/79.png",
            "frameSize": {
                "width": 96,
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
            "weight": 360,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dopey Pokémon"
        },
        "evolution": {
            "targetId": 80,
            "level": 25
        }
    },
    "80": {
        "id": 80,
        "name": "Slowbro",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 95,
            "atk": 75,
            "def": 110,
            "spAtk": 100,
            "spDef": 80,
            "speed": 30
        },
        "catchRate": 75,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/80.png",
            "frameSize": {
                "width": 96,
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
            "weight": 785,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hermit Crab Pokémon"
        }
    },
    "81": {
        "id": 81,
        "name": "Magnemite",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 25,
            "atk": 35,
            "def": 70,
            "spAtk": 95,
            "spDef": 55,
            "speed": 45
        },
        "catchRate": 190,
        "baseExp": 65,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/81.png",
            "frameSize": {
                "width": 96,
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
            "weight": 60,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Magnet Pokémon"
        },
        "evolution": {
            "targetId": 82,
            "level": 25
        }
    },
    "82": {
        "id": 82,
        "name": "Magneton",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 60,
            "def": 95,
            "spAtk": 120,
            "spDef": 70,
            "speed": 70
        },
        "catchRate": 60,
        "baseExp": 163,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/82.png",
            "frameSize": {
                "width": 96,
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
            "weight": 600,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Magnet Pokémon"
        }
    },
    "83": {
        "id": 83,
        "name": "Farfetchd",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 52,
            "atk": 90,
            "def": 55,
            "spAtk": 58,
            "spDef": 62,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 132,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/83.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Wild Duck Pokémon"
        }
    },
    "84": {
        "id": 84,
        "name": "Doduo",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 85,
            "def": 45,
            "spAtk": 35,
            "spDef": 35,
            "speed": 75
        },
        "catchRate": 190,
        "baseExp": 62,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/84.png",
            "frameSize": {
                "width": 96,
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
            "weight": 392,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Twin Bird Pokémon"
        },
        "evolution": {
            "targetId": 85,
            "level": 25
        }
    },
    "85": {
        "id": 85,
        "name": "Dodrio",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 110,
            "def": 70,
            "spAtk": 60,
            "spDef": 60,
            "speed": 110
        },
        "catchRate": 45,
        "baseExp": 165,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/85.png",
            "frameSize": {
                "width": 96,
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
            "weight": 852,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Triple Bird Pokémon"
        }
    },
    "86": {
        "id": 86,
        "name": "Seel",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 65,
            "atk": 45,
            "def": 55,
            "spAtk": 45,
            "spDef": 70,
            "speed": 45
        },
        "catchRate": 190,
        "baseExp": 65,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/86.png",
            "frameSize": {
                "width": 96,
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
            "weight": 900,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Lion Pokémon"
        },
        "evolution": {
            "targetId": 87,
            "level": 25
        }
    },
    "87": {
        "id": 87,
        "name": "Dewgong",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 90,
            "atk": 70,
            "def": 80,
            "spAtk": 70,
            "spDef": 95,
            "speed": 70
        },
        "catchRate": 75,
        "baseExp": 166,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/87.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sea Lion Pokémon"
        }
    },
    "88": {
        "id": 88,
        "name": "Grimer",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 80,
            "atk": 80,
            "def": 50,
            "spAtk": 40,
            "spDef": 50,
            "speed": 25
        },
        "catchRate": 190,
        "baseExp": 65,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/88.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sludge Pokémon"
        },
        "evolution": {
            "targetId": 89,
            "level": 25
        }
    },
    "89": {
        "id": 89,
        "name": "Muk",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 105,
            "atk": 105,
            "def": 75,
            "spAtk": 65,
            "spDef": 100,
            "speed": 50
        },
        "catchRate": 75,
        "baseExp": 175,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/89.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sludge Pokémon"
        }
    },
    "90": {
        "id": 90,
        "name": "Shellder",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 65,
            "def": 100,
            "spAtk": 45,
            "spDef": 25,
            "speed": 40
        },
        "catchRate": 190,
        "baseExp": 61,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/90.png",
            "frameSize": {
                "width": 96,
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
            "weight": 40,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bivalve Pokémon"
        },
        "evolution": {
            "targetId": 91,
            "level": 25
        }
    },
    "91": {
        "id": 91,
        "name": "Cloyster",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 50,
            "atk": 95,
            "def": 180,
            "spAtk": 85,
            "spDef": 45,
            "speed": 70
        },
        "catchRate": 60,
        "baseExp": 184,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/91.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1325,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bivalve Pokémon"
        }
    },
    "92": {
        "id": 92,
        "name": "Gastly",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 35,
            "def": 30,
            "spAtk": 100,
            "spDef": 35,
            "speed": 80
        },
        "catchRate": 190,
        "baseExp": 62,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/92.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Gas Pokémon"
        },
        "evolution": {
            "targetId": 93,
            "level": 25
        }
    },
    "93": {
        "id": 93,
        "name": "Haunter",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 45,
            "atk": 50,
            "def": 45,
            "spAtk": 115,
            "spDef": 55,
            "speed": 95
        },
        "catchRate": 90,
        "baseExp": 142,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/93.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Gas Pokémon"
        },
        "evolution": {
            "targetId": 94,
            "level": 25
        }
    },
    "94": {
        "id": 94,
        "name": "Gengar",
        "types": [MonsterType.Ghost],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 65,
            "def": 60,
            "spAtk": 130,
            "spDef": 75,
            "speed": 110
        },
        "catchRate": 45,
        "baseExp": 225,
        "growthRate": "medium-slow",
        "spriteInfo": {
            "main": "sprites/gen1/94.png",
            "frameSize": {
                "width": 96,
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
            "weight": 405,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shadow Pokémon"
        }
    },
    "95": {
        "id": 95,
        "name": "Onix",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 45,
            "def": 160,
            "spAtk": 30,
            "spDef": 45,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 77,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/95.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 88,
            "weight": 2100,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Rock Snake Pokémon"
        }
    },
    "96": {
        "id": 96,
        "name": "Drowzee",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 48,
            "def": 45,
            "spAtk": 43,
            "spDef": 90,
            "speed": 42
        },
        "catchRate": 190,
        "baseExp": 66,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/96.png",
            "frameSize": {
                "width": 96,
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
            "weight": 324,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hypnosis Pokémon"
        },
        "evolution": {
            "targetId": 97,
            "level": 25
        }
    },
    "97": {
        "id": 97,
        "name": "Hypno",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 85,
            "atk": 73,
            "def": 70,
            "spAtk": 73,
            "spDef": 115,
            "speed": 67
        },
        "catchRate": 75,
        "baseExp": 169,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/97.png",
            "frameSize": {
                "width": 96,
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
            "weight": 756,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Hypnosis Pokémon"
        }
    },
    "98": {
        "id": 98,
        "name": "Krabby",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 105,
            "def": 90,
            "spAtk": 25,
            "spDef": 25,
            "speed": 50
        },
        "catchRate": 225,
        "baseExp": 65,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/98.png",
            "frameSize": {
                "width": 96,
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
            "genera": "River Crab Pokémon"
        },
        "evolution": {
            "targetId": 99,
            "level": 25
        }
    },
    "99": {
        "id": 99,
        "name": "Kingler",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 130,
            "def": 115,
            "spAtk": 50,
            "spDef": 50,
            "speed": 75
        },
        "catchRate": 60,
        "baseExp": 166,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/99.png",
            "frameSize": {
                "width": 96,
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
            "weight": 600,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Pincer Pokémon"
        }
    },
    "100": {
        "id": 100,
        "name": "Voltorb",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 30,
            "def": 50,
            "spAtk": 55,
            "spDef": 55,
            "speed": 100
        },
        "catchRate": 190,
        "baseExp": 66,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/100.png",
            "frameSize": {
                "width": 96,
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
            "weight": 104,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ball Pokémon"
        },
        "evolution": {
            "targetId": 101,
            "level": 25
        }
    },
    "101": {
        "id": 101,
        "name": "Electrode",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 50,
            "def": 70,
            "spAtk": 80,
            "spDef": 80,
            "speed": 150
        },
        "catchRate": 60,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/101.png",
            "frameSize": {
                "width": 96,
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
            "weight": 666,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Ball Pokémon"
        }
    },
    "102": {
        "id": 102,
        "name": "Exeggcute",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 60,
            "atk": 40,
            "def": 80,
            "spAtk": 60,
            "spDef": 45,
            "speed": 40
        },
        "catchRate": 90,
        "baseExp": 65,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/102.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Egg Pokémon"
        },
        "evolution": {
            "targetId": 103,
            "level": 25
        }
    },
    "103": {
        "id": 103,
        "name": "Exeggutor",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 95,
            "atk": 95,
            "def": 85,
            "spAtk": 125,
            "spDef": 75,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 186,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/103.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Coconut Pokémon"
        }
    },
    "104": {
        "id": 104,
        "name": "Cubone",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 50,
            "atk": 50,
            "def": 95,
            "spAtk": 40,
            "spDef": 50,
            "speed": 35
        },
        "catchRate": 190,
        "baseExp": 64,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/104.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Lonely Pokémon"
        },
        "evolution": {
            "targetId": 105,
            "level": 25
        }
    },
    "105": {
        "id": 105,
        "name": "Marowak",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 80,
            "def": 110,
            "spAtk": 50,
            "spDef": 80,
            "speed": 45
        },
        "catchRate": 75,
        "baseExp": 149,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/105.png",
            "frameSize": {
                "width": 96,
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
            "weight": 450,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bone Keeper Pokémon"
        }
    },
    "106": {
        "id": 106,
        "name": "Hitmonlee",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 120,
            "def": 53,
            "spAtk": 35,
            "spDef": 110,
            "speed": 87
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/106.png",
            "frameSize": {
                "width": 96,
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
            "weight": 498,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Kicking Pokémon"
        }
    },
    "107": {
        "id": 107,
        "name": "Hitmonchan",
        "types": [MonsterType.Fighting],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 50,
            "atk": 105,
            "def": 79,
            "spAtk": 35,
            "spDef": 110,
            "speed": 76
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/107.png",
            "frameSize": {
                "width": 96,
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
            "weight": 502,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Punching Pokémon"
        }
    },
    "108": {
        "id": 108,
        "name": "Lickitung",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 90,
            "atk": 55,
            "def": 75,
            "spAtk": 60,
            "spDef": 75,
            "speed": 30
        },
        "catchRate": 45,
        "baseExp": 77,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/108.png",
            "frameSize": {
                "width": 96,
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
            "weight": 655,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Licking Pokémon"
        }
    },
    "109": {
        "id": 109,
        "name": "Koffing",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 40,
            "atk": 65,
            "def": 95,
            "spAtk": 60,
            "spDef": 45,
            "speed": 35
        },
        "catchRate": 190,
        "baseExp": 68,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/109.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Poison Gas Pokémon"
        },
        "evolution": {
            "targetId": 110,
            "level": 25
        }
    },
    "110": {
        "id": 110,
        "name": "Weezing",
        "types": [MonsterType.Poison],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 90,
            "def": 120,
            "spAtk": 85,
            "spDef": 70,
            "speed": 60
        },
        "catchRate": 60,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/110.png",
            "frameSize": {
                "width": 96,
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
            "weight": 95,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Poison Gas Pokémon"
        }
    },
    "111": {
        "id": 111,
        "name": "Rhyhorn",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 80,
            "atk": 85,
            "def": 95,
            "spAtk": 30,
            "spDef": 30,
            "speed": 25
        },
        "catchRate": 120,
        "baseExp": 69,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/111.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spikes Pokémon"
        },
        "evolution": {
            "targetId": 112,
            "level": 25
        }
    },
    "112": {
        "id": 112,
        "name": "Rhydon",
        "types": [MonsterType.Ground],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 105,
            "atk": 130,
            "def": 120,
            "spAtk": 45,
            "spDef": 45,
            "speed": 40
        },
        "catchRate": 60,
        "baseExp": 170,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/112.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Drill Pokémon"
        }
    },
    "113": {
        "id": 113,
        "name": "Chansey",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 250,
            "atk": 5,
            "def": 5,
            "spAtk": 35,
            "spDef": 105,
            "speed": 50
        },
        "catchRate": 30,
        "baseExp": 395,
        "growthRate": "fast",
        "spriteInfo": {
            "main": "sprites/gen1/113.png",
            "frameSize": {
                "width": 96,
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
            "weight": 346,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Egg Pokémon"
        }
    },
    "114": {
        "id": 114,
        "name": "Tangela",
        "types": [MonsterType.Grass],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 55,
            "def": 115,
            "spAtk": 100,
            "spDef": 40,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 87,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/114.png",
            "frameSize": {
                "width": 96,
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
            "weight": 350,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Vine Pokémon"
        }
    },
    "115": {
        "id": 115,
        "name": "Kangaskhan",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 105,
            "atk": 95,
            "def": 80,
            "spAtk": 40,
            "spDef": 80,
            "speed": 90
        },
        "catchRate": 45,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/115.png",
            "frameSize": {
                "width": 96,
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
            "weight": 800,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Parent Pokémon"
        }
    },
    "116": {
        "id": 116,
        "name": "Horsea",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 40,
            "def": 70,
            "spAtk": 70,
            "spDef": 25,
            "speed": 60
        },
        "catchRate": 225,
        "baseExp": 59,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/116.png",
            "frameSize": {
                "width": 96,
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
            "weight": 80,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        },
        "evolution": {
            "targetId": 117,
            "level": 25
        }
    },
    "117": {
        "id": 117,
        "name": "Seadra",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 55,
            "atk": 65,
            "def": 95,
            "spAtk": 95,
            "spDef": 45,
            "speed": 85
        },
        "catchRate": 75,
        "baseExp": 154,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/117.png",
            "frameSize": {
                "width": 96,
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
            "weight": 250,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        }
    },
    "118": {
        "id": 118,
        "name": "Goldeen",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 45,
            "atk": 67,
            "def": 60,
            "spAtk": 35,
            "spDef": 50,
            "speed": 63
        },
        "catchRate": 225,
        "baseExp": 64,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/118.png",
            "frameSize": {
                "width": 96,
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
            "weight": 150,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Goldfish Pokémon"
        },
        "evolution": {
            "targetId": 119,
            "level": 25
        }
    },
    "119": {
        "id": 119,
        "name": "Seaking",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 80,
            "atk": 92,
            "def": 65,
            "spAtk": 65,
            "spDef": 80,
            "speed": 68
        },
        "catchRate": 60,
        "baseExp": 158,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/119.png",
            "frameSize": {
                "width": 96,
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
            "weight": 390,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Goldfish Pokémon"
        }
    },
    "120": {
        "id": 120,
        "name": "Staryu",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 45,
            "def": 55,
            "spAtk": 70,
            "spDef": 55,
            "speed": 85
        },
        "catchRate": 225,
        "baseExp": 68,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/120.png",
            "frameSize": {
                "width": 96,
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
            "weight": 345,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Star Shape Pokémon"
        },
        "evolution": {
            "targetId": 121,
            "level": 25
        }
    },
    "121": {
        "id": 121,
        "name": "Starmie",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 60,
            "atk": 75,
            "def": 85,
            "spAtk": 100,
            "spDef": 85,
            "speed": 115
        },
        "catchRate": 60,
        "baseExp": 182,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/121.png",
            "frameSize": {
                "width": 96,
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
            "weight": 800,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mysterious Pokémon"
        }
    },
    "122": {
        "id": 122,
        "name": "Mr-mime",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 40,
            "atk": 45,
            "def": 65,
            "spAtk": 100,
            "spDef": 120,
            "speed": 90
        },
        "catchRate": 45,
        "baseExp": 161,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/122.png",
            "frameSize": {
                "width": 96,
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
            "weight": 545,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Barrier Pokémon"
        }
    },
    "123": {
        "id": 123,
        "name": "Scyther",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 110,
            "def": 80,
            "spAtk": 55,
            "spDef": 80,
            "speed": 105
        },
        "catchRate": 45,
        "baseExp": 100,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/123.png",
            "frameSize": {
                "width": 96,
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
            "weight": 560,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Mantis Pokémon"
        }
    },
    "124": {
        "id": 124,
        "name": "Jynx",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 50,
            "def": 35,
            "spAtk": 115,
            "spDef": 95,
            "speed": 95
        },
        "catchRate": 45,
        "baseExp": 159,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/124.png",
            "frameSize": {
                "width": 96,
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
            "weight": 406,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Human Shape Pokémon"
        }
    },
    "125": {
        "id": 125,
        "name": "Electabuzz",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 83,
            "def": 57,
            "spAtk": 95,
            "spDef": 85,
            "speed": 105
        },
        "catchRate": 45,
        "baseExp": 172,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/125.png",
            "frameSize": {
                "width": 96,
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
            "weight": 300,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Electric Pokémon"
        }
    },
    "126": {
        "id": 126,
        "name": "Magmar",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 95,
            "def": 57,
            "spAtk": 100,
            "spDef": 85,
            "speed": 93
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/126.png",
            "frameSize": {
                "width": 96,
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
            "weight": 445,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spitfire Pokémon"
        }
    },
    "127": {
        "id": 127,
        "name": "Pinsir",
        "types": [MonsterType.Bug],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 65,
            "atk": 125,
            "def": 100,
            "spAtk": 55,
            "spDef": 70,
            "speed": 85
        },
        "catchRate": 45,
        "baseExp": 175,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/127.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Stag Beetle Pokémon"
        }
    },
    "128": {
        "id": 128,
        "name": "Tauros",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 75,
            "atk": 100,
            "def": 95,
            "spAtk": 40,
            "spDef": 70,
            "speed": 110
        },
        "catchRate": 45,
        "baseExp": 172,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/128.png",
            "frameSize": {
                "width": 96,
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
            "weight": 884,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Wild Bull Pokémon"
        }
    },
    "129": {
        "id": 129,
        "name": "Magikarp",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 20,
            "atk": 10,
            "def": 55,
            "spAtk": 15,
            "spDef": 20,
            "speed": 80
        },
        "catchRate": 255,
        "baseExp": 40,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/129.png",
            "frameSize": {
                "width": 96,
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
            "weight": 100,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fish Pokémon"
        },
        "evolution": {
            "targetId": 130,
            "level": 25
        }
    },
    "130": {
        "id": 130,
        "name": "Gyarados",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 95,
            "atk": 125,
            "def": 79,
            "spAtk": 60,
            "spDef": 100,
            "speed": 81
        },
        "catchRate": 45,
        "baseExp": 189,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/130.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 65,
            "weight": 2350,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Atrocious Pokémon"
        }
    },
    "131": {
        "id": 131,
        "name": "Lapras",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 130,
            "atk": 85,
            "def": 80,
            "spAtk": 85,
            "spDef": 95,
            "speed": 60
        },
        "catchRate": 45,
        "baseExp": 187,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/131.png",
            "frameSize": {
                "width": 96,
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
            "weight": 2200,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Transport Pokémon"
        }
    },
    "132": {
        "id": 132,
        "name": "Ditto",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 48,
            "atk": 48,
            "def": 48,
            "spAtk": 48,
            "spDef": 48,
            "speed": 48
        },
        "catchRate": 35,
        "baseExp": 101,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/132.png",
            "frameSize": {
                "width": 96,
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
            "weight": 40,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Transform Pokémon"
        }
    },
    "133": {
        "id": 133,
        "name": "Eevee",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 55,
            "atk": 55,
            "def": 50,
            "spAtk": 45,
            "spDef": 65,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 65,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/133.png",
            "frameSize": {
                "width": 96,
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
            "weight": 65,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Evolution Pokémon"
        },
        "evolution": {
            "targetId": 136,
            "level": 25
        }
    },
    "134": {
        "id": 134,
        "name": "Vaporeon",
        "types": [MonsterType.Water],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 130,
            "atk": 65,
            "def": 60,
            "spAtk": 110,
            "spDef": 95,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/134.png",
            "frameSize": {
                "width": 96,
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
            "weight": 290,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Bubble Jet Pokémon"
        }
    },
    "135": {
        "id": 135,
        "name": "Jolteon",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 65,
            "atk": 65,
            "def": 60,
            "spAtk": 110,
            "spDef": 95,
            "speed": 130
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/135.png",
            "frameSize": {
                "width": 96,
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
            "weight": 245,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Lightning Pokémon"
        }
    },
    "136": {
        "id": 136,
        "name": "Flareon",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 65,
            "atk": 130,
            "def": 60,
            "spAtk": 95,
            "spDef": 110,
            "speed": 65
        },
        "catchRate": 45,
        "baseExp": 184,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/136.png",
            "frameSize": {
                "width": 96,
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
            "weight": 250,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Flame Pokémon"
        }
    },
    "137": {
        "id": 137,
        "name": "Porygon",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 65,
            "atk": 60,
            "def": 70,
            "spAtk": 85,
            "spDef": 75,
            "speed": 40
        },
        "catchRate": 45,
        "baseExp": 79,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/137.png",
            "frameSize": {
                "width": 96,
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
            "weight": 365,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Virtual Pokémon"
        }
    },
    "138": {
        "id": 138,
        "name": "Omanyte",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 35,
            "atk": 40,
            "def": 100,
            "spAtk": 90,
            "spDef": 55,
            "speed": 35
        },
        "catchRate": 45,
        "baseExp": 71,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/138.png",
            "frameSize": {
                "width": 96,
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
            "weight": 75,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spiral Pokémon"
        },
        "evolution": {
            "targetId": 139,
            "level": 25
        }
    },
    "139": {
        "id": 139,
        "name": "Omastar",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 70,
            "atk": 60,
            "def": 125,
            "spAtk": 115,
            "spDef": 70,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/139.png",
            "frameSize": {
                "width": 96,
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
            "weight": 350,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Spiral Pokémon"
        }
    },
    "140": {
        "id": 140,
        "name": "Kabuto",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 30,
            "atk": 80,
            "def": 90,
            "spAtk": 55,
            "spDef": 45,
            "speed": 55
        },
        "catchRate": 45,
        "baseExp": 71,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/140.png",
            "frameSize": {
                "width": 96,
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
            "weight": 115,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shellfish Pokémon"
        },
        "evolution": {
            "targetId": 141,
            "level": 25
        }
    },
    "141": {
        "id": 141,
        "name": "Kabutops",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 60,
            "atk": 115,
            "def": 105,
            "spAtk": 65,
            "spDef": 70,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 173,
        "growthRate": "medium",
        "spriteInfo": {
            "main": "sprites/gen1/141.png",
            "frameSize": {
                "width": 96,
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
            "weight": 405,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Shellfish Pokémon"
        }
    },
    "142": {
        "id": 142,
        "name": "Aerodactyl",
        "types": [MonsterType.Rock],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 80,
            "atk": 105,
            "def": 65,
            "spAtk": 60,
            "spDef": 75,
            "speed": 130
        },
        "catchRate": 45,
        "baseExp": 180,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/142.png",
            "frameSize": {
                "width": 96,
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
            "weight": 590,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Fossil Pokémon"
        }
    },
    "143": {
        "id": 143,
        "name": "Snorlax",
        "types": [MonsterType.Normal],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 160,
            "atk": 110,
            "def": 65,
            "spAtk": 65,
            "spDef": 110,
            "speed": 30
        },
        "catchRate": 25,
        "baseExp": 189,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/143.png",
            "frameSize": {
                "width": 96,
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
            "weight": 4600,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Sleeping Pokémon"
        }
    },
    "144": {
        "id": 144,
        "name": "Articuno",
        "types": [MonsterType.Ice],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 90,
            "atk": 85,
            "def": 100,
            "spAtk": 95,
            "spDef": 125,
            "speed": 85
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/144.png",
            "frameSize": {
                "width": 96,
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
            "weight": 554,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Freeze Pokémon"
        }
    },
    "145": {
        "id": 145,
        "name": "Zapdos",
        "types": [MonsterType.Electric],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 90,
            "atk": 90,
            "def": 85,
            "spAtk": 125,
            "spDef": 90,
            "speed": 100
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/145.png",
            "frameSize": {
                "width": 96,
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
            "weight": 526,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Electric Pokémon"
        }
    },
    "146": {
        "id": 146,
        "name": "Moltres",
        "types": [MonsterType.Fire],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 90,
            "atk": 100,
            "def": 90,
            "spAtk": 125,
            "spDef": 85,
            "speed": 90
        },
        "catchRate": 3,
        "baseExp": 261,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/146.png",
            "frameSize": {
                "width": 96,
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
            "genera": "Flame Pokémon"
        }
    },
    "147": {
        "id": 147,
        "name": "Dratini",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Common,
        "baseStats": {
            "hp": 41,
            "atk": 64,
            "def": 45,
            "spAtk": 50,
            "spDef": 50,
            "speed": 50
        },
        "catchRate": 45,
        "baseExp": 60,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/147.png",
            "frameSize": {
                "width": 96,
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
            "weight": 33,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        },
        "evolution": {
            "targetId": 148,
            "level": 25
        }
    },
    "148": {
        "id": 148,
        "name": "Dragonair",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Rare,
        "baseStats": {
            "hp": 61,
            "atk": 84,
            "def": 65,
            "spAtk": 70,
            "spDef": 70,
            "speed": 70
        },
        "catchRate": 45,
        "baseExp": 147,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/148.png",
            "frameSize": {
                "width": 96,
                "height": 96
            },
            "animations": {
                "idle": [],
                "walk": [],
                "frameRate": 0
            }
        },
        "meta": {
            "height": 40,
            "weight": 165,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        },
        "evolution": {
            "targetId": 149,
            "level": 25
        }
    },
    "149": {
        "id": 149,
        "name": "Dragonite",
        "types": [MonsterType.Dragon],
        "rarity": MonsterRarity.Epic,
        "baseStats": {
            "hp": 91,
            "atk": 134,
            "def": 95,
            "spAtk": 100,
            "spDef": 100,
            "speed": 80
        },
        "catchRate": 45,
        "baseExp": 270,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/149.png",
            "frameSize": {
                "width": 96,
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
            "weight": 2100,
            "is_legendary": false,
            "is_mythical": false,
            "genera": "Dragon Pokémon"
        }
    },
    "150": {
        "id": 150,
        "name": "Mewtwo",
        "types": [MonsterType.Psychic],
        "rarity": MonsterRarity.Legendary,
        "baseStats": {
            "hp": 106,
            "atk": 110,
            "def": 90,
            "spAtk": 154,
            "spDef": 90,
            "speed": 130
        },
        "catchRate": 3,
        "baseExp": 306,
        "growthRate": "slow",
        "spriteInfo": {
            "main": "sprites/gen1/150.png",
            "frameSize": {
                "width": 96,
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
            "weight": 1220,
            "is_legendary": true,
            "is_mythical": false,
            "genera": "Genetic Pokémon"
        }
    },
    "151": {
        "id": 151,
        "name": "Mew",
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
            "main": "sprites/gen1/151.png",
            "frameSize": {
                "width": 96,
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
            "weight": 40,
            "is_legendary": false,
            "is_mythical": true,
            "genera": "New Species Pokémon"
        }
    }
};

export const getSpecies = (id: string): IMonsterSpecies | undefined => POKEDEX_GEN1[id];