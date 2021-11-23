img = "" ;

function preload() {
    img = loadImage('bedroom.jpg') ;
}

function setup() {
    canvas = createCanvas(600,350) ;
    canvas.position(500, 300) ;

    detector = ml5.objectDetector('cocossd' , modelloaded) ;
    document.getElementById("status").innerHTML = "Status: Detecting objects" ;
}
function modelloaded() {
    console.log("cocossd is initialised.") ; 
    detector.detect(img, gotResult) ;
}
function gotResult(error, results) {
    if(error) {
        console.log(error) ;
    }
    else {
        console.log(results) ;
    }
}
function draw() {
    image(img, 0, 0, 600, 350) ;
    fill('#ff0000') ;
    text('Bed' , 160,110) ;
    textSize(18) ;
    noFill() ;
    stroke('#ff0000') ;
    rect(150,90, 300, 160) ;

    fill('#ff0000') ;
    text('Pillow' , 220,160) ;
    textSize(18) ;
    noFill() ;
    stroke('#ff0000') ;
    rect(210,140, 200, 60) ;
}