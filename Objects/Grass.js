const LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }

    chooseCell(character) {
        return super.chooseCell(character);
    }

    mul() {
        this.multiply++;
        let newCell = super.randomArray(this.chooseCell(0));
        if (this.multiply >= 2 && newCell) {
            let newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}