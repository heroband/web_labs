var variable = document.getElementById("MyCanvas");
var ctx = variable.getContext('2d');



ctx.strokeRect(15, 15, 266, 266);
ctx.strokeRect(20, 20, 256, 256);
ctx.lineWidth = 2;
ctx.strokeRect(60, 60, 50, 35);
ctx.strokeRect(180, 60, 50, 35);
ctx.strokeRect(60, 180, 50, 15);


ctx.beginPath();
ctx.moveTo(180, 180);
ctx.lineTo(180, 230);
ctx.lineTo(230, 230);
ctx.lineTo(230, 180);
ctx.lineTo(180, 180);
ctx.stroke();

ctx.lineWidth = 1;

for (i=50; i<275; i+=25){
	ctx.strokeRect(i, 35, 2, 2);
} // горизонтальные точки

for (i=175; i<275; i+=25){
	ctx.strokeRect(i, 135, 2, 2);
} // горизонтальные точки вправо

for (i=50; i<100; i+=25){
	ctx.strokeRect(i, 135, 2, 2);
} // горизонтальные точки влево

for (i=60; i<275; i+=25){
	ctx.strokeRect(150, i, 2, 2);
} // вертикальные точки


var gradient1 = ctx.createLinearGradient(10, 0, 70, 0);
gradient1.addColorStop(0, "blue");
gradient1.addColorStop(1, "yellow");

// pacman
ctx.beginPath();
ctx.arc(40, 37.5, 15, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(40, 37.5);
ctx.fillStyle = gradient1;
ctx.fill();
ctx.closePath();
ctx.stroke();



// ghost
var gradient2 = ctx.createLinearGradient(95, 135, 130, 135);
gradient2.addColorStop(0, "blue");
gradient2.addColorStop(1, "yellow");

var radius = 15;
var angle = Math.PI/180;
ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(112.5,135, radius, angle * 180, angle * 0, false);
ctx.lineTo(127.5, 150);
ctx.lineTo(123.75, 142);
ctx.lineTo(120, 150);
ctx.lineTo(116.25, 142);
ctx.lineTo(112.5, 150);
ctx.lineTo(108.75, 142);
ctx.lineTo(105, 150);
ctx.lineTo(101.25, 142);
ctx.lineTo(97.5, 150);
ctx.lineTo(97.5, 135);
ctx.fillStyle = gradient2;
ctx.fill();
ctx.closePath();
ctx.stroke();

// ghost eyes
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.arc(105, 135, 3, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.arc(120, 135, 3, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();


// label
ctx.fillStyle = "black";
ctx.font = "12px serif";
ctx.fillText("stop man", 90,115);