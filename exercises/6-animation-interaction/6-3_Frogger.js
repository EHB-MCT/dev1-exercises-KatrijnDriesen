"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let posFrogX = width / 2;
let posFrogY = height * 5.5 / 6;
let posXCarA = 0;
let posYCarA = height * 17 / 60;
let posXCarB = width - 150;
let posYCarB = height * 37 / 60;
let speedCar = 5;
let heigthCar = height / 10;

setup ();
update ();

window.onkeydown = moveFrog;

/**
*
* @param {KeyboardEvent} eventData
*/

function setup () {
    
    drawBackground ();   

    drawFrog ();

    drawCars ();
}

function update() {
    let isPlaying = 1;
    let safetyMarginFrog = 5;
    if (isPlaying == 1) {
        
        drawBackground ();    
        
        drawFrog ();
    
        drawCars ();
                       
        //move cars
        posXCarA += speedCar;
        posXCarB -= speedCar;
        if (posXCarA >= width-150 || posXCarA <= 0) {
            speedCar *= -1;
        }

        if (((posFrogX >= posXCarA && posFrogX <= posXCarA + 150) && (posFrogY >= posYCarA-safetyMarginFrog && posFrogY <= posYCarA + heigthCar + safetyMarginFrog)) || ((posFrogX >= posXCarB && posFrogX <= posXCarB + 150) && (posFrogY >= posYCarB-safetyMarginFrog && posFrogY <= posYCarB + heigthCar+safetyMarginFrog))) {
            isPlaying *= -1;
            context.fillStyle = "red";
            context.textAlign = "center";
            context.font = "normal 50pt Arial";
            context.textBaseline = "middle";
            context.fillText("Game over :(", width/2, height/2);
        } else if (posFrogY - 75 <= 0) {
            isPlaying *= -1;
            context.fillStyle = "green";
            context.textAlign = "center";
            context.font = "normal 50pt Arial";
            context.textBaseline = "middle";
            context.fillText("You win! :)", width/2, height/2);
        } else {requestAnimationFrame (update);
        }
    }
}
console.log(posFrogY);

function moveFrog (eventData) {
    let speedFrog = 5;
    if (eventData.code == "ArrowUp") {
        posFrogY -= speedFrog;
    } else if (eventData.code == "ArrowDown") {
        posFrogY += speedFrog;
    } else if (eventData.code == "ArrowLeft") {
        posFrogX -= speedFrog;
    } else if (eventData.code == "ArrowRight") {
        posFrogX += speedFrog;
    }
}

function drawBackground () {
    let heightStreet = height / 6;
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "grey";
    context.fillRect(0, height / 4, width, heightStreet);
    context.fillRect(0, height * 3 / 4, width, -heightStreet);
    context.fillStyle = "lightgrey";
    context.fillRect(0, height / 4 + height / 6, width, heightStreet);
}

function drawFrog () {
    let distancePaw = 17;
    context.fillStyle = "green";
    Utils.fillCircle (posFrogX, posFrogY, 20);
    Utils.fillCircle (posFrogX, posFrogY - 27, 10);
    Utils.fillCircle (posFrogX + distancePaw, posFrogY + distancePaw, 5);
    Utils.fillCircle (posFrogX + distancePaw, posFrogY - distancePaw, 5);
    Utils.fillCircle (posFrogX - distancePaw, posFrogY - distancePaw, 5);
    Utils.fillCircle (posFrogX - distancePaw, posFrogY + distancePaw, 5);
}

function drawCars () {
    let spaceWindow = 5;
    context.fillStyle = "red";
    context.fillRect(posXCarA, posYCarA, 150, heigthCar);
    context.fillRect(posXCarB, posYCarB, 150, heigthCar);
    context.fillStyle = "lightblue";
    context.fillRect(posXCarA + spaceWindow, posYCarA + spaceWindow, 30, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarA + 100, posYCarA + spaceWindow, 50-spaceWindow, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarB + spaceWindow, posYCarB + spaceWindow, 50, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarB + 120, posYCarB + spaceWindow, 30-spaceWindow, heigthCar - spaceWindow * 2);
}