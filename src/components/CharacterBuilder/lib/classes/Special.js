export default class Special {
    Name = null;
    Choices = null;
    Selected = null;

    constructor(name, choices = null) {
        this.Name = name;
        this.Choices = choices;
    }

    set(value) {
        this.Selected = value;
    }
}