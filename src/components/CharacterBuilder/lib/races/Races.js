import Dwarf from './core/Dwarf';
import Elf from './core/Elf';

export default {
    Dwarf: new Dwarf(),
    Elf: new Elf(),
    Gnome: require('./core/Gnome.json'),
    HalfElf: require('./core/Half-Elf.json'),
    Halfling: require('./core/Halfling.json'),
    HalfOrc: require('./core/Half-Orc.json'),
    Human: require('./core/Human.json')
}