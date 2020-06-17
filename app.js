//get the burger in a variable
//variable holding dom element should start with $(Convention)
//use queruselector => dot in-front of classname is important
const $burger = document.querySelector(`.burger`);
//console.log($burger);
const $navLinksContainer = document.querySelector(`.nav-links-container`);
//console.log($navLinksContainer);
//select individual nav-links for animation
//querySelectorAll returns the node list

const $navLinks = document.querySelectorAll(`.nav-links-container li`);
$burger.onclick = () => {
    $navLinksContainer.classList.toggle(`nav-clicked`);
    $burger.classList.toggle(`burger-clicked`);
    $navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ``;
        }
        else {
            link.style.animation = `navLinksAnimation 0.5s ease forwards ${index / 4 + 0.5}s`;
        }
    });
}

