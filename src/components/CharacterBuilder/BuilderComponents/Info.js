import React from 'react';
import Stats from './Info/Stats';
import BuilderComponent from '../BuilderComponent';     
import Details from './Info/Details';
import Basic from './Info/Basic';

export default class Info extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.ageCategory = 'adult';
    }

    render() {
        return (
            <div>
                <Basic character={this.character} />
                <Details character={this.character} />
                <Stats character={this.character} />
            </div>
        )
    }
}