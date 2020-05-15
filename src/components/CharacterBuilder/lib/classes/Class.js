import Special from './Special';

export default class Class {
    Name;
    Description;
    Role;
    Alignment = "Any";
    HitDie;
    ClassSkills;
    SkillPointsPerLevel;
    BaseAttackBonus;
    Fortitude;
    Reflex;
    Will;
    Specials;

    GoodSave = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
    BadSave = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6];
    FullBaB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    MediumBaB = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15];
    HalfBaB = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];

    get Blank() {
        return new Special('—');
    }
}