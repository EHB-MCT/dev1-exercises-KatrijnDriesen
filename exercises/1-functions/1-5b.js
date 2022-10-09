"use strict";


let myCanvas = document.querySelector("canvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
let myContext = myCanvas.getContext("2d");

drawSea();
drawSky();
drawSun();

function drawSea() {
myContext.fillStyle = "blue";
myContext.beginPath();
myContext.rect(50,50,300,200);
myContext.fill();
}

function drawSky() {
myContext.fillStyle = "orange";
myContext.beginPath();
myContext.rect(50,250,300,100);
myContext.fill();
}

function drawSun() {
myContext.fillStyle = "yellow";
myContext.beginPath();
myContext.ellipse(200,250,100,50,0,1*Math.PI,2*Math.PI,false);
myContext.fill();
}