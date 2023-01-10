"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let space = height / 5;
let isPlaying = 1;
let speed1 = [];
speed1[0]=space;
let speed2 = [];
speed2[0]=space;
let speed3 = [];
speed3[0]=space;
let speed4 = [];
speed4[0]=space;
let speed5 = [];
speed5[0]=space;

setup();
draw();

function setup() {
    context.fillStyle = "grey";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "lightgrey";
    context.fillRect(0, space, width, space);
    context.fillRect(0, space * 3, width, space);
}

function draw() {
    for (let i = 0; i<200; i++) {
        setup();
        console.log(speed1[0]);
        if (speed1[i] < width-space || speed2[i] < width-space || speed3[i] < width-space || speed4[i] < width-space || speed5[i] < width-space) {
            speed1.push(speed1[i] + Math.random()*5);
            drawSnail(speed1[i], space / 2, space, 1);
            speed2.push(speed2[i] + Math.random()*5);
            drawSnail(speed2[i], space / 2 * 3, space, 2);
            speed3.push(speed3[i] + Math.random()*5);
            drawSnail(speed3[i], space / 2 * 5, space, 3);
            speed4.push(speed4[i] + Math.random()*5);
            drawSnail(speed4[i], space / 2 * 7, space, 4);
            speed5.push(speed5[i] + Math.random()*5);
            drawSnail(speed5[i], space / 2 * 9, space, 5);
            
        } else {
            context.fillStyle = "red";
            context.textAlign = "center";
            context.font = "normal 50pt Arial";
            context.textBaseline = "middle";
            context.fillText("snail -number has won!", width/2, 10 /* -ypos- */ );
        }
        requestAnimationFrame (draw);
    }
}

function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}

/* Each snail moves a random amount of pixels forward each frame.

Keep track of the horizontal position of each snail in an array.

When the first snail reaches the right side of the screen, 
print the number of the winning snail in the corresponding lane and stop the animation! */