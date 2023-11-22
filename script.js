// DOM query selectors
const nav = document.querySelector(`.nav`);
const nav_links = document.querySelectorAll(`.nav-links`)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementing smooth scroll functionality

nav_links.forEach(function(link){
    link.addEventListener(`click`, function(event){
        console.log(event.target);
        console.log(event.target.classList.contains(`nav-links`));
        if (event.target.classList.contains(`nav-links`)){
            console.log(`link working`);
            event.preventDefault();
            const href = event.target.getAttribute(`href`);
            console.log(href);
            document.querySelector(href).scrollIntoView({behavior: `smooth`}) // Behviour needs to be spelled as behavior
}})});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu fade animation

//Function
function menu_fade(event) {
    if (event.target.classList.contains('nav-links')) {
        const link = event.target;
// console.log(link)
        const nav_siblings = link.closest('.nav').querySelectorAll('.nav-links');
// console.log(nav_siblings)
        if (event.type === 'mouseover') {
            nav_siblings.forEach(function (element) {
                if (element !== link) element.style.opacity = 0.5;
            });
        } else if (event.type === 'mouseout') {
            nav_siblings.forEach(function (element) {
                if (element !== link) element.style.opacity = 1;
            });
        }
    }
};

// Event handlers
nav.addEventListener('mouseover', menu_fade);
nav.addEventListener('mouseout', menu_fade);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hover Navbar - sticky nav