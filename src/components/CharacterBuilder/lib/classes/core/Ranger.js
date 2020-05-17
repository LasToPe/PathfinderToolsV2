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
                new Special("1st favored enemy", require('./Specials/RangerFavoredEnemies.json')),
                new Special("track"),
                new Special("wild empathy")
            ],
            [
                new Special('Combat Style', require('./Specials/RangerCombatStyles.json')),
                new Special("Combat style feat", require('./Specials/RangerCombatStyles.json'))
            ],
            [
                new Special("Endurance"),
                new Special("1st favored terrain", require('./Specials/RangerFavoredTerrains.json'))
            ],
            [
                new Special("Hunter's Bond", require('./Specials/RangerHuntersBond.json'))
            ],
            [
                new Special("2nd favored enemy", require('./Specials/RangerFavoredEnemies.json'))
            ],
            [
                new Special("Combat style feat", require('./Specials/RangerCombatStyles.json'))
            ],
            [
                new Special("Woodland stride")
            ],
            [
                new Special("Swift tracker"),
                new Special("2nd favored terrain", require('./Specials/RangerFavoredTerrains.json'))
            ],
            [
                new Special("Evasion")
            ],
            [
                new Special("3rd favored enemy", require('./Specials/RangerFavoredEnemies.json')),
                new Special("Combat style feat", require('./Specials/RangerCombatStyles.json'))
            ],
            [
                new Special("Quarry")
            ],
            [
                new Special("Camouflage")
            ],
            [
                new Special("3rd favored terrain", require('./Specials/RangerFavoredTerrains.json'))
            ],
            [
                new Special("Combat style feat", require('./Specials/RangerCombatStyles.json'))
            ],
            [
                new Special("4th favored enemy", require('./Specials/RangerFavoredEnemies.json'))
            ],
            [
                new Special("Improved evasion")
            ],
            [
                new Special("Hide in plain sight")
            ],
            [
                new Special("4th favored terrain", require('./Specials/RangerFavoredTerrains.json')),
                new Special("Combat style feat", require('./Specials/RangerCombatStyles.json'))
            ],
            [
                new Special("Improved quarry")
            ],
            [
                new Special("5th favored enemy", require('./Specials/RangerFavoredEnemies.json')),
                new Special("master hunter")
            ]
        ];
    }

    get CombatStyle() {
        return this.Specials[1].find(s => s.Name === "Combat Style");
    }

    get HuntersBond() {
        return this.Specials[3].find(s => s.Name === "Hunters Bond");
    }
}