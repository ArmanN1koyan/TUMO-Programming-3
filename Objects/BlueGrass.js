const LivingCreature = require("./LivingCreature")

module.exports = class BlueGrass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
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
        return super.chooseCell(character);
    }

    mul() {
        this.multiply++;
        let newCell = super.randomArray(this.chooseCell(0));
        if (this.multiply >= 16 && newCell) {
            let newBlueGrass = new BlueGrass(newCell[0], newCell[1], this.index);
            bluegrassArr.push(newBlueGrass);
            matrix[newCell[1]][newCell[0]] = 2;
            this.multiply = 0;
        }
    }
}