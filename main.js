song="";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
} 

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded()
{
    console.log("model was successfully loaded");
}

function gotPoses(results)
{
    if (results.length > 0 )
    {
        //console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("leftWristx = " + leftWristx );
        console.log("leftWristy = " + leftWristy );
        console.log("rightWristx = " + rightWristx );
        console.log("rightWristy = " + rightWristy );
    }
    
}