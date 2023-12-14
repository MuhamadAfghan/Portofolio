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
}
window.addEventListener("resize", function () {
  if (
    window.outerWidth - window.innerWidth > 100 ||
    window.outerHeight - window.innerHeight > 100
  ) {
    resetPage()
  }
});

// function resetPage() {
//   document.body.innerHTML = "ERROR_NOT_FOUND  <a href='https://bit.ly/portofolio-kangAL'><button style='color: black; padding: 10px 20px; font-size: 20px;'>kembali</button></a>";
// }

document.addEventListener("keydown", function (event) {
  if (
    (event.ctrlKey && event.key === "u") ||
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I")
  ) {
    resetPage();
  }
});

    function blockConsole(event) {
      if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J' || event.key === 'U')) {
        event.preventDefault();
      } else if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
      } else if (event.key === 'F12') {
        event.preventDefault();
      }
    }

    window.addEventListener('keydown', blockConsole);

    window.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
