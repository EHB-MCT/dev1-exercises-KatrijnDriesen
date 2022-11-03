"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    while (i<6) {
        let gray = 100-i*20;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        Utils.fillAndStrokeEllipse(200, 200, 25+i*25, 150-i*25);
        i++;
    }
}