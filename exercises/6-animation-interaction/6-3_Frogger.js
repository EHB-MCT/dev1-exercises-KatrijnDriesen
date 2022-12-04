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
    let posXCarA = 0;
    let posXCarB = width - 150;
    let spaceWindow = 5;
    let heigthCar = height / 10;
    context.fillStyle = "red";
    context.fillRect(posXCarA, height * 17 / 60, 150, heigthCar);
    context.fillRect(posXCarB, height * 37 / 60, 150, heigthCar);
    context.fillStyle = "lightblue";
    context.fillRect(posXCarA + spaceWindow, height * 17 / 60 + spaceWindow, 30, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarA + 100, height * 17 / 60 + spaceWindow, 50-spaceWindow, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarB + spaceWindow, height * 37 / 60 + spaceWindow, 50, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarB + 120, height * 37 / 60 + spaceWindow, 30-spaceWindow, heigthCar - spaceWindow * 2);
}

//if {speed cars -1}
//requestAnimationFrame
//onmouseup, down, left, right --> x,y pos frog
//redraw background