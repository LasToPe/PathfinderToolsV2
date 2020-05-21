export default class Ability {
    Name;
    Base = 10;
    RacialModifier = 0;
    AgeModifier = 0;

    constructor(name) {
        this.Name = name;
    }

    get Total() {
        return parseInt(this.Base) + parseInt(this.RacialModifier) + parseInt(this.AgeModifier);
    }

    get Modifier() {
        return Math.floor((this.Total - 10) / 2);
    }
}