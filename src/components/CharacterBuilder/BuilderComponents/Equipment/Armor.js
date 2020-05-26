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
        let item = ArmorItems.find(item => item.Name === armor);
        this.character.Equipment.Armor = item;
        this.character.ArmorClass.Armor = item['Armor Bonus'];
        this.character.ArmorClass.ArmorMaxDex = parseInt(item['Max Dex Bonus']) || 20;
        this.setState({});
    }

    setShield(shield) {
        let item = ShieldItems.find(item => item.Name === shield);
        this.character.Equipment.Shield = item;
        this.character.ArmorClass.Shield = item['Armor Bonus'];
        this.character.ArmorClass.ShieldMaxDex = parseInt(item['Max Dex Bonus']) || 20;
        this.setState({});
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
                {`AC: ${this.character.ArmorClass.AC}, Touch: ${this.character.ArmorClass.Touch}, FF: ${this.character.ArmorClass.FlatFooted}`}
            </div>
        )
    }
}