"use strict";

import context from "./context.js";

/**
 * calculates distance
 * @param {number} x1  x-coordinate of the first point
 * @param {number} y1  y-coordinate of the first point
 * @param {number} x2  x-coordinate of the 2nd pointe
 * @param {number} y2  y-coordinate of the 2nd point
 */
 export function calculateDistance(x1, y1, x2, y2){
    return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * fills a circle
 * @param {number} x  x-coordinate of the center of the circle
 * @param {number} y  y-coordinate of the center of the circle
 * @param {number} r  radius of the circle
 */
export function fillCircle(x,y,r){
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    context.fill();
}

/**
 * fills an ellipse
 * @param {number} x  x-coordinate of the center of the circle
 * @param {number} y  y-coordinate of the center of the circle
 * @param {number} rX  width of the ellipse
 * @param {number} rY  height of the ellipse
 */
export function fillEllipse(x,y,rX,rY){
    context.beginPath();
    context.ellipse(x,y,rX,rY,0,0,2*Math.PI,false);
    context.fill();
}

/**
 * draws the stroke of a circle
 * @param {number} x  x-coordinate of the center of the circle
 * @param {number} y  y-coordinate of the center of the circle
 * @param {number} r  radius of the circle
 */
 export function strokeCircle(x,y,r){
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    context.stroke();
}

/**
 * draws the stroke of a circle and fills it
 * @param {number} x  x-coordinate of the center of the circle
 * @param {number} y  x-coordinate of the center of the circle
 * @param {number} radius  radius of the circle
 */
export function fillAndStrokeCircle(x,y,radius) {
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI*2);
    context.fill();
    context.stroke();
}

/**
 * draws the stroke of an ellipse and fills it
 * @param {number} x  x-coordinate of the center of the ellipse
 * @param {number} y  x-coordinate of the center of the ellipse
 * @param {number} rX  width of the ellipse
 * @param {number} rY  height of the ellipse
 */
 export function fillAndStrokeEllipse(x,y,rX,rY) {
    context.beginPath();
    context.ellipse(x,y,rX,rY,0,0,2*Math.PI,false);
    context.fill();
    context.stroke();
}

/**
 * draws a line
 * @param {number} x1  x-coordinate of the starting coordinates
 * @param {number} y1  y-coordinate of the starting coordinates
 * @param {number} x2  r-coordinate of the ending coordinates
 * @param {number} y2  y-coordinate of the ending coordinates
*/
export function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}   

/** function that formats an rgb value based on parameters
 * @param {number} r percentage of reds
 * @param {number} g percentage of greens
 * @param {number} b percentage of blues
 */

export function rgb(r,g,b) {
    return "rgb("+r+"%,"+g+"%,"+b+"%)";
}


/** function that formats an rgba value based on parameters
 * @param {number} r percentage of reds
 * @param {number} g percentage of greens
 * @param {number} b percentage of blues
 * @param {number} a percentage of transparancy
 */

 export function rgba(r,g,b,a) {
    return "rgb("+r+"%,"+g+"%,"+b+"%,"+a+"%)";
}


/** function that formats an hsl value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 */

 export function hsl(h,s,l) {
    return "hsl("+h+","+s+"%,"+l+"%)";
}

/** function that formats an hsla value based on parameters
 * @param {number} h the hue in degrees
 * @param {number} s the saturation in percentage
 * @param {number} l the lightness in percentage
 * @param {number} a the transparancy in percentage
 */

 export function hsla(h,s,l,a) {
    return "hsl("+h+","+s+"%,"+l+"%"+a+"%)";
}

/** function gives a random number between two values
 * @param {number} x minimum value
 * @param {number} y maximum value
 */

 export function randomNumber(x,y) {
    return Math.floor(Math.random()*(y-x)+x);
}