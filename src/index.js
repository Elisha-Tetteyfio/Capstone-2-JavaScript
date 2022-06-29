import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/cat-logo-removebg-preview.png';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;


const items = document.querySelector('#items');
let item1 = `
    <li>
        <img src="#" alt="img1">
        <div> Name 1 </div>
        <div>
            <i></i>
            <div>5 likes</div>
        </div>
        <button type="button">Comments</button>
    </li>`