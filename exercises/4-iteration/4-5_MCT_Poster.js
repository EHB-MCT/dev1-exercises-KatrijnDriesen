"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

drawBackground();
drawTitle();
drawMask();

function drawBackground(){
    for (let i=0; i<300; i++){
        context.lineWidth = 10 + Math.random() * 20;
        context.strokeStyle = Utils.hsl(0,0,Math.random()*100);
        let y1 = Math.random() * height;
        let y2 = Math.random() * height;
        Utils.drawLine(0,y1,width,y2);
        
        context.fillStyle = Utils.hsl(0,0,Math.random()*100);
        let fontSize = Math.floor(Math.random() * 80);
        context.font = fontSize + "px Arial";
        context.fillText("MCT", Math.random()*width, Math.random()*height);
    }
}

function drawTitle(){
    context.textAlign = "center";

    context.fillStyle = "black";
    context.font = "200px Arial";
    context.fillText("MCT", width/2, height/2);
    
    context.fillStyle = "red";
    context.font = "150px Arial";
    context.fillText("ehb", width/2, height/2 - 200);
    
    context.fillStyle = "white";
    context.font = "150px Arial";
    context.fillText("is top", width/2, height/2 + 200);}

function drawMask(){
    context.lineWidth = 500;
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(width/2,-400);
    context.lineTo(width+400,height/2);
    context.lineTo(width/2,height+400);
    context.lineTo(-400,height/2);
    context.lineTo(width/2,-400);
    context.stroke();
}