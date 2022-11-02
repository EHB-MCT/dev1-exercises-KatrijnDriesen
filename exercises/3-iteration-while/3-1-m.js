"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 0;
    while (i<30) {
        let x = i*10;
        Utils.drawLine(50+x,50,350-x,350);
        Utils.drawLine(350,50+x,50,350-x);
        i++;
    }
}