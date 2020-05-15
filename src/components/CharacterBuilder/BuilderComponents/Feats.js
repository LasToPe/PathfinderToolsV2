import React from 'react';
import BuilderComponent from '../BuilderComponent';
import Feat from './Feats/Feat';

export default class Feats extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.feats = {};
    }

    render() {
        return (
            <div className="feats">
                {
                    Object.keys(this.character.levels).map(level => {
                        return <Feat level={level} character={this.character} />
                    })
                }
            </div>
        )
    }
}