import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class SpecialChoice extends BuilderComponent {
    constructor(props) {
        super(props);

        this.state = {
            options: this.setupOptions()
        }
    }

    setupOptions() {
        switch (this.props.class) {
            case "Barbarian": {
                return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
            }
            case "Bard": {
                return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
            }
            case "Cleric": {
                return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
            }
            case "Druid": {
                return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
            }
            case "Fighter": {
                return this.props.special.Choices.map(item => <option value={item}>{item}</option>);
            }
            case "Monk": {
                return null;
            }
            case "Paladin": {
                if (this.props.special.Name === "Mercy") {
                    return Object.keys(this.props.special.Choices).map(grp => {
                        return (
                            <optgroup label={`Level ${grp}`}>
                                {this.props.special.Choices[grp].map(item => <option value={item}>{item}</option>)}
                            </optgroup>
                        )
                    });
                }
                return null;
            }
            case "Ranger": {
                return this.props.special.Choices ? (this.props.special.Choices instanceof Array ?
                    this.props.special.Choices.map(item => <option value={item}>{item}</option>) :
                    Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>)) :
                    null;
            }
            case "Rogue": {
                return this.props.special.Choices ? Object.keys(this.props.special.Choices).map(grp => {
                    return (
                        <optgroup label={`${grp}`}>
                            {this.props.special.Choices[grp].map(item => <option value={item}>{item}</option>)}
                        </optgroup>
                    )
                }) :
                    null;
            }
            case "Sorcerer": {
                return Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>);
            }
            case "Wizard": {
                return this.props.special.Choices ? (this.props.special.Choices instanceof Array ?
                    this.props.special.Choices.map(item => <option value={item}>{item}</option>) :
                    Object.keys(this.props.special.Choices).map(item => <option value={item}>{item}</option>)) :
                    null;
            }
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <span>{this.props.special.Name}</span>
                {
                    this.props.special.Choices ?
                        <select>
                            <option hidden>Select {this.props.special.Name}</option>
                            {this.state.options}
                        </select>
                        : undefined
                }
            </div>
        )
    }
}