"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

context.fillStyle = "black";
context.fillRect(0, 0, context.canvas.width, context.canvas.height);

drawBubbles ();

function drawBubbles(){
      
for (let i=0; i<150; i++) {
    let x = Math.random()*(context.canvas.width-400);
    let y = Math.random()*(context.canvas.height-400);
    context.fillStyle = Utils.hsla(Math.random()*360/1.8,100,50,50);
    Utils.fillCircle(x+200,y+200,Math.random()*50);
}

}