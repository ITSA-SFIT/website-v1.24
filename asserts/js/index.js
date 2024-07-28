const d = new Date();
let year = d.getFullYear();
$("#year").text(year);

window.addEventListener("load", () => {
  const main = document.getElementById("main");
  const loader = document.getElementById("loading");
  main.classList.toggle("inactive");
  loader.classList.toggle("inactive");
  loader.remove();
});
