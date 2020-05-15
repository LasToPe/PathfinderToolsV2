import React from 'react';
import HomelandFamilyChildhood from './HomelandFamilyChildhood';
import './Background.scss';
import AdolescenceAndTraining from './AdolescenceAndTraining';
import MoralConflict from './MoralConflict';
import Relationships from './Relationships';

export default class BackgroundGenerator extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Background Generator</h1>
                <div className="background-generator">
                    <HomelandFamilyChildhood />
                    <AdolescenceAndTraining />
                    <MoralConflict />
                    <Relationships />
                </div>
            </div>
        );
    }
}