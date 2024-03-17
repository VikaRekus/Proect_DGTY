let menuItems = document.getElementById('menu').querySelectorAll('li');
let pages = document.querySelector('main').querySelectorAll('section');

menuItems.forEach((el, i) => {
  el.addEventListener('click', () => {
    pages.forEach((elem, j) => {
      if(j == i) {
        elem.classList.remove('hidden');
        menuItems[j].classList.add('active');
      }
      else {
        elem.classList.add('hidden');
        menuItems[j].classList.remove('active');
      }
    });
  })
})