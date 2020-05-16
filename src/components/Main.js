import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to my Pathfinder Tools</h1>
                <div>
                    <ul>
                        <li><a href="/feat-search">Feat Search</a></li>
                        <li><a href="/feat-tree">Combat Feat Tree</a></li>
                        <li><a href="/background-generator">Background Generator</a></li>
                        <li><a href="/character-builder">Character Builder</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}