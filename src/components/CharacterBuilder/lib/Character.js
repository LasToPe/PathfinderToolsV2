export default class Character {

    strength = () => {
        return this.race && this.race.AbilityMods['strength'] ?
            parseInt(this.strengthbase) + parseInt(this.race.AbilityMods['strength']) :
            this.strengthbase;
    }
    dexterity = () => {
        return this.race && this.race.AbilityMods['dexterity'] ?
            parseInt(this.dexteritybase) + parseInt(this.race.AbilityMods['dexterity']) :
            this.dexteritybase;
    }
    constitution = () => {
        return this.race && this.race.AbilityMods['constitution'] ?
            parseInt(this.constitutionbase) + parseInt(this.race.AbilityMods['constitution']) :
            this.constitutionbase;
    }
    intelligence = () => {
        return this.race && this.race.AbilityMods['intelligence'] ?
            parseInt(this.intelligencebase) + parseInt(this.race.AbilityMods['intelligence']) :
            this.intelligencebase;
    }
    wisdom = () => {
        return this.race && this.race.AbilityMods['wisdom'] ?
            parseInt(this.wisdombase) + parseInt(this.race.AbilityMods['wisdom']) :
            this.wisdombase;
    }
    charisma = () => {
        return this.race && this.race.AbilityMods['charisma'] ?
            parseInt(this.charismabase) + parseInt(this.race.AbilityMods['charisma']) :
            this.charismabase;
    }

    getAbilityMod(ability) {
        return this[ability] ? Math.floor((this[ability]() - 10) / 2) : null;
    }
}