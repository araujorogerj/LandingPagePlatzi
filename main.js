const mail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

mail.addEventListener('click', toggleMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
}

