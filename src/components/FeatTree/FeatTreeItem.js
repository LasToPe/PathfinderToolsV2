import React from 'react';
import './FeatTree.scss';

export default class FeatTreeItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            unfolded: false
        };
    }

    get link() {
        let feat = this.props.feat.Name.replace(/\*/gi, '');
        feat = feat.replace(/⊤/gi, '');

        return `https://aonprd.com/FeatDisplay.aspx?ItemName=${feat}`;
    }

    foldOut() {
        this.setState({ unfolded: !this.state.unfolded });
    }

    renderChildren() {
        if (!this.props.feat.ChildFeats) return null;

        return (
            this.props.feat.ChildFeats.map(feat => <FeatTreeItem feat={feat} />)
        )
    }

    render() {
        return (
            <div className="feat-container">
                <div className="feat-tree-item">
                    <div className="feat-tree-item_left">
                        <a href={this.link} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 32 32" className="icon icon-externalLink" aria-hidden="true">
                                <path d="M23.5 23.5h-15v-15h4.791V6H6v20h20v-7.969h-2.5z" />
                                <path d="M17.979 6l3.016 3.018-6.829 6.829 1.988 1.987 6.83-6.828L26 14.02V6z" />
                            </svg>
                        </a>
                        <strong>{this.props.feat.Name}</strong>
                    </div>
                    {
                        this.props.feat.ChildFeats.length > 0 &&
                        <svg viewBox="0 0 32 32" className={`icon icon-chevron-bottom ${this.state.unfolded ? 'unfolded' : ''}`} aria-hidden="true" onClick={() => this.foldOut()}>
                            <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
                        </svg>
                    }
                </div>
                <div>
                    {this.state.unfolded && this.renderChildren()}
                </div>
            </div>
        )
    }
}