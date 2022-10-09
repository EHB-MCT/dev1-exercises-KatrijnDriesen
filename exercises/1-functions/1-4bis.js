"use strict";

drawMaze();

function drawMaze() {

   let myCanvas = document.querySelector("canvas");
   myCanvas.width = window.innerWidth;
   myCanvas.height = window.innerHeight;
   let myContext = myCanvas.getContext("2d");

   
   //Teken vierkant 1
   myContext.strokestyle = "black"
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(50, 50, 300, 300);
   myContext.fill();
   myContext.stroke();
 
   //Teken vierkant 2
   myContext.strokestyle = "black"
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(50, 50, 250, 250);
   myContext.fill();
   myContext.stroke();

   //Teken vierkant 3
   myContext.strokestyle = "black"
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(100, 50, 200, 200);
   myContext.fill();
   myContext.stroke();

   //Teken vierkant 4
   myContext.strokestyle = "black"
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(150, 100, 150, 150);
   myContext.fill();
   myContext.stroke();

   //Teken vierkant midden
   myContext.strokestyle = "black"
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(150, 150, 100, 100);
   myContext.fill();
   myContext.stroke();
    
   }