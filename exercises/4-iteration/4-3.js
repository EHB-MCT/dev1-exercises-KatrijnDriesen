"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawBrickWall ();

function drawBrickWall(){
      
for (let i=0; i<6; i++) {
    for (let j=0; j<3; j++) {
    context.fillStyle = Utils.hsl(10,80,25);
    context.fillRect(50+i*103,50+j*106,100,50);
    context.fillRect(100+i*103, 103+j*106, 100, 50);}
    }
}