const LivingCreature = require("./LivingCreature")

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }
    getNewCoordinates() {
        this.directions = [
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

        for (let i = 0; i <= 4; i++) {
            let randgrass = Math.round(super.random(2));

            let newCell = super.randomArray(this.chooseCell(randgrass));

            if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];

                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = this.index;

                deleteObject(newX, newY)

                this.y = newY;
                this.x = newX;
                this.energy += 1;

            }
        }
    }
    mul() {

        let newCell = super.randomArray(this.chooseCell(0));

        if (this.energy > 10 && newCell) {
            let newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 5;
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1);
                }
            }
        }
    }
}