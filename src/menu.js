export const itemsIconMobile = document.querySelector('.navbar__hamb');
const items = document.querySelector('.items_nav');
export const itemsLinks = document.querySelectorAll('.items_nav__link');

const isActiveClassExisted = (element) => element.classList.contains('active');

const refreshIcon = () => {
  if (isActiveClassExisted(items)) {
    itemsIconMobile.setAttribute('src', 'images/hamburguer-close.png');
  } else {
    itemsIconMobile.setAttribute('src', 'images/hamburguer.png');
  }
};
export const openitems = () => {
  items.classList.toggle('active');
  refreshIcon();
};

export const closeitems = () => {
  items.classList.remove('active');
  refreshIcon();
};
