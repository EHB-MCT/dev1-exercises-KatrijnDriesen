"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawArrows(100, 200, 20);

function drawArrows(arrowLength, arrowHeight, arrowThickness) {
    //arrowLeft
    context.fillRect(0, arrowHeight - arrowThickness / 2, arrowLength - arrowThickness / 3 *2, arrowThickness);
    context.beginPath();
    context.moveTo(arrowLength - arrowThickness / 3 * 2, arrowHeight - arrowThickness / 2 - arrowThickness/3);
    context.lineTo(arrowLength, arrowHeight);
    context.lineTo(arrowLength - arrowThickness / 3 * 2, arrowHeight + arrowThickness / 2 + arrowThickness/3);
    context.fill();
    //arrowRight
    context.fillRect(arrowLength + arrowThickness / 3 * 2, arrowHeight - arrowThickness / 2, width - arrowLength - arrowThickness / 3 * 2, arrowThickness);
    context.beginPath();
    context.moveTo(arrowLength + arrowThickness / 3 * 2, arrowHeight - arrowThickness / 2 - arrowThickness/3);
    context.lineTo(arrowLength, arrowHeight);
    context.lineTo(arrowLength + arrowThickness / 3 * 2, arrowHeight + arrowThickness / 2 + arrowThickness/3);
    context.fill();
}
/* This function always draws two arrows from the sides of the screen to the specified location.
The thickness determines how large the arrows should be.

Write your code as efficient as possible. */