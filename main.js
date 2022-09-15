function preload(){    
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
video.hide()
}
function draw(){
    image(video,0,0,640,480);
    

circle(30, 30, 100);


circle(600, 450, 100);

circle(50, 450, 100);
circle(600, 50, 100);

}
function take_snapshot(){
    save('My_photo');
}