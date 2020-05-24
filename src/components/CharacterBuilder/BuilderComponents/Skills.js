import React from 'react';
import BuilderComponent from "../BuilderComponent";
import Skill from './Skills/Skill';

export default class Skills extends BuilderComponent {


    get totalSkillRanks() {
        let sum = 0;
        Object.values(this.character.Skills).forEach(skill => {
            sum += parseInt(skill.Ranks);
        });
        return sum;
    }

    render() {
        return (
            <div className="skills">
                <div className="skill">
                    <div className="skill-class-skill">
                        <b>CS</b>
                    </div>
                    <div className="skill-name">
                        <b>Skill name</b>
                    </div>
                    <div className="skill-total">
                        <b>Total</b>
                    </div>
                    <div className="skill-ability">
                        <b>Ability</b>
                    </div>
                    <div className="skill-ability-mod">
                        <b>Mod</b>
                    </div>
                    <div className="skill-ranks">
                        <b>Ranks</b>
                    </div>
                    <div className="skill-misc">
                        <b>Misc</b>
                    </div>
                </div>
                {
                    Object.values(this.character.Skills).map(skill => {
                        return <Skill skill={skill} updateState={() => this.setState({})} />
                    })
                }
                <div>
                    {`Total skill ranks: ${this.totalSkillRanks}`}
                </div>
            </div>
        )
    }
}