import Race from "../Race"

export default class HalfElf extends Race {

    constructor() {
        super();

        this.Name = "Half-Elf";
        this.Description = "Often caught between the worlds of their progenitor races, half-elves are a race of both grace and contradiction. Their dual heritage and natural gifts often create brilliant diplomats and peacemakers, but half-elves are often susceptible to an intense and even melancholic isolation, realizing that they are never truly part of elven or human society.";
        this.AbilityMods = {
            any: true
        };
        this.RacialTraits = [
            {
                "Low-Light Vision": "Elves can see twice as far as humans in conditions of dim light."
            },
            {
                "Adaptability": "Half-elves receive Skill Focus as a bonus feat at 1st level."
            },
            {
                "Elf Blood": "Half-elves count as both elves and humans for any effect related to race."
            },
            {
                "Elven Immunities": "Half-elves are immune to magic sleep effects and get a +2 racial bonus on saving throws against enchantment spells and effects."
            },
            {
                "Keen Senses": "Elves receive a +2 racial bonus on Perception checks."
            },
            {
                "Multitalented": "Half-elves choose two favored classes at 1st level and gain 1 additional hit point or skill point whenever they take a level in either one of those classes."
            }
        ];
    }
}