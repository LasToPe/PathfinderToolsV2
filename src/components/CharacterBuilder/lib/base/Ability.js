export default class Ability {
    Name;
    Base = 10;

    constructor(name) {
        this.Name = name;
    }

    get Total() {
        return this.Racial ? parseInt(this.Base) + parseInt(this.Racial) : this.Base;
    }

    get Modifier() {
        return Math.floor((this.Total - 10) / 2);
    }
}