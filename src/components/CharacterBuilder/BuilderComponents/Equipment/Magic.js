import React from 'react';
import BuilderComponent from "../../BuilderComponent";

import HeadItems from '../../lib/equipment/magic-equipment/head.json';
import HeadbandItems from '../../lib/equipment/magic-equipment/headband.json';
import EyesItems from '../../lib/equipment/magic-equipment/eyes.json';
import ShouldersItems from '../../lib/equipment/magic-equipment/shoulders.json';
import NeckItems from '../../lib/equipment/magic-equipment/neck.json';
import ChestItems from '../../lib/equipment/magic-equipment/chest.json';
import BodyItems from '../../lib/equipment/magic-equipment/body.json';
import BeltItems from '../../lib/equipment/magic-equipment/belts.json';
import WristItems from '../../lib/equipment/magic-equipment/wrists.json';
import HandsItems from '../../lib/equipment/magic-equipment/hands.json';
import RingItems from '../../lib/equipment/magic-equipment/rings.json';
import FeetItems from '../../lib/equipment/magic-equipment/feet.json';

export default class Magic extends BuilderComponent {

    constructor(props) {
        super(props);

        this.character.Equipment.Magic = {};
    }

    render() {
        return (
            <div className="magic-equipment">
                <b>Magic items</b>
                <div className="magic-equipment-head">
                    <label>Head:</label>
                    <select
                        id="magic-head"
                        onChange={e => this.character.Equipment.Magic.Head = HeadItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {HeadItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-headband">
                    <label>Headband:</label>
                    <select
                        id="magic-headband"
                        onChange={e => this.character.Equipment.Magic.Headband = HeadbandItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {HeadbandItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-eyes">
                    <label>Eyes:</label>
                    <select 
                        id="magic-eyes"
                        onChange={e => this.character.Equipment.Magic.Eyes = EyesItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {EyesItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-shoulders">
                    <label>Shoulders:</label>
                    <select
                        id="magic-shoulders"
                        onChange={e => this.character.Equipment.Magic.Shoulders = ShouldersItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {ShouldersItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-neck">
                    <label>Neck:</label>
                    <select 
                        id="magic-neck"
                        onChange={e => this.character.Equipment.Magic.Neck = NeckItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {NeckItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-chest">
                    <label>Chest:</label>
                    <select 
                        id="magic-chest"
                        onChange={e => this.character.Equipment.Magic.Chest = ChestItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {ChestItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-body">
                    <label>Body:</label>
                    <select 
                        id="magic-body"
                        onChange={e => this.character.Equipment.Magic.Body = BodyItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {BodyItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-belt">
                    <label>Belt:</label>
                    <select 
                        id="magic-belt"
                        onChange={e => this.character.Equipment.Magic.Belt = BeltItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {BeltItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-wrists">
                    <label>Wrists:</label>
                    <select 
                        id="magic-wrists"
                        onChange={e => this.character.Equipment.Magic.Wrists = WristItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {WristItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-hands">
                    <label>Hands:</label>
                    <select 
                        id="magic-hands"
                        onChange={e => this.character.Equipment.Magic.Hands = HandsItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {HandsItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-ring">
                    <label>Ring 1:</label>
                    <select 
                        id="magic-ring-1"
                        onChange={e => this.character.Equipment.Magic.Ring1 = RingItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {RingItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-ring">
                    <label>Ring 2:</label>
                    <select 
                        id="magic-ring-2"
                        onChange={e => this.character.Equipment.Magic.Ring2 = RingItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {RingItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-feet">
                    <label>Feet:</label>
                    <select 
                        id="magic-feet"
                        onChange={e => this.character.Equipment.Magic.Feet = FeetItems.find(item => item.Name === e.target.value)}
                    >
                        <option>None</option>
                        {FeetItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
            </div>
        )
    }
}