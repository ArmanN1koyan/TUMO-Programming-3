const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require("fs");
const path = require('path');
const Grass = require("./Objects/Grass");
const GrassEater = require("./Objects/GrassEater");
const BlueGrass = require("./Objects/BlueGrass");
const Predator = require("./Objects/Predator");
const AllEater = require("./Objects/AllEater");
const Light = require("./Objects/Light");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

matrix = [];

for (let y = 0; y < 50; y++) {
    matrix[y] = [];
    for (let x = 0; x < 50; x++) {
        matrix[y][x] = Math.floor(Math.random() * (5 - 1) + 1);
    }
}
matrix[24][24] = 6;
io.sockets.emit('send matrix', matrix);


grassArr = [];
bluegrassArr = [];
predatorArr = [];
grassEaterArr = [];
AllEaterArr = [];
lightArr = [];

createObject(matrix);

deleteObject = function(x, y){
    if (matrix[y][x] == 1){
        for (let i = 0; i < grassArr.length; i++) {
            if (x == grassArr[i].x && y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[y][x] == 2){
        for (let i = 0; i < bluegrassArr.length; i++) {
            if (x == bluegrassArr[i].x && y == bluegrassArr[i].y) {
                bluegrassArr.splice(i, 1);
                break;
            }
        }
    }
    else if (matrix[y][x] == 3){
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }             
    else if (matrix[y][x] == 4){
        for (let i = 0; i < predatorArr.length; i++) {
            if (x == predatorArr[i].x && y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }           
    else if (matrix[y][x] == 5){
        for (let i = 0; i < predatorArr.length; i++) {
            if (x == predatorArr[i].x && y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
} 

deleteCreature = function(x, y){
    deleteObject(x, y)
    matrix[y][x] = 0
}

function createObject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
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
            else if (matrix[y][x] == 6) {
                let lgr = new Light(x, y, 6);
                lightArr.push(lgr);
            }
        }
    }
    io.sockets.emit('send matrix', matrix);
}

function game() {
    for (let i = 0; i < lightArr.length; i++) {
        lightArr[i].mul();
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }
    for (let i = 0; i < bluegrassArr.length; i++) {
        bluegrassArr[i].mul();
    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (let i = 0; i < AllEaterArr.length; i++) {
        AllEaterArr[i].move();
        AllEaterArr[i].eat();
        AllEaterArr[i].mul();
        AllEaterArr[i].die();
    }
    io.sockets.emit('send matrix', matrix);
}

setInterval(game, 1000);

io.on('connection', function (socket) {
    socket.on("boom", boom);
    socket.on("rotateFor90Degrees", rotateFor90Degrees);
})

function boom() {
    randlenY = Math.floor(Math.random() * (50 - 1) + 1)
    randlenX = Math.floor(Math.random() * (50 - 1) + 1)

    for (let i = randlenY - 10; i <= randlenY + 10; i++) {
        for (let j = randlenX - 10; j <= randlenX + 10; j++) {
            if (i >= 0 && i < 50 && j >= 0 && j < 50) {
                deleteCreature(j, i)
            }
        }
    }
    if(matrix[24][24] != 6){
        matrix[24][24] = 6
    }
    io.sockets.emit('send matrix', matrix);
}

function rotateFor90Degrees() {
    let origMatrix = matrix.slice();
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i].map(function (x, j) {
            let k = (matrix.length - 1) - j;
            return origMatrix[k][i];
        });
        matrix[i] = row;
    }
    io.sockets.emit('send matrix', matrix);
}

let info = { 
    grassLength: {
        name: 'Grass',
        count: grassArr.length
    },    
    grassEaterLength: {
        name: 'Grass eater',
        count: grassEaterArr.length
    },
    bluegrassLength: {
        name: 'Blue grass eater',
        count: bluegrassArr.length
    },    
    predatorLength: {
        name: 'Predator',
        count: predatorArr.length
    },    
    AllEaterLength: {
        name: 'Alleater',
        count: AllEaterArr.length
    },
    lightLength: {
        name: 'Light',
        count: lightArr.length
    }
};

fs.writeFileSync(path.resolve(__dirname, 'info.json'), JSON.stringify(info, undefined, 2));