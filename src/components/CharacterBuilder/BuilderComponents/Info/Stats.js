import React from 'react';
import BuilderComponent from '../../BuilderComponent';

const statValues = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const pointBuyValues = { 7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2, 13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17 };

export default class Stats extends BuilderComponent {

    setRacialBonus(ability) {
        if (!this.character.race.AbilityMods.any) return;

        this.character.race.AbilityMods[ability] = 2;
        Object.keys(this.character.race.AbilityMods).forEach(mod => {
            if (mod !== ability && mod !== 'any') {
                this.character.race.AbilityMods[mod] = 0;
            }
        });
        this.setState({});
    }

    setAbility(ability, value) {
        this.character[ability].Base = value;
        this.setState({});
    }

    get pointBuy() {
        let str = pointBuyValues[this.character.Strength.Base];
        let dex = pointBuyValues[this.character.Dexterity.Base];
        let con = pointBuyValues[this.character.Constitution.Base];
        let int = pointBuyValues[this.character.Intelligence.Base];
        let wis = pointBuyValues[this.character.Wisdom.Base];
        let cha = pointBuyValues[this.character.Charisma.Base];

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
                                <select defaultValue={this.character.Strength.Base} onChange={e => this.setAbility('Strength', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Strength')} />
                                </td>
                            }
                            <td>
                                {this.character.Strength.Total} ({this.character.Strength.Modifier >= 0 && '+'}{this.character.Strength.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Dexterity</td>
                            <td>
                                <select defaultValue={this.character.Dexterity.Base} onChange={e => this.setAbility('Dexterity', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Dexterity')} />
                                </td>
                            }
                            <td>
                                {this.character.Dexterity.Total} ({this.character.Dexterity.Modifier >= 0 && '+'}{this.character.Dexterity.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Constitution</td>
                            <td>
                                <select defaultValue={this.character.Constitution.Base} onChange={e => this.setAbility('Constitution', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Constitution')} />
                                </td>
                            }
                            <td>
                                {this.character.Constitution.Total} ({this.character.Constitution.Modifier >= 0 && '+'}{this.character.Constitution.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Intelligence</td>
                            <td>
                                <select defaultValue={this.character.Intelligence.Base} onChange={e => this.setAbility('Intelligence', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Intelligence')} />
                                </td>
                            }
                            <td>
                                {this.character.Intelligence.Total} ({this.character.Intelligence.Modifier >= 0 && '+'}{this.character.Intelligence.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Wisdom</td>
                            <td>
                                <select defaultValue={this.character.Wisdom.Base} onChange={e => this.setAbility('Wisdom', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Wisdom')} />
                                </td>
                            }
                            <td>
                                {this.character.Wisdom.Total} ({this.character.Wisdom.Modifier >= 0 && '+'}{this.character.Wisdom.Modifier})
                        </td>
                        </tr>
                        <tr>
                            <td>Charisma</td>
                            <td>
                                <select defaultValue={this.character.Charisma.Base} onChange={e => this.setAbility('Charisma', e.target.value)}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('Charisma')} />
                                </td>
                            }
                            <td>
                                {this.character.Charisma.Total} ({this.character.Charisma.Modifier >= 0 && '+'}{this.character.Charisma.Modifier})
                        </td>
                        </tr>
                    </tbody>
                </table>
                <small>Point buy value: {this.pointBuy}</small>
            </div>
        )
    }
}