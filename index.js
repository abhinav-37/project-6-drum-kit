 // var audio = document.querySelector("audio"); //here i got the audio from the html document.
// function clicked() {
//   var location =
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
//    // audio.play();  //.play() is an inbuilt function to play the audio.




//detecting button press.
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var clicked = this.innerHTML;
    soundMake(clicked);
    animation(clicked);

  });
}

//detecting keyboard press.
document.addEventListener("keydown", function(event){

  soundMake(event.key);
  animation(event.key);

});

//funtion that plays the sound.
function soundMake(clicked){

  if(clicked =="k"){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  else if (clicked =="l"){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  else if (clicked =="w") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  else if(clicked =="a"){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  else if (clicked =="s") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  else if (clicked =="d") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  else if (clicked =="j") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }

}

function animation(clicked){
    document.querySelector("." + clicked).classList.add("pressed");
    setTimeout(function () {
      document.querySelector("." + clicked).classList.remove("pressed");

    }, 100);

}
