"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let j = 0;
let numbers = [];

setup();
calculateAverage();

function setup() {
    for (let i=0; i<1000; i++) {
        numbers [i] = Utils.randomNumber(0,100);
    }
}

function calculateAverage(j) {
    for (let i=0; i<numbers.length; i++) {
        j += numbers.shift();
    }
    console.log(j/numbers.length);
}

/* Program a function "calculateAverage" which has 1 parameter: an array that contains numbers.
The function loops over the entire array and returns the average of all the numbers (sum of all the numbers divided by the total amount of numbers).

Create an array of  a 1000 random numbers (between 0 and 100) and pass it as an argument to the "calculateAverage" function.

Print the result in te console, it should always be around 50. */