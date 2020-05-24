import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class Skill extends BuilderComponent {
    setRanks(val) {
        if (/\d+/.test(val)) {
            this.props.skill.Ranks = val;
            this.setState({});
            this.props.updateState();
        }
    }

    setMisc(val) {
        if (/\d+/.test(val)) {
            this.props.skill.Misc = val;
            this.setState({});
        }
    }

    setClassSkill(val) {
        this.props.skill.ClassSkill = !this.props.skill.ClassSkill;
        this.setState({});
    }

    render() {
        return (
            <div className="skill">
                <div className="skill-class-skill">
                    <input type="checkbox" checked={this.props.skill.ClassSkill} onClick={() => this.setClassSkill()} />
                </div>
                <div className="skill-name">
                    {this.props.skill.Name}
                </div>
                <div className="skill-total">
                    <input value={this.props.skill.Total} readOnly />
                </div>
                <div className="skill-ability">
                    {this.props.skill.Ability.Name.substring(0, 3)}
                </div>
                <div className="skill-ability-mod">
                    <input value={this.props.skill.Ability.Modifier} readOnly />
                </div>
                <div className="skill-ranks">
                    <input defaultValue={this.props.skill.Ranks} onChange={e => this.setRanks(e.target.value)} />
                </div>
                <div className="skill-misc">
                    <input defaultValue={this.props.skill.Misc} onChange={e => this.setMisc(e.target.value)} />
                </div>
            </div>
        )
    }
}