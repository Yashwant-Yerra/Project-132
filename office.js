img1 = "" ;

function preload() {
    img1 = loadImage('office table.jpg') ;
}

function setup() {
    canvas = createCanvas(500,350) ;
    canvas.position(500, 300) ;

    detector = ml5.objectDetector('cocossd' , modelloaded) ;
    document.getElementById("status").innerHTML = "Status: Detecting objects" ;
}
function modelloaded() {
    console.log("cocossd is initialised.") ; 
    detector.detect(img1, gotResult) ;
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
    image(img1, 0, 0, 500, 350) ;
    fill('#ff0000') ;
    text('Laptop' , 30,45) ;
    textSize(18) ;
    noFill() ;
    stroke('#ff0000') ;
    rect(20,30, 300, 200) ;

    fill('#ff0000') ;
    text('Cup' , 330,80) ;
    textSize(18) ;
    noFill() ;
    stroke('#ff0000') ;
    rect(320,60, 100, 100) ;

    fill('#ff0000') ;
    text('Phone' , 330,190) ;
    textSize(18) ;
    noFill() ;
    stroke('#ff0000') ;
    rect(320,170, 100, 130) ;
}