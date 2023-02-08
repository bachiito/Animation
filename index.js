const animationSection = document.querySelector("#animation-section");
const animationGifs = document.querySelectorAll(".animation-gif");
const toggleAnimationBtn = document.querySelector("#animation-toggle");

animationGifs.forEach(gif => (gif.src = gif.dataset.gifAnimation));

toggleAnimationBtn.addEventListener("click", () => {
  if (animationSection.style.animationPlayState === "paused") {
    animationGifs.forEach(gif => (gif.src = gif.dataset.gifAnimation));
    animationSection.style = "animation-play-state: running;";
    toggleAnimationBtn.textContent = "stop";
    return;
  }

  animationGifs.forEach(gif => (gif.src = gif.dataset.stillImg));
  animationSection.style = "animation-play-state: paused;";
  toggleAnimationBtn.textContent = "play";
});

toggleAnimationBtn.addEventListener("mouseover", () => {
  const widthBtn = toggleAnimationBtn.offsetWidth;
  toggleAnimationBtn.style = `
    color: var(--clr-transparent);
    box-shadow: inset ${widthBtn}px 0 0 0 var(--clr-bg-btn-hover);
    border: none;
    `;
});

toggleAnimationBtn.addEventListener("mouseout", () => {
  toggleAnimationBtn.style = "";
});
