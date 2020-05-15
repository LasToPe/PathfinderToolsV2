import Barbarian from './core/Barbarian';
import Bard from './core/Bard';
import Cleric from './core/Cleric';
import Druid from './core/Druid';
import Fighter from './core/Fighter';
import Monk from './core/Monk';
import Paladin from './core/Paladin';
import Ranger from './core/Ranger';
import Rogue from './core/Rogue';
import Sorcerer from './core/Sorcerer';

export default {
    Barbarian: new Barbarian(),
    Bard: new Bard(),
    Cleric: new Cleric(),
    Druid: new Druid(),
    Fighter: new Fighter(),
    Monk: new Monk(),
    Paladin: new Paladin(),
    Ranger: new Ranger(),
    Rogue: new Rogue(),
    Sorcerer: new Sorcerer(),
    Wizard: require('./core/Wizard.json')
}