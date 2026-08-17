const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const tabItem = document.querySelectorAll('.tabs__btn-item'); 
const tabContent = document.querySelectorAll('.tabs__content-item');

const  open = (evt) => {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
})

/**
 *
 * Mobile Menu Btn
 *
 * */
const mobileBtn = document.getElementById('mobileBtnMenu');
const mobileBtnSubMenu = document.querySelectorAll('.menu .menu__list .menu__item span');

mobileBtn?.addEventListener('click', () => {
  const menu = document.getElementById('headerMenu')
  menu?.classList.toggle('__open')
  mobileBtn.classList.toggle('__close')
})

mobileBtnSubMenu?.forEach((el) => {
  el?.addEventListener('click', (e) => {
    e.preventDefault()
    const subMenu = el.parentElement.parentElement.querySelector('.sub-menu__list')
    subMenu?.classList.toggle('__open')
  })
})