require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let timer = require('./parts/timer'),
        tabsGlazing = require('./parts/tabsGlazing'),
        tabsDecor = require('./parts/tabsDecor'),
        modal = require('./parts/modal');


    timer();
    modal();
    tabsGlazing();
    tabsDecor();


});