import Dwarf from './core/Dwarf';
import Elf from './core/Elf';
import Gnome from './core/Gnome';
import HalfElf from './core/Half-Elf';
import HalfOrc from './core/Half-Orc';
import Halfling from './core/Halfling';
import Human from './core/Human';

export default {
    Dwarf: new Dwarf(),
    Elf: new Elf(),
    Gnome: new Gnome(),
    HalfElf: new HalfElf(),
    Halfling: new Halfling(),
    HalfOrc: new HalfOrc(),
    Human: new Human()
}