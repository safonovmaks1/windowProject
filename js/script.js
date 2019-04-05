require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let timer = require('./parts/timer'),
        ajax = require('./parts/ajax'),
        tabsGlazing = require('./parts/tabsGlazing'),
        tabsDecor = require('./parts/tabsDecor'),
        popupImg = require('./parts/popupImg'),
        nCalc = require('./parts/nCalc'),
        modal = require('./parts/modal');

    timer();
    ajax();
    tabsGlazing();
    tabsDecor();
    popupImg();
    nCalc();
    modal();

});