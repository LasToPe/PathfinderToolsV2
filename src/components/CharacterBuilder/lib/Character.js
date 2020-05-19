import Ability from "./Ability";

export default class Character {

    Abilities = {
        Strength: new Ability('Strength'),
        Dexterity: new Ability('Dexterity'),
        Constitution: new Ability('Constitution'),
        Intelligence: new Ability('Intelligence'),
        Wisdom: new Ability('Wisdom'),
        Charisma: new Ability('Charisma')
    };

}