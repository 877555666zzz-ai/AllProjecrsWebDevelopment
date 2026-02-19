const sw = document.getElementById("switch");
    let isLight = false;
    function applyTheme(){
      document.body.classList.toggle("light", isLight);
    }
    sw.addEventListener("click", () => {
      isLight = !isLight;
      applyTheme();
    });
    applyTheme();