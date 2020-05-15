import React from 'react';

export default class BuilderComponent extends React.Component {

    get character() {
        return this.props.character;
    }

    setValue(val) {
        Object.keys(val).map(key => 
            this.character[key] = val[key]
        );
        this.setState({});
    }
}