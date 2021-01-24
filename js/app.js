/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const uls = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
const scrollUp = document.querySelector('#scrollUp');

const ACTIVE_CLASS_NAME = 'active'

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Set sections as active

// build the nav
sections.forEach(section => {
    //Create Nav Element
    const nli = document.createElement('li');

    nli.textContent = section.getAttribute('data-nav');
    nli.classList.add('menu__link')
    nli.addEventListener("click", () => section.scrollIntoView());

    fragment.appendChild(nli);
})

// document.querySelectorAll('.menu__link')[0].classList.add(ACTIVE_CLASS_NAME)
uls.appendChild(fragment);

const active = (section, link) => {
    if (!section.classList.contains(ACTIVE_CLASS_NAME)) section.classList.add(ACTIVE_CLASS_NAME)
    if (!link.classList.contains(ACTIVE_CLASS_NAME)) link.classList.add(ACTIVE_CLASS_NAME)
}
const inactive = (section, link) => {
    if (section.classList.contains(ACTIVE_CLASS_NAME)) section.classList.remove(ACTIVE_CLASS_NAME)
    if (link.classList.contains(ACTIVE_CLASS_NAME)) link.classList.remove(ACTIVE_CLASS_NAME)
}

window.onscroll = () => {
    scrollUp.style.display = (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) ? "block" : "none";

    //Set Active status
    sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        let link

        document.querySelectorAll('.menu__link').forEach(item => {
            if (item.textContent == section.getAttribute('data-nav')) link = item
        })

        if (rect.top <= screen.height / 2) active(section, link)
        else inactive(section, link)

        if (rect.bottom <= screen.height / 2) inactive(section, link)
    })
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/








