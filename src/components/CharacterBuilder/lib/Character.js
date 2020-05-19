import Ability from "./Ability";
import Skill from "./Skill";

export default class Character {

    Abilities = {
        Strength: new Ability('Strength'),
        Dexterity: new Ability('Dexterity'),
        Constitution: new Ability('Constitution'),
        Intelligence: new Ability('Intelligence'),
        Wisdom: new Ability('Wisdom'),
        Charisma: new Ability('Charisma')
    };

    Skills = {
        Acrobatics: new Skill('Acrobatics', this.Abilities.Dexterity),
        Appraise: new Skill('Appraise', this.Abilities.Intelligence),
        Bluff: new Skill('Bluff', this.Abilities.Charisma),
        Climb: new Skill('Climb', this.Abilities.Strength),
        Craft: new Skill('Craft', this.Abilities.Intelligence),
        Diplomacy: new Skill('Diplomacy', this.Abilities.Charisma),
        DisableDevice: new Skill('Disable Device', this.Abilities.Dexterity),
        Disguise: new Skill('Disguise', this.Abilities.Charisma),
        EscapeArtist: new Skill('Escape Artist', this.Abilities.Dexterity),
        Fly: new Skill('Fly', this.Abilities.Dexterity),
        HandleAnimal: new Skill('Handle Animal', this.Abilities.Charisma),
        Heal: new Skill('Heal', this.Abilities.Wisdom),
        Intimidate: new Skill('Intimidate', this.Abilities.Charisma),
        KnowledgeArcana: new Skill('Knowledge (arcana)', this.Abilities.Intelligence)
    };

}