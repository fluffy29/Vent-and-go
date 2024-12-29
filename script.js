document
  .getElementById("rantForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const envelope = document.querySelector(".floating-letter");
    if (envelope) {
      envelope.style.visibility = "visible";
      envelope.classList.add("spiral-animation");
    }

    const userVent = document.querySelector("textarea").value;
    sessionStorage.setItem("userVent", userVent);

    setTimeout(() => {
      window.location.href = "void.html";
    }, 3000);
  });

const music = document.getElementById("voidMusic");
if (music) {
  setTimeout(() => {
    const fadeAudio = setInterval(() => {
      if (music.volume > 0.1) {
        music.volume -= 0.1;
      } else {
        clearInterval(fadeAudio);
      }
    }, 200);
  }, 4000);
}

const starsContainer = document.querySelector(".stars");
if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    starsContainer.appendChild(star);
  }
}

const shootingStarsContainer = document.querySelector(".shooting-stars");
if (shootingStarsContainer) {
  let shootingStarCount = 0;
  setInterval(() => {
    if (shootingStarCount < 10) {
      const star = document.createElement("div");
      star.classList.add("shooting-star");
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      shootingStarsContainer.appendChild(star);
      shootingStarCount++;
      setTimeout(() => {
        star.remove();
        shootingStarCount--;
      }, 1500);
    }
  }, 2000);
}

const ventTextContainer = document.querySelector(".vent-text-container");
if (ventTextContainer) {
  const userVent =
    sessionStorage.getItem("userVent") || "Your vent is floating...";
  const ventElement = document.createElement("div");
  ventElement.textContent = userVent;
  ventElement.classList.add("vent-text");
  ventElement.style.top = Math.random() * 100 + "vh";
  ventElement.style.left = Math.random() * 100 + "vw";
  ventTextContainer.appendChild(ventElement);
}
