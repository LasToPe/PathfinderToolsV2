import React from 'react';
import BuilderComponent from '../../BuilderComponent';
import Races from '../../lib/races/Races';
import AgeCategories from '../../lib/base/AgeCategories';

export default class Basic extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.Age = AgeCategories.Adult;
    }

    setRace(race) {
        this.character.Race = Races[race];

        Object.values(this.character.Abilities).forEach(ability => {
            ability.RacialModifier = 0;
        })

        if(this.character.Race.AbilityMods.any) {
            this.props.updateState();
            return;
        } 

        Object.keys(this.character.Race.AbilityMods).forEach(mod => {
            this.character.Abilities[mod].RacialModifier = this.character.Race.AbilityMods[mod];
        });
        this.props.updateState();
    }

    setAge(ageCategory) {
        let age = AgeCategories[ageCategory];
        this.character.Age = age;

        Object.values(this.character.Abilities).forEach(ability => {
            ability.AgeModifier = age.AbilityMods[ability.Name];
        });
        this.props.updateState();
    }

    render() {
        return (
            <div className="info">
                <div className="info-row">
                    <div>
                        <label>Name</label>
                        <input onChange={e => this.setValue({ name: e.target.value })} />
                    </div>
                    <div>
                        <label>Alignment</label>
                        <input onChange={e => this.setValue({ alignment: e.target.value })} />
                    </div>
                </div>
                <div className="info-row">
                    <div>
                        <label>Race</label>
                        <select onChange={e => this.setRace(e.target.value)}>
                            <option hidden>Select Race</option>
                            {Object.keys(Races).map(race => <option value={race}>{Races[race].Name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label title="Category">Age</label>
                        <select name="age" defaultValue="Adult" onChange={e => this.setAge(e.target.value)}>
                            {Object.values(AgeCategories).map(ageCategory => <option value={ageCategory.Name}>{ageCategory.Name}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}