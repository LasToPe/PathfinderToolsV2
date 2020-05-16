import React from 'react';
import BuilderComponent from './BuilderComponent';

export default class JsonExport extends BuilderComponent {

    async export() {
        const blob = new Blob([JSON.stringify(this.character)], {type: 'application/json'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = href;
        link.download = "character.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.export()}>
                    Export as Json
                </button>
            </div>
        )
    }
}