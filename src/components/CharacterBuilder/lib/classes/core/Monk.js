import Class from "../Class"
import Special from "../Special";

export default class Monk extends Class {

    constructor() {
        super();
        this.Name = "Monk";
        this.Description = "For the truly exemplary, martial skill transcends the battlefield—it is a lifestyle, a doctrine, a state of mind. These warrior-artists search out methods of battle beyond swords and shields, finding weapons within themselves just as capable of crippling or killing as any blade. These monks (so called since they adhere to ancient philosophies and strict martial disciplines) elevate their bodies to become weapons of war, from battle-minded ascetics to self-taught brawlers. Monks tread the path of discipline, and those with the will to endure that path discover within themselves not what they are, but what they are meant to be.";
        this.Role = "Monks excel at overcoming even the most daunting perils, striking where it's least expected, and taking advantage of enemy vulnerabilities. Fleet of foot and skilled in combat, monks can navigate any battlefield with ease, aiding allies wherever they are needed most.";
        this.Alignment = "Any lawful.";
        this.HitDie = 8;
        this.ClassSkills = [
            "Acrobatics",
            "Climb",
            "Craft",
            "Escape Artist",
            "Intimidate",
            "Knowledge (history)",
            "Knowledge (religion)",
            "Perception",
            "Perform",
            "Profession",
            "Ride",
            "Sense Motive",
            "Stealth",
            "Swim"
        ];
        this.SkillPointsPerLevel = 4;
        this.BaseAttackBonus = this.MediumBaB;
        this.Fortitude = this.GoodSave;
        this.Reflex = this.GoodSave;
        this.Will = this.GoodSave;
        this.Specials = [
            [
                new Special("Bonus feat"),
                new Special("flurry of blows"),
                new Special("stunning fist"),
                new Special("unarmed strike")
            ],
            [
                new Special("Bonus feat"),
                new Special("evasion")
            ],
            [
                new Special("Fast movement"),
                new Special("maneuver training"),
                new Special("still mind")
            ],
            [
                new Special("Ki pool (magic)"),
                new Special("slow fall 20 ft.")
            ],
            [
                new Special("High jump"),
                new Special("purity of body")
            ],
            [
                new Special("Bonus feat"),
                new Special("slow fall 30 ft.")
            ],
            [
                new Special("Ki pool (cold iron/silver)"),
                new Special("wholeness of body")
            ],
            [
                new Special("Slow fall 40 ft.")
            ],
            [
                new Special("Improved evasion")
            ],
            [
                new Special("Bonus feat"),
                new Special("ki pool (lawful)"),
                new Special("slow fall 50 ft.")
            ],
            [
                new Special("Diamond body")
            ],
            [
                new Special("Abundant step"),
                new Special("slow fall 60 ft.")
            ],
            [
                new Special("Diamond soul")
            ],
            [
                new Special("Bonus feat"),
                new Special("slow fall 70 ft.")
            ],
            [
                new Special("Quivering palm")
            ],
            [
                new Special("Ki pool (adamantine)"),
                new Special("slow fall 80 ft.")
            ],
            [
                new Special("Timeless body"),
                new Special("tongue of the sun and moon")
            ],
            [
                new Special("Bonus feat"),
                new Special("slow fall 90 ft.")
            ],
            [
                new Special("Empty body")
            ],
            [
                new Special("Perfect self"),
                new Special("slow fall any distance")
            ]
        ]
    }
}