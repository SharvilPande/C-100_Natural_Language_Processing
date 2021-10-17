var SpeechRecognition = window.webkitSpeechRecognition;  

var recognition = new SpeechRecognition();  

function start() { 
    
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start(); 

} 

recognition.onresult = function(event) { 
    
    console.log(event); 

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);

    if (Content == "selfie time") {

        console.log("taking selfie ---");
        speak();

    }

    setTimeout(function() {
        snapshot();
        save();
    }, 5000);
} 

function speak() {

    var synth = window.speechSynthesis;
    
    speech_data = "Taking your selfie in 5 seconds";

    var UtterThis = new SpeechSynthesisUtterance(speech_data);

    synth.speak(UtterThis);

    Webcam.attach(camera);
}

camera = document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 100
});

function snapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id= 'selfie_image' src = '" + data_uri + "'>"
    }); 
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}




