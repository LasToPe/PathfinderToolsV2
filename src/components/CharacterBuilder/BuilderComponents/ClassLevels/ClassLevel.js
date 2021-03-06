import React from 'react';
import BuilderComponent from '../../BuilderComponent';
import Svg from '../../../shared/Svg';
import Classes from '../../lib/classes/Classes';
import SpecialChoice from './SpecialChoice';

export default class ClassLevel extends BuilderComponent {

    constructor(props) {
        super(props);

        this.state = {
            editing: true,
            class: null
        };
    }

    get classLevel() {
        let classLevel = 0;
        for (let i = 1; i <= this.props.level; i++) {
            if (this.character.Levels[i] && this.character.Levels[i].Name === this.state.class) {
                classLevel += 1;
            }
        }
        return classLevel;
    }

    edit() {
        this.setState({ editing: true });
    }

    submit() {
        this.character.Levels[this.props.level] = Classes[this.state.class]

        this.setState({ editing: false });
        this.props.updateState();
    }

    cancel() {
        this.setState({ editing: false });
    }

    updateState() {
        this.setState({});
    }

    renderDetails() {
        if (
            !this.character.Levels[this.props.level] ||
            !this.character.Levels[this.props.level].Specials ||
            !this.character.Levels[this.props.level].Specials[this.classLevel - 1]
        ) {
            return null;
        }

        return this.character.Levels[this.props.level].Specials[this.classLevel - 1].map(special => {
            return <SpecialChoice
                character={this.character}
                class={this.state.class}
                level={this.props.level}
                special={special} 
                updateState={() => this.updateState()}/>;
        });
    }

    render() {
        return (
            <div className="class-level">
                <div className="level">
                    {this.props.level}
                </div>
                <div className="class">
                    {
                        this.character.Levels[this.props.level] &&
                        !this.state.editing &&
                        `${this.character.Levels[this.props.level].Name} (${this.classLevel})`
                    }
                    {
                        this.state.editing &&
                        <select onChange={e => this.setState({ class: e.target.value })} defaultValue={this.state.class}>
                            <option hidden value={null}>Select Class</option>
                            {Object.keys(Classes).map(c => <option value={c}>{c}</option>)}
                        </select>
                    }
                </div>
                <div className="icon">
                    {!this.state.editing ?
                        <span onClick={() => this.edit()} title="Edit">
                            <Svg icon="editIcon" />
                        </span> :
                        <span>
                            <span onClick={() => this.submit()} title="Submit">
                                <Svg icon="submitIcon" />
                            </span>
                            <span onClick={() => this.cancel()} title="Cancel">
                                <Svg icon="cancelIcon" />
                            </span>
                        </span>
                    }
                </div>
                <div className="class-details">
                    {this.renderDetails()}
                </div>
            </div >
        )
    }
}