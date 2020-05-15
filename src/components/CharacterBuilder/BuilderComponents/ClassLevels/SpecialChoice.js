import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class SpecialChoice extends BuilderComponent {

    constructor(props) {
        super(props);

        this.options = {};

        switch (this.classLevel.Name) {
            case "Barbarian":
                this.options['Rage Power'] = this.map('Rage Powers');
                break;

            case "Bard":
                this.options['Versatile Performance'] = this.map('Versatile Performances');
                break;

            case "Cleric":
                this.options['Domain'] = this.map('Domains');
                break;

            case "Druid":
                this.options['Nature Bond'] = this.map('Nature Bonds');
                break;
            case "Fighter":
                this.options['Weapon Training'] = this.map('Weapon Training');
                break;
            default:
                break;
        }
    }

    map(specialName) {
        return Object.keys(this.classLevel[specialName]).map(item => {
            return <option value={item}>{item}</option>
        });
    }

    get classLevel() {
        return this.character.levels[this.props.level];
    }

    render() {
        return (
            <div>
                {this.props.special}
                {this.options[this.props.special] &&
                    <select>
                        <option hidden>{`Select ${this.props.special}`}</option>
                        {this.options[this.props.special]}
                    </select>
                }
            </div>
        )
    }
}