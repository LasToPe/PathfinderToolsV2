import React from 'react';
import HomelandFamilyChildhood from './HomelandFamilyChildhood';
import './Background.scss';

export default class BackgroundGenerator extends React.Component {
    render() {
        return (
            <div className="background-generator">
                <HomelandFamilyChildhood />
            </div>
        );
    }
}