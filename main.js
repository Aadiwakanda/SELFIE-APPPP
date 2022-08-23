var speechrecognition = window.webkitSpeechRecognition
var recognition = new speechrecognition()

function start() {
   document.getElementById("textbox").innerHTML = ""
   recognition.start()
}
recognition.onresult = function (event) {
   console.log(event)
   var display = event.results[0][0].transcript
   console.log(display)
   document.getElementById("textbox").innerHTML = display
   if (display == "Take my selfie.") {
      console.log("taking selfie")
      speak()
   }
}

function speak() {
   var synthesis = window.speechSynthesis
   Webcam.attach(cam)
   speakdata = "taking a selfie in 4 seconds"
   var utterthis = new SpeechSynthesisUtterance(speakdata)
      synthesis.speak(utterthis)
   setTimeout(function () {
      img = "selfie1"
      speakdata = "taking a selfie in 4 seconds"
      var utterthis = new SpeechSynthesisUtterance(speakdata)
      synthesis.speak(utterthis)
      take_selfie()
      
   }, 4000)
   setTimeout(function () {
      img = "selfie2"
      speakdata = "taking a selfie in 4 seconds"
      var utterthis = new SpeechSynthesisUtterance(speakdata)
      synthesis.speak(utterthis)
      take_selfie()
     
   }, 8000)

   setTimeout(function () {
      img = "selfie3"
      speakdata = "taking a selfie in 4 seconds"
      var utterthis = new SpeechSynthesisUtterance(speakdata)
      synthesis.speak(utterthis)
      take_selfie()
      
   }, 12000)

   setTimeout(function () {
      img = "selfie4"
      
      take_selfie()
      
   }, 16000)
}

Webcam.set({
   height: 250,
   width: 320,
   image_format: "png",
   png_quality: 90
})

cam = document.getElementById("camera")

function take_selfie() {
   Webcam.snap(function (data_uri) {
      if (img == "selfie1") {
         document.getElementById("result1").innerHTML = "<img src='" + data_uri + "' id='selfietaken1'>"
      }
      if (img == "selfie2") {
         document.getElementById("result2").innerHTML = "<img src='" + data_uri + "' id='selfietaken2'>"
      }
      if (img == "selfie3") {
         document.getElementById("result3").innerHTML = "<img src='" + data_uri + "' id='selfietaken3'>"
      }
      if (img == "selfie4") {
         document.getElementById("result4").innerHTML = "<img src='" + data_uri + "' id='selfietaken4'>"
      }
   })
}