"use strict";
let myContext;
let margin = 100;

setup();
drawLines ();

function setup(){
    let myCanvas = document.querySelector("canvas");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    myContext=myCanvas.getContext("2d");
}

function drawLines (x,y) {
    myContext.lineWidth=5;
    myContext.beginPath();
    myContext.moveTo(margin,100);
    myContext.lineTo(window.innerWidth-margin,100);
    myContext.lineTo(margin,225);
    myContext.lineTo(window.innerWidth-margin,225);
    myContext.lineTo(margin,350);
    myContext.lineTo(window.innerWidth-margin,350);
    myContext.lineTo(margin,475);
    myContext.lineTo(window.innerWidth-margin,475);
    myContext.lineTo(margin,600);
    myContext.lineTo(window.innerWidth-margin,600);
    myContext.lineTo(margin,100);
    myContext.stroke();
}