const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesArrayLength = mainSlide.querySelectorAll('div').length - 1; // считает длину массива картинок

let activeSlideIndex = 1;

sidebar.style.top = `-${slidesArrayLength * 100}vh`; // выводим соответствующий по цвету сайдбар

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') {
    changeSlide('up');
  } else if (e.key === 'ArrowDown') {
    changeSlide('down');
  }
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex += 1;
    if (activeSlideIndex === slidesArrayLength + 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesArrayLength;
    }
  }

  const height = container.clientHeight; // получаем высоту контейнера

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

// console.log(activeSlideIndex);
// console.log(changeSlide('down'));
