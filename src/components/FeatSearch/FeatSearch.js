import React from 'react';
import Feat from './FeatComponent';
import './FeatSearch.scss';
const Feats = require('./data/CombatFeats.json');

export default class FeatSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            searchResult: [],
            searchValue: null,
        };
    }

    search() {
        let value = this.state.searchValue;
        if (!value) return;
        let result = Feats.filter(feat => feat.Name.toLowerCase().indexOf(value.toLowerCase()) > -1);

        // look in prerequisites
        result = [...result, ...Feats.filter(feat => feat.Prerequisite.toLowerCase().indexOf(value.toLowerCase()) > -1)];
        // look in description
        result = [...result, ...Feats.filter(feat => feat.Description.toLowerCase().indexOf(value.toLowerCase()) > -1)];
        // ensure unique
        result = [...new Set(result)];

        this.setState({ searchResult: result });
    }

    renderFeats() {
        const featItems = this.state.searchResult.map((feat) =>
            <Feat feat={feat} />
        );

        return (
            <div className="results">
                {featItems}
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Feat Search</h1>
                <div className="search-bar">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input onChange={(e) => this.setState({ searchValue: e.target.value })} type="text" />
                        <input type="submit" onClick={() => this.search()} value="Search" />
                    </form>
                </div>


                {this.renderFeats()}
            </div>
        )
    }
}