export default class Size {
    ACModifier;
    CMModifier;
    FlyModifier;
    StealthModifier;

    static get Medium() {
        let size = new Size();
        size.ACModifier = 0;
        size.CMModifier = 0;
        size.FlyModifier = 0;
        size.StealthModifier = 0;
        return size;
    }

    static get Small() {
        let size = new Size();
        size.ACModifier = 1;
        size.CMModifier = -1;
        size.FlyModifier = 2;
        size.StealthModifier = 4;
        return size;
    }

    static get Large() {
        let size = new Size();
        size.ACModifier = -1;
        size.CMModifier = 1;
        size.FlyModifier = -2;
        size.StealthModifier = -4;
        return size;
    }
}