const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
function toggleMenu() {
  // mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeMenuOnResize () {
  if(window.innerWidth > 960) {
    // mobileMenu.style.display = "none";
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  }
}

window.addEventListener("resize", closeMenuOnResize)
