"use strict";

let myContext;

setup();
drawBackground();
window.onresize = drawSun(); //functie werkt niet goed. Enkel bij refreshen van het venster wordt de zon opnieuw getekend!

function setup(){
    let myCanvas = document.querySelector("canvas");
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    myContext=myCanvas.getContext("2d");
}

function drawBackground(){
    myContext.fillStyle = "#EA9A00";
    myContext.fillRect(0,0,window.innerWidth,window.innerHeight/4);
    myContext.fillStyle = "#FF6F1D";
    myContext.fillRect(0,window.innerHeight/4,window.innerWidth,window.innerHeight/4);
    myContext.fillStyle = "#BD5A00";
    myContext.fillRect(0,window.innerHeight/2,window.innerWidth,window.innerHeight/4);
    myContext.fillStyle = "#00008B";
    myContext.fillRect(0,window.innerHeight/4*3,window.innerWidth,window.innerHeight/4);
}

function drawSun(){
    myContext.fillStyle = "#FFFF9E";
    myContext.beginPath();
    myContext.arc(window.innerWidth/2,window.innerHeight/4*3,window.innerWidth/4/* straal */,Math.PI*1,Math.PI*2,false);
    myContext.fill();

}