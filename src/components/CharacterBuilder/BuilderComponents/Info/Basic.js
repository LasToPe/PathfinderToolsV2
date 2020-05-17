import React from 'react';
import BuilderComponent from '../../BuilderComponent';
import Races from '../../lib/races/Races';

export default class Basic extends BuilderComponent {

    setRace(race) {
        this.character.race = Races[race];
        this.setState({});
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
                        <select name="age" defaultValue="adult" onChange={e => this.setValue({ ageCategory: e.target.value })}>
                            <option value="young">Young</option>
                            <option value="adult">Adult</option>
                            <option value="middle aged">Middle Aged</option>
                            <option value="old">Old</option>
                            <option value="venerable">Venerable</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}