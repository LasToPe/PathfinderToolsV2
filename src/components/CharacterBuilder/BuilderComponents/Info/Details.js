import React from 'react';
import BuilderComponent from '../../BuilderComponent';

export default class Details extends BuilderComponent {
    render() {
        return (
            <div className="details">
                <div className="details-row">
                    <div>
                        <label>Deity</label>
                        <input onChange={e => this.setValue({ deity: e.target.value })} />
                    </div>
                    <div>
                        <label>Homeland</label>
                        <input onChange={e => this.setValue({ homeland: e.target.value })} />
                    </div>
                </div>
                <div className="details-row">
                    <div>
                        <label>Height</label>
                        <input onChange={e => this.setValue({ height: e.target.value })} />
                    </div>
                    <div>
                        <label>Weight</label>
                        <input onChange={e => this.setValue({ weight: e.target.value })} />
                    </div>
                </div>
                <div className="details-row">
                    <div>
                        <label>Age</label>
                        <input onChange={e => this.setValue({ age: e.target.value })} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <input onChange={e => this.setValue({ gender: e.target.value })} />
                    </div>
                </div>
                <div className="details-row">
                    <div>
                        <label>Hair</label>
                        <input onChange={e => this.setValue({ hair: e.target.value })} />
                    </div>
                    <div>
                        <label>Eyes</label>
                        <input onChange={e => this.setValue({ eyes: e.target.value })} />
                    </div>
                </div>
            </div>
        )
    }
}