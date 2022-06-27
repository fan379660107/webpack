import './banner.js'
import './tabs.js'


import $ from 'jquery';
$('#swiper').css('background', 'red')

import './styles/index.css'
import './styles/index.less';

import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);