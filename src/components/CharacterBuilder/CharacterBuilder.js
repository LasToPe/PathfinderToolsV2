import React from 'react';
import './CharacterBuilder.scss';
import Info from './BuilderComponents/Info';
import Character from './lib/Character';
import ClassLevels from './BuilderComponents/ClassLevels';
import BuilderTab from './BuilderTab';
import Feats from './BuilderComponents/Feats';

export default class CharacterBuilder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            character: new Character(),
            tab: window.location.hash.replace('#', '') || 'info'
        };
    }

    gotoTab(tab) {
        this.setState({ tab });
    }

    render() {
        return (
            <div className="container">
                <h1>Character Builder</h1>

                <nav>
                    <ul className="builder-navigation">
                        <li><a className={this.state.tab === 'info' && 'active'} href="#info" onClick={() => this.gotoTab('info')}>Info</a></li>
                        <li><a className={this.state.tab === 'class-levels' && 'active'} href="#class-levels" onClick={() => this.gotoTab('class-levels')}>Class Levels</a></li>
                        <li><a className={this.state.tab === 'feats' && 'active'} href="#feats" onClick={() => this.gotoTab('feats')}>Feats</a></li>
                    </ul>
                </nav>

                <BuilderTab active={this.state.tab === 'info'}>
                    <Info character={this.state.character} />
                </BuilderTab>
                <BuilderTab active={this.state.tab === 'class-levels'}>
                    <ClassLevels character={this.state.character} />
                </BuilderTab>
                <BuilderTab active={this.state.tab === 'feats'}>
                    <Feats character={this.state.character} />
                </BuilderTab>
            </div>
        )
    }
}