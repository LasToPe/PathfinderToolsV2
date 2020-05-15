import Class from '../Class';
import Special from '../Special';

export default class Druid extends Class {

    constructor() {
        super();

        this.Name = "Druid";
        this.Description = "Within the purity of the elements and the order of the wilds lingers a power beyond the marvels of civilization.Furtive yet undeniable, these primal magics are guarded over by servants of philosophical balance known as druids.Allies to beasts and manipulators of nature, these often misunderstood protectors of the wild strive to shield their lands from all who would threaten them and prove the might of the wilds to those who lock themselves behind city walls.Rewarded for their devotion with incredible powers, druids gain unparalleled shape - shifting abilities, the companionship of mighty beasts, and the power to call upon nature's wrath. The mightiest temper powers akin to storms, earthquakes, and volcanoes with primeval wisdom long abandoned and forgotten by civilization.";
        this.Role = "While some druids might keep to the fringe of battle, allowing companions and summoned creatures to fight while they confound foes with the powers of nature, others transform into deadly beasts and savagely wade into combat.Druids worship personifications of elemental forces, natural powers, or nature itself.Typically this means devotion to a nature deity, though druids are just as likely to revere vague spirits, animalistic demigods, or even specific awe - inspiring natural wonders.";
        this.Alignment = "Any neutral.";
        this.HitDie = 8;
        this.ClassSkills = [
            "Climb",
            "Craft",
            "Fly",
            "Handle Animal",
            "Heal",
            "Knowledge (geography)",
            "Knowledge (nature)",
            "Perception",
            "Profession",
            "Ride",
            "Spellcraft",
            "Survival",
            "Swim"
        ];
        this.SkillPointsPerLevel = 4;
        this.BaseAttackBonus = this.MediumBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.BadSave;
        this.Will = this.GoodSave;
        this.Specials = [
            [
                new Special("Nature Bond", require('./Specials/DruidNatureBonds.json')),
                new Special("nature sense"),
                new Special("orisons"),
                new Special("wild empathy")
            ],
            [
                new Special("Woodland stride")
            ],
            [
                new Special("Trackless step")
            ],
            [
                new Special("Resist nature's lure"),
                new Special("wild shape (1/day)")
            ],
            [
                this.Blank
            ],
            [
                new Special("Wild shape (2/day)")
            ],
            [
                this.Blank
            ],
            [
                new Special("Wild shape (3/day)")
            ],
            [
                new Special("Venom immunity")
            ],
            [
                new Special("Wild shape (4/day)")
            ],
            [
                this.Blank
            ],
            [
                new Special("Wild shape (5/day)")
            ],
            [
                new Special("A thousand faces")
            ],
            [
                new Special("Wild shape (6/day)")
            ],
            [
                new Special("Timeless body")
            ],
            [
                new Special("Wild shape (7/day)")
            ],
            [
                this.Blank
            ],
            [
                new Special("Wild shape (8/day)")
            ],
            [
                this.Blank
            ],
            [
                new Special("Wild shape (at will)")
            ]
        ];
    }
}