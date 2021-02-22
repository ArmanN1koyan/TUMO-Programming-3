const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require("fs");
const Grass = require("./Objects/Grass");
const GrassEater = require("./Objects/GrassEater");
const BlueGrass = require("./Objects/BlueGrass");
const Predator = require("./Objects/Predator");
const AllEater = require("./Objects/AllEater");
const Light = require("./Objects/Light");



app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

grassArr = [];
bluegrassArr = [];
predatorArr = [];
grassEaterArr = [];
AllEaterArr = [];
lightArr = [];

function CreateObjects(matrix){
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
    io.socket.emit('send matrix', matrix);
}

function game(){
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in bluegrassArr) {
        bluegrassArr[i].mul();
    }
    for (let i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (let i in AllEaterArr) {
        AllEaterArr[i].move();
        AllEaterArr[i].eat();
        AllEaterArr[i].mul();
        AllEaterArr[i].die();
    }
    for (let i in lightArr) {
        lightArr[i].mul();
    }
}

setInterval(game, 1000)

io.on('connection', function(){
    CreateObjects(matrix);
})