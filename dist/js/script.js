// NavBar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const toTop = document.querySelector('#to-top');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Humburger
const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function() {
    humburger.classList.toggle('humburger-active');
    navMenu.classList.toggle('hidden');
});

// Click dimana saja
window.addEventListener('click', function(e) {
    if(e.target != humburger && e.target != navMenu) {
        humburger.classList.remove('humburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark mode toggle
