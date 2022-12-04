"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let heightStreet = height / 6;

setup ();
//update ();

function setup (){
    //draw background
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "grey";
    context.fillRect(0, height / 4, width, heightStreet);
    context.fillRect(0, height * 3 / 4, width, -heightStreet);
    context.fillStyle = "lightgrey";
    context.fillRect(0, height / 4 + height / 6, width, heightStreet);

    //draw frog
    let frogX = width / 2;
    let frogY = height * 5.5 / 6;
    let distancePaw = 17;
    context.fillStyle = "green";
    Utils.fillCircle (frogX, frogY, 20);
    Utils.fillCircle (frogX, frogY - 27, 10);
    Utils.fillCircle (frogX + distancePaw, frogY + distancePaw, 5);
    Utils.fillCircle (frogX + distancePaw, frogY - distancePaw, 5);
    Utils.fillCircle (frogX - distancePaw, frogY - distancePaw, 5);
    Utils.fillCircle (frogX - distancePaw, frogY + distancePaw, 5);

    //draw cars
    let spaceWindow = 5;
    context.fillStyle = "red";
    context.fillRect(0, height * 17 / 60, 150, height / 10);
    context.fillRect(width - 150, height * 37 / 60, 150, height / 10);
    context.fillStyle = "lightblue";
    context.fillRect(0 + spaceWindow, height * 17 / 60 + spaceWindow, 30, height / 10 - spaceWindow * 2);
    context.fillRect(100, height * 17 / 60 + spaceWindow, 50-spaceWindow, height / 10 - spaceWindow * 2);
    context.fillRect(width - 150 + spaceWindow, height * 37 / 60 + spaceWindow, 50, height / 10 - spaceWindow * 2);
    context.fillRect(width - 30, height * 37 / 60 + spaceWindow, 30-spaceWindow, height / 10 - spaceWindow * 2);
}