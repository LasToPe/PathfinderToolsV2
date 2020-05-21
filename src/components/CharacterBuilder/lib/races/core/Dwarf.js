import Race from "../Race"

export default class Dwarf extends Race {
    constructor() {
        super();
        this.Name = "Dwarf";
        this.Description = "These short and stocky defenders of mountain fortresses are often seen as stern and humorless. Known for mining the earth's treasures and crafting magnificent items from ore and gemstones, they have an unrivaled affinity for the bounties of the deep earth. Dwarves also have a tendency toward traditionalism and isolation that sometimes manifests as xenophobia.";
        this.AbilityMods = {
            "Constitution": 2,
            "Wisdom": 2,
            "Charisma": -2
        };
        this.Size = "Medium";
        this.RacialTraits = [
            {
                "Slow and Steady": "Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance."
            },
            {
                "Darkvision": "Dwarves can see in the dark up to 60 feet."
            },
            {
                "Defensive Training": "Dwarves get a +4 dodge bonus to their AC against monsters of the giant subtype."
            },
            {
                "Greed": "Dwarves receive a +2 racial bonus on Appraise checks made to determine the price of nonmagical goods that contain precious metals or gemstones."
            },
            {
                "Hatred": "Dwarves receive a +1 bonus on attack rolls against humanoid creatures of the orc and goblinoid subtypes because of their special training against these hated foes."
            },
            {
                "Hardy": "Dwarves receive a +2 racial bonus on saving throws against poison, spells, and spell-like abilities."
            },
            {
                "Stability": "Dwarves receive a +4 racial bonus to their Combat Maneuver Defense when resisting a bull rush or trip attempt while standing on the ground."
            },
            {
                "Stonecunning": "Dwarves receive a +2 bonus on Perception checks to potentially notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice any such features that they pass within 10 feet of, whether or not they are actively looking."
            },
            {
                "Weapon Familiarity": "Dwarves are prof icient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word “dwarven” in its name as a martial weapon."
            }
        ];
    }
}