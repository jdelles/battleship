const ship = (name, length) => {
    const damage = new Array(length).fill(0);
    let totalDamage = 0;
    const hit = position => {
        damage[position] = 1;
        totalDamage++;
    };
    const isSunk = () => {
        return totalDamage === length;
    };
    return {name, length, damage, hit, isSunk};
};

module.exports = ship;
