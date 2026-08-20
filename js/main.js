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

// Ilya B edits start
Fancybox.bind("[data-fancybox]", {
  closeButton: false,
  closeExisting: true, // Автоматически закроет старые окна при открытии нового
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask({
  mask: '+7 (999) 999-99-99',
  onBeforeWrite: function (event, buffer, caretPos, opts) {
    // console.log(caretPos);
    // Проверяем:
    // 1. Позиция каретки (caretPos) равна 5 (вторая цифра в "99")
    // 2. Нажата клавиша "8"
    if (caretPos === 5 && event.key === '8') {
      event.preventDefault(); // Запрещаем ввод     
      console.log("Ввод 8 в этой позиции запрещен!");
      return {
        refreshFromBuffer: true,
        buffer: [],
        caret: 4
      };
    }
  },
  onBeforePaste: function (pastedValue, opts) {
    // Удаляем всё, кроме цифр
    var processedValue = pastedValue.replace(/\D/g, "");

    // Если первая цифра 7 или 8 и в строке 11 цифр, убираем первую
    if (processedValue.length === 11 && (processedValue[0] === '7' || processedValue[0] === '8')) {
      return processedValue.substring(1);
    }

    return pastedValue;
  }

});

im.mask(inputs);

const brandsLink = document.querySelectorAll('.brands__link');

brandsLink.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    // Находим родительский контейнер
    const parent = this.closest('.brands');
    if (!parent) return;

    // Находим список и span с текстом внутри этого родителя
    const tagsList = parent.querySelector('.brands__wrapper');
    const btnSpan = this.querySelector('span');

    // Переключаем класс .active у списка
    tagsList.classList.toggle('active');

    // Меняем текст в зависимости от наличия класса
    if (tagsList.classList.contains('active')) {
      button.classList.add('active');
      button.textContent = 'Свернуть';
    } else {
      button.classList.remove('active');
      button.textContent = 'Смотреть все';
    }
  });
});
// Ilya B edits end


const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

const open = (evt) => {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

tabItem.forEach(function (element) {
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