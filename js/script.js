require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let timer = require('./parts/timer'),
        ajax = require('./parts/ajax'),
        // form = require('./parts/form'),
        tabsGlazing = require('./parts/tabsGlazing'),
        tabsDecor = require('./parts/tabsDecor'),
        popupImg = require('./parts/popupImg'),
        calc = require('./parts/calc'),
        modal = require('./parts/modal');

    timer();
    ajax();
    // form();
    tabsGlazing();
    tabsDecor();
    popupImg();
    calc();
    modal();

});