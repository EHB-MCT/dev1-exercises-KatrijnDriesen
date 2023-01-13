"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawTapistry ();

function drawTapistry(){
      
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            if (i%2 == 0) {
                context.fillStyle = "darkblue";
                context.fillRect(j * 50, i * 50, 50, 50);
            }
            if (i%2 == 1) {
                context.fillStyle = "lightgrey";
                context.fillRect(j * 50, i * 50, 50, 50);
            }
            if (j%2 == 0 && i%2 == 0) {
                context.fillStyle = "red";
                context.fillRect(j * 50, i * 50, 50, 50);
            }
            if (i%2 == 1 && j%2 == 0 && j>i) {
                context.fillStyle = "red";
                context.fillRect(j * 50, i * 50, 50, 50);
            }

        }
    }
}

//extra challenges
//snakes
//space invader