import Race from "../Race"

export default class Elf extends Race {
    constructor() {
        super();

        this.Name = "Elf";
        this.Description = "Tall, noble, and often haughty, elves are long-lived and subtle masters of the wilderness. Elves excel in the arcane arts. Often they use their intrinsic link to nature to forge new spells and create wondrous items that, like their creators, seem nearly impervious to the ravages of time. A private and often introverted race, elves can give the impression they are indifferent to the plights of others.";
        this.AbilityMods = {
            "Dexterity": 2,
            "Constitution": -2,
            "Intelligence": 2
        };
        this.RacialTraits = [
            {
                "Low-Light Vision": "Elves can see twice as far as humans in conditions of dim light."
            },
            {
                "Elven Immunities": "Elves are immune to magic sleep effects and get a +2 racial bonus on saving throws against enchantment spells and effects."
            },
            {
                "Elven Magic": "Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft checks made to identify the properties of magic items."
            },
            {
                "Keen Senses": "Elves receive a +2 racial bonus on Perception checks."
            },
            {
                "Weapon Familiarity": "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon."
            }
        ];
    }
}