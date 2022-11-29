"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let margin = 5;
let offset = 50;
let brickWidth = 100;
let brickHeight = 50;

drawBrickWall ();

function drawBrickWall(){
    context.fillStyle = Utils.hsl(10,80,25);

    for (let j=0; j<6; j++) {
        for (let i=0; i<6; i++) {
        if (j%2 == 1) {
            context.fillRect(50+(brickWidth+margin)*i, 50+(brickHeight+margin)*j, brickWidth, brickHeight);}
        else {
            context.fillRect(50+brickWidth/2+(brickWidth+margin)*i,50+(brickHeight+margin)*j, brickWidth, brickHeight);}
    }
    }
}