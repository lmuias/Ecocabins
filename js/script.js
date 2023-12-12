const swiper = new Swiper('.slider-materials', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
}
