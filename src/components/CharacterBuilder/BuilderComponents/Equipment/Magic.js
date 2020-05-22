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
    render() {
        return (
            <div className="magic-equipment">
                <b>Magic items</b>
                <div className="magic-equipment-head">
                    <label>Head:</label>
                    <select id="magic-head">
                        <option>None</option>
                        {HeadItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-headband">
                    <label>Headband:</label>
                    <select id="magic-headband">
                        <option>None</option>
                        {HeadbandItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-eyes">
                    <label>Eyes:</label>
                    <select id="magic-eyes">
                        <option>None</option>
                        {EyesItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-shoulders">
                    <label>Shoulders:</label>
                    <select id="magic-shoulders">
                        <option>None</option>
                        {ShouldersItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-neck">
                    <label>Neck:</label>
                    <select id="magic-neck">
                        <option>None</option>
                        {NeckItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-chest">
                    <label>Chest:</label>
                    <select id="magic-chest">
                        <option>None</option>
                        {ChestItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-body">
                    <label>Body:</label>
                    <select id="magic-body">
                        <option>None</option>
                        {BodyItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-belt">
                    <label>Belt:</label>
                    <select id="magic-belt">
                        <option>None</option>
                        {BeltItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-wrists">
                    <label>Wrists:</label>
                    <select id="magic-wrists">
                        <option>None</option>
                        {WristItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-hands">
                    <label>Hands:</label>
                    <select id="magic-hands">
                        <option>None</option>
                        {HandsItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-ring">
                    <label>Ring 1:</label>
                    <select id="magic-ring-1">
                        <option>None</option>
                        {RingItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-ring">
                    <label>Ring 2:</label>
                    <select id="magic-ring-2">
                        <option>None</option>
                        {RingItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
                <div className="magic-equipment-feet">
                    <label>Feet:</label>
                    <select id="magic-feet">
                        <option>None</option>
                        {FeetItems.map(item => <option value={item.Name}>{item.Name}</option>)}
                    </select>
                </div>
            </div>
        )
    }
}