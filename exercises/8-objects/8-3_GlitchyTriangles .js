"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let triangles = [];

setup();
draw();

function setup () {
    for (let i = 0; i < 200; i++) {
        let scale = 40;
        let x1 = Utils.randomNumber(0, width);
        let y1 = Utils.randomNumber(0, height);
        let x2 = x1 + Utils.randomNumber(-scale, scale);
        let y2 = y1 + Utils.randomNumber(-scale, scale);
        let x3 = x2 + Utils.randomNumber(-scale, scale);
        let y3 = y2 + Utils.randomNumber(-scale, scale);

        let triangle = {
            x1 : x1,
            y1 : y1,
            x2 : x2,
            y2 : y2,
            x3 : x3,
            y3 : y3,
            r : Utils.randomNumber(0, 10),
            g : Utils.randomNumber(20, 100),
            b : Utils.randomNumber(20, 100)
        };
        triangles.push(triangle);
    }
}

function draw() {
    context.fillStyle = Utils.rgb(20,50,50);
    context.fillRect(0, 0, width, height);
    
    for (let i = 0; i < triangles.length; i++) {
    let triangle = triangles[i];
    
    //draw
    context.fillStyle = Utils.rgba(triangle.r,triangle.g,triangle.b,50);
    context.beginPath();
    context.moveTo(triangle.x1, triangle.y1);
    context.lineTo(triangle.x2, triangle.y2);
    context.lineTo(triangle.x3, triangle.y3);
    context.fill();
    context.fillRect(triangle.x, triangle.y, triangle.size, triangle.size);
    
    //update
    updateTriangle(triangle);
}
    requestAnimationFrame(draw);
}

function updateTriangle(triangle) {
    triangle.x1 += Utils.randomNumber(-1, 1);
    triangle.y1 += Utils.randomNumber(-1, 1);
    triangle.x2 += Utils.randomNumber(-1, 1);
    triangle.y2 += Utils.randomNumber(-1, 1);
    triangle.x3 += Utils.randomNumber(-1, 1);
    triangle.y3 += Utils.randomNumber(-1, 1);
}