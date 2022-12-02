"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let xPos = width / 2;
let yPos = height / 2;
let xSpeed = 10;
let ySpeed = 10;
let isPlaying = 1;
let size = 40;

window.onmousedown = stop;

setup();

function setup(){
    context.fillStyle = "blue";
    Utils.fillCircle(xPos, yPos, size);

    update();
}

function update(){
    if (isPlaying == 1) {
    
    //background
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    
    //draw circle
    context.fillStyle = "blue";
    Utils.fillCircle(xPos, yPos, size);
    
    // speed X & Y
    xPos += xSpeed;
    yPos += ySpeed;
    
    //change directions
    if (xPos >= width - 20 || xPos < size / 2) {
        xSpeed *= -1 ;
    }
    if (yPos >= height - 20 || yPos < size / 2) {
        ySpeed *= -1;
    }
    requestAnimationFrame(update);
    }
}

function stop(eventData){
    let x = eventData.pageX;
    let y = eventData.pageY;
    if (Utils.calculateDistance(x, y, xPos, yPos) < size) {
        isPlaying *= -1;
        context.fillStyle = "red";
        Utils.fillCircle(x, y, 20);
    }
}