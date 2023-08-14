function setup(){
    canvas = createCanvas(1333,413)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');  
}
function reginaldo(){
    background("white")
}
function draw(){
strokeWeight(10)
stroke(0.1)
if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
}
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,Results){
    if (error){
        console.log (error)
    }
    var Result = Results[0].label
    document.getElementById("label").innerHTML = "palavra que é usada para se referir a alguem ou algo:" + Result.replace('_', ' ');
    document.getElementById("confidence").innerHTML = "meow:" + Math.round(Results[0].confidence * 100) + '%'
    utterThis = new SpeechSynthesisUtterance(Result.replace('_', ' '));
    synth.speak(utterThis);
}