"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let heightStreet = height / 6;
let moveFrogY = 0;
let moveFrogX = 0;
let posFrogX = width / 2;
let posFrogY = height * 5.5 / 6;
let distancePaw = 17;
let isPlaying = 1;
let posXCarA = 0;
let posYCarA = height * 17 / 60;
let posXCarB = width - 150;
let posYCarB = height * 37 / 60;
let spaceWindow = 5;
let heigthCar = height / 10;
let speed = 1;

window.onkeydown = moveFrog;

/**
*
* @param {KeyboardEvent} eventData
*/

setup ();
update ();

function setup () {
    
    drawBackground ();   

    drawFrog ();

    drawCars ();
}

function moveFrog (eventData) {
    if (eventData.code == "ArrowUp") {
        moveFrogY -= 10;
    } else if (eventData.code == "ArrowDown") {
        moveFrogY += 10;
    } else if (eventData.code == "ArrowLeft") {
        moveFrogX -= 10;
    } else if (eventData.code == "ArrowRight") {
        moveFrogX += 10;
    }
}

function update() {
    if (isPlaying == 1) {
        
        drawBackground ();    
        
        drawFrog ();
    
        drawCars ();
                       
        //move cars
        posXCarA += speed;
        posXCarB -= speed;
        if (posXCarA >= width-150 || posXCarA <= 0) {
            speed *= -1;
        }

        if (((posFrogY >= posYCarA && posFrogY <= posYCarA + 150) && (posFrogX >= posXCarA && posFrogX <= posXCarA + 150)) || ((posFrogY >= posYCarB && posFrogY <= posYCarB + 150) && (posFrogX >= posXCarB && posFrogX <= posXCarB + 150))) {
            isPlaying *= -1;
            context.fillStyle = "red";
            context.textAlign = "center";
            context.font = "normal 50pt Arial";
            context.textBaseline = "middle";
            context.fillText("Game over :(", width/2, height/2);
        } else if (posFrogY + moveFrogY - 75 <= 0) {
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

function drawBackground () {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "grey";
    context.fillRect(0, height / 4, width, heightStreet);
    context.fillRect(0, height * 3 / 4, width, -heightStreet);
    context.fillStyle = "lightgrey";
    context.fillRect(0, height / 4 + height / 6, width, heightStreet);
}

function drawFrog () {
    context.fillStyle = "green";
    Utils.fillCircle (posFrogX + moveFrogX, posFrogY + moveFrogY, 20);
    Utils.fillCircle (posFrogX + moveFrogX, posFrogY - 27 + moveFrogY, 10);
    Utils.fillCircle (posFrogX + distancePaw + moveFrogX, posFrogY + distancePaw + moveFrogY, 5);
    Utils.fillCircle (posFrogX + distancePaw + moveFrogX, posFrogY - distancePaw + moveFrogY, 5);
    Utils.fillCircle (posFrogX - distancePaw + moveFrogX, posFrogY - distancePaw + moveFrogY, 5);
    Utils.fillCircle (posFrogX - distancePaw + moveFrogX, posFrogY + distancePaw + moveFrogY, 5);
}

function drawCars () {
    context.fillStyle = "red";
    context.fillRect(posXCarA, posYCarA, 150, heigthCar);
    context.fillRect(posXCarB, posYCarB, 150, heigthCar);
    context.fillStyle = "lightblue";
    context.fillRect(posXCarA + spaceWindow, posYCarA + spaceWindow, 30, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarA + 100, posYCarA + spaceWindow, 50-spaceWindow, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarB + spaceWindow, posYCarB + spaceWindow, 50, heigthCar - spaceWindow * 2);
    context.fillRect(posXCarB + 120, posYCarB + spaceWindow, 30-spaceWindow, heigthCar - spaceWindow * 2);
}

/* function endGame(eventData){
    let x = eventData.pageX;
    let y = eventData.pageY;
    if (Utils.calculateDistance(x, y, xPos, yPos) < size || Utils.calculateDistance(x, y, xPos, yPos) < size) {
        isPlaying *= -1;
        context.fillStyle = "red";
        context.textAlign = "center";
        context.fillText("Game over", width/2, height/2);
    }
} */