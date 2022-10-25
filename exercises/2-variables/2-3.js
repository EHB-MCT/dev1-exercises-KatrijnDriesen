"use strict";

let myContext;
let variableWidth = (window.innerWidth-100);
let variableHeight = (window.innerHeight-100);

setup();
drawRectangles();

function setup(){
    let myCanvas = document.querySelector("canvas");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    myContext=myCanvas.getContext("2d");
}

function drawRectangles(){
    myContext.fillStyle = "rgb(50,60,80)";
    myContext.fillRect(50,50,variableWidth/3,variableHeight/6);
    myContext.fillRect(50+variableWidth/3*2,50,variableWidth/3,variableHeight/6);
    myContext.fillRect(50,50+variableHeight/2,variableWidth/3,variableHeight/6);
    myContext.fillRect(50+variableWidth/3*2,50+variableHeight/2,variableWidth/3,variableHeight/6);
    myContext.fillStyle = "rgb(240,60,60)";
    myContext.fillRect(50,50+variableHeight/6,variableWidth,variableHeight/3);
    myContext.fillStyle = "rgb(50,160,250)";
    myContext.fillRect(50,50+variableHeight/3*2,variableWidth/3,variableHeight/3);
    myContext.fillRect(50+variableWidth/3*2,50+variableHeight/3*2,variableWidth/3,variableHeight/3);
    myContext.fillStyle = "rgb(235,235,235)";
    myContext.fillRect(50+variableWidth/3,50,variableWidth/3,variableHeight/6);
    myContext.fillRect(50+variableWidth/3,50+variableHeight/2,variableWidth/3,variableHeight/2);
}