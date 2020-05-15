import React from 'react';
const Conflicts = require('./data/Conflicts.json');
const Subjects = require('./data/ConflictSubjects.json');
const Motivations = require('./data/ConflictMotivation.json');
const Resolutions = require('./data/ConflictResolutions.json');

export default class MoralConflict extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            conflict: null,
            subject: null,
            motivation: null,
            resolution: null
        }
    }

    renderConflict() {
        return (
            <div>
                <h4>Conflict</h4>
                <select onChange={e => this.setState({ conflict: e.target.value })}>
                    <option hidden>Select moral conflict</option>
                    {Conflicts.map(conflict => {
                        return <option value={conflict.Name}>{conflict.Name}</option>
                    })}
                </select>
            </div>
        )
    }

    renderSubject() {
        return (
            <div>
                <h4>Conflict subject</h4>
                <select onChange={e => this.setState({ subject: e.target.value })}>
                    <option hidden>Select conflict subject</option>
                    {Subjects.map(subject => {
                        return <option value={subject}>{subject}</option>
                    })}
                </select>
            </div>
        )
    }

    renderMotivation() {
        return (
            <div>
                <h4>Conflict motivation</h4>
                <select onChange={e => this.setState({ motivation: e.target.value })}>
                    <option hidden>Select conflict motivation</option>
                    {Motivations.map(motivation => {
                        return <option value={motivation}>{motivation}</option>
                    })}
                </select>
            </div>
        )
    }

    renderResolution() {
        return (
            <div>
                <h4>Conflict resolution</h4>
                <select onChange={e => this.setState({ resolution: e.target.value })}>
                    <option hidden>Select conflict resolution</option>
                    {Resolutions.map(resolution => {
                        return <option value={resolution.Name}>{resolution.Name}</option>
                    })}
                </select>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Moral Conflict and Resolution</h2>
                {this.renderConflict()}
                {this.renderSubject()}
                {this.renderMotivation()}
                {this.renderResolution()}
            </div>
        )
    }
}