import Race from "../Race"
import Size from "../Size";

export default class Halfling extends Race {

    constructor() {
        super();

        this.Name = "Halfling";
        this.Description = "Members of this diminutive race find strength in family, community, and their own innate and seemingly inexhaustible luck. While their fierce curiosity is sometimes at odds with their intrinsic common sense, halflings are eternal optimists and cunning opportunists with an incredible knack for getting out the worst situations.";
        this.AbilityMods = {
            "Strength": -2,
            "Dexterity": 2,
            "Charisma": 2
        };
        this.Size = Size.Small;
        this.RacialTraits = [
            {
                "Fearless": "Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck."
            },
            {
                "Halfling Luck": "Halflings receive a +1 racial bonus on all saving throws."
            },
            {
                "Keen Senses": "Halflings receive a +2 racial bonus on Perception checks."
            },
            {
                "Sure-Footed": "Halflings receive a +2 racial bonus on Acrobatics and Climb checks."
            },
            {
                "Weapon Familiarity": "Halflings are proficient with slings and treat any weapon with the word “halfling” in its name as a martial weapon."
            }
        ];
    }
}