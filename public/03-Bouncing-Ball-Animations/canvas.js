var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

var radius = 20;
var posX = 22;
var posY = 200;

var x_ctrl = 3;
var y_ctrl = 3;

var play = false;

function animate(){
  if(play){
    ctx1.clearRect(0, 0, 300, 400);
    ctx1.beginPath();
    ctx1.arc(posX, posY, radius, 0, 2*Math.PI);
    ctx1.fillStyle = 'rgb(44, 81, 143)';
    ctx1.fill();
    ctx1.stroke();

    if(posX <= 0 + radius || posX >= 300 - radius){
      x_ctrl = -x_ctrl;
    }

    if(posY <= 0 + radius || posY >= 400 - radius){
      y_ctrl = -y_ctrl;
    }

    posX += x_ctrl;
    posY += y_ctrl;
    requestAnimationFrame(animate);
  }
  console.log(x_ctrl);
}

function toggle(params){
  if(params == 'play'){
    console.log('play');
    play = true;
  }else{
    console.log('pause');
    play = false;
  }
  animate();
}
