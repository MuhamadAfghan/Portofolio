document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const title = document.querySelector("#name-nav");
  const btnBack = document.querySelector(".btn-backToHome");

  if (window.scrollY > 80) {
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
