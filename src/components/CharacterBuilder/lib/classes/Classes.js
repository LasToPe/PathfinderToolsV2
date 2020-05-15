import Barbarian from './core/Barbarian';
import Bard from './core/Bard';
import Cleric from './core/Cleric';
import Druid from './core/Druid';

export default {
    Barbarian: new Barbarian(),
    Bard: new Bard(),
    Cleric: new Cleric(),
    Druid: new Druid(),
    Fighter: require('./core/Fighter.json'),
    Monk: require('./core/Monk.json'),
    Paladin: require('./core/Paladin.json'),
    Ranger: require('./core/Ranger.json'),
    Rogue: require('./core/Rogue.json'),
    Sorcerer: require('./core/Sorcerer.json'),
    Wizard: require('./core/Wizard.json')
}