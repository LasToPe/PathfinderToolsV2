import Barbarian from './core/Barbarian';
import Bard from './core/Bard';
import Cleric from './core/Cleric';
import Druid from './core/Druid';
import Fighter from './core/Fighter';
import Monk from './core/Monk';
import Paladin from './core/Paladin';

export default {
    Barbarian: new Barbarian(),
    Bard: new Bard(),
    Cleric: new Cleric(),
    Druid: new Druid(),
    Fighter: new Fighter(),
    Monk: new Monk(),
    Paladin: new Paladin(),
    Ranger: require('./core/Ranger.json'),
    Rogue: require('./core/Rogue.json'),
    Sorcerer: require('./core/Sorcerer.json'),
    Wizard: require('./core/Wizard.json')
}