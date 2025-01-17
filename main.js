const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const closeProduceDetailIcon = document.querySelector(".product-detail-close");
const btnSwitch = document.querySelector("#switch");
const navbar = document.querySelector('nav');



btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

  if(document.body.classList.contains('dark')){
    navbar.classList.add('dark-nav');
    productDetailContainer.classList.add('dark');
  } else{
    navbar.classList.remove('dark-nav');
    productDetailContainer.classList.remove('dark');
  }
});

mail.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isShoppingCartClosed) {
    shoppingCart.classList.add("inactive");
  }
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isShoppingCartClosed) {
    shoppingCart.classList.add("inactive");
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
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

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
}

function openProductDetailAside() {
  const isShoppingCartClosed = shoppingCart.classList.contains("inactive");
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDekstopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isShoppingCartClosed) {
    shoppingCart.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  if (!isDekstopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  productDetailContainer.classList.remove("inactive");
}

closeProduceDetailIcon.addEventListener("click", closeProductDetails);

function closeProductDetails() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://pedegoelectricbikes.com/wp-content/uploads/2022/08/Avenue-ST-Carribean-Blue-Mags.jpg;%20?%3E",
  description: "High mountain bike",
});
productList.push({
  name: "Screen",
  price: 160,
  image:
    "https://www.devicesales.co.za/wp-content/uploads/2017/03/19-inch-lcd-screen-refurbished-1.jpg",
  description: "HD resolution screen perfecto to play games",
});
productList.push({
  name: "Pc",
  price: 340,
  image:
    "https://i.blogs.es/0e51a7/pc-2/450_1000.webp",
  description: "Nice PC gaming ready to play any brand new game",
});
productList.push({
  name: "Tv",
  price: 220,
  image:
    "https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-2.jpg",
  description: "HD television nice to watch movies",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
