import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class Weapon extends BuilderComponent {

    constructor(props) {
        super(props);

        this.WeaponItems = [
            ...require('../../lib/equipment/simple-weapons.json'), 
            ...require('../../lib/equipment/martial-weapons.json'), 
            ...require('../../lib/equipment/exotic-weapons.json')
        ];

        this.state = {
            category: props.weapon.Category || "Light"
        }
    }

    setWeapon(weapon) {
        this.character.Equipment.Weapons[this.props.index] = this.WeaponItems.find(item => item.Name === weapon);
        this.setState({});
    }

    render() {

        const weaponCategories = [...new Set(this.WeaponItems.map(item => item.Category))];
        const weaponProficiencies = [...new Set(this.WeaponItems.map(item => item.Proficiency))];

        return (
            <div className="weapon">
                <label>Weapon:</label>
                <select defaultValue={this.props.weapon.Name} onChange={e => this.setWeapon(e.target.value)}>
                    <option hidden>Select weapon</option>
                    {
                        weaponProficiencies.map(prof => {
                            return (
                                <optgroup label={prof}>
                                    {this.WeaponItems.map(item => {
                                        return item.Proficiency === prof && item.Category === this.state.category ? <option value={item.Name}>{item.Name}</option> : null;
                                    })}
                                </optgroup>
                            )
                        })
                    }
                </select>
                <select className="weapon-category" defaultValue={this.state.category} onChange={e => this.setState({ category: e.target.value })}>
                    {weaponCategories.map(cat => <option value={cat}>{cat}</option>)}
                </select>
            </div>
        )
    }
}