import React from 'react';
import BuilderComponent from "../BuilderComponent";
import Weapons from './Equipment/Weapons';
import Armor from './Equipment/Armor';
import Magic from './Equipment/Magic';
import Misc from './Equipment/Misc';

export default class Equipment extends BuilderComponent {
    render() {
        return (
            <div className="equipment">
                <Weapons character={this.character} />
                <Armor character={this.character} />
                <Magic character={this.character} />
                <Misc character={this.character} />
            </div>
        )
    }
}