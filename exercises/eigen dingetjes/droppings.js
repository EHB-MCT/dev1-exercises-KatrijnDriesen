"use strict";
import context, { setupCanvasContext } from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
window.onmousemove = locationCursor; 
let xCursor = 0;
let yCursor = 0;
let frameCount = 0;

/**
*
* @param {MouseEvent} eventData
*/

let droppings = [];

function locationCursor(eventData) {
    xCursor = eventData.pageX;
    yCursor = eventData.pageY;
    console.log(xCursor,yCursor);
    timing();
}

function fillDroppings() {
    droppings.push();
    for(let i = 0; i < 10; i++) {
        let dropping = {
            x : xCursor,
            y : yCursor,
        };
        console.log(droppings[i]);
        droppings.push(dropping); //shift bij muizenhol
    }
    context.beginPath();
    context.moveTo(xCursor, yCursor);
    context.lineTo(xCursor + Utils.randomNumber(-5, 5), yCursor + Utils.randomNumber(-5, 5));
    context.stroke();

}

function timing() {
    frameCount ++;
    if (frameCount % 180 == 0) {
        fillDroppings();
    }
}