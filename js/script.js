require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let timer = require('./parts/timer'),
        tabs = require('./parts/tabs'),
        modal = require('./parts/modal');


    timer();
    modal();
    tabs();


});