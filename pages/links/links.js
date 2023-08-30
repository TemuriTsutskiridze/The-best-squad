const addButton = document.getElementById("add");

addButton.addEventListener("click", function () {
  document.querySelector(".main-container").style.display = "none";
  {
    document.querySelector(".container").style.display = "block";
    document.getElementById("save").style.opacity = "1";
  }
});

// console.log(document.querySelector(".mobile-version"));

addButton.addEventListener("click", function () {
  if (window.innerWidth >= 768) {
    document.querySelector(".mobile-version").style.marginTop = "260px";
    document.querySelector(".mobile-version").style.padding = "20px";
  }
});
