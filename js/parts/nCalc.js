let nCalc = () => {

    //Объект куда собираем данные
    let data = {};
    // console.log(data);


    //Общие функции открытия/закрытия модальных окон
    function showModalView(popup) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalView(closeDialog, closeBtn) {
        let input = closeDialog.querySelectorAll('input'),
            checkBox = closeDialog.querySelectorAll('.checkbox');
        closeBtn.forEach((item) => {
            item.addEventListener('click', () => {
                closeDialog.style.display = 'none';
                document.body.style.overflow = '';
                data = {};
                input.forEach((item) => {
                    item.value = '';
                });
                checkBox.forEach((item) => {
                    item.checked = false;
                });

            });
        });
        closeDialog.addEventListener('click', (event) => {
            let target = event.target;
            if (target == closeDialog) {
                closeDialog.style.display = 'none';
                document.body.style.overflow = '';
                data = {};
                input.forEach((item) => {
                    item.value = '';
                });
                checkBox.forEach((item) => {
                    item.checked = false;
                });
            }
        });
    }

    function continueModalView(popupNew, popupOld) {
        popupNew.style.display = 'block';
        document.body.style.overflow = 'hidden';
        popupOld.style.display = 'none';
        let input = popupOld.querySelectorAll('input'),
            checkBox = popupOld.querySelectorAll('.checkbox');

        checkBox.forEach((item) => {
            item.checked = false;
        });

        input.forEach((item) => {
            item.value = '';
        });
    }

    // модальное окно рассчитать стоимость
    let btnCalc = document.querySelectorAll('.popup_calc_btn'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcClose = document.querySelectorAll('.popup_calc_close');


    btnCalc.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showModalView(popupCalc);
        });
    });

    closeModalView(popupCalc, popupCalcClose);

    //после нажатия в калькуляторе на Далее в калькуляторе
    let calcContinue = document.querySelectorAll('.popup_calc_button'),
        popupContinueProfile = document.querySelector('.popup_calc_profile'),
        popupContinueProfileClose = document.querySelectorAll('.popup_calc_profile_close');


    calcContinue.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            continueModalView(popupContinueProfile, popupCalc);

        });
    });


    closeModalView(popupContinueProfile, popupContinueProfileClose);

    // после нажатия кнопки далее в профайле
    let calcFormContinue = document.querySelectorAll('.popup_calc_profile_button'),
        popupFormContinueForm = document.querySelector('.popup_calc_end'),
        popupFormContinueClose = document.querySelectorAll('.popup_calc_end_close');

    calcFormContinue.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            continueModalView(popupFormContinueForm, popupContinueProfile);
            data.viewType = document.getElementById('view_type').value;
        });
    });

    closeModalView(popupFormContinueForm, popupFormContinueClose);


    /////////////выбор остекления.

    let smallIcons = document.querySelectorAll('.balcon_icons a img'),
        bigIcons = document.querySelectorAll('.balconIcon');

    function hide(a, tabBigHide, tabIconHide) {
        for (let i = a; i < tabBigHide.length; i++) {
            tabBigHide[i].classList.remove('show');
            tabIconHide[i].classList.remove('do_image_more');
            tabBigHide[i].classList.add('hide');
        }
    }

    hide(1, bigIcons, smallIcons);

    function show(b, tabBigShow, tabIconMore) {
        if (tabBigShow[b].classList.contains('hide')) {
            tabBigShow[b].classList.add('show');
            tabIconMore[b].classList.add('do_image_more');
            tabBigShow[b].style.marginTop = '15px';
            tabBigShow[b].style.marginBottom = '15px';
        }
    }

    function calcPreview() {
        for (let i = 0; i < smallIcons.length; i++) {
            smallIcons[i].addEventListener('click', e => {
                e.preventDefault();
                for (let a = 0; a < bigIcons.length; a++) {
                    if (i == a) {
                        hide(0, bigIcons, smallIcons);
                        show(i, bigIcons, smallIcons);
                        data.previewType = document.querySelector('.balcon_icons .do_image_more').alt;
                    }
                }
            });
        }
    }

    calcPreview();

    ////заполнение только цифр в размеры
    let width = document.getElementById('width'),
        height = document.getElementById('height');

    function validateNum(input) {
        return /\d$/.test(input.value);
    }

    function validateSize(input, dataName) {
        input.addEventListener('input', () => {
            if (!validateNum(input)) {
                input.value = input.value.slice(0, -1);
            }
            data[dataName] = input.value;
        });
    }

    validateSize(width, 'width');
    validateSize(height, 'height');

    ////// Чекбоксы Cold и Warm

    let checkBox = document.querySelectorAll('.popup_calc_profile .checkbox');

    checkBox.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            if (item.checked) {
                checkBox.forEach((item) => {
                    if (target != item) {
                        item.checked = false;
                    }
                });
            }
        });
    });

    ///
    let message = {
            success: "Спасибо за обращение, мы с вами скоро свяжемся",
            fail: "Что то пошло не так"
        },
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    //
    function httpRequest(form) {
        let input = form.getElementsByTagName('input');
        //form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        //собираем данные для отправки
        let formData = new FormData(form);
        //  obj = {};

        formData.forEach(function (value, key) {
            data[key] = value;
        });

        let json = JSON.stringify(data);

        //создаем функцию отправки в которой создаем промис
        function sendData(data) {
            return new Promise(function (resolve, reject) {

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', function () {
                    if (request.readyState === 4) {
                        if (request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                });
                request.send(data);
            });
            //end sendData
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        sendData(json)
            // .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.fail)
            .then(clearInput)
            .then(setTimeout(() => {
                document.querySelector('form .status').remove();
            }, 3000));
    }

   

    // Form Modal and main-form
    let callForm = document.querySelectorAll('.form');

    callForm.forEach((item) => {
        item.addEventListener('submit', () => {
            httpRequest(item);
        });
    });

    let inputContact = document.querySelectorAll('[name = user_phone]');
    //Функция для валидации номера телефона
    let validatePhone = (input) => {
        return /^\d{0,11}$/.test(input.value);
        // return /^\+?[()\d \-]*$/.test(input);
    };

    //Валидация телефона
    inputContact.forEach((item) => {
        item.addEventListener('input', () => {
            if (!validatePhone(item)) {
                // event.preventDefault();
                item.value = item.value.slice(0, -1);
            } else {
                item.value = item.value;
            }
        });
    });

};
module.exports = nCalc;