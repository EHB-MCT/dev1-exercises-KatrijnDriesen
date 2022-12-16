"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//draw loop + user input

let snowFlakes = [];
let wind = 10;

setup();
draw();

function setup() {
    for (let i = 0; i < 200; i++) {
        let snowFlake = {
            x: Utils.randomNumber(0, width),
            y: 0,
            size: Utils.randomNumber(),
            alpha: Utils.randomNumber(20,60),
            speed: 1 + Math.random() * 5
        };

    snowFlakes.push(snowFlake);
    }
}

function draw() {
    context.fillStyle = "red";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "white";

    for (let i = 0; i < snowFlakes.length; i++) {
        let snowFlake = snowFlakes[i];
        context.strokeStyle = Utils.rgba(255,255,255, snowFlake.alpha);
        
        drawSnowFlake(snowFlake.x, snowFlake.y, snowFlake.size);

        snowFlake.y += snowFlake.speed;
        snowFlake.x += wind;
    }
    requestAnimationFrame(draw);
}

function drawSnowFlake(x, y, size) {
    let half = size / 2;
    let thirt = size / 3;
    context.lineWidth = size / 5;
    context.beginPath();
    context.moveTo(x,y-half);
    context.lineTo(x,y+half);
    context.moveTo(x-half,y);
    context.lineto(x);
    context.stroke();
}