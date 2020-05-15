import Class from '../Class';
import Special from '../Special';

export default class Bard extends Class {
    constructor() {
        super();

        this.Name = "Bard";
        this.Description = "Untold wonders and secrets exist for those skillful enough to discover them. Through cleverness, talent, and magic, these cunning few unravel the wiles of the world, becoming adept in the arts of persuasion, manipulation, and inspiration. Typically masters of one or many forms of artistry, bards possess an uncanny ability to know more than they should and use what they learn to keep themselves and their allies ever one step ahead of danger. Bards are quick-witted and captivating, and their skills might lead them down many paths, be they gamblers or jacks-of-all-trades, scholars or performers, leaders or scoundrels, or even all of the above. For bards, every day brings its own opportunities, adventures, and challenges, and only by bucking the odds, knowing the most, and being the best might they claim the treasures of each.";
        this.Role = "Bards capably confuse and confound their foes while inspiring their allies to ever-greater daring. While accomplished with both weapons and magic, the true strength of bards lies outside melee, where they can support their companions and undermine their foes without fear of interruptions to their performances.";
        this.Alignment = "Any";
        this.HitDie = 8;
        this.ClassSkills = [
            "Acrobatics",
            "Appraise",
            "Bluff",
            "Climb",
            "Craft",
            "Diplomacy",
            "Disguise",
            "Escape Artist",
            "Intimidate",
            "Knowledge (all)",
            "Linguistics",
            "Perception",
            "Perform",
            "Profession",
            "Sense Motive",
            "Sleight of Hand",
            "Spellcraft",
            "Stealth",
            "Use Magic Device"
        ];
        this.SkillPointsPerLevel = 6;
        this.BaseAttackBonus = this.MediumBaB;
        this.Fortitude = this.BadSave;
        this.Reflex = this.GoodSave;
        this.Will = this.GoodSave;
        this.Specials = [
            [
                new Special("Bardic Knowledge"),
                new Special("Bardic Performance"),
                new Special("Cantrips"),
                new Special("Countersong"),
                new Special("Distraction"),
                new Special("Fascinate"),
                new Special("Inspire Courage +1")
            ],
            [
                this.VersatilePerformance,
                new Special("Well-Versed")
            ],
            [
                new Special("Inspire Competence +2")
            ],
            [
                this.Blank
            ],
            [
                new Special("Inspire Courage +2"),
                new Special("Lore Master 1/day")
            ],
            [
                new Special("Suggestion"),
                this.VersatilePerformance
            ],
            [
                new Special("Inspire Competence +3")
            ],
            [
                new Special("Dirge of Doom")
            ],
            [
                new Special("Inspire Greatness")
            ],
            [
                new Special("Jack-of-all-Trades"),
                this.VersatilePerformance
            ],
            [
                new Special("Inspire Competence +4"),
                new Special("inspire Courage +3"),
                new Special("Lore Master 2/day")
            ],
            [
                new Special("Soothing Performance")
            ],
            [
                this.Blank
            ],
            [
                new Special("Frightening tune"),
                this.VersatilePerformance
            ],
            [
                new Special("Inspire Competence +5"),
                new Special("Inspire Heroics")
            ],
            [
                this.Blank
            ],
            [
                new Special("Inspire Courage +4"),
                new Special("Lore Master 3/day")
            ],
            [
                new Special("Mass Suggestion"),
                this.VersatilePerformance
            ],
            [
                new Special("Inspire Competence +6")
            ],
            [
                new Special("Deadly Performance")
            ]
        ];
    }

    get VersatilePerformance() {
        return new Special('Versatile Performance', require('./BardVersatilePerformances.json'));
    }

}