import React from 'react';
import BuilderComponent from '../../BuilderComponent';
import Svg from '../../../shared/Svg';
import Classes from '../../lib/classes/Classes';

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
            if (this.character.levels[i] && this.character.levels[i].Name === this.state.class) {
                classLevel += 1;
            }
        }
        return classLevel;
    }

    edit() {
        this.setState({ editing: true });
    }

    submit() {
        this.character.levels[this.props.level] = Classes[this.state.class]

        this.setState({ editing: false });
        this.props.updateState();
    }

    cancel() {
        this.setState({ editing: false });
    }

    renderDetails() {
        if (
            !this.character.levels[this.props.level] ||
            !this.character.levels[this.props.level].Specials ||
            !this.character.levels[this.props.level].Specials[this.classLevel - 1]
        ) {
            return null;
        }

        return this.character.levels[this.props.level].Specials[this.classLevel - 1].map(special => {
            return (
                <div>
                    <span>{special.Name}</span>
                    {
                        special.Choices ?
                        <select>
                            <option hidden>Select {special.Name}</option>
                            {Object.keys(special.Choices).map(item => {
                                return <option value={item}>{item}</option>
                            })}
                        </select>
                        : undefined
                    }
                </div>
            )
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
                        this.character.levels[this.props.level] &&
                        !this.state.editing &&
                        `${this.character.levels[this.props.level].Name} (${this.classLevel})`
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