import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class SpecialChoice extends BuilderComponent {

    render() {
        return (
            <div>
                <span>{this.props.special.Name}</span>
                {
                    this.props.special.Choices ?
                        <select onChange={e => this.setSpecial(e.target.value)}>
                            <option hidden>Select {this.props.special.Name}</option>
                            {this.renderBarbarianOptions()}
                            {this.renderBardOPtions()}
                            {this.renderClericOptions()}
                            {this.renderDruidOptions()}
                            {this.renderFighterOptions()}
                            {this.renderPaladinOptions()}
                            {this.renderRangerOptions()}
                            {this.renderRogueOptions()}
                            {this.renderSorcererOptions()}
                            {this.renderWizardOptions()}
                        </select>
                        : undefined
                }
            </div>
        )
    }

    setSpecial(value) {
        this.props.special.set(value);
        this.setState({});
        this.props.updateState();
    }

    renderBarbarianOptions() {
        if (this.props.class !== "Barbarian") return null;

        return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>)
    }

    renderBardOPtions() {
        if (this.props.class !== "Bard") return null;

        return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
    }

    renderClericOptions() {
        if (this.props.class !== "Cleric") return null;

        return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
    }

    renderDruidOptions() {
        if (this.props.class !== "Druid") return null;

        return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
    }

    renderFighterOptions() {
        if (this.props.class !== "Fighter") return null;

        return this.props.special.Choices.map(item => <option value={item}>{item}</option>);
    }

    renderPaladinOptions() {
        if (this.props.class !== "Paladin") return null;

        if (this.props.special.Name === "Mercy") {
            return Object.keys(this.props.special.Choices).map(level => {
                return level <= parseInt(this.props.level) ?
                    this.props.special.Choices[level].map(item => {
                        return <option value={item}>{item}</option>
                    }) : null;
            });
        }
    }

    renderRangerOptions() {
        if (this.props.class !== "Ranger") return null;

        if (this.props.special.Name.indexOf("favored") > -1) {
            return this.props.special.Choices.map(item => <option value={item}>{item}</option>);
        }
        if (this.props.special.Name === "Combat Style") {
            return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
        }
        if (this.props.special.Name === "Combat style feat") {
            let c = this.character.levels[this.props.level];

            if (!c.CombatStyle.Selected) return null;
            
            return Object.keys(this.props.special.Choices[c.CombatStyle.Selected]).map(level => {
                return level <= parseInt(this.props.level) ?
                    this.props.special.Choices[c.CombatStyle.Selected][level].map(item => {
                        return <option value={item}>{item}</option>;
                    }) :
                    null;
            })
        }
    }

    renderRogueOptions() {
        if (this.props.class !== "Rogue") return null;

        return Object.keys(this.props.special.Choices).map(grp => {
            return (
                <optgroup label={`Level ${grp}`}>
                    {this.props.special.Choices[grp].map(item => <option value={item}>{item}</option>)}
                </optgroup>
            )
        });
    }

    renderSorcererOptions() {
        if (this.props.class !== "Sorcerer") return null;

        if (this.props.special.Name === "Bloodline") {
            return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
        }
    }

    renderWizardOptions() {
        if (this.props.class !== "Wizard") return null;

        if (this.props.special.Name === "Arcane Bond") {
            return this.props.special.Choices.map(item => <option value={item}>{item}</option>);
        }

        if (this.props.special.Name === "Arcane School") {
            return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
        }
    }
}