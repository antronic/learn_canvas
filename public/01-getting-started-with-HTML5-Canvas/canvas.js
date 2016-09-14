var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');

var posX = 50;
var initialX = 50;
var endX = 200;

function drawCirlcle(){
  context.clearRect(0, 0, 300, 300);
  context.beginPath();
  context.arc(posX,50,40,0,2*Math.PI);
  context.fillStyle = "rgb(190, 72, 96)";
  context.fill();
  context.stroke();

  context.beginPath();
  context.arc(posX,posX,40,0,2*Math.PI);
  context.fillStyle = "rgb(25, 240, 195)";
  context.fill();
  context.stroke();

  if(posX < endX){
    posX = posX + 1;
  }
  requestAnimationFrame(drawCirlcle);
}

drawCirlcle();
