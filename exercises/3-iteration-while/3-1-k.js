"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawSunBeams();
}

function drawSunBeams() {
    let i = 50;
    while (i <= 350) {
        Utils.drawLine(50,50,350,i);
        Utils.drawLine(50,50,i,350);
        i = i + 10;
    }
}