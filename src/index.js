'use strict';

import selectClub from './modules/selectClub';
import formPopups from './modules/formPopups';
import mainSlider from './modules/mainSlider';
import maskPhone from './modules/maskPhone';
import isValid from './modules/isValid';
import sendForm from './modules/sendForm';



selectClub();
mainSlider();
maskPhone();
isValid();
sendForm('form1');
sendForm('form2');
sendForm('card_order');
sendForm('banner-form');
formPopups();