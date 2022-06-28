$ = document;
const nav = $.querySelector("nav"),
  $brgBtn = $.getElementById("burger-btn");

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 730) {
    $brgBtn.className = "open";
    nav.style.visibility = "visible";
    $.querySelector("body").style.backgroundColor = "initial";
  } else {
    nav.style.visibility = "hidden";
  }
});

$.addEventListener("click", (e) => {
  if (e.target.closest("button") === $brgBtn) {
    if ($brgBtn.className === "open") {
      nav.style.visibility = "visible";
      $.querySelector("body").style.backgroundColor = "rgba(0,0,0,.4)";
      $brgBtn.className = "close";
    } else if ($brgBtn.className === "close") {
      nav.style.visibility = "hidden";
      $.querySelector("body").style.backgroundColor = "initial";
      $brgBtn.className = "open";
    }
  }
  if (e.target.closest(".dropdown")) {
    const drCont = e.target
        .closest(".dropdown")
        .querySelector(".dropdown-content"),
      img = e.target.querySelector("img");
    if (img.src === `${location.origin}/images/icon-arrow-down.svg`) {
      img.src = "./images/icon-arrow-up.svg";
      drCont.style.display = "block";
    } else {
      img.src = "./images/icon-arrow-down.svg";
      drCont.style.display = "none";
    }
  }
});
