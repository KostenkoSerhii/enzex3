import {isResp1199} from './global.js';
import {TimelineMax} from 'gsap';
export default function HowItWorkAnim() {
  if(!$('.js-scheme')[0] || isResp1199()) return;

  let animObj = {
      creareAcc : $('.js-scheme-create-acc'),
      deposit : $('.js-scheme-deposit'),
      profit : $('.js-scheme-profit'),
      share : $('.js-scheme-share'),
      referall : $('.js-scheme-referall'),
      graph : $('.js-scheme-graph')
    },
    tl = new TimelineMax({delay: 1}),
    fromOptions = {y: 50, opacity: 0},
    fromArrowOptions = {y: 0, opacity: 0},
    toOptions = {y: 0, opacity: 1},
    time = 0.25,
    timeDelay = '+=0',
    arrowtime = 0.1,
    arrowDelay = '+=0';
  // 	schemeWrapper = $(".js-scheme-wrapper"),
  // 	body = $("body"),
  // 	scroll,
  // 	yesScrolled = schemeWrapper.offset().top;
  // console.log(yesScrolled);
  // 	$(document).scroll(function(){
  // 		scroll = body.scrollTop();
		

  // 		if(scroll > yesScrolled){
  // 			tl.play();
  // 			console.log(1);
  // 		}
  // 	});


  tl
    .fromTo(animObj.creareAcc, time, fromOptions, toOptions , timeDelay)
    .fromTo(animObj.creareAcc.find('.js-scheme-arrow'), time, fromArrowOptions, toOptions , arrowDelay)
    .fromTo(animObj.deposit, time, fromOptions, toOptions , timeDelay)
    .fromTo(animObj.deposit.find('.js-scheme-arrow'), time, fromArrowOptions, toOptions , arrowDelay)
    .fromTo(animObj.profit, time, fromOptions, toOptions , timeDelay)
    .fromTo(animObj.profit.find('.js-scheme-arrow'), time, fromArrowOptions, toOptions , arrowDelay)
    .fromTo(animObj.share, time, fromOptions, toOptions , timeDelay)
    .fromTo(animObj.share.find('.js-scheme-arrow'), time, fromArrowOptions, toOptions , arrowDelay)
    .fromTo(animObj.referall, time, fromOptions, toOptions , timeDelay)
    .fromTo(animObj.referall.find('.js-scheme-arrow'), time, fromArrowOptions, toOptions , arrowDelay)
    .fromTo(animObj.graph, time, fromOptions, toOptions , timeDelay)
    .fromTo(animObj.graph.find('.js-scheme-arrow'), time, fromOptions, toOptions , arrowDelay);



  //end
};
