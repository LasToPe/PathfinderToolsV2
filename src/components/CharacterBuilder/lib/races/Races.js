import Dwarf from './core/Dwarf';
import Elf from './core/Elf';
import Gnome from './core/Gnome';

export default {
    Dwarf: new Dwarf(),
    Elf: new Elf(),
    Gnome: new Gnome(),
    HalfElf: require('./core/Half-Elf.json'),
    Halfling: require('./core/Halfling.json'),
    HalfOrc: require('./core/Half-Orc.json'),
    Human: require('./core/Human.json')
}