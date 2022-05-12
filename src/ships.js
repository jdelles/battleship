const ship = (name, length) => {
    const damage = new Array(length).fill(0);
    const hit = position => {
        damage[position] = 1;
    };
    const isSunk = () => {
        return damage.reduce((a, b) => a + b, 0) === length;
    };
    return {name, length, damage, hit, isSunk};
};

module.exports = ship;
