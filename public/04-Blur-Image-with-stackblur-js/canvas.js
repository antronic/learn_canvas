var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

var image = new Image();

// image.src = "/assets/ios_7_galaxy-wide.jpg";
image.src = "/assets/camp.jpg";

image.addEventListener('load', loadImage);

function loadImage(){
    var i_height = image.height / image.width * canvas1.height;
    var i_width = image.width / image.height * canvas1.width;
    var posX = (canvas1.width - i_width) / 2;

    ctx1.drawImage(image, 0, 0, canvas1.width, canvas1.height);
    StackBlur.canvasRGB(canvas1, 0, 0, canvas1.width, canvas1.height, 30);
    ctx1.drawImage(image, posX, 0, i_width, canvas1.height );
    writeText();
}

function writeText(){
    ctx1.font = '20px Helvetica';
    ctx1.fillStyle = '#FFF';
    ctx1.fillText("Hello", 100, 40);
}
