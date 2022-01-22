 noseX= ""
 noseY= ""
function preload(){

}
function setup(){
  canvas= createCanvas(600, 600)
  canvas.center()
  video= createCapture(VIDEO)
  video.hide()
  posenet= ml5.poseNet(video, Model_Loaded)
  posenet.on("pose", gotPoses)
}
function gotPoses(result){
  if(result.length>0){ 
    console.log(result)
    noseX= result[0].pose.nose.x
    noseY= result[0].pose.nose.y
    console.log(noseX)
    console.log(noseY)
  }
}
function Model_Loaded(){

    console.log("Model Loaded Successfully!")
  
}
function draw(){
    image(video, 00, 00, 600, 600)
    fill("red")
    stroke("red")
    circle(noseX, noseY, 40);
}
function SNAPSHOT(){
    save("unnamed.png")
}