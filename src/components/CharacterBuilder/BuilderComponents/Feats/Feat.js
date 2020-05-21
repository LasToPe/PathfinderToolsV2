import React from 'react';
import BuilderComponent from '../../BuilderComponent';
import Svg from '../../../shared/Svg';

export default class Feat extends BuilderComponent {

    constructor(props) {
        super(props);

        this.state = {
            feats: []
        }
    }

    componentDidMount() {
        if (this.props.level % 2 === 1) {
            let feats = this.state.feats;
            feats.push({});
            this.setState({ feats });
        }
    }

    setFeat(index, feat) {
        let feats = this.state.feats;
        feats[index] = feat;
        this.setState({ feats });

        this.character.Feats[this.props.level] = this.state.feats;
    }

    addBonusFeat() {
        let feats = this.state.feats;
        feats.push({});
        this.setState({ feats });
    }
    
    removeBonusFeat() {
        let feats = this.state.feats;
        feats.pop();
        this.setState({ feats });
    }

    render() {
        return (
            <div className="feat-level">
                <div className="level">
                    {this.props.level}
                </div>
                <div className="feat">
                    {
                        this.state.feats.map((feat, index) => {
                            return (
                                <span>
                                    <input onChange={e => this.setFeat(index, e.target.value)} defaultValue={feat.Name} list="feats-list" />
                                    {
                                        (index > 0 || this.props.level % 2 === 0) &&
                                        <span className="icon" onClick={() => this.removeBonusFeat()} title="Remove bonus feat">
                                            <Svg icon="banIcon" />
                                        </span>
                                    }
                                </span>
                            )
                        })
                    }
                </div>
                <div className="icon">
                    <span onClick={() => this.addBonusFeat()} title="Add bonus feat">
                        <Svg className="plus" icon="plusIcon" />
                    </span>
                </div>
            </div>
        )
    }
}