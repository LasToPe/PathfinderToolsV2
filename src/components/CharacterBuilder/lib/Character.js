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
        KnowledgeArcana: new Skill('Knowledge (arcana)', this.Abilities.Intelligence),
        KnowledgeDungeoneering: new Skill('Knowledge (dungeoneering)', this.Abilities.Intelligence),
        KnowledgeEngineering: new Skill('Knowledge (engineering)', this.Abilities.Intelligence),
        KnowledgeGeography: new Skill('Knowledge (geography)', this.Abilities.Intelligence),
        KnowledgeHistory: new Skill('Knowledge (history)', this.Abilities.Intelligence),
        KnowledgeLocal: new Skill('Knowledge (local)', this.Abilities.Intelligence),
        KnowledgeNature: new Skill('Knowledge (nature)', this.Abilities.Intelligence),
        KnowledgeNobility: new Skill('Knowledge (nobility)', this.Abilities.Intelligence),
        KnowledgePlanes: new Skill('Knowledge (planes)', this.Abilities.Intelligence),
        KnowledgeReligion: new Skill('Knowledge (religion)', this.Abilities.Intelligence),
        Linguistics: new Skill('Linguistics', this.Abilities.Intelligence),
        Perception: new Skill('Perception', this.Abilities.Wisdom),
        Perform: new Skill('Perform', this.Abilities.Charisma),
        Profession: new Skill('Profession', this.Abilities.Wisdom),
        Ride: new Skill('Ride', this.Abilities.Dexterity),
        SenseMotive: new Skill('Sense Motive', this.Abilities.Wisdom),
        SleightOfHand: new Skill('Sleight of Hand', this.Abilities.Dexterity),
        Spellcraft: new Skill('Spellcraft', this.Abilities.Intelligence),
        Stealth: new Skill('Stealth', this.Abilities.Dexterity),
        Survival: new Skill('Survival', this.Abilities.Wisdom),
        Swim: new Skill('Swim', this.Abilities.Strength),
        UseMagicDevice: new Skill('Use Magic Device', this.Abilities.Charisma)
    };

}