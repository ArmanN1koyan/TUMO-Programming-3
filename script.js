const socket = io();

let side = 15;

function setup() {
    createCanvas(50 * side, 50 * side);
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

function changeSpringToWinter(matrix){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("Azure");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("Aquamarine");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

// I missed 1 lesson so maybe the solution is wrong sorry
function callSpring(){
    socket.on('send matrix', drawObjColors)
}

setInterval(socket.on('send matrix', changeSpringToWinter), 20000);

setInterval(callSpring, 10000)


function boom(){
    socket.emit("boom")
}
function rotateFor90Degrees(){
    socket.emit("rotateFor90Degrees")
}
