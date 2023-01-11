"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

createBalloons();
drawBalloons();

function createBalloons () {
    for (let i = 0; i<10; i++) {
        let balloon = {
            x : Math.random() * width,
            y : height - 40,
            colour : Utils.hsl(50-Math.random() * 50, 100, 50),
            speed : 7 - Math.random() * 3,
        };
        balloons.push(balloon);
    }
}

function drawBalloons() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
    for (let i=0; i<10; i++) {
    let balloon = balloons [i];
    context.fillStyle = balloon.colour;
    Utils.fillEllipse(balloon.x,balloon.y,30,36);
    Utils.drawLine(balloon.x,balloon.y+36,balloon.x,balloon.y+100);
    balloon.y -= balloon.speed;
    }
    requestAnimationFrame(drawBalloons);
}
