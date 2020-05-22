import React from 'react';
import BuilderComponent from "../../BuilderComponent";
import Weapon from './Weapon';

export default class Weapons extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.Equipment.Weapons = [];
    }

    addWeapon() {
        this.character.Equipment.Weapons.push({});
        this.setState({});
    }

    removeWeapon() {
        this.character.Equipment.Weapons.pop();
        this.setState({});
    }

    render() {
        return (
            <div className="weapons">
                <b>Weapons</b><br />
                {this.character.Equipment.Weapons.map((weapon, index) => <Weapon index={index} weapon={weapon} character={this.character} />)}
                <button className="btn btn-default" onClick={() => this.addWeapon()}>Add Weapon</button>
                <button className="btn btn-default" onClick={() => this.removeWeapon()}>Remove Weapon</button>
            </div>
        )
    }
}