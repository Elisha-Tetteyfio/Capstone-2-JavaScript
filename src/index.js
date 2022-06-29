import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/cat-logo-removebg-preview.png';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;
const items = document.querySelector('#items');

const url = "https://api.artic.edu/api/v1/artworks?page=10&limit=100";


export const getArt = async () => {
    const res = await fetch(url);
    const result = await res.json();
    let artHTML = '';
    result.data.forEach((element) => {
      artHTML += 
      `<li>
        <img src="https://www.artic.edu/iiif/2/${element.image_id}/full/200,/0/default.jpg" alt="img1">
        <div> ${element.title} </div>
        <div>
            <i></i>
            <div>5 likes</div>
        </div>
        <button type="button">Comments</button>
    </li>`;
    });
    items.innerHTML = artHTML;
  };

  getArt();
