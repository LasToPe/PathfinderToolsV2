import Race from "../Race"

export default class Human extends Race {

    constructor() {
        super();

        this.Name = "Human";
        this.Description = "Ambitious, sometimes heroic, and always confident, humans have an ability to work together toward common goals that makes them a force to be reckoned with. Though short-lived compared to other races, their boundless energy and drive allow them to accomplish much in their brief lifetimes.";
        this.AbilityMods = {
            any: true
        };
        this.RacialTraits = [
            {
                "Bonus Feat": "Humans select one extra feat at 1st level."
            },
            {
                "Skilled": "Humans gain 1 additional skill rank at 1st level and 1 additional rank whenever they gain a level."
            }
        ];
    }
}