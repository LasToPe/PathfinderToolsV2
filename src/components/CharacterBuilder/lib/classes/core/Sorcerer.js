import Class from "../Class"
import Special from "../Special";

export default class Sorcerer extends Class {

    constructor() {
        super();

        this.Name = "Sorcerer";
        this.Description = "Scions of innately magical bloodlines, the chosen of deities, the spawn of monsters, pawns of fate and destiny, or simply flukes of fickle magic, sorcerers look within themselves for arcane prowess and draw forth might few mortals can imagine. Emboldened by lives ever threatening to be consumed by their innate powers, these magic-touched souls endlessly indulge in and refine their mysterious abilities, gradually learning how to harness their birthright and coax forth ever greater arcane feats. Just as varied as these innately powerful spellcasters' abilities and inspirations are the ways in which they choose to utilize their gifts. While some seek to control their abilities through meditation and discipline, becoming masters of their fantastic birthright, others give in to their magic, letting it rule their lives with often explosive results. Regardless, sorcerers live and breathe that which other spellcasters devote their lives to mastering, and for them magic is more than a boon or a field of study; it is life itself.";
        this.Role = "Sorcerers excel at casting a selection of favored spells frequently, making them powerful battle mages. As they become familiar with a specific and ever-widening set of spells, sorcerers often discover new and versatile ways of making use of magics other spellcasters might overlook. Their bloodlines also grant them additional abilities, assuring that no two sorcerers are ever quite alike.";
        this.Alignment = "Any";
        this.HitDie = 6;
        this.ClassSkills = [
            "Appraise",
            "Bluff",
            "Craft",
            "Fly",
            "Intimidate",
            "Knowledge (arcana)",
            "Profession",
            "Spellcraft",
            "Use Magic Device"
        ];
        this.SkillPointsPerLevel = 2;
        this.BaseAttackBonus = this.HalfBaB;
        this.Fortitude = this.BadSave;
        this.Reflex = this.BadSave;
        this.Will = this.GoodSave;
        this.Specials = [
            [
                new Special("Bloodline", require('./Specials/SorcererBloodlines.json')),
                new Special("Bloodline power"),
                new Special("cantrips"),
                new Special("eschew materials")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline power"),
                new Special("bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline feat"),
                new Special("bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline power"),
                new Special("bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline feat"),
                new Special("bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline power"),
                new Special("bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline spell")
            ],
            [
                this.Blank
            ],
            [
                new Special("Bloodline feat"),
                new Special("bloodline spell")
            ],
            [
                new Special("Bloodline power")
            ]
        ];
    }
}