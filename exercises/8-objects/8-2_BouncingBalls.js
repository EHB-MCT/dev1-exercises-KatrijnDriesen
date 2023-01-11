"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let balls = [];

createBalls();
drawBalls();

function createBalls () {
    for (let i = 0; i<20; i++) {
        let ball = {
            x : Math.random() * width,
            y : Math.random() * height,
            colour : Utils.hsl(Math.random() * 360, 100, 50),
            size : 40 - Math.random() * 20,
            xSpeed : 10,
            ySpeed : 10
        };
        balls.push(ball);
    }
}

function drawBalls() {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    for (let i=0; i<20; i++) {
        let ball = balls [i];
        //Draw ball
        context.fillStyle = ball.colour;
        Utils.fillCircle(ball.x,ball.y,ball.size);
        ball.x += ball.xSpeed;
        ball.y += ball.ySpeed;
        //change directions
        if (ball.x >= width - ball.size || ball.x < ball.size) {
        ball.xSpeed *= -1 ;
        }
        if (ball.y >= height - ball.size || ball.y < ball.size) {
        ball.ySpeed *= -1 ;
        }
    }
    requestAnimationFrame(drawBalls);
}