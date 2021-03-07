const LivingCreature = require("./LivingCreature")
const Grass = require("./Grass");
const GrassEater = require(".//GrassEater");
const BlueGrass = require("./BlueGrass");
const Predator = require("./Predator");
const AllEater = require("./AllEater");

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
            let rand = Math.round(super.random(6));
            let randpleace = Math.round(super.random(5));

            this.multiply++;
            let newCell = super.randomArray(this.chooseCell(randpleace));
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0];
                let y = newCell[1];

                matrix[y][x] = rand;
                this.multiply = 0;

                if (matrix[y][x] == 1) {
                    let gr = new Grass(x, y, 1);
                    grassArr.push(gr);
                }
                else if (matrix[y][x] == 2) {
                    let rgr = new BlueGrass(x, y, 2);
                    bluegrassArr.push(rgr);
                }
                else if (matrix[y][x] == 3) {
                    let et = new GrassEater(x, y, 3);
                    grassEaterArr.push(et);
                }
                else if (matrix[y][x] == 4) {
                    let pre = new Predator(x, y, 4);
                    predatorArr.push(pre);
                }
                else if (matrix[y][x] == 5) {
                    let alle = new AllEater(x, y, 5);
                    AllEaterArr.push(alle);
                }
            }
        }
    }
}