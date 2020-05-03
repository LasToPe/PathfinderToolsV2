import React from 'react';
import FeatTreeItem from './FeatTreeItem';
import _ from 'underscore';
let Feats = require('../../data/CombatFeats.json');

export default class FeatTree extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rootFeats: []
        };
    }

    componentDidMount() {
        this.mapFeats();
    }

    mapFeats() {
        Feats.forEach(feat => {
            feat.ChildFeats = [];
            Feats.forEach(f => {
                if(f.Prerequisite.indexOf(feat.Name) > -1) {
                    feat.ChildFeats.push(f);
                }
            })
        });

        Feats.forEach(feat => {
            feat.ChildFeats.forEach(cf => {
                feat.ChildFeats = _.difference(feat.ChildFeats, cf.ChildFeats);
            })
        })

        Feats.forEach(feat => {
            feat.PrerequisiteFeats = [];
            let reqs = feat.Prerequisite.split(/,\s|;\s|\sor\s/g);
            reqs.forEach(req => {
                if(Feats.find(feat => feat.Name === req)) {
                    feat.PrerequisiteFeats.push(Feats.find(feat => feat.Name === req));
                }       
            });
        });

        let rootFeats = Feats.filter(feat => feat.PrerequisiteFeats.length === 0);

        this.setState({
            rootFeats
        });
    }

    render() {
        return (
            <div className="feat-tree-container">
                {
                    this.state.rootFeats.map((feat, index) => <FeatTreeItem key={index} feat={feat}/>)
                }
            </div>
        )
    }
}