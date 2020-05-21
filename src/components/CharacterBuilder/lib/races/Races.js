import Dwarf from './core/Dwarf';

export default {
    Dwarf: new Dwarf(),
    Elf: require('./Elf.json'),
    Gnome: require('./Gnome.json'),
    HalfElf: require('./Half-Elf.json'),
    Halfling: require('./Halfling.json'),
    HalfOrc: require('./Half-Orc.json'),
    Human: require('./Human.json')
}