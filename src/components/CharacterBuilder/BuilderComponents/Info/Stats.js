import React from 'react';
import BuilderComponent from '../../BuilderComponent';

const statValues = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const pointBuyValues = { 7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2, 13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17 };

export default class Stats extends BuilderComponent {

    setRacialBonus(ability) {
        if (!this.character.Race.AbilityMods.any) return;

        Object.values(this.character.Abilities).forEach(ability => ability.RacialModifier = 0);

        this.character.Abilities[ability].RacialModifier = 2;
        this.setState({});
    }

    setAbility(ability, value) {
        this.character.Abilities[ability].Base = value;
        this.setState({});
    }

    get pointBuy() {
        let str = pointBuyValues[this.character.Abilities.Strength.Base];
        let dex = pointBuyValues[this.character.Abilities.Dexterity.Base];
        let con = pointBuyValues[this.character.Abilities.Constitution.Base];
        let int = pointBuyValues[this.character.Abilities.Intelligence.Base];
        let wis = pointBuyValues[this.character.Abilities.Wisdom.Base];
        let cha = pointBuyValues[this.character.Abilities.Charisma.Base];

        return str + dex + con + int + wis + cha;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Strength</td>
                            <td>
                                <select defaultValue={this.character.Abilities.Strength.Base} onChange={e => this.setAbility('Strength', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.Race && this.character.Race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Strength')} />
                                </td>
                            }
                            <td>
                                {this.character.Abilities.Strength.Total} ({this.character.Abilities.Strength.Modifier >= 0 && '+'}{this.character.Abilities.Strength.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Dexterity</td>
                            <td>
                                <select defaultValue={this.character.Abilities.Dexterity.Base} onChange={e => this.setAbility('Dexterity', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.Race && this.character.Race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Dexterity')} />
                                </td>
                            }
                            <td>
                                {this.character.Abilities.Dexterity.Total} ({this.character.Abilities.Dexterity.Modifier >= 0 && '+'}{this.character.Abilities.Dexterity.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Constitution</td>
                            <td>
                                <select defaultValue={this.character.Abilities.Constitution.Base} onChange={e => this.setAbility('Constitution', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.Race && this.character.Race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Constitution')} />
                                </td>
                            }
                            <td>
                                {this.character.Abilities.Constitution.Total} ({this.character.Abilities.Constitution.Modifier >= 0 && '+'}{this.character.Abilities.Constitution.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Intelligence</td>
                            <td>
                                <select defaultValue={this.character.Abilities.Intelligence.Base} onChange={e => this.setAbility('Intelligence', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.Race && this.character.Race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Intelligence')} />
                                </td>
                            }
                            <td>
                                {this.character.Abilities.Intelligence.Total} ({this.character.Abilities.Intelligence.Modifier >= 0 && '+'}{this.character.Abilities.Intelligence.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Wisdom</td>
                            <td>
                                <select defaultValue={this.character.Abilities.Wisdom.Base} onChange={e => this.setAbility('Wisdom', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.Race && this.character.Race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Wisdom')} />
                                </td>
                            }
                            <td>
                                {this.character.Abilities.Wisdom.Total} ({this.character.Abilities.Wisdom.Modifier >= 0 && '+'}{this.character.Abilities.Wisdom.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Charisma</td>
                            <td>
                                <select defaultValue={this.character.Abilities.Charisma.Base} onChange={e => this.setAbility('Charisma', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.Race && this.character.Race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Charisma')} />
                                </td>
                            }
                            <td>
                                {this.character.Abilities.Charisma.Total} ({this.character.Abilities.Charisma.Modifier >= 0 && '+'}{this.character.Abilities.Charisma.Modifier})
                        </td>
                        </tr>
                    </tbody>
                </table>
                <small>Point buy value: {this.pointBuy}</small>
            </div>
        )
    }
}