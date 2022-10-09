"use strict";

drawLine();

function drawLine() {

   let myCanvas = document.querySelector("canvas");
   myCanvas.width = window.innerWidth;
   myCanvas.height = window.innerHeight;
   let myContext = myCanvas.getContext("2d");

   //Teken rood kruis
   myContext.lineWidth = 10;
   myContext.strokeStyle = "red";
   myContext.beginPath();
   myContext.moveTo(50, 50);
   myContext.lineTo(250, 250);
   myContext.stroke();
  
   myContext.beginPath();
   myContext.moveTo(250, 50);
   myContext.lineTo(50, 250);
   myContext.stroke();
 
 //Teken zwart vierkant
   myContext.lineWidth = 10;
   myContext.strokeStyle = "black";
   myContext.beginPath();
   myContext.moveTo(50, 50);
   myContext.lineTo(250, 50);
   myContext.lineTo(250, 250);
   myContext.lineTo(50, 250);
   myContext.lineTo(50, 45);
   myContext.stroke();
  
   }