
import cardMenu from './template/card-menu.hbs';

import cardsListItems from './menu.json';



import { replaceTheme} from './scripts/function.js';


import './styles.css';
 

const menuList = document.querySelector('.js-menu')
const menuItems = cardMenu(cardsListItems)
menuList.insertAdjacentHTML("beforeend", menuItems)

