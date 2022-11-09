"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

context.fillStyle = "orange";
context.fillRect(0, 0, 600, 300);
context.strokeStyle = "white";

drawMoreLines ();

function drawMoreLines() {
for (let i=0; i<60; i++) {
    Utils.drawLine(10*i,0,600-10*i,300);
    }

for (let j=0; j<=30; j++) {
        Utils.drawLine(0,j*10,600,300-j*10);
    }
}