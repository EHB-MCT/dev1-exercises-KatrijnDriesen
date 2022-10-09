"use strict";


let myCanvas = document.querySelector("canvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
let myContext = myCanvas.getContext("2d");

drawInsidebox();
drawCircles();
drawLines();
drawBox();
writeName();


function drawInsidebox() {
myContext.fillStyle = "orange";
myContext.rect(50,50,320,320);
myContext.fill();
}

function drawCircles() {
myContext.beginPath();
myContext.fillStyle = "white";
myContext.arc(50, 50, 160, 1 * Math.PI, 2* Math.PI, true);
myContext.arc(370, 50, 160, 1 * Math.PI, 2* Math.PI, true);

myContext.fill();
myContext.beginPath();
myContext.fillStyle = "white";
myContext.arc(50, 370, 160, 2 * Math.PI, 1* Math.PI, true);
myContext.arc(370, 370, 160, 2 * Math.PI, 1* Math.PI, true);
myContext.fill();
}

function drawLines() {
myContext.beginPath();
myContext.strokeStyle = "white";
myContext.lineWidth = "8";
myContext.moveTo(130,50);
myContext.lineTo(370,290);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(90,50);
myContext.lineTo(370,330);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(50,50);
myContext.lineTo(190,190);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(230,230);
myContext.lineTo(370,370);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(50,90);
myContext.lineTo(330,370);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(50,130);
myContext.lineTo(290,370);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(50,290);
myContext.lineTo(290,50);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(50,330);
myContext.lineTo(330,50);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(50,370);
myContext.lineTo(190,230);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(230,190);
myContext.lineTo(370,50);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(90,370);
myContext.lineTo(370,90);
myContext.stroke();

myContext.beginPath();
myContext.moveTo(130,370);
myContext.lineTo(370,130);
myContext.stroke();
}

function drawBox() {
myContext.beginPath();
myContext.strokeStyle = "orange";
myContext.lineWidth = "5";
myContext.rect(50,50,320,320);
myContext.stroke();
}

function writeName() {
myContext.fillStyle = "orange";
myContext.textAlign = "center";
myContext.font = "normal 32pt Arial";
myContext.fillText("STARRY NIGHT",210,410);
}    