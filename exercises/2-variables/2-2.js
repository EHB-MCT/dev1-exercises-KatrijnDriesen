"use strict";
let myContext;

setup();
drawRectangle (200,200,400,400);
drawRectangle (225,225,350,350);
drawRectangle (250,250,300,300);
drawRectangle (275,275,250,250);
drawRectangle (300,300,200,200);
drawRectangle (325,325,150,150);
drawRectangle (350,350,100,100);
drawRectangle (375,375,50,50);

function setup(){
    let myCanvas = document.querySelector("canvas");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    myContext=myCanvas.getContext("2d");
}

function drawRectangle (x,y,d,e) {
    myContext.fillStyle = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    myContext.fillRect(x,y,d,e);
    }