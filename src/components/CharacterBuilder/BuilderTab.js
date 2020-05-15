import React from 'react';
import BuilderComponent from './BuilderComponent';

export default class BuilderTab extends BuilderComponent {
    render() {
        return (
            <div className={`tab ${this.props.active ? 'active' : 'inactive'}`}>
                {this.props.children}
            </div>
        )
    }
}