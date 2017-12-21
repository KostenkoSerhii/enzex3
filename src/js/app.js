import sayHello from './lib/sayHello.js';
// import Parallax from 'parallax-js';
// import Parallax from 'parallax-js/dist/parallax.min.js';
import parallax from 'jquery-parallax.js';

import {isResp991, } from './components/global.js';
import  './clickEvents.js';
import  './dropdown.js';
import popupsInit from './components/popups.js';
import HowItWorkAnim from './components/howItWork-anim.js';


sayHello();

$(document).ready(function() {



  if(!isResp991()) {
    let parallaxElem  = $('.js-parallax');
    let imgUrl = parallaxElem.attr('data-parallax-img');
    parallaxElem.parallax({imageSrc: imgUrl});
  }


  popupsInit();
  HowItWorkAnim();


  //end ready
});
