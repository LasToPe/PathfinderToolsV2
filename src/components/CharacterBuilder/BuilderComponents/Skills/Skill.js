import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class Skill extends BuilderComponent {
    render() {
        return (
            <div className="skill">
                <div className="skll-class-skill">
                    <input type="checkbox" checked={this.props.skill.classSkill} />
                </div>
                <div className="skill-name">
                    {this.props.skill.Name}
                </div>
                <div className="skill-total">
                    <input value={this.props.skill.Total} />
                </div>
                <div className="skill-ability">
                    {this.props.skill.Ability}
                </div>
                <div className="skill-ability-mod">
                    <input value={this.props.skill.Ability.Modifier} />
                </div>
                <div className="skill-ranks">
                    <input value={this.props.skill.Ranks} />
                </div>
                <div className="skill-misc">
                    <input value={this.props.skill.Misc} />
                </div>
            </div>
        )
    }
}