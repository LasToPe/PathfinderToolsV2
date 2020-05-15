import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class Spinner extends React.Component {
    render() {
        return (
            <Loader
                type="TailSpin"
                color={this.props.color}
                height={this.props.size}
                width={this.props.size}
            />
        )
    }
}