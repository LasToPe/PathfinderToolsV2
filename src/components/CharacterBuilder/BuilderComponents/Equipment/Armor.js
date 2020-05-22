import React from 'react';
import BuilderComponent from "../../BuilderComponent";
import ArmorItems from '../../lib/equipment/armor.json';
import ShieldItems from '../../lib/equipment/shield.json';

export default class Armor extends BuilderComponent {

    setArmor(armor) {
        this.character.Equipment.Armor = ArmorItems.find(item => item.Name === armor);
        this.setState({});
    }

    setShield(shield) {
        this.character.Equipment.Shield = ShieldItems.find(item => item.Name === shield);
        this.setState({});
    }

    render() {
        const armorTypes = [...new Set(ArmorItems.map(item => item.Type))];

        return (
            <div className="armor">
                <div className="armor-armor">
                    Armor: 
                    <select onChange={ e => this.setArmor(e.target.value) }>
                        <option>No Armor</option>
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
                    Shield:
                    <select onChange={e => this.setShield(e.target.value)}>
                        <option>No Shield</option>
                        {
                            ShieldItems.map(item => {
                                return <option value={item.Name}>{item.Name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        )
    }
}