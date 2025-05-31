const songButton = document.querySelector(".button");
const songAudio = document.getElementById("song");
const flame = document.querySelector(".flame");
const wax = document.querySelector(".wax");
const smoke = document.querySelector(".smoke");
const volumeSlider = document.getElementById("volume-slider");

function updateWaxCursor() {
  if (flame.classList.contains("extinguished")) {
    wax.classList.add("interactive");
  } else {
    wax.classList.remove("interactive");
  }
}

wax.addEventListener("click", () => {
  if (flame.classList.contains("extinguished")) {
    flame.classList.remove("extinguished");
    flame.style.display = "block";
    updateWaxCursor();
  }
});

flame.addEventListener("click", () => {
  flame.classList.add("extinguished");
  flame.style.display = "none";

  // Trigger smoke
  smoke.style.animation = "none";
  smoke.offsetHeight; // reflow
  smoke.style.animation = "smokeRise 2s ease-out forwards";
  updateWaxCursor();
});

updateWaxCursor();

songButton.addEventListener("click", () => {
  const span = songButton.querySelector("span");

  if (songAudio.paused) {
    songAudio.play();
    span.textContent = "Pause Song";
  } else {
    songAudio.pause();
    span.textContent = "Play Song";
  }
});

volumeSlider.addEventListener("input", () => {
  songAudio.volume = volumeSlider.value / 100;
});