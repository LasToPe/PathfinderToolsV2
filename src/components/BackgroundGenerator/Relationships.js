import React from 'react';
const Romantic = require('./data/RelationshipsRomantic.json');
const Adventurers = require('./data/RelationshipsAdventurers.json')

export default class Relationships extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderRomanticRelationship() {
        return (
            <div>
                <h4>Romantic relationships</h4>
                <select onChange={e => this.setState({ romantic: e.target.value })}>
                    <option hidden>Select romantic relationships</option>
                    {Romantic.map(relationship => {
                        return <option value={relationship.Description}>{relationship.Name}</option>
                    })}
                </select>
                <p className="description">
                    {this.state.romantic}
                </p>
            </div>
        )
    }

    renderAdventuringRelationship() {
        return (
            <div>
                <h4>Relationship with fellow adventurers</h4>
                <select onChange={e => this.setState({ adventurers: e.target.value })}>
                    <option hidden>Select relationship with fellow adventurers</option>
                    {Adventurers.map(relationship => {
                        return <option value={relationship}>{relationship}</option>
                    })}
                </select>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Relationships</h2>
                {this.renderRomanticRelationship()}
                {this.renderAdventuringRelationship()}
            </div>
        )
    }
}