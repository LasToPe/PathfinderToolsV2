import Class from '../Class';
import Special from "../Special";

export default class Barbarian extends Class {
    constructor() {
        super();
        
        this.Name = "Barbarian";
        this.Description = "For some, there is only rage. In the ways of their people, in the fury of their passion, in the howl of battle, conflict is all these brutal souls know. Savages, hired muscle, masters of vicious martial techniques, they are not soldiers or professional warriors—they are the battle possessed, creatures of slaughter and spirits of war. Known as barbarians, these warmongers know little of training, preparation, or the rules of warfare; for them, only the moment exists, with the foes that stand before them and the knowledge that the next moment might hold their death. They possess a sixth sense in regard to danger and the endurance to weather all that might entail. These brutal warriors might rise from all walks of life, both civilized and savage, though whole societies embracing such philosophies roam the wild places of the world. Within barbarians storms the primal spirit of battle, and woe to those who face their rage.";
        this.Role = "Barbarians excel in combat, possessing the martial prowess and fortitude to take on foes seemingly far superior to themselves. With rage granting them boldness and daring beyond that of most other warriors, barbarians charge furiously into battle and ruin all who would stand in their way.";
        this.Alignment = "Any nonlawful";
        this.HitDie = 12;
        this.ClassSkills = [
            "Acrobatics",
            "Climb",
            "Craft",
            "Handle Animal",
            "Intimidate",
            "Knowledge (nature)",
            "Perception",
            "Ride",
            "Survival",
            "Swim"
        ];
        this.SkillPointsPerLevel = 4;
        this.BaseAttackBonus = this.FullBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.BadSave;
        this.Will = this.BadSave;
        this.Specials = [
            [
                new Special('Fast Movement'),
                new Special('Rage')
            ],
            [
                this.RagePower,
                new Special('Uncanny Dodge')
            ],
            [
                new Special('Trap Sense +1')
            ],
            [
                this.RagePower
            ],
            [
                new Special('Improved Uncanny Dodge')
            ],
            [
                this.RagePower,
                new Special('Trap Sense +2')
            ],
            [
                new Special('Damage Reduction 1/-')
            ],
            [
                this.RagePower
            ],
            [
                new Special('Trap Sense +3')
            ],
            [
                new Special('Damage Reduction 2/-'),
                this.RagePower
            ],
            [
                new Special('Greater Rage')
            ],
            [
                this.RagePower,
                new Special('Trap Sense +4')
            ],
            [
                new Special("Damage reduction 3/-")
            ],
            [
                new Special("Indomitable will"),
                this.RagePower
            ],
            [
                new Special("Trap sense +5")
            ],
            [
                new Special("Damage reduction 4/-"),
                this.RagePower
            ],
            [
                new Special("Tireless rage")
            ],
            [
                this.RagePower,
                new Special("Trap sense +6")
            ],
            [
                new Special("Damage reduction 5/-")
            ],
            [
                new Special("Mighty rage"),
                this.RagePower
            ]
        ]
    }

    get RagePower() {
        return new Special('Rage Power', require('./BarbarianRagePowers.json'));
    }
}