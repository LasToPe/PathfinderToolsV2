import React from 'react';
import BuilderComponent from "../../BuilderComponent";
import ArmorItems from '../../lib/equipment/armor.json';
import ShieldItems from '../../lib/equipment/shield.json';

export default class Armor extends BuilderComponent {

    setArmor(armor) {

    }

    setShield(shield) {
        
    }

    render() {
        const armorTypes = [...new Set(ArmorItems.map(item => item.Type))];

        return (
            <div className="armor">
                <div className="armor-armor">
                    Armor: 
                    <select>
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
                    <select>
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