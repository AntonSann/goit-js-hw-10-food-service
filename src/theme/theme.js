import menuItems from '../data/menu.json';
import itemsTemplate from '../templates/menu.hbs';

const body = document.querySelector('body');
const checkboxThem = document.getElementById('theme-switch-toggle'); 

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  let currentTheme = localStorage.getItem('theme');
  if (JSON.parse(currentTheme) === Theme.DARK) {
    checkboxThem.checked = true;
    body.setAttribute('class', Theme.DARK);
  } else {
    body.setAttribute('class', Theme.LIGHT);
  }

  const changeThem = () => {
  if (checkboxThem.checked){
body.setAttribute('class', 'dark-theme');
localStorage.clear();
localStorage.setItem('theme', JSON.stringify(Theme.DARK));
} else {
  body.setAttribute('class', 'light-theme');
  localStorage.clear();
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}
};

const menuItem = itemsTemplate(menuItems);
const menu = document.querySelector('ul.js-menu');
menu.insertAdjacentHTML('beforeend', menuItem);

checkboxThem.addEventListener('change', changeThem);