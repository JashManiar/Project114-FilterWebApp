function preload(){
}

function setup(){
    canvas = createCanvas(200,200);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',moustachefilter);
    poseNet.on('pose',lipstickfilter);
    poseNet.on('pose',maskfilter);
    poseNet.on('pose',hairstylefilter);   
    
}

function draw()
{
    image(video,0,0,300,300);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function moustachefilter(results){
    if(results.length > 0){
        console.log(results);
        console.log("moustache x: "+results[0].pose.nose.x);
        console.log("moustache y: "+results[0].pose.nose.y);
        
    };
}

function lipstickfilter(results){
    if(results.length > 0){
        console.log(results);
        console.log("lipstick x: "+results[0].pose.nose.x);
        console.log("lipstick y: "+results[0].pose.nose.y);
    };
}

function maskfilter(results){
    if(results.length > 0){
        console.log(results);
        console.log("mask x: "+results[0].pose.nose.x);
        console.log("mask y: "+results[0].pose.nose.y);
        
    };
}

function hairstylefilter(results){
    if(results.length > 0){
        console.log(results);
        console.log("hairstyle x: "+results[0].pose.rightEye.x);
        console.log("hairstyle y: "+results[0].pose.rightEye.y);
    };
}