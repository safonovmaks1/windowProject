require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let timer = require('./parts/timer');


    timer();


});