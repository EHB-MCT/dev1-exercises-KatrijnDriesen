"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let z = 300/12;
    let i = 50;
    while (i < 310) {
        Utils.drawLine(50+z,i+z,350-z,i+z);
        i+=z;
    }
} 