"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;
let enemies = [];
let player = {
    x : 0,
    y : 0,
    size : 10,
    colour : Utils.hsl(Math.random() * 360, 100, 50),
};
let numberOfEnemies = 25;
let isPlaying = true;
let hasWon = false;
let gameOver = false;

window.onmousemove = play;
window.onmousedown = replay;

setup();
update();

function setup() {
    context.textAlign = "center";
    for (let i = 0; i < numberOfEnemies; i++) {
        let enemySize = Utils.randomNumber(5, 40);
        let enemy = {
            x : Utils.randomNumber(enemySize, width - enemySize),
            y : Utils.randomNumber(enemySize, height - enemySize),
            size : enemySize,
            colour : Utils.hsl(Math.random() * 360, 100, 50),
            seedX : Utils.randomNumber(0, 99999),
            xeedY : Utils.randomNumber(0, 99999),
            xSpeed : Utils.randomNumber(-0.1, 0.1),
            ySpeed : Utils.randomNumber(-0.1, 0.1)
        };
        enemies.push(enemy);
    }
}

function update() {   
    if (isPlaying == true) {   
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
        for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies [i];
            //Draw enemies
            context.fillStyle = enemy.colour;
            Utils.fillCircle(enemy.x,enemy.y,enemy.size);
            
            //move enemies
            enemy.x += enemy.xSpeed;
            enemy.y += enemy.ySpeed;
            
            //change directions
            if (enemy.x >= width - enemy.size || enemy.x < enemy.size) {
                enemy.xSpeed *= -1 ;
            }
            if (enemy.y >= height - enemy.size || enemy.y < enemy.size) {
                enemy.ySpeed *= -1 ;
            }
            //encouters enemies
            for (let j = 0; j < enemies.length; j++) {
                let otherEnemy = enemies[j];
                if (i != j) {
                    let distance = Utils.calculateDistance(otherEnemy.x, otherEnemy.y, enemy.x, enemy.y);
                    if (distance <= otherEnemy.size + enemy.size){
                        if (otherEnemy.size >= enemy.size) {
                            otherEnemy.size += 5;
                            otherEnemy.colour = enemy.colour;
                            enemies.splice(i,1);
                        } else {
                            enemy.size += 5;
                            enemy.colour = otherEnemy.colour;
                            enemies.splice(j,1);
                        }
                    }
                }
            }

            //encounter player
            let distancePlayer = Utils.calculateDistance(enemy.x, enemy.y, player.x, player.y);
            if (distancePlayer <= enemy.size + player.size) {
                if (player.size >= enemy.size) {
                    enemies.splice(i,1);
                    player.size += 5;
                    player.colour = enemy.colour;
                    //win
                    if (enemies.length == 0) {
                        isPlaying = false;
                        hasWon = true;
                    }
                //gameover
                } else {
                    isPlaying = false;
                    gameOver = true;
                }
            }
        }

        //draw player
        context.fillStyle = Utils.hsl(360, 100, 50);
        Utils.fillCircle(player.x, player.y, player.size);

        requestAnimationFrame(update);
    } else {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.font = "bold 64pt Arial";
        context.fillStyle = "red";
        if (hasWon) {
            context.fillText("YOU WIN", width / 2, height / 2);
        } else if (gameOver) {
            context.fillText("GAME OVER", width / 2, height / 2);
        }
        context.font = "bold 32pt Arial";
        context.fillText("click to play again", width / 2, height / 2 + 100);
    }
}

function play (eventData){
    player.x = eventData.pageX;
    player.y = eventData.pageY;
}

function replay(eventData) {
    if (gameOver == true || hasWon == true) {
        isPlaying = true;
        hasWon = false;
        gameOver = false;
        player.size = 10;
        player.colour = Utils.hsl(Math.random() * 360, 100, 50);
        setup();
        update();
    } else {
        isPlaying = true;
    }
}

console.log(enemies.length);