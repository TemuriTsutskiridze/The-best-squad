const addButton = document.getElementById("add");
let container = document.querySelector(".container");
const main = document.querySelector(".main");
let list = document.querySelector(".list");
links = 1;

addButton.addEventListener("click", function () {
  document.querySelector(".main-container").style.display = "none";

  {
    // document.querySelector(".container").style.display = "block";
    document.getElementById("save").style.opacity = "1";
  }
  // if (window.innerWidth >= 768) {
  //   document.querySelector(".last-div").style.marginTop = "260px";
  //   document.querySelector(".last-div").style.padding = "20px";
  // }
  // if (window.innerWidth >= 1440) {
  // }

  const listContainer = document.createElement("li");
  listContainer.classList.add("container");
  list.append(listContainer);

  const linkRemoveTextDiv = document.createElement("div");
  linkRemoveTextDiv.classList.add("link-remove-text", "div");
  listContainer.append(linkRemoveTextDiv);

  const linkDivLeft = document.createElement("div");
  linkDivLeft.classList.add("small", "flex");
  linkRemoveTextDiv.append(linkDivLeft);

  const linkImage = document.createElement("img");
  linkImage.id = "drag-and-drop";
  linkImage.src = "../assets/links-assets/icon-drag-and-drop.svg";
  linkDivLeft.append(linkImage);

  const linkNumeration = document.createElement("span");
  linkNumeration.classList.add("link-one");
  linkNumeration.textContent = "Link #1";
  linkDivLeft.append(linkNumeration);

  const removeSpan = document.createElement("span");
  removeSpan.classList.add("remove");
  removeSpan.textContent = "Remove";
  linkRemoveTextDiv.append(removeSpan);

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputs-div", "div2");
  listContainer.append(inputDiv);

  const platformsSpan = document.createElement("span");
  platformsSpan.classList.add("Platform");
  platformsSpan.textContent = "Platform";
  inputDiv.append(platformsSpan);

  const githubSelect = document.createElement("select");
  githubSelect.id = "github";
  githubSelect.name = "github";
  inputDiv.append(githubSelect);

  const option = document.createElement("option");
  option.value = "github";
  option.textContent = "github";
  githubSelect.append(option);

  const inputLink = document.createElement("div");
  inputLink.classList.add("input-link");
  inputDiv.append(inputLink);

  const linkSpan = document.createElement("span");
  linkSpan.classList.add("link-span");
  linkSpan.textContent = "Link";
  inputLink.append(linkSpan);

  const inputFname = document.createElement("input");
  inputFname.id = "fname";
  inputFname.type = "text";
  inputFname.placeholder = "e.g.https://www.github.com/johnappleseed";
  inputLink.append(inputFname);
});

console.log(list);
