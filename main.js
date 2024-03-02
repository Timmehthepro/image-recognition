

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
})

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_pic(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_pic' src='"+data_uri+"' />"
    })
}

console.log("ml5 version", ml5.version )

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bBkhdYxNP/model.json",modelLoaded )

function modelLoaded(){
    console.log("Model is loaded !")
}
function identify(){
    img=document.getElementById("captured_pic")
    classifier.classify(img , gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error)
    
    }
    else{
        
        document.getElementById("nameObject").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2)*100 +" %"
    }
    
    
    
}
