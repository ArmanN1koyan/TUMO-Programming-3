const LivingCreature = require("./LivingCreature")

module.exports = class Predator extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }

    chooseCell(character) {
        return super.chooseCell(character);
    }
    move() {

        let newCell = super.randomArray(this.chooseCell(0));

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;

        }

    }
    eat() {

        let newCell = super.randomArray(this.chooseCell(3));

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            deleteObject(newX, newY)

            for (let i = 0; i < grassEaterArr.length; i++) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }

    mul() {
        let newCell = super.randomArray(this.chooseCell(0));
        if (this.energy > 12 && newCell) {
            let newPredator = new Predator(newCell[0], newCell[1], this.index);
            predatorArr.push(newPredator);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 5;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                    predatorArr.splice(i, 1);
                }
            }
        }
    }
}
