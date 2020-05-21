import React from 'react';
import BuilderComponent from '../BuilderComponent';
import Feat from './Feats/Feat';

export default class Feats extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.Feats = {};
    }

    renderFeatsDataList() {
        const general = require('./Feats/data/GeneralFeats.json');
        const combat = require('./Feats/data/CombatFeats.json');

        const featNames = [...new Set([...general.map(f => f.Name), ...combat.map(f => f.Name)])];

        return (
            <datalist id="feats-list">
                {featNames.map(feat => <option value={feat} />)}
            </datalist>
        )
    }

    render() {
        return (
            <div className="feats">
                {
                    Object.keys(this.character.Levels).map(level => {
                        return <Feat level={level} character={this.character} />
                    })
                }
                {this.renderFeatsDataList()}
            </div>
        )
    }
}