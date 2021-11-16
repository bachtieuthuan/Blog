//audio background
const audio = document.querySelector("#audio");
const audioBtn = document.querySelector(".audio-background");
var audioStatus = true;
audioBtn.addEventListener("click",function(){
  audioBtn.classList.toggle("audio-active");
  if(audioStatus){
    audio.play();
    audioStatus = false;
  }
  else{
    audio.pause();
    audioStatus = true;
  }
});