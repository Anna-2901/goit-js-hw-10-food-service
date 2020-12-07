import listTemplate from '../template/list.hbs';
import menu from '../menu.json';

const markup = listTemplate(menu);
console.log(markup);

const foodListRef = document.querySelector('.js-menu');

foodListRef.insertAdjacentHTML('afterbegin', markup);