function ships(name, size) {
    const shipObject = {
        name: name,
        size: size,
        damage: new Array(size).fill(0),
        isSunk() {
            let damageTotal = 0;
            this.damage.forEach((element) => {
                damageTotal += element;
            });
            return damageTotal === size;
        },
        hit(index) {
            this.damage[index] = 1;
        },
    };

    return shipObject;
}

module.exports = ships;
