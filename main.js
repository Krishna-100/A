var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function Start()
{
    document.getElementById("text_box").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie-----")
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    Webcam.attach(camera);
    synth.speak(utterThis);
 setTimeout(function()
 {
     take_selfie();
     save();
 }, 5000 );
}

camera = document.getElementById("camera")
Webcam.set(
    {
        width: 360,
        height: 250,
        image_format : 'jpeg',
        jpeg_quality:90
    }  
);

function take_selfie()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="selfie_image" />'
});
}

function save()
{
    link = document.getElementById("link");
   image = document.getElementById("selfie_image").src;
   link.href = image;
   link.click();
}

