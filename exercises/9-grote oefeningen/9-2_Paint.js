"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();

//inputvelden tekenen
//let value = document.getElementById("cardsButton").value;

//knoppen tekenen
//document.getElementById("cardsButton").onclick = drawCards;

//on mouse down binnen linkse gebied = beginnen tekenen


//on mouse move = verder tekenen

//on mouse down op schuiver of knop = functie schuiver/knop

//on mouse move op schuiver of knop = wijzigen van eigenschap

function setup(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
}