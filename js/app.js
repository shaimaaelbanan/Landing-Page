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


// Set sections as active
// Add class 'active' to section when near top of viewport

const sections = document.querySelectorAll('section');

const uls = document.querySelector('#navbar__list');

const fragment = document.createDocumentFragment();


// build the nav
sections.forEach(section => {

    //Create Nav Element
    const nli = document.createElement('li');

    nli.textContent = section.getAttribute('data-nav');
    nli.classList.add('menu__link')
    nli.addEventListener("click", () => section.scrollIntoView());

    fragment.appendChild(nli);

    //Set Active status
    section.addEventListener('scroll', () => {
        const rect = section.getBoundingClientRect()

        if (rect.top <= screen.height / 2) {
            if (!section.classList.contains(ACTIVE_CLASS_NAME))
                section.classList.add(ACTIVE_CLASS_NAME)
        } else section.classList.remove(ACTIVE_CLASS_NAME)
    })

})

uls.appendChild(fragment);








