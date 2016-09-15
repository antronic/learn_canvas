// #canvas1
var canvas1 = document.getElementById('canvas1');
var context1 = canvas1.getContext('2d');

context1.fillStyle = "rgb(47, 167, 184)"; // fill color
context1.fill(); // fill it
context1.fillRect(0, 0, 500, 500); // create reactangle size 300x300
context1.moveTo(0, 0);
context1.lineTo(500, 500);
context1.stroke();
context1.moveTo(500, 0);
context1.lineTo(0, 500);
context1.stroke();

// #canvas2
var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext('2d');

context2.font = "20px Helvetica";
context2.textAlign="center";
context2.fillStyle = "#000";
context2.fillText("This is a text", 150, 150);

// #canvas3
var canvas3 = document.getElementById('canvas3');
var context3 = canvas3.getContext('2d');

var gd = context3.createRadialGradient(150, 150, 50, 150, 150 ,100);
gd.addColorStop(0, "rgb(95, 198, 200)");
gd.addColorStop(1, "rgb(62, 179, 182)");
context3.fillStyle = gd;
context3.fillRect(0, 0, 300, 300);

// #canvas4
var canvas4 = document.getElementById('canvas4');
var context4 = canvas4.getContext('2d');

var gd2 = context4.createRadialGradient(150, 150, 50, 250, 250 ,100);
gd2.addColorStop(0, "rgb(95, 198, 200)");
gd2.addColorStop(1, "rgb(62, 179, 182)");
context4.fillStyle = gd2;
context4.fillRect(0, 0, 300, 300);

// #canvas5
var canvas5 = document.getElementById('canvas5');
var ctx5 = canvas5.getContext('2d');

var img = new Image();

img.src = "/assets/ios_7_galaxy-wide.jpg";

var canvas5_width = canvas5.width;
var canvas5_height = canvas5.height;

var img_width = img.width;
var img_height = img.height;

var i_height = img_height / img_width * canvas5_height;

console.log(canvas5_width);

img.addEventListener('load', loadImage);

function loadImage(){
  ctx5.drawImage(img, 0, (canvas5_height - i_height) / 2, canvas5_width, i_height);
}
