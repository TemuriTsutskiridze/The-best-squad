const addButton = document.getElementById("add");

addButton.addEventListener("click", function () {
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(".mobile-version").style.display = "none";

  {
    document.querySelector(".container").style.display = "flex";
    document.getElementById("save").style.opacity = "1";
    document.querySelector(".tablet-version").style.display = "block";
  }
});
