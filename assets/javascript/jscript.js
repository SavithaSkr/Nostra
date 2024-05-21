var sidenav = document.getElementById("sidenav");
var closebtn = document.querySelector(".sidenavclose");

function showNavbar() {
  sidenav.style.left = "0px";
}
function closeNavbar() {
  sidenav.style.left = "-60%";
  console.log("i got clicked");
}

/* closebtn.addEventListener("click", function () {
  sidenav.style.left = "-60%";
  console.log("i got clicked");
});
 */
