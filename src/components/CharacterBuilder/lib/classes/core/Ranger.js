import Class from '../Class';
import Special from '../Special';

export default class Ranger extends Class {

    constructor() {
        super();

        this.Name = "Ranger";
        this.Description = "For those who relish the thrill of the hunt, there are only predators and prey. Be they scouts, trackers, or bounty hunters, rangers share much in common: unique mastery of specialized weapons, skill at stalking even the most elusive game, and the expertise to defeat a wide range of quarries. Knowledgeable, patient, and skilled hunters, these rangers hound man, beast, and monster alike, gaining insight into the way of the predator, skill in varied environments, and ever more lethal martial prowess. While some track man-eating creatures to protect the frontier, others pursue more cunning game—even fugitives among their own people.";
        this.Role = "Rangers are deft skirmishers, either in melee or at range, capable of skillfully dancing in and out of battle. Their abilities allow them to deal significant harm to specific types of foes, but their skills are valuable against all manner of enemies.";
        this.Alignment = "Any";
        this.HitDie = 10;
        this.ClassSkills = [
            "Climb",
            "Craft",
            "Handle Animal",
            "Heal",
            "Intimidate",
            "Knowledge (dungeoneering)",
            "Knowledge (geography)",
            "Knowledge (nature)",
            "Perception",
            "Profession",
            "Ride",
            "Spellcraft",
            "Stealth",
            "Survival",
            "Swim"
        ];
        this.SkillPointsPerLevel = 6;
        this.BaseAttackBonus = this.FullBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.GoodSave;
        this.Will = this.BadSave;
        this.Specials = [
            [
                new Special("1st favored enemy", this.FavoredEnemies),
                new Special("track"),
                new Special("wild empathy")
            ],
            [
                this.CombatStyles,
                new Special("Combat style feat")
            ],
            [
                new Special("Endurance"),
                new Special("1st favored terrain", this.FavoredTerrains)
            ],
            [
                this.HuntersBond
            ],
            [
                new Special("2nd favored enemy", this.FavoredEnemies)
            ],
            [
                new Special("Combat style feat")
            ],
            [
                new Special("Woodland stride")
            ],
            [
                new Special("Swift tracker"),
                new Special("2nd favored terrain", this.FavoredTerrains)
            ],
            [
                new Special("Evasion")
            ],
            [
                new Special("3rd favored enemy", this.FavoredEnemies),
                new Special("combat style feat")
            ],
            [
                new Special("Quarry")
            ],
            [
                new Special("Camouflage")
            ],
            [
                new Special("3rd favored terrain", this.FavoredTerrains)
            ],
            [
                new Special("Combat style feat")
            ],
            [
                new Special("4th favored enemy", this.FavoredEnemies)
            ],
            [
                new Special("Improved evasion")
            ],
            [
                new Special("Hide in plain sight")
            ],
            [
                new Special("4th favored terrain", this.FavoredTerrains),
                new Special("combat style feat")
            ],
            [
                new Special("Improved quarry")
            ],
            [
                new Special("5th favored enemy", this.FavoredEnemies),
                new Special("master hunter")
            ]
        ];
    }

    get FavoredEnemies() {
        return require('./Specials/RangerFavoredEnemies.json');
    }

    get CombatStyles() {
        return new Special('Combat Style', require('./Specials/RangerCombatStyles.json'));
    }

    get FavoredTerrains() {
        return require('./Specials/RangerFavoredTerrains.json');
    }

    get HuntersBond() {
        return new Special("Hunter's Bond", require('./Specials/RangerHuntersBond.json'));
    }
}