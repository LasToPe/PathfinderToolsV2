export default class Skill {
    Name;
    Ability;
    ClassSkill = false;
    Ranks = 0;
    Misc = 0;

    constructor(name, ability) {
        this.Name = name;
        this.Ability = ability;
    }

    get Total() {
        return this.ClassSkill && this.Ranks > 0 ?
            3 + parseInt(this.Ability.Modifier) + parseInt(this.Ranks) + parseInt(this.Misc) :
            parseInt(this.Ability.Modifier) + parseInt(this.Ranks) + parseInt(this.Misc);
    }
}