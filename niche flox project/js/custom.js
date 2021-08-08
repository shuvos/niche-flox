const navbar = document.querySelector(".navbar");
const navButton = document.querySelector("#nav-search-btn");
const searchPage = document.querySelector(".search-page");
const searchPageButton = document.querySelector(".search-page-btn");
const searchInput = document.querySelector("#search-input")

document.addEventListener("scroll", () => {
    if(pageYOffset > 75){
        navbar.classList.add("nav-changed-height");
    }
    else {
        navbar.classList.remove("nav-changed-height")
    }
});

navButton.addEventListener("click", () => {
    searchPage.classList.remove("d-none");
    searchPage.classList.add("d-flex");
});

searchPageButton.addEventListener("click", () => {
    searchPage.classList.remove("d-flex");
    searchPage.classList.add("d-none");
})
