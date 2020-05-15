import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class SpecialChoice extends BuilderComponent {
    constructor(props) {
        super(props);

        if (props.special.Choices instanceof Array) {
            this.state = {
                options: props.special.Choices.map(item => <option value={item}>{item}</option>)
            }
        } else if (props.special.Choices instanceof Object) {
            this.state = {
                options: Object.keys(props.special.Choices).map(item => <option value={item}>{item}</option>)
            }
        }
    }

    render() {
        return (
            <div>
                <span>{this.props.special.Name}</span>
                {
                    this.props.special.Choices ?
                        <select>
                            <option hidden>Select {this.props.special.Name}</option>
                            {this.state.options}
                        </select>
                        : undefined
                }
            </div>
        )
    }
}