//Selecting variables for manipulating the DOM to hide and open menu
const menu = document.querySelector('.m-menu');
const menuItems = document.querySelector('.m-menu-items');
const closeMenuBtn = document.querySelector('.close-menu');
const footerMenu = document.querySelector('.m-footer-menu');
const menuLinks = document.querySelectorAll('.menu-link');

//Loading event listeners
loadEventListeners();

// Opening the menu by making it positioned on page
function openMenu() {
  menuItems.className = 'm-menu-items__active';
}

// Closing menu by making its position outside of page
function closeMenu() {
  menuItems.className = 'm-menu-items';
}

// Function for creating event listeners in one place
function loadEventListeners() {
  menu.addEventListener('click', openMenu);
  footerMenu.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', closeMenu);
  }
}
