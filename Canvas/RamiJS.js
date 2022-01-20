var can = document.querySelector("#canvas");

var ctx = can.getContext('2d');
ctx.beginPath();
ctx.fillStyle = "red";
ctx.lineWidth = 6;
ctx.strokeStyle = "#333";
ctx.beginPath();
ctx.moveTo(256, 111);
ctx.bezierCurveTo(358, 26, 446, 201, 273, 335);
ctx.moveTo(256, 111);
ctx.bezierCurveTo(137, 38, 99, 258, 273, 333);
ctx.stroke();
ctx.fill();
ctx.closePath();