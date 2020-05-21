class AgeCategory {
    Name;
    AbilityMods;

    static get Young() {
        let age = new AgeCategory();
        age.Name = "Young";
        age.AbilityMods = {
            Strength: -2,
            Dexterity: 2,
            Constitution: -2,
            Intelligence: 0,
            Wisdom: -2,
            Charisma: 0
        };
        return age;
    }

    static get Adult() {
        let age = new AgeCategory();
        age.Name = "Adult";
        age.AbilityMods = {
            Strength: 0,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0
        };
        return age;
    }

    static get MiddleAged() {
        let age = new AgeCategory();
        age.Name = "Middle aged";
        age.AbilityMods = {
            Strength: -1,
            Dexterity: -1,
            Constitution: -1,
            Intelligence: 1,
            Wisdom: 1,
            Charisma: 1
        };
        return age;
    }

    static get Old() {
        let age = new AgeCategory();
        age.Name = "Old";
        age.AbilityMods = {
            Strength: -2,
            Dexterity: -2,
            Constitution: -2,
            Intelligence: 1,
            Wisdom: 1,
            Charisma: 1
        };
        return age;
    }

    static get Venerable() {
        let age = new AgeCategory();
        age.Name = "Venerable";
        age.AbilityMods = {
            Strength: -3,
            Dexterity: -3,
            Constitution: -3,
            Intelligence: 1,
            Wisdom: 1,
            Charisma: 1
        };
        return age;
    }
}

export default {
    Young: AgeCategory.Young,
    Adult: AgeCategory.Adult,
    "Middle aged": AgeCategory.MiddleAged,
    Old: AgeCategory.Old,
    Venerable: AgeCategory.Venerable
}