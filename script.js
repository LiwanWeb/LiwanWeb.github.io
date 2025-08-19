window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    const logo = document.getElementById("logo");
    const boxes = document.getElementById("boxes");

    // بعد 2.5 ثانية: اخفي شاشة البداية، واظهر الشعار والصناديق مع بعض
    setTimeout(() => {
      splash.classList.add("hide");
      logo.classList.add("show");
      boxes.classList.add("show");
    }, 2500);
  });