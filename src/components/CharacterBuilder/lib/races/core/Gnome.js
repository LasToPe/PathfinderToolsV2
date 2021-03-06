import Race from "../Race"
import Size from "../Size";

export default class Gnome extends Race {

    constructor() {
        super();

        this.Name = "Gnome";
        this.Description = "Expatriates of the strange land of fey, these small folk have a reputation for flighty and eccentric behavior. Many gnomes are whimsical artisans and tinkers, creating strange devices powered by magic, alchemy, and their quirky imagination. Gnomes have an insatiable need for new experiences that often gets them in trouble.";
        this.AbilityMods = {
            "Strength": -2,
            "Constitution": 2,
            "Charisma": 2
        };
        this.Size = Size.Small;
        this.RacialTraits = [
            {
                "Low-Light Vision": "Gnomes can see twice as far as humans in conditions of dim light."
            },
            {
                "Defensive Training": "Gnomes get a +4 dodge bonus to their AC against monsters of the giant type."
            },
            {
                "Gnome Magic": "Gnomes add 1 to the DCs of any saving throws to resist illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome’s character level. The DC for these spells is equal to 10 + the spell’s level + the gnome’s Charisma modifier."
            },
            {
                "Hatred": "Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes because of their special training against these hated foes."
            },
            {
                "Illusion Resistance": "Gnomes get a +2 racial bonus on saving throws against illusion spells or effects."
            },
            {
                "Keen Senses": "Gnomes receive a +2 racial bonus on Perception checks."
            },
            {
                "Obsessive": "Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice."
            },
            {
                "Weapon Familiarity": "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon."
            }
        ];
    }
}