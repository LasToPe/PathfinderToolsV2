import React from 'react';
import BuilderComponent from '../../BuilderComponent';

const statValues = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const pointBuyValues = { 7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2, 13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17 };

export default class Stats extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.strengthbase = 10;
        this.character.dexteritybase = 10;
        this.character.constitutionbase = 10;
        this.character.intelligencebase = 10;
        this.character.wisdombase = 10;
        this.character.charismabase = 10;
    }

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

    get pointBuy() {
        let str = pointBuyValues[this.character.strengthbase];
        let dex = pointBuyValues[this.character.dexteritybase];
        let con = pointBuyValues[this.character.constitutionbase];
        let int = pointBuyValues[this.character.intelligencebase];
        let wis = pointBuyValues[this.character.wisdombase];
        let cha = pointBuyValues[this.character.charismabase];

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
                                <select defaultValue={this.character.strengthbase} onChange={e => this.setValue({ strengthbase: e.target.value })}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('strength')} />
                                </td>
                            }
                            <td>
                                {this.character.strength()} ({this.character.getAbilityMod('strength') >= 0 && '+'}{this.character.getAbilityMod('strength')})
                        </td>
                        </tr>
                        <tr>
                            <td>Dexterity</td>
                            <td>
                                <select defaultValue={this.character.dexteritybase} onChange={e => this.setValue({ dexteritybase: e.target.value })}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('dexterity')} />
                                </td>
                            }
                            <td>
                                {this.character.dexterity()} ({this.character.getAbilityMod('dexterity') >= 0 && '+'}{this.character.getAbilityMod('dexterity')})
                        </td>
                        </tr>
                        <tr>
                            <td>Constitution</td>
                            <td>
                                <select defaultValue={this.character.constitutionbase} onChange={e => this.setValue({ constitutionbase: e.target.value })}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('constitution')} />
                                </td>
                            }
                            <td>
                                {this.character.constitution()} ({this.character.getAbilityMod('constitution') >= 0 && '+'}{this.character.getAbilityMod('constitution')})
                        </td>
                        </tr>
                        <tr>
                            <td>Intelligence</td>
                            <td>
                                <select defaultValue={this.character.intelligencebase} onChange={e => this.setValue({ intelligencebase: e.target.value })}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('intelligence')} />
                                </td>
                            }
                            <td>
                                {this.character.intelligence()} ({this.character.getAbilityMod('intelligence') >= 0 && '+'}{this.character.getAbilityMod('intelligence')})
                        </td>
                        </tr>
                        <tr>
                            <td>Wisdom</td>
                            <td>
                                <select defaultValue={this.character.wisdombase} onChange={e => this.setValue({ wisdombase: e.target.value })}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('wisdom')} />
                                </td>
                            }
                            <td>
                                {this.character.wisdom()} ({this.character.getAbilityMod('wisdom') >= 0 && '+'}{this.character.getAbilityMod('wisdom')})
                        </td>
                        </tr>
                        <tr>
                            <td>Charisma</td>
                            <td>
                                <select defaultValue={this.character.charismabase} onChange={e => this.setValue({ charismabase: e.target.value })}>
                                    {statValues.map(val => <option value={val}>{val}</option>)}
                                </select>
                            </td>
                            {
                                this.character.race && this.character.race.AbilityMods.any &&
                                <td>
                                    <input type="radio" name="ability-bonus" onChange={() => this.setRacialBonus('charisma')} />
                                </td>
                            }
                            <td>
                                {this.character.charisma()} ({this.character.getAbilityMod('charisma') >= 0 && '+'}{this.character.getAbilityMod('charisma')})
                        </td>
                        </tr>
                    </tbody>
                </table>
                <small>Point buy value: {this.pointBuy}</small>
            </div>
        )
    }
}