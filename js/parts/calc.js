let calc = () => {

    let popupCalc = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end');

        document.body.addEventListener('click', e => {
            // e.preventDefault();
            let target = e.target;
            if (target.classList.contains('glazing_price_btn')) {
                popupCalc.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
            }
            if (target.classList.contains('popup_calc_button')) {
                popupCalcProfile.style.display = 'block';
                popupCalc.style.display = 'none';
                document.body.style.overflow = 'hidden';
              
            }
            if (target.classList.contains('popup_calc_profile_button')) {
                popupCalcEnd.style.display = 'block';
                popupCalcProfile.style.display = 'none';
                document.body.style.overflow = 'hidden';
               
            }
        });

        document.body.addEventListener('click', e => {
            let target = e.target;
            if (target.classList.contains('popup_calc_close') || target.tagName == 'STRONG' || target.classList.contains('popup_calc_profile_close') || target.classList.contains('popup_calc_end_close')) {

                popupCalc.style.display = 'none';
                popupCalcProfile.style.display = 'none';
                popupCalcEnd.style.display = 'none';
                document.body.style.overflow = '';

                obj = {
                    widthValue: 0,
                    heightValue: 0,
                    typeWin: 'tree',
                    profile: '',
                    name: '',
                    phone: 0
                };
                widthCalc.value = '';
                heightCalc.value = '';
                checkboxCold.checked = false;
                checkboxWarm.checked = false;
                inputName.value = '';
                inputPhone.value = '';
                statusMessage.innerHTML = '';

                showTabContent(0);
            }

        });

    let info = document.querySelector('.balcon_icons'),
        tabContent = document.querySelectorAll('.balconIcon');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
    };

        info.addEventListener('click', e => {
            e.preventDefault();
        let target = e.target;
            if (target.classList.contains('type1_img')) {
                showTabContent(0);
            }
            if (target.classList.contains('type2_img')) {
                showTabContent(1);
            }
            if (target.classList.contains('type3_img')) {
                showTabContent(2);
            }
            if (target.classList.contains('type4_img')) {
                showTabContent(3);
            }
        });


    let widthCalc = document.querySelector('#width'),
        heightCalc = document.querySelector('#height'),

        choiceType = document.querySelector('#view_type'),

        checkboxCold = document.getElementsByClassName('checkbox')[0],
        checkboxWarm = document.getElementsByClassName('checkbox')[1],

        formCalc = document.querySelector('.form'),

        inputName = formCalc.getElementsByClassName('form_input')[0],
        inputPhone = formCalc.getElementsByClassName('form_input')[1],

        obj = {
            widthValue: 0,
            heightValue: 0,
            type: 'tree',
            profile: '',
            name: '',
            phone: 0
        };

        widthCalc.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
        heightCalc.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
        inputPhone.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');



        widthCalc.addEventListener('change', () => {
            obj.widthValue = this.value;
        });

        heightCalc.addEventListener('change', () => {
            obj.heightValue = this.value;
        });

        choiceType.addEventListener('change', () => {
            obj.type = this.options[this.selectedIndex].value;
        });

        checkboxCold.addEventListener('change', () => {
            if (checkboxCold.checked) {
                checkboxWarm.checked = false;
                obj.profile = 'cold';
            }
        });

        checkboxWarm.addEventListener('change', () => {
            if (checkboxWarm.checked) {
                checkboxCold.checked = false;
                obj.profile = 'warm';
            }
        });

        console.log(obj);

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        document.body.addEventListener('submit', e => {
            e.preventDefault();
            formCalc.appendChild(statusMessage);

            obj.name = inputName.value;
            obj.phone = inputPhone.value;

            let request = new XMLHttpRequest();
            request.open("POST", 'server.php');

            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            let formData = JSON.stringify(obj);

            request.send(formData);

            request.onreadystatechange = () => {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.status == 200 && request.status === 4) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            };

        });


            


};

module.exports = calc;