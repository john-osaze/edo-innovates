//Header Toggler for Mobile Menu
const toggleNavbar = (x) => document.querySelector(x);

toggleNavbar('.open').addEventListener('click', () => {
    toggleNavbar('.nav-list').classList.add('active');
});

toggleNavbar('.close').addEventListener('click', () => {
    toggleNavbar('.nav-list').classList.remove('active');
});

//Change Navbar State on Scroll
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY > 0;

    header.classList.toggle('nav-offset', scrollPosition);
});