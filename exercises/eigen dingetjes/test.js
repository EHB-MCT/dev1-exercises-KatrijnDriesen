"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";


drawCircles();

function drawCircles() {
    context.lineWidth = 5;
    for (let i=5; i>= 0; i--) {
        let x = 250 - i * 25;
        let y = 50 + i * 25;
        let radius = 25 + i * 10;

        let grey = Utils.hsl(0, 0, i* 20);
        context.fillStyle = grey;
        Utils.fillCircle(x,y,radius);
        Utils.strokeCircle(x,y,radius);
    }
}
