"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "pink";
context.fillRect(0, 0, 300, 300);
context.strokeStyle = "white";
context.beginPath();
context.moveTo(150, 150);
context.bezierCurveTo(50, 50, 250, 50, 150, 150);
context.bezierCurveTo(250, 50, 250, 250, 150, 150);
context.bezierCurveTo(50, 250, 250, 250, 150, 150);
context.bezierCurveTo(50, 50, 50, 250, 150, 150);
context.stroke();
context.strokeStyle = "black";
Utils.drawLine(50, 50, 250, 250);
Utils.drawLine(250, 50, 50, 250);