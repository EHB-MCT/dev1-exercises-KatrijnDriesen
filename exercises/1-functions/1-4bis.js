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
        
  /*  //Teken hoek linksonder
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(50, 50, 50, 200);
   myContext.rect(50, 250, 250, 50);
   myContext.fill();
   
   myContext.strokeStyle = "black";
   myContext.beginPath();
   myContext.moveTo(50, 50);
   myContext.lineTo(100, 50);
   myContext.lineTo(100, 250);
   myContext.lineTo(300, 250);
   myContext.lineTo(300, 300);
   myContext.lineTo(50, 300);
   myContext.lineTo(50, 50);
   myContext.stroke();

   //Teken hoek rechtsonder
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(300, 50, 50, 300);
   myContext.rect(50, 300, 300, 50);
   myContext.fill();
  
   myContext.strokeStyle = "black";
   myContext.beginPath();
   myContext.moveTo(300, 50);
   myContext.lineTo(350, 50);
   myContext.lineTo(350, 350);
   myContext.lineTo(50, 350);
   myContext.lineTo(50, 300);
   myContext.lineTo(300, 300);
   myContext.lineTo(300, 50);
   myContext.stroke();

   //Teken hoek linksboven
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(100, 50, 200, 50);
   myContext.rect(100, 100, 50, 150);
   myContext.fill();
   
   myContext.strokeStyle = "black";
   myContext.beginPath();
   myContext.moveTo(100, 50);
   myContext.lineTo(300, 50);
   myContext.lineTo(300, 100);
   myContext.lineTo(150, 100);
   myContext.lineTo(150, 250);
   myContext.lineTo(100, 250);
   myContext.lineTo(100, 50);
   myContext.stroke();
  
   //Teken hoek rechtsboven
   myContext.fillStyle = "lightblue";
   myContext.beginPath();
   myContext.rect(150, 100, 150, 50);
   myContext.rect(250, 150, 50, 100);
   myContext.fill();
      
   myContext.strokeStyle = "black";
   myContext.beginPath();
   myContext.moveTo(150, 100);
   myContext.lineTo(300, 100);
   myContext.lineTo(300, 250);
   myContext.lineTo(250, 250);
   myContext.lineTo(250, 150);
   myContext.lineTo(150, 150);
   myContext.lineTo(150, 100);
   myContext.stroke(); */
        
   }