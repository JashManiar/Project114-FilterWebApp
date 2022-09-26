hairY=0;
hairX=0;
noseX=0;
noseY=0;
moustache_x=0;
moustache_y=0;
filters ="";

function preload(){
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    hair = loadImage("https://i.postimg.cc/gJNcPKsy/My-project-1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    canvas.position(550,250);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    if(filters == "moustache")
    {
        image(moustache,moustache_x,moustache_y,60,45);
    }
    if(filters == "lipstick")
    {
        image(lipstick,noseX,noseY,60,45);
    }
    if(filters == "hair")
    {
        image(hair,hairX,hairY,200,105);
    }
    
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        noseX =  results[0].pose.nose.x-30;
        moustache_x = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y+30;
        moustache_y = results[0].pose.nose.y;
        hairX = results[0].pose.nose.x-90;
        hairY = results[0].pose.nose.y-155;
    };
}

function moustache_function()
{
    filters = "moustache";
}

function lipstick_function()
{
    filters = "lipstick";
}

function hair_function()
{
    filters = "hair";
}