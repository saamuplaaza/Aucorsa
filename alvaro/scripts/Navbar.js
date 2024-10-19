
// NAVBAR MOBILE

const navbarMobile = document.querySelector('.navbar-mobile');
const navbarMenu = document.querySelector('.navbar-menu');

navbarMobile.addEventListener('click', () => {

  if (navbarMenu.classList.contains('active')) {
    navbarMenu.classList.remove('active');
    return;
  }
  navbarMenu.classList.add('active');

});

// NAVBAR MENU MOBILE

const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navbarMenu.classList.remove('active');
  }
});