export default class ArmorClass {
    Armor = 0;
    ArmorMaxDex = 20;
    Shield = 0;
    ShieldMaxDex = 20;
    Dexterity;
    Dodge = 0;
    Size = 0;
    Natural = 0;
    Deflection = 0;
    Misc = 0;

    constructor(dex) {
        this.Dexterity = dex;
    }

    get Dex() {
        return Math.min(this.Dexterity.Modifier, this.ArmorMaxDex, this.ShieldMaxDex);
    }

    get AC() {
        return 10 + this.Armor + this.Shield + this.Dex + this.Dodge + this.Size + this.Natural + this.Deflection + this.Misc;
    }

    get Touch() {
        return 10 + this.Dex + this.Dodge + this.Size + this.Deflection + this.Misc;
    }

    get FlatFooted() {
        return 10 + this.Armor + this.Shield + this.Size + this.Natural + this.Deflection + this.Misc;
    }
}