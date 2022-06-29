import _ from 'lodash';
import './style.css';
import './main.scss';
import Logo from './assets/cat-logo-removebg-preview.png';

const homeLink = document.querySelector('#homeLink');
const logo = `<img src="${Logo}" alt="o" id="logo"></img>`;
homeLink.innerHTML += logo;
const items = document.querySelector('#items');

const art_url = "https://api.artic.edu/api/v1/artworks?page=10&limit=100";


const getAllScores = async () => {
    const res = await fetch(art_url);
    const result = await res.json();
    console.log(result)
};
getAllScores();

export const getAllScore = async () => {
    const res = await fetch(art_url);
    const result = await res.json();
    let scoreHTML = '';
    result.data.forEach((element) => {
      scoreHTML += 
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
    items.innerHTML = scoreHTML;
  };

  getAllScore();
