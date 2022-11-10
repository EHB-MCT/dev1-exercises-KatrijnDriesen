"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

drawCircles ();

function drawCircles(){
      
for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
    context.fillStyle = Utils.hsla(198,70,60,50);
    Utils.fillCircle(i*50,j*50,5+j*4);
    }
}
}