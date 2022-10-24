"use strict";
let myContext;

setup();
drawHouse ();
drawTree(300,500);
drawTree(400,500);
drawTree(50,500);
drawTree(200,300);


function setup(){
    let myCanvas = document.querySelector("canvas");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    myContext=myCanvas.getContext("2d");
}

function drawTree (x,y) {
myContext.fillStyle = "#a0522d";
myContext.fillRect(x,y,20,100);
myContext.fillStyle = "#3cb371";
myContext.beginPath();
myContext.ellipse(x+10,y-50,40,80,0,0,Math.PI*2);
myContext.fill();
}

function drawHouse () {

    let x = 100;
    let y = 500;

myContext.fillStyle = "#a52a2a";
myContext.fillRect(x,y,100,100);
myContext.fillStyle = "#af8a5a";
myContext.fillRect(x+50,y+50,25,50);
myContext.fillStyle = "#666666";
myContext.beginPath();
myContext.moveTo(x,y);
myContext.lineTo(x+50,y-50);
myContext.lineTo(x+100,y);
myContext.fill();
}