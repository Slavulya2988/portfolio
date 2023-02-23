import	   tabs     from './modules/tabs';
import		timer    from './modules/timer';
import		modal    from './modules/modal';
import		cards    from './modules/cards';
import		slider   from './modules/slider';
import		calc     from './modules/calc';
import		forms    from './modules/forms';
import		openModal from './modules/modal';

window.addEventListener('DOMContentLoaded',() => {

const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
timer('.timer', '2022-12-31 GMT+0200');
modal('[data-modal]','.modal', modalTimerId);
cards();
slider({
	container: '.offer__slider',
	nextArrow: '.offer__slider-next',
	prevArrow: '.offer__slider-prev',
	totalCounter: '#total',
	currentCounter: '#current',
	wrapper: '.offer__slider-wrapper',
	field: '.offer__slider-inner',
	slide: '.offer__slide'

});
calc();
forms('form', modalTimerId);

});
