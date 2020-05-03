import React from 'react';
const homelands = require('./data/Homeland.json');

export default class HomelandFamilyChildhood extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            race: null,
            homeland: null,
            parents: null,
            siblings: null,
            circumstanceOfBirth: null,
            majorChildhoodEvent: null
        };
    }

    renderRace() {
        return (
            <select onChange={(e) => this.setState({ race: e.target.value })}>
                <option hidden>Select Race</option>
                <option value="Dwarf">Dwarf</option>
                <option value="Elf">Elf</option>
                <option value="Gnome">Gnome</option>
                <option value="Half-Elf">Half-Elf</option>
                <option value="Half-Orc">Half-Orc</option>
                <option value="Halfling">Halfling</option>
                <option value="Human">Human</option>
            </select>
        );
    }

    renderHomeland() {
        if (!this.state.race) return null;

        return (
            <div>
                <h4>Select Homeland</h4>
                <select onChange={(e) => this.setState({ homeland: e.target.value })}>
                    {homelands[this.state.race].map(homeland => {
                        return <option value={homeland.Name}>{homeland.Name}</option>
                    })}
                    <option value="Unusual">Unusual</option>
                </select>
                {this.renderUnusualHomeland()}
            </div>
        )
    }

    renderUnusualHomeland() {
        if (this.state.homeland !== "Unusual") return null;

        return (
            <select onChange={(e) => this.setState({ homelandUnusual: e.target.value })}>
                {homelands.Unusual.map(homeland => {
                    return <option value={homeland.Name}>{homeland.Name}</option>
                })}
            </select>
        )
    }

    render() {
        return (
            <div>
                <h2>Homeland, Family and Childhood</h2>
                <h4>Select race</h4>
                {this.renderRace()}
                {this.renderHomeland()}
            </div>
        )
    }
}