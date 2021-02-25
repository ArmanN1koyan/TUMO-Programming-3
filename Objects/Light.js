const LivingCreature = require("./LivingCreature")

module.exports = class Light extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character)
    }

    mul() {

        for (let i = 0; i <= 4; i++) {
            let rand = Math.round(super.random(4));
            let randpleace = Math.round(super.random(5));
            return randpleace;
        }

        this.multiply++;
        let newCell = super.random(this.chooseCell(randpleace));
        if (this.multiply >= 50 && newCell) {
            let newLight = new Light(newCell[0], newCell[1], this.index);
            lightArr.push(newLight);
            matrix[newCell[1]][newCell[0]] = rand;
            this.multiply = 0;
        }
    }
}