import Class from "../Class";
import Special from "../Special";

export default class Cleric extends Class {

    constructor() {
        super();

        this.Name = "Cleric";
        this.Description = "In faith and the miracles of the divine, many find a greater purpose. Called to serve powers beyond most mortal understanding, all priests preach wonders and provide for the spiritual needs of their people. Clerics are more than mere priests, though; these emissaries of the divine work the will of their deities through strength of arms and the magic of their gods. Devoted to the tenets of the religions and philosophies that inspire them, these ecclesiastics quest to spread the knowledge and influence of their faith. Yet while they might share similar abilities, clerics prove as different from one another as the divinities they serve, with some offering healing and redemption, others judging law and truth, and still others spreading conflict and corruption. The ways of the cleric are varied, yet all who tread these paths walk with the mightiest of allies and bear the arms of the gods themselves.";
        this.Role = "More than capable of upholding the honor of their deities in battle, clerics often prove stalwart and capable combatants. Their true strength lies in their capability to draw upon the power of their deities, whether to increase their own and their allies' prowess in battle, to vex their foes with divine magic, or to lend healing to companions in need.";
        this.Alignment = "A cleric's alignment must be within one step of her deity's, along either the law/chaos axis or the good/evil axis.";
        this.HitDie = 8;
        this.ClassSkills = [
            "Appraise",
            "Craft",
            "Diplomacy",
            "Heal",
            "Knowledge (arcana)",
            "Knowledge (history)",
            "Knowledge (nobility)",
            "Knowledge (planes)",
            "Knowledge (religion)",
            "Linguistics",
            "Profession",
            "Sense Motive",
            "Spellcraft"
        ];
        this.SkillPointsPerLevel = 2;
        this.BaseAttackBonus = this.MediumBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.BadSave;
        this.Will = this.GoodSave;
        this.Specials = [
            [
                new Special("Aura"),
                new Special("Channel Energy 1d6"),
                this.Domain,
                this.Domain,
                new Special("Orisons")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 2d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 3d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 4d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 5d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 6d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 7d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 8d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 9d6")
            ],
            [
                this.Blank
            ],
            [
                new Special("Channel Energy 10d6")
            ],
            [
                this.Blank
            ]
        ];
    }

    get Domain() {
        return new Special('Domain', require('./Specials/ClericDomains.json'));
    }
}