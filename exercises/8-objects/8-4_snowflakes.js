"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = updateWind;

let snowFlakes = [];
let wind = 0.5;

setup();
draw();

function setup() {
    for (let i = 0; i < 100; i++) {
        createSnowFlakes();
    }
}

function createSnowFlakes(){
    let snowFlake = {
        x: Utils.randomNumber(-200, width),
        y: 0,
        size: Utils.randomNumber(10, 50),
        alpha: Utils.randomNumber(20, 60),
        speed: Math.random()
    };

    snowFlakes.push(snowFlake);

/*     if (snowFlake.y > height){
        snowFlakes.shift();
    } */
}

function draw() {
    context.fillStyle = "DarkSlateGray";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < snowFlakes.length; i++) {
        let snowFlake = snowFlakes[i];
        context.strokeStyle = Utils.rgba(255,255,255, snowFlake.alpha);
        
        drawSnowFlake(snowFlake.x, snowFlake.y, snowFlake.size);

        snowFlake.y += snowFlake.speed;
        snowFlake.x += wind;
    }

    //Add extra snowflakes
    for (let i = 0; i < 1; i++) {
        createSnowFlakes();
    }
    //console.log(snowFlakes.length);
    requestAnimationFrame(draw);
}

function drawSnowFlake(x, y, size) {
    let half = size / 2;
    let third = size / 3;
    context.lineWidth = size / 7;
    context.beginPath();
    context.moveTo(x, y - half);
    context.lineTo(x, y + half);
    context.moveTo(x - half, y);
    context.lineTo(x + half, y);
    context.moveTo(x - third, y - third);
    context.lineTo(x + third, y + third);
    context.moveTo(x - third, y + third);
    context.lineTo(x + third, y - third);
    context.stroke();
}

function updateWind(e) {
    console.log(e.pageX);
    let scaler = 400;
    wind = (width / 2 - e.pageX) / scaler;
}