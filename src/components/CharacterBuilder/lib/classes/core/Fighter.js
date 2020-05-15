import Class from "../Class"
import Special from "../Special";

export default class Fighter extends Class {

    constructor() {
        super();

        this.Name = "Fighter";
        this.Description = "Some take up arms for glory, wealth, or revenge. Others do battle to prove themselves, to protect others, or because they know nothing else. Still others learn the ways of weaponcraft to hone their bodies in battle and prove their mettle in the forge of war. Lords of the battlefield, fighters are a disparate lot, training with many weapons or just one, perfecting the uses of armor, learning the fighting techniques of exotic masters, and studying the art of combat, all to shape themselves into living weapons. Far more than mere thugs, these skilled warriors reveal the true deadliness of their weapons, turning hunks of metal into arms capable of taming kingdoms, slaughtering monsters, and rousing the hearts of armies. Soldiers, knights, hunters, and artists of war, fighters are unparalleled champions, and woe to those who dare stand against them.";
        this.Role = "Fighters excel at combat—defeating their enemies, controlling the flow of battle, and surviving such sorties themselves. While their specific weapons and methods grant them a wide variety of tactics, few can match fighters for sheer battle prowess.";
        this.Alignment = "Any";
        this.HitDie = 10;
        this.ClassSkills = [
            "Climb",
            "Craft",
            "Handle Animal",
            "Intimidate",
            "Knowledge (dungeoneering)",
            "Knowledge (engineering)",
            "Profession",
            "Ride",
            "Survival",
            "Swim"
        ];
        this.SkillPointsPerLevel = 2;
        this.BaseAttackBonus = this.FullBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.BadSave;
        this.Will = this.BadSave;
        this.Specials = [
            [
                this.BonusFeat
            ],
            [
                this.BonusFeat,
                new Special("bravery +1")
            ],
            [
                new Special("Armor training 1")
            ],
            [
                this.BonusFeat
            ],
            [
                this.WeaponTraining
            ],
            [
                this.BonusFeat,
                new Special("bravery +2")
            ],
            [
                new Special("Armor Training 2")
            ],
            [
                this.BonusFeat
            ],
            [
                this.WeaponTraining
            ],
            [
                this.BonusFeat,
                new Special("bravery +3")
            ],
            [
                new Special("Armor Training 3")
            ],
            [
                this.BonusFeat
            ],
            [
                this.WeaponTraining
            ],
            [
                this.BonusFeat,
                new Special("bravery +4")
            ],
            [
                new Special("Armor Training 4")
            ],
            [
                this.BonusFeat
            ],
            [
                this.WeaponTraining
            ],
            [
                this.BonusFeat,
                new Special("bravery +5")
            ],
            [
                new Special("Armor mastery")
            ],
            [
                this.BonusFeat,
                new Special("weapon mastery")
            ]
        ];
    }

    get BonusFeat() {
        return new Special('Bonus Feat');
    }

    get WeaponTraining() {
        return new Special('Weapon Training', require('./FighterWeaponTraining.json'));
    }
}