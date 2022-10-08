"use strict";

drawLine();

function drawLine() {

   let myCanvas = document.querySelector("canvas");
   myCanvas.width = window.innerWidth;
   myCanvas.height = window.innerHeight;
   let myContext = myCanvas.getContext("2d");

//Teken letter rode K  
   myContext.lineWidth = 20;
   myContext.strokeStyle = 'red';
   myContext.beginPath();
   myContext.moveTo(250, 250);
   myContext.lineTo(250, 700);
   myContext.stroke();

   myContext.beginPath();
   myContext.moveTo(250, 475);
   myContext.lineTo(500, 250);
   myContext.stroke();

   myContext.beginPath();
   myContext.moveTo(250, 475);
   myContext.lineTo(500,700);
   myContext.stroke();

   //Teken letter gele a
   myContext.lineWidth = 20;
   myContext.strokeStyle = 'yellow';
   myContext.beginPath();
   myContext.moveTo(800, 400);
   myContext.lineTo(850, 400);
   myContext.lineTo(850, 700);
   myContext.stroke();

   myContext.beginPath();
   myContext.moveTo(850, 475);
   myContext.lineTo(700, 525);
   myContext.lineTo(700, 700);
   myContext.lineTo(900,700);
   myContext.stroke();

   //Teken letter paarse t
   myContext.lineWidth = 20;
   myContext.strokeStyle = 'purple';
   myContext.beginPath();
   myContext.moveTo(1050, 300);
   myContext.lineTo(1050, 650);
   myContext.lineTo(1100, 700);
   myContext.lineTo(1200, 700);
   myContext.stroke();
    
   myContext.beginPath();
   myContext.moveTo(1050, 500);
   myContext.lineTo(1200, 500);
   myContext.stroke();

   //Teken letter groene r
   myContext.lineWidth = 20;
   myContext.strokeStyle = 'green';
   myContext.beginPath();
   myContext.moveTo(1350, 400);
   myContext.lineTo(1350, 700);
   myContext.stroke();
     
   myContext.beginPath();
   myContext.moveTo(1350, 500);
   myContext.lineTo(1400, 450);
   myContext.lineTo(1500, 450);
   myContext.stroke();

   //Teken letter roze ij
   myContext.lineWidth = 20;
   myContext.strokeStyle = 'pink';
   myContext.beginPath();
   myContext.moveTo(1625, 500);
   myContext.lineTo(1625, 700);
   myContext.stroke();
     
   myContext.beginPath();
   myContext.moveTo(1800, 500);
   myContext.lineTo(1800, 900);
   myContext.lineTo(1750, 950);
   myContext.lineTo(1550, 950);
   myContext.stroke();

   myContext.beginPath();
   myContext.moveTo(1625, 400);
   myContext.lineTo(1625, 420);
   myContext.stroke();
   
   myContext.beginPath();
   myContext.moveTo(1800, 400);
   myContext.lineTo(1800, 420);
   myContext.stroke();

   //Teken letter blauwe n
   myContext.lineWidth = 20;
   myContext.strokeStyle = 'blue';
   myContext.beginPath();
   myContext.moveTo(2000, 400);
   myContext.lineTo(2000, 700);
   myContext.stroke();
      
   myContext.beginPath();
   myContext.moveTo(2000, 500);
   myContext.lineTo(2050, 450);
   myContext.lineTo(2150, 450);
   myContext.lineTo(2200, 500);
   myContext.lineTo(2200, 700);
   myContext.stroke();
}
