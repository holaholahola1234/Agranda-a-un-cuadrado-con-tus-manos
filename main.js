noseX=0
noseY=0
manoderecha=0
manoizquierda=0
distancia=0

function setup(){
   video=createCapture(VIDEO)
   video.size(550,500)
   canvas=createCanvas(400,400)
   canvas.position(560,150)
   poseNet=ml5.poseNet(video,modelloaded)
   poseNet.on("pose",gotPoses)
}

function draw(){
   fill("green")
   stroke("##ffffff")
   background("#ff8000")
   document.getElementById("square_side").innerHTML="el ancho y el alto del cuadrado sera "+distancia
   square(noseX,noseY,distancia)
}

function modelloaded(){
   console.log("el modelo ya esta cargado")
}
function gotPoses(results){
   if(results.length>0){
      console.log(results)
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
console.log("narizX"+noseX+"narizY"+noseY )

manoizquierda=results[0].pose.leftWrist.x
manoderecha=results[0].pose.rightWrist.x
distancia=manoizquierda-manoderecha
   }
}