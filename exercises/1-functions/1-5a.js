"use strict";


let myCanvas = document.querySelector("canvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
let myContext = myCanvas.getContext("2d");

drawSea();

function drawSea() {
myContext.fillStyle = "blue";
myContext.beginPath();
myContext.rect(50, 50, 300, 200);
myContext.fill();
}

drawSky();

function drawSky() {
myContext.fillStyle = "orange";
myContext.beginPath();
myContext.rect(50, 250, 300, 100);
myContext.fill();
}

drawSun();

function drawSun() {
myContext.fillStyle = "yellow";
myContext.beginPath();
myContext.arc(200, 250, 100, 1 * Math.PI, 2 * Math.PI, false);
myContext.fill();
}


