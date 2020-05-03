import React from 'react';

export default class Feat extends React.Component {

    get link() {
        let feat = this.props.feat.Name.replace(/\*/gi, '');
        feat = feat.replace(/⊤/gi, '');

        return `https://aonprd.com/FeatDisplay.aspx?ItemName=${feat}`;
    }

    render() {
        return (
            <div className="feat">
                <a href={this.link} target="_blank" rel="noopener noreferrer"><strong>{this.props.feat.Name}</strong></a>
                <p>
                    {this.props.feat.Prerequisite}
                </p>
                <p>
                    {this.props.feat.Description}
                </p>
                <hr />
            </div>
        )
    }
}