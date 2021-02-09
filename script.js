// var animals = "Lion,Monkey,Unicorn,Goblin,Dragon,Eagle";
// animalsArr = animals.split(",");

// animalsArr.push("Horse");
// console.log(animalsArr);

// animalsArr.push("Dog");
// console.log(animalsArr);

// animalsArr.pop();
// animalsArr.pop();
// animalsArr.pop();
// console.log(animalsArr);

// animalsArr.shift();
// console.log(animalsArr);

// animalsArr.unshift("Cat");
// animalsArr.unshift("Lemur","Centaur");
// console.log(animalsArr);

// var a = prompt("Insert your age");
// var b = parseInt(a);

// alert(b);
// console.log(b);

// var k = Math.random();
// var m = b + k;
// console.log(m);

// var m = 10;
// console.log(m);
// change();
// console.log(m);

// function change(){
//     m = 100;
// }

// var a = 100;
// var b = 200;
// var p = calcPer(a,b);
// var s = calcSq(a,b);
// console.log(p,s);

// function calcPer(c,d){
//     return (c+d)*2;
// }

// function calcSq(e,f){
//     return e*f;
// }

// var c = [45,60,12,98,78,154,65];
// var m = [15,98,45,33,78,98,100,56,98];
// var res1 = sumArray(c);
// var res2 = sumArray(m);
// console.log(res1, res2);


// function sumArray(a){
//     var res = 0;
//     for(var i in a){
//         res+=a[i];
//     }
//     return res;
// }

// var c = [45, 60, 12, 98, 78, 154, 65];
// var b = reverseArray(c);
// console.log(b); //պիտի տպի 65,154,78,98,12,60,45

// var t = ["php", "javascript", "html", "css", "mysql"];
// var m = reverseArray(t);
// console.log(m); //պիտի տպի mysql, css, html, javascript, php

// function reverseArray(a) {
//      var x = [];
//      for (var i = 0; i < a.length; ++i) {
//           x[i] = a[a.length - 1 - i]
//           console.log(x[i]);
//      }
//      return x;
// }

// function setup() {
//     createCanvas(500,500);
//     background('#acacac');
// }
// function draw() {
//     frameRate(3);
//     fill(0,0,255);
//     ellipse(random(500), random(500), random(25));
//     background('#acacac');
//     ellipse(random(500), random(500), random(25));
// }


// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// var matrix = [
//    [1,0,0,0,0,0,0,0],
//    [0,1,0,0,0,0,0,0],
//    [0,0,1,0,0,0,0,0],
//    [0,0,0,1,0,0,0,0],
//    [0,0,0,0,1,0,0,0],
//    [0,0,0,0,0,1,0,0],
//    [0,0,0,0,0,0,1,0],
//    [0,0,0,0,0,0,0,1]
// ];
// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//         for(var x = 0; x < matrix[y].length; x++){
//             if(matrix[y][x] == 1){
//                     fill('green');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;


// function draw(){
//     for(var y = 0; y < 8; y++){
//         for(var x = 0; x < 8; x++){
//             if(y == x){
//                     fill('green');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// var matrix = [
//    [0,0,0,0,0,0,0,1],
//    [0,0,0,0,0,0,1,0],
//    [0,0,0,0,0,1,0,0],
//    [0,0,0,0,1,0,0,0],
//    [0,0,0,1,0,0,0,0],
//    [0,0,1,0,0,0,0,0],
//    [0,1,0,0,0,0,0,0],
//    [1,0,0,0,0,0,0,0]
// ];
// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//         for(var x = 0; x < matrix[y].length; x++){
//             if(matrix[y][x] == 1){
//                     fill('red');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// function draw(){
//     for(var y = 0; y < 8; y++){
//         for(var x = 0; x < 8; x++){
//             if(x + y == 7){
//                     fill('red');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// var matrix = [
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,0],
//    [1,1,1,1,1,1,0,0],
//    [1,1,1,1,1,0,0,0],
//    [1,1,1,1,0,0,0,0],
//    [1,1,1,0,0,0,0,0],
//    [1,1,0,0,0,0,0,0],
//    [1,0,0,0,0,0,0,0]
// ];
// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//         for(var x = 0; x < matrix[y].length; x++){
//             if(matrix[y][x] == 1){
//                     fill('yellow');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// function draw(){
//     for(var y = 0; y < 8; y++){
//         for(var x = 0; x < 8; x++){
//             if(x + y < 8){
//                     fill('yellow');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }


// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// var matrix = [
//    [1,0,1,0,1,0,1,0],
//    [0,1,0,1,0,1,0,1],
//    [1,0,1,0,1,0,1,0],
//    [0,1,0,1,0,1,0,1],
//    [1,0,1,0,1,0,1,0],
//    [0,1,0,1,0,1,0,1],
//    [1,0,1,0,1,0,1,0],
//    [0,1,0,1,0,1,0,1]
// ];
// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//         for(var x = 0; x < matrix[y].length; x++){
//             if(matrix[y][x] == 1){
//                     fill('black');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('white');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(8 * side, 8 * side);
//     background('#acacac');    
// }

// var side = 50;

// function draw(){
//     for(var y = 0; y < 8; y++){
//         for(var x = 0; x < 8; x++){
//             if((x + y) % 2 == 0){
//                     fill('black');
//                     rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('white');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// var side = 50;

// function setup(){
//     createCanvas(11 * side, 11 * side);
//     background('#acacac');    
// }

// function draw(){
//     for (var y = 0; y < 11; y++) {
//         for(var x = 0; x < 11; x++){  
//             fill('gray');
//             rect(x * side, y * side, side, side);
//             if( y !== 0 && x == 0){
//                 fill('black');
//                 text(y, x * side + side / 2, y * side + side / 2);
//             }else if( x !== 0 && y == 0){
//                 fill('black');
//                 text(x, x * side + side / 2, y * side + side / 2);
//             }else if( y !== 0 && x !== 0){
//                 fill('lightblue');
//                 text(x * y, x * side + side / 2, y * side + side / 2);
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(side * matrix[0].length, side * matrix.length);
//     background('#acacac');    
// }

// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
//     [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

// var side = 50;

// function draw(){
//         for(var y = 0; y < matrix.length; y++){
//             for(var x = 0; x < matrix[y].length; x++){
//                 if(matrix[y][x] == 1){
//                         fill('black');
//                         rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(side * matrix1[0].length, side * matrix1.length);
//     background('#acacac');    
// }

// var matrix1 = [
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
//     [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

// var side = 50;

// function draw(){
//         for(var y = 0; y < matrix1.length; y++){
//             for(var x = 0; x < matrix1[y].length; x++){
//                 if(matrix1[y][x] == 1){
//                         fill('black');
//                         rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// function setup(){
//     createCanvas(side * matrix2[0].length, side * matrix2.length);
//     background('#acacac');    
// }

// var matrix2 = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//   ];

// var side = 50;

// function draw(){
//         for(var y = 0; y < matrix2.length; y++){
//             for(var x = 0; x < matrix2[y].length; x++){
//                 if(matrix2[y][x] == 1){
//                         fill('black');
//                         rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//             }
//         }
//     }
// }

// for (let i = 0; i < 100; i++) {
//     let r = random(0, 1);
//     line(1, i, 1 + r, i);
// }

// var matrix = [
//     [0,1,0,0,0,0,0,0],
//     [0,0,0,1,1,0,0,0],
//     [0,0,0,1,0,0,1,0],
//     [0,0,1,0,0,0,0,0],
//     [0,0,1,0,0,0,2,0],
//     [0,0,3,0,1,1,0,0],
//     [0,0,1,2,2,0,2,2],
//     [0,0,1,0,0,0,2,0]
//  ];

// var side = 50;

// function setup(){
//     createCanvas(side * matrix[0].length, side * matrix.length);
//     background('#acacac'); 
// }

// function draw(){
//         for(var y = 0; y < matrix.length; y++){
//             for(var x = 0; x < matrix[y].length; x++){
//                 if(matrix[y][x] == 1){
//                         fill('black');
//                         rect(x * side, y * side, side, side);
//                 }else{  
//                     fill('gray');
//                     rect(x * side, y * side, side, side);        
//                 }
//         }
//     }
// }

// var cat1 = new Cat(2,3, "Մուռզիկ");
// cat1.move();
// cat1.eat(6);
// console.log(cat1);

// var cat2 = new Cat(0,5, "Տուզիկ");
// cat2.move();
// cat2.move();
// cat2.eat(6);
// console.log(cat2);

// var matrix = [
//     [0, 0, 1, 0, 0],
//     [1, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0]
//  ];

//  var side = 120;


//  function setup() {
//     frameRate(5);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');
//  }


// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }

//             rect(x * side, y * side, side, side);
//             // fill("blue")
//             // text(x+" "+y, x*side+side/2,y*side+side/2)
//         }
//     }
// }

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