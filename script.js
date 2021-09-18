const menu = document.querySelector(".menu-section")
const closeHamburger = document.querySelector(".close")
const showMore = document.querySelector(".show-more")

const closeHamburgerEvent = (e) => {
    e.preventDefault()

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
}


showMore.addEventListener("click", (e) => {
    e.preventDefault()
    const speakersContainer = document.querySelector(".speakers .cards-container")
    if(!showMore.classList.contains("less")) {

      showMore.classList.add("less")
      speakersContainer.style.maxHeight = "unset"
      showMore.innerText = "Show Less"
      
    } else {
      showMore.classList.remove("less")
      speakersContainer.style = ""
      showMore.innerText = "Show More"
    } 
})
closeHamburger.addEventListener("click", closeHamburgerEvent)

document.querySelector("#hamburger-menu").addEventListener("click", closeHamburgerEvent);

//links 

const link = document.querySelectorAll('.link');

link.forEach(
  (link) => {
    link.addEventListener('click', toggleMenu);
  },
);
