import React from 'react';
import BuilderComponent from "../../BuilderComponent";
import ArmorItems from '../../lib/equipment/armor.json';
import ShieldItems from '../../lib/equipment/shield.json';

export default class Armor extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.Equipment.Armor = ArmorItems[0];
        this.character.Equipment.Shield = ShieldItems[0];
    }

    setArmor(armor) {
        this.character.Equipment.Armor = ArmorItems.find(item => item.Name === armor);
        this.setState({});
    }

    setShield(shield) {
        this.character.Equipment.Shield = ShieldItems.find(item => item.Name === shield);
        this.setState({});
    }

    get AC() {
        const armorMaxDex = parseInt(this.character.Equipment.Armor['Max Dex Bonus']) || 20;
        const shieldMaxDex = parseInt(this.character.Equipment.Shield['Max Dex Bonus']) || 20;
        const dexBonus = Math.min(this.character.Abilities.Dexterity.Modifier, armorMaxDex, shieldMaxDex);
        return 10 + this.character.Equipment.Armor['Armor Bonus'] + this.character.Equipment.Shield['Armor Bonus'] + dexBonus;
    }

    get Touch() {
        const armorMaxDex = parseInt(this.character.Equipment.Armor['Max Dex Bonus']) || 20;
        const shieldMaxDex = parseInt(this.character.Equipment.Shield['Max Dex Bonus']) || 20;
        const dexBonus = Math.min(this.character.Abilities.Dexterity.Modifier, armorMaxDex, shieldMaxDex);
        return 10 + dexBonus;
    }

    render() {
        const armorTypes = [...new Set(ArmorItems.map(item => item.Type))];

        return (
            <div className="armor">
                <b>Armor items</b>
                <div className="armor-armor">
                    <label>Armor:</label>
                    <select onChange={e => this.setArmor(e.target.value)}>
                        {
                            armorTypes.map(type => {
                                return (
                                    <optgroup label={type}>
                                        {
                                            ArmorItems.map(item => {
                                                return item.Type === type ? <option value={item.Name}>{item.Name}</option> : null;
                                            })
                                        }
                                    </optgroup>
                                );
                            })
                        }
                    </select>
                </div>
                <div className="armor-shield">
                    <label>Shield:</label>
                    <select onChange={e => this.setShield(e.target.value)}>
                        {
                            ShieldItems.map(item => {
                                return <option value={item.Name}>{item.Name}</option>
                            })
                        }
                    </select>
                </div>
                {`AC: ${this.AC}`}
            </div>
        )
    }
}