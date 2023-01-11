"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let space = height / 5;
let isPlaying = 1;
let posTracker1 = [];
posTracker1[0] = space;
let speed1 = posTracker1[0];
let posTracker2 = [];
posTracker2[0] = space;
let speed2 = posTracker2[0];
let posTracker3 = [];
posTracker3[0] = space;
let speed3 = posTracker3[0];
let posTracker4 = [];
posTracker4[0] = space;
let speed4 = posTracker4[0];
let posTracker5 = [];
posTracker5[0] = space;
let speed5 = posTracker5[0];

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
    setup();
    if (speed1 < width-space) {
        speed1 += Math.random()*7;
        posTracker1.push(speed1);
        drawSnail(speed1, space / 2, space, 1);
    }
    if (speed2 < width-space) {
        speed2 += Math.random()*7;
        posTracker2.push(speed1);
        drawSnail(speed2, space / 2 * 3, space, 2);
    }
    if (speed3 < width-space) {
        speed3 += Math.random()*7;
        posTracker3.push(speed1);
        drawSnail(speed3, space / 2 * 5, space, 3);
        }
    if (speed4 < width-space) {
        speed4 += Math.random()*7;
        posTracker4.push(speed1);
        drawSnail(speed4, space / 2 * 7, space, 4);
    }
    if (speed5 < width-space) {
        speed5 += Math.random()*7;
        posTracker5.push(speed1);
        drawSnail(speed5, space / 2 * 9, space, 5);
    } else if (speed1 > width-space) {
        context.fillStyle = "red";
        context.textAlign = "center";
        context.font = "normal 50pt Arial";
        context.textBaseline = "middle";
        context.fillText("snail 1 has won!", width/2, space / 2);
        drawSnail(speed1, space / 2, space, 1);
        drawSnail(speed2, space / 2 * 3, space, 2);
        drawSnail(speed3, space / 2 * 5, space, 3);
        drawSnail(speed4, space / 2 * 7, space, 4);
        drawSnail(speed5, space / 2 * 9, space, 5);
    } else if (speed2 > width-space) {
        context.fillStyle = "red";
        context.textAlign = "center";
        context.font = "normal 50pt Arial";
        context.textBaseline = "middle";
        context.fillText("snail 2 has won!", width/2, space / 2 * 3);
        drawSnail(speed1, space / 2, space, 1);
        drawSnail(speed2, space / 2 * 3, space, 2);
        drawSnail(speed3, space / 2 * 5, space, 3);
        drawSnail(speed4, space / 2 * 7, space, 4);
        drawSnail(speed5, space / 2 * 9, space, 5);
    } else if (speed3 >= width-space) {
        context.fillStyle = "red";
        context.textAlign = "center";
        context.font = "normal 50pt Arial";
        context.textBaseline = "middle";
        context.fillText("snail 2 has won!", width/2, space / 2 * 5);
        drawSnail(speed1, space / 2, space, 1);
        drawSnail(speed2, space / 2 * 3, space, 2);
        drawSnail(speed3, space / 2 * 5, space, 3);
        drawSnail(speed4, space / 2 * 7, space, 4);
        drawSnail(speed5, space / 2 * 9, space, 5);
    } else if (speed4 >= width-space) {
        context.fillStyle = "red";
        context.textAlign = "center";
        context.font = "normal 50pt Arial";
        context.textBaseline = "middle";
        context.fillText("snail 2 has won!", width/2, space / 2 * 7);
        drawSnail(speed1, space / 2, space, 1);
        drawSnail(speed2, space / 2 * 3, space, 2);
        drawSnail(speed3, space / 2 * 5, space, 3);
        drawSnail(speed4, space / 2 * 7, space, 4);
        drawSnail(speed5, space / 2 * 9, space, 5);
    } else if (speed5 >= width-space) {
        context.fillStyle = "red";
        context.textAlign = "center";
        context.font = "normal 50pt Arial";
        context.textBaseline = "middle";
        context.fillText("snail 2 has won!", width/2, space / 2 * 9);
        drawSnail(speed1, space / 2, space, 1);
        drawSnail(speed2, space / 2 * 3, space, 2);
        drawSnail(speed3, space / 2 * 5, space, 3);
        drawSnail(speed4, space / 2 * 7, space, 4);
        drawSnail(speed5, space / 2 * 9, space, 5);
    }
    requestAnimationFrame (draw);
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