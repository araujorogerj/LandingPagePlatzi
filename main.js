const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");

mail.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");

  if (!isShoppingCartClosed) {
    shoppingCart.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");

  if (!isShoppingCartClosed) {
    shoppingCart.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

cartIcon.addEventListener("click", toggleShoppingCart);

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDekstopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isDekstopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  shoppingCart.classList.toggle("inactive");
}
