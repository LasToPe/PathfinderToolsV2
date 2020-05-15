import React from 'react';
const ClassTraining = require('./data/ClassTraining.json');
const InfluentialAssociate = require('./data/InfluentialAssociate.json');

export default class AdolescenceAndTraining extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            class: null,
            training: null,
            associate: null
        }
    }

    renderClass() {

        let Classes = Object.keys(require('./data/ClassTraining.json'));

        return (
            <div>
                <h4>Select class</h4>
                <select onChange={e => this.setState({ class: e.target.value })}>
                    <option hidden>Select class</option>
                    {Classes.map(c => {
                        return <option value={c}>{c}</option>
                    })}
                </select>
            </div>
        )
    }

    renderTraining() {
        if(!this.state.class) return null;

        return (
            <div>
                <h4>Training</h4>
                <select onChange={e => this.setState({ training: e.target.value })}>
                    <option hidden>Select training</option>
                    {ClassTraining[this.state.class].map(ct => {
                        return <option value={ct.Description}>{ct.Name}</option>
                    })}
                </select>
                <p className="description">
                    {this.state.training}
                </p>
            </div>
        )
    }

    renderInfluentialAssociate() {
        return (
            <div>
                <h4>Influential associate</h4>
                <select onChange={e => this.setState({ associate: e.target.value })}>
                    <option hidden>Select influential associate</option>
                    {InfluentialAssociate.map(ia => {
                        return <option value={ia.Description}>{ia.Name}</option>
                    })}
                </select>
                <p className="description">
                    {this.state.associate}
                </p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Adolescence and Training</h2>
                {this.renderClass()}
                {this.renderTraining()}
                {this.renderInfluentialAssociate()}
            </div>
        )
    }
}