var matrix = [

];

var m = 50;
var grassArr = [];
var bluegrassArr = [];
var predatorArr = [];
var grassEaterArr = [];
var AllEaterArr = [];
var lightArr = [];
var side = 15;

function setup() {
    for (var y = 0; y < m; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(random(5));
        }
    }
    matrix[25][25] = 6;
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('lightblue');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var rgr = new BlueGrass(x, y, 2);
                bluegrassArr.push(rgr);
            }
            else if (matrix[y][x] == 3) {
                var et = new GrassEater(x, y, 3);
                grassEaterArr.push(et);
            }
            else if (matrix[y][x] == 4) {
                var pre = new Predator(x, y, 4);
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 5) {
                var alle = new AllEater(x, y, 5);
                AllEaterArr.push(alle);
            }
            else if (matrix[y][x] == 6) {
                var lgr = new Light(x, y, 6);
                lightArr.push(lgr);
            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in bluegrassArr) {
        bluegrassArr[i].mul();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in AllEaterArr) {
        AllEaterArr[i].move();
        AllEaterArr[i].eat();
        AllEaterArr[i].mul();
        AllEaterArr[i].die();
    }
    for (var i in lightArr) {
        lightArr[i].mul();
    }
}