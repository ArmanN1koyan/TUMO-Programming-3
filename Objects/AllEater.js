const LivingCreature = require("./LivingCreature")

module.exports = class AllEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }

    chooseCell(character) {
        return super.chooseCell(character);
    }
    move() {

        let newCell = super.random(this.chooseCell(0));

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
            let randcube = Math.round(super.random(4));
        }

        let newCell = super.random(this.chooseCell(randcube));

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (let i in AllEaterArr) {
                if (newX == AllEaterArr[i].x && newY == AllEaterArr[i].y) {
                    AllEaterArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 2;

        }
    }

    mul() {
        let newCell = super.random(this.chooseCell(0));
        if (this.energy > 10 && newCell) {
            let newAllEater = new AllEater(newCell[0], newCell[1], this.index);
            AllEaterArr.push(newAllEater);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 5;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i in AllEaterArr) {
                if (AllEaterArr[i].x == this.x && AllEaterArr[i].y == this.y) {
                    AllEaterArr.splice(i, 1);
                }
            }
        }
    }
}