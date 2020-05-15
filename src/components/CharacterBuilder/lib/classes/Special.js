export default class Special {
    Name = null;
    Choices = null;

    constructor(name, choices = null) {
        this.Name = name;
        this.Choices = choices;
    }
}