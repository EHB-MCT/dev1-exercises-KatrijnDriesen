"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let space = height / 5;
let isPlaying = 1;

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
    if (isPlaying == 1) {
        for (let i = 0; i<=4; i++) {
        drawSnail(space / 2, space * i + space / 2, space, 1+i);
        }
        /* if (x>=width) {
            isPlaying *= -1;
            context.fillStyle = "red";
            context.textAlign = "center";
            context.font = "normal 50pt Arial";
            context.textBaseline = "middle";
            context.fillText("snail -number has won!", width/2, -ypos- );
        } else {
            requestAnimationFrame (draw);}*/
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

/* Divide the window in 5 equal horizontal lanes.

Each snail moves a random amount of pixels forward each frame.

Keep track of the horizontal position of each snail in an array.

When the first snail reaches the right side of the screen, 
print the number of the winning snail in the corresponding lane and stop the animation! */