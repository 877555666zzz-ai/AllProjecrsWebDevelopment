    const themeBtn = document.getElementById("themeBtn");
    const themeText = document.getElementById("themeText");
    const themeImg  = document.getElementById("themeImg");
    let isLight = false;
    function applyTheme(){
      document.body.classList.toggle("light", isLight);
      if (isLight) {
        themeText.textContent = "DARK";
        themeImg.src = "icons/icon-moon.png";
      } else {
        themeText.textContent = "LIGHT";
        themeImg.src = "icons/icon-sun.png";
      }
    }

    themeBtn.addEventListener("click", () => {
      isLight = !isLight;
      applyTheme();
    });