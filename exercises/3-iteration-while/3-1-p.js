"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawConcentricCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawConcentricCircles() {
    context.fillStyle = "#AAAAAA";
    let i = 0;
    while (i<=6) {
        let radius = 150-i*25;
        Utils.fillAndStrokeCircle(200, 200, radius);
        i++;
    }
}