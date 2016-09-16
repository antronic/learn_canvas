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
// protect();
// function protect(){
//     var cw = $("#canvas").width;
//     var ch = $("#canvas").height;
//     $("#protect").width = cw;
//     $("#protect").height = ch;
// }

$('img, canvas').bind('contextmenu', function(e) {
    return false;
});

function writeText(){
    ctx1.font = '20px Helvetica';
    ctx1.fillStyle = '#FFF';
    ctx1.fillText("Hello", 100, 40);
}

function download(link, href, filename){
    var a = $("<a>").attr("href", href).attr("download", filename).appendTo("body");
    a[0].click();
    a.remove();
}

$("#download").click(function(){
    var link = document.getElementById("canvas1").toDataURL('image/jpg');
    var href;
    var filename = "camp1.jpg";
    $.post('/decode_base64', {"photo" : link, "filename" : filename}, function(callback){
        // href = callback;
        // download(this, href, filename);
        console.log(callback)
    });
});
