const menu = document.querySelector(".menu-section")
const closeHamburger = document.querySelector(".close")
const closeHamburgerEvent = (e) => {
    e.preventDefault()

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
}

closeHamburger.addEventListener("click", closeHamburgerEvent)

document.querySelector("#hamburger-menu").addEventListener("click", closeHamburgerEvent);