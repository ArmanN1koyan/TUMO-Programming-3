let socket = io();

let matrix = [

];

let m = 50;
let side = 15;

function random(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}

function setup() {
    for (let y = 0; y < m; y++) {
        matrix[y] = [];
        for (let x = 0; x < m; x++) {
            matrix[y][x] = Math.round(random(5));
        }
    }
    matrix[25][25] = 6;
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('lightblue');
    
}

function drawObjColors(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

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
}

setInterval(
    function () {
        socket.on('send matrix', drawObjColors)
    },1000
)