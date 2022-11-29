"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = window.innerWidth;
let height = window.innerHeight;

drawBackground();
drawCurve();
drawMask();
showSeedNumber();

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0,0,width,height);
}

function drawCurve () {
    let total = context.canvas.width;
    for (let i=0; i<total; i++) {
        for (let j=0; j<height; j++){
        let y = Noise.perlinNoise(i/400)*500;
        context.fillStyle = Utils.hsl(j*10+10,100,60);
        Utils.fillCircle(i,y+j*20,1);}
    }
}

function drawMask(){
    context.strokeStyle = "black";
    context.lineWidth = ""+height/1.1;
    Utils.strokeCircle(width/2, height/2, 700);
}

function showSeedNumber(){
    console.log(Noise.getSeed());
    context.fillStyle = "white";
    context.textAlign = "center";
    context.font = "20px Arial";
    context.fillText(""+Noise.getSeed(), width/2, 50);
}