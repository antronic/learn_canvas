var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

var image = new Image();
document.getElementById('bg').naturalWidth = "300px";
image.src = "/assets/ios_7_galaxy-wide.jpg";

image.addEventListener('load', loadImage);

function loadImage(){
    ctx1.drawImage(image, 0, 0, 300, 300);
    StackBlur.canvasRGB(canvas1, 0, 0, 300, 300, 100);
    writeText();
}

function writeText(){
    ctx1.font = '20px Helvetica';
    ctx1.fillStyle = '#FFF';
    ctx1.fillText("Hello", 100, 40);
}
