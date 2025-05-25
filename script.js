window.onload = function () {
  const catNoise = document.getElementById("cat-noise");
  const audioControl = document.getElementById("audio-control")
  
  audioControl.addEventListener("click", function (event) {
    if (catNoise.paused) {
      catNoise.play()
      audioControl.textContent = "PAWS AUDIO"
    }
    else {
      catNoise.pause()
      audioControl.textContent = "PURR ENGINE GO"
    }
  });
};
