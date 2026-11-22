const snow = document.querySelector(".home-snow");
const snowToggle = document.querySelector(".snow-toggle");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const flakeCount = 18;

for (let index = 0; index < flakeCount; index += 1) {
  const horizontalPosition = 2 + (index / (flakeCount - 1)) * 91;
  const size = 20 + (index % 3) * 4;
  const fallTime = 16 + (index % 6) * 2;
  const restPosition = 5 + ((index * 37) % 90);
  const elapsedTime = (index * 7) % 19;

  const flake = document.createElement("span");
  flake.textContent = "❄";
  flake.style.left = `${horizontalPosition}%`;
  flake.style.setProperty("--flake-size", `${size}px`);
  flake.style.setProperty("--fall-time", `${fallTime}s`);
  flake.style.setProperty("--flake-rest-position", `${restPosition}%`);
  flake.style.animationDelay = `-${elapsedTime}s`;
  snow.append(flake);
}

function setSnow(enabled) {
  snow.hidden = !enabled;
  snowToggle.textContent = enabled ? "Turn snow off" : "Turn snow on";
}

setSnow(!reducedMotion.matches);
snowToggle.hidden = false;
snowToggle.addEventListener("click", () => setSnow(snow.hidden));
reducedMotion.addEventListener("change", (event) => setSnow(!event.matches));
