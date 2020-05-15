import React from 'react';
import BuilderComponent from '../BuilderComponent';
import ClassLevel from './ClassLevels/ClassLevel';

export default class ClassLevels extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.levels = {};
    }

    addLevel() {
        let level = Object.keys(this.character.levels).length + 1;
        this.character.levels[level] = {};
        this.setState({});
    }

    removeLevel() {
        let level = Object.keys(this.character.levels).length;
        delete this.character.levels[level];
        this.setState({});
    }

    render() {
        return (
            <div className="class-levels">
                {
                    Object.keys(this.character.levels)
                        .map(level =>
                            <ClassLevel
                                level={level}
                                character={this.character}
                                updateState={() => this.setState({})}
                            />)
                }
                <button className="btn btn-default" onClick={() => this.addLevel()}>Add level</button>
                <button className="btn btn-default" onClick={() => this.removeLevel()}>Remove level</button>
            </div>
        )
    }
}