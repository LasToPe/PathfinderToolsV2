import Class from "../Class"
import Special from "../Special";

export default class Wizard extends Class {

    constructor() {
        super();

        this.Name = "Wizard";
        this.Description = "Beyond the veil of the mundane hide the secrets of absolute power. The works of beings beyond mortals, the legends of realms where gods and spirits tread, the lore of creations both wondrous and terrible—such mysteries call to those with the ambition and the intellect to rise above the common folk to grasp true might. Such is the path of the wizard. These shrewd magic-users seek, collect, and covet esoteric knowledge, drawing on cultic arts to work wonders beyond the abilities of mere mortals. While some might choose a particular field of magical study and become masters of such powers, others embrace versatility, reveling in the unbounded wonders of all magic. In either case, wizards prove a cunning and potent lot, capable of smiting their foes, empowering their allies, and shaping the world to their every desire.";
        this.Role = "While universalist wizards might study to prepare themselves for any manner of danger, specialist wizards research schools of magic that make them exceptionally skilled within a specific focus. Yet no matter their specialty, all wizards are masters of the impossible and can aid their allies in overcoming any danger.";
        this.Alignment = "Any";
        this.HitDie = 6;
        this.ClassSkills = [
            "Appraise",
            "Craft",
            "Fly",
            "Knowledge (all)",
            "Linguistics",
            "Profession",
            "Spellcraft"
        ];
        this.SkillPointsPerLevel = 2;
        this.BaseAttackBonus = this.HalfBaB;
        this.Fortitude = this.BadSave;
        this.Reflex = this.BadSave
        this.Will = this.GoodSave
        this.Specials = [
            [
                new Special("Arcane Bond", require('./Specials/WizardArcaneBonds.json')),
                new Special("Arcane School", require('./Specials/WizardArcaneSchools.json')),
                new Special("cantrips"),
                new Special("Scribe Scroll")
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.BonusFeat
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.BonusFeat
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.BonusFeat
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.Blank
            ],
            [
                this.BonusFeat
            ]
        ]
    }

    get BonusFeat() {
        return new Special("Bonus Feat");
    }
}