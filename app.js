// Resonsive menu

const primaryNav = document.getElementById('primary-navigation');
const navBut = document.querySelector('.mobile-nav-toggle');

navBut.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navBut.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute("data-visible", false);
        navBut.setAttribute('aria-expanded', false)
    }
    // console.log(navBut.getAttribute('aria-expanded'));
})

// Easy way

// navBut.addEventListener('click', () => {
//     primaryNav.classList.toggle('active')
// })
