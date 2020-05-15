import Class from "../Class"
import Special from "../Special";

export default class Paladin extends Class {

    constructor() {
        super();

        this.Name = "Paladin";
        this.Description = "Through a select, worthy few shines the power of the divine. Called paladins, these noble souls dedicate their swords and lives to the battle against evil. Knights, crusaders, and law-bringers, paladins seek not just to spread divine justice but to embody the teachings of the virtuous deities they serve. In pursuit of their lofty goals, they adhere to ironclad laws of morality and discipline. As reward for their righteousness, these holy champions are blessed with boons to aid them in their quests: powers to banish evil, heal the innocent, and inspire the faithful. Although their convictions might lead them into conflict with the very souls they would save, paladins weather endless challenges of faith and dark temptations, risking their lives to do right and fighting to bring about a brighter future.";
        this.Role = "Paladins serve as beacons for their allies within the chaos of battle. While deadly opponents of evil, they can also empower goodly souls to aid in their crusades. Their magic and martial skills also make them well suited to defending others and blessing the fallen with the strength to continue fighting.";
        this.Alignment = "Lawful good";
        this.HitDie = 10;
        this.ClassSkills = [
            "Craft",
            "Diplomacy",
            "Handle Animal",
            "Heal",
            "Knowledge (nobility)",
            "Knowledge (religion)",
            "Profession",
            "Ride",
            "Sense Motive",
            "Spellcraft"
        ];
        this.SkillPointsPerLevel = 2;
        this.BaseAttackBonus = this.FullBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.BadSave;
        this.Will = this.GoodSave;
        this.Specials = [
            [
                new Special("Aura of good"),
                new Special("detect evil"),
                new Special("smite evil 1/day")
            ],
            [
                new Special("Divine grace"),
                new Special("lay on hands")
            ],
            [
                new Special("Aura of courage"),
                new Special("divine health"),
                this.Mercy
            ],
            [
                new Special("Channel positive energy"),
                new Special("smite evil 2/day")
            ],
            [
                new Special("Divine bond")
            ],
            [
                this.Mercy
            ],
            [
                new Special("Smite evil 3/day")
            ],
            [
                new Special("Aura of resolve")
            ],
            [
                this.Mercy
            ],
            [
                new Special("Smite evil 4/day")
            ],
            [
                new Special("Aura of justice")
            ],
            [
                this.Mercy
            ],
            [
                new Special("Smite evil 5/day")
            ],
            [
                new Special("Aura of faith")
            ],
            [
                this.Mercy
            ],
            [
                new Special("Smite evil 6/day")
            ],
            [
                new Special("Aura of righteousness")
            ],
            [
                this.Mercy
            ],
            [
                new Special("Smite evil 7/day")
            ],
            [
                new Special("Holy champion")
            ]
        ];
    }

    get Mercy() {
        return new Special("Mercy", require('./PaladinMercies.json'));
    }
}