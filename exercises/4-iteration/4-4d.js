"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawCircles ();

function drawCircles(){
      
for (let i=0; i<5; i++) {
    for (let j=0; j<10; j++) {
    context.fillStyle = Utils.hsl(198,70,60);
    Utils.fillCircle(i*100,j*50,25);
    context.fillStyle = Utils.hsl(2,50,65);
    Utils.fillCircle(50+i*100,j*50,25);}
}
}