import Class from "../Class"
import Special from "../Special";

export default class Rogue extends Class {

    constructor() {
        super();

        this.Name = "Rogue";
        this.Description = "Life is an endless adventure for those who live by their wits. Ever just one step ahead of danger, rogues bank on their cunning, skill, and charm to bend fate to their favor. Never knowing what to expect, they prepare for everything, becoming masters of a wide variety of skills, training themselves to be adept manipulators, agile acrobats, shadowy stalkers, or masters of any of dozens of other professions or talents. Thieves and gamblers, fast talkers and diplomats, bandits and bounty hunters, and explorers and investigators all might be considered rogues, as well as countless other professions that rely upon wits, prowess, or luck. Although many rogues favor cities and the innumerable opportunities of civilization, some embrace lives on the road, journeying far, meeting exotic people, and facing fantastic danger in pursuit of equally fantastic riches. In the end, any who desire to shape their fates and live life on their own terms might come to be called rogues.";
        this.Role = "Rogues excel at moving about unseen and catching foes unaware, and tend to avoid head-to-head combat. Their varied skills and abilities allow them to be highly versatile, with great variations in expertise existing between different rogues. Most, however, excel in overcoming hindrances of all types, from unlocking doors and disarming traps to outwitting magical hazards and conning dull-witted opponents.";
        this.Alignment = "Any";
        this.HitDie = 8;
        this.ClassSkills = [
            "Acrobatics",
            "Appraise",
            "Bluff",
            "Climb",
            "Craft",
            "Diplomacy",
            "Disable Device",
            "Disguise",
            "Escape Artist",
            "Intimidate",
            "Knowledge (dungeoneering)",
            "Knowledge (local)",
            "Linguistics",
            "Perception",
            "Perform",
            "Profession",
            "Sense Motive",
            "Sleight of Hand",
            "Stealth",
            "Swim",
            "Use Magic Device"
        ];
        this.SkillPointsPerLevel = 8;
        this.BaseAttackBonus = this.MediumBaB;
        this.Fortitude = this.BadSave;
        this.Reflex = this.GoodSave;
        this.Will = this.BadSave;
        this.Specials = [
            [
                new Special("Sneak attack +1d6"),
                new Special("trapfinding")
            ],
            [
                new Special("Evasion"),
                new Special("Rogue Talent", require('./Specials/RogueTalents.json'))
            ],
            [
                new Special("Sneak attack +2d6"),
                new Special("trap sense +1")
            ],
            [
                new Special("Rogue Talent", require('./Specials/RogueTalents.json')),
                new Special("uncanny dodge")
            ],
            [
                new Special("Sneak attack +3d6")
            ],
            [
                new Special("Rogue Talent", require('./Specials/RogueTalents.json')),
                new Special("trap sense +2")
            ],
            [
                new Special("Sneak attack +4d6")
            ],
            [
                new Special("Improved uncanny dodge"),
                new Special("Rogue Talent", require('./Specials/RogueTalents.json'))
            ],
            [
                new Special("Sneak attack +5d6"),
                new Special("trap sense +3")
            ],
            [
                new Special("Advanced talents"),
                new Special("Rogue Talent", require('./Specials/RogueTalents.json'))
            ],
            [
                new Special("Sneak attack +6d6")
            ],
            [
                new Special("Rogue Talent", require('./Specials/RogueTalents.json')),
                new Special("trap sense +4")
            ],
            [
                new Special("Sneak attack +7d6")
            ],
            [
                new Special("Rogue Talent", require('./Specials/RogueTalents.json'))
            ],
            [
                new Special("Sneak attack +8d6"),
                new Special("trap sense +5")
            ],
            [
                new Special("Rogue Talent", require('./Specials/RogueTalents.json'))
            ],
            [
                new Special("Sneak attack +9d6")
            ],
            [
                new Special("Rogue Talent", require('./Specials/RogueTalents.json')),
                new Special("trap sense +6")
            ],
            [
                new Special("Sneak attack +10d6")
            ],
            [
                new Special("Master strike"),
                new Special("Rogue Talent", require('./Specials/RogueTalents.json'))
            ]
        ];
    }
}