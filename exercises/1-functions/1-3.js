"use strict";

drawRectangle();

function drawRectangle() {

   let myCanvas = document.querySelector("canvas");
   myCanvas.width = window.innerWidth;
   myCanvas.height = window.innerHeight;
   let myContext = myCanvas.getContext("2d");

   //Teken groot rood vierkant linksboven
   myContext.lineWidth = 1;
   myContext.strokeStyle = "red";
   myContext.beginPath();
   myContext.rect(50, 50, 150, 150);
   myContext.stroke();

   //Teken groot rood vierkant rechtsonder
   myContext.lineWidth = 1;
   myContext.strokeStyle = "red";
   myContext.beginPath();
   myContext.rect(200, 200, 150, 150);
   myContext.stroke();

   //Teken groot zwart vierkant midden
   myContext.lineWidth = 1;
   myContext.strokeStyle = "red";
   myContext.fillstyle = "black";
   myContext.beginPath();
   myContext.rect(125, 125, 150, 150);
   myContext.stroke();
   myContext.fill();

   //Teken klein rood vierkant rechtsboven
   myContext.lineWidth = 1;
   myContext.strokeStyle = "red";
   myContext.beginPath();
   myContext.rect(275, 75, 50, 50);
   myContext.stroke();
  
   //Teken klein rood vierkant linksonder
   myContext.lineWidth = 1;
   myContext.strokeStyle = "red";
   myContext.beginPath();
   myContext.rect(75, 275, 50, 50);
   myContext.stroke();
  
    //Teken klein zwart vierkant rechtsboven
    myContext.fillstyle = "black";
    myContext.beginPath();
    myContext.rect(325, 50, 25, 25);
    myContext.fill();

    //Teken klein zwart vierkant rechtsboven
    myContext.fillstyle = "black";
    myContext.beginPath();
    myContext.rect(50, 325, 25, 25);
    myContext.fill();

   }