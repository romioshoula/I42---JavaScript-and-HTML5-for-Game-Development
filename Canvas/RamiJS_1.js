document.querySelector("#canvas");
//var canvas = document.getElementById('caanvas')
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(300, 300, 100, 0.25 * Math.PI, 1.25 * Math.PI, false);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(300, 300, 100, 0.75 * Math.PI, 1.75 * Math.PI, false);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();