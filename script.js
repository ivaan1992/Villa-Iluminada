const menu = document.querySelector(".menu-section")

document.querySelector("#hamburger-menu").addEventListener("click", e => {
  e.preventDefault()

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } else {
    menu.classList.add("open");
  }
});
