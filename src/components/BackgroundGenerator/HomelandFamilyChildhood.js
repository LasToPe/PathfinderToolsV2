import React from 'react';
const Races = require('./data/Races.json');
const Homelands = require('./data/Homeland.json');
const Parents = require('./data/Parents.json');
const Siblings = require('./data/Siblings.json');
const CircumstanceOfBirth = require('./data/CircumstanceOfBirth.json');
const MajorChildhoodEvent = require('./data/MajorChildhoodEvent.json');

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
            <div>
                <h4>Select race</h4>
                <select onChange={(e) => this.setState({ race: e.target.value })}>
                    <option hidden>Select Race</option>
                    {Races.map(race => {
                        return <option value={race}>{race}</option>
                    })}
                </select>
            </div>
        );
    }

    renderHomeland() {
        if (!this.state.race) return null;

        return (
            <div>
                <h4>Select homeland</h4>
                <select onChange={(e) => this.setState({ homeland: e.target.value, homelandUnusual: null })}>
                    <option hidden>Select homeland</option>
                    {Homelands[this.state.race].map(homeland => {
                        return <option value={homeland.Description}>{homeland.Name}</option>
                    })}
                    <option value="Unusual">Unusual</option>
                </select>
                {this.renderUnusualHomeland()}
                <p className="description">
                    {
                        this.state.homeland === "Unusual" ? this.state.homelandUnusual : this.state.homeland
                    }
                </p>
            </div>
        )
    }

    renderUnusualHomeland() {
        if (this.state.homeland !== "Unusual") return null;

        return (
            <select onChange={(e) => this.setState({ homelandUnusual: e.target.value })}>
                <option hidden>Choose unusual homeland</option>
                {Homelands.Unusual.map(homeland => {
                    return <option value={homeland.Description}>{homeland.Name}</option>
                })}
            </select>
        )
    }

    renderParents() {
        return (
            <div>
                <h4>Parents</h4>
                <select onChange={e => this.setState({ parents: e.target.value })}>
                    <option hidden>Select parents</option>
                    {Parents.map(element => {
                        return <option value={element}>{element}</option>
                    })}
                </select>
            </div>

        )
    }

    renderSiblings() {
        if (!this.state.race) return null;

        return (
            <div>
                <h4>Siblings</h4>
                <select onChange={e => this.setState({ siblings: e.target.value })}>
                    <option hidden>Select siblings</option>
                    {Siblings[this.state.race].map(sibling => {
                        return <option value={sibling}>{sibling}</option>
                    })}
                </select>
            </div>
        )
    }

    renderCircumstanceOfBirth() {
        return (
            <div>
                <h4>Circumstance of birth</h4>
                <select onChange={e => this.setState({ circumstanceOfBirth: e.target.value })}>
                    <option hidden>Select circumstance of birth</option>
                    {CircumstanceOfBirth.map(cob => {
                        return <option value={cob.Description}>{cob.Name}</option>
                    })}
                </select>
                <p className="description">
                    {this.state.circumstanceOfBirth}
                </p>
            </div>
        )
    }

    renderMajorChildhoodEvent() {
        return (
            <div>
                <h4>Major childhood event</h4>
                <select onChange={e => this.setState({ majorChildhoodEvent: e.target.value })}>
                    <option hidden>Select major childhood event</option>
                    {MajorChildhoodEvent.map(event => {
                        return <option value={event.Description}>{event.Name}</option>
                    })}
                </select>
                <p className="description">
                    {this.state.majorChildhoodEvent}
                </p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Homeland, Family and Childhood</h2>
                {this.renderRace()}
                {this.renderHomeland()}
                {this.renderParents()}
                {this.renderSiblings()}
                {this.renderCircumstanceOfBirth()}
                {this.renderMajorChildhoodEvent()}
            </div>
        )
    }
}