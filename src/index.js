import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/cat-logo-removebg-preview.png';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o"></img>`;
homeLink.innerHTML += logo;