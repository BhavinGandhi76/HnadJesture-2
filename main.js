Webcam.set({
    height:350, width:350 
});

Webcam.attach("camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src='"+ data_uri +"'/>";

    });

    console.log("ml5 version", ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3VkD_eVJM/model.json", modelloaded);
    function modelloaded(){
        console.log("model loadedd");
    }

    P1 = "";

    function speak(){
        var s = window.speechSynthesis;
        speak1 = "The First Prediction is "+ P1;
        var utterthis = new SpeechSynthesisUtterance(speak1);
        s.speak(utterthis);
    }
}