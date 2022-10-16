/**
 * @desc
 * Enum Class returns a frozen object as an enum.
 * this can be further improved by iterables, toString,
 * or whatever you prefer.
 *
 * @readonly
 */
class Enum {
    constructor(...keys) {
        keys.forEach((key, i) => {
            this[key] = i;
        });
        Object.freeze(this);
    }

    // toString
    // iterable
}

/**
 * @desc
 * A simple implementation of an enum could be using a POJO
 * (plain old javascript object)
 * @readonly
 * @enum {{name: string, hex: string}}
 */
const Colors = Object.freeze({
    RED:   { name: "red", hex: "#f00" },
    BLUE:  { name: "blue", hex: "#00f" },
    GREEN: { name: "green", hex: "#0f0" }
});

export default Enum;