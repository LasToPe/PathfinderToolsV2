import Race from "../Race"

export default class HalfOrc extends Race {

    constructor() {
        super();

        this.Name = "Half-Orc";
        this.Description = "Often fierce and savage, sometimes noble and resolute, half-orcs can manifest the best and worst qualities of their parent races. Many half-orcs struggle to keep their more bestial natures in check in order to epitomize the most heroic values of humanity. Unfortunately, many outsiders see half-orcs as hopeless abominations devoid of civility, if not monsters unworthy of pity or parley.";
        this.AbilityMods = {
            any: true
        };
        this.RacialTraits = [
            {
                "Darkvision": "Half-orcs can see in the dark up to 60 feet."
            },
            {
                "Intimidating": "Half-orcs receive a +2 racial bonus on Intimidate checks because of their fearsome nature."
            },
            {
                "Orc Blood": "Half-orcs count as both humans and orcs for any effect related to race."
            },
            {
                "Orc Ferocity": "Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for 1 more round as if disabled. At the end of his next turn, unless brought to 1 or more hit points, he immediately falls unconscious and begins dying."
            },
            {
                "Weapon Familiarity": "Half-orcs are proficient with greataxes and falchions, and treat any weapon with the word “orc” in its name as a martial weapon."
            }
        ];
    }
}