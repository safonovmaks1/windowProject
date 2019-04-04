let calc = () => {

    let popupCalc = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end');

        document.body.addEventListener('click', e => {
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

                data = {
                    width: 0,
                    height: 0,
                    choiceType: 'tree',
                    profile: '',
                    name: '',
                    phone: 0
                };
                width.value = '';
                height.value = '';
                cold.checked = false;
                warm.checked = false;
                name.value = '';
                phone.value = '';
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

        let target = e.target,
            type1Img = document.querySelector('.type1_img'),
            type2Img = document.querySelector('.type2_img'),
            type3Img = document.querySelector('.type3_img'),
            type4Img = document.querySelector('.type4_img');
            if (target.classList.contains('type1_img')) {
                type1Img.classList.add('do_image_more');
                showTabContent(0);
                type2Img.classList.remove('do_image_more');
                type3Img.classList.remove('do_image_more');
                type4Img.classList.remove('do_image_more');
            }
            if (target.classList.contains('type2_img')) {
                type2Img.classList.add('do_image_more');
                showTabContent(1);
                type1Img.classList.remove('do_image_more');
                type3Img.classList.remove('do_image_more');
                type4Img.classList.remove('do_image_more');
            }
            if (target.classList.contains('type3_img')) {
                type3Img.classList.add('do_image_more');
                showTabContent(2);
                type2Img.classList.remove('do_image_more');
                type1Img.classList.remove('do_image_more');
                type4Img.classList.remove('do_image_more');
            }
            if (target.classList.contains('type4_img')) {
                type4Img.classList.add('do_image_more');
                showTabContent(3);
                type2Img.classList.remove('do_image_more');
                type3Img.classList.remove('do_image_more');
                type1Img.classList.remove('do_image_more');
            }
        });

    // calc

    let width = document.querySelector('#width'),
        height = document.querySelector('#height'),

        view = document.getElementById('view_type'),
        choiceType = view.options[view.selectedIndex],

        cold = document.getElementsByClassName('checkbox')[0],
        warm = document.getElementsByClassName('checkbox')[1],

        name = document.getElementsByClassName('form_input'),
        phone = document.getElementsByClassName('form-control'),

        formCalc = document.getElementsByClassName('form'),

        data = {
            width: '',
            height: '',
            choiceType: '',
            profile: '',
            name: '',
            phone: 0
        };
    console.log(data);

    width.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
    height.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
    phone.oninput = e => e.target.value = e.target.value.replace(/\D/g, '');

    width.addEventListener('change', () => {
        data.width += +this.value;
    });
    height.addEventListener('change', () => {
        data.height += +this.value;
    });

    view.addEventListener('change', () => {
        choiceType = this.options[this.selectedIndex].value;
    });

    cold.addEventListener('change', () => {
        if (cold.checked) {
            warm.checked = false;
            data.profile = 'cold';
        } 
    });
    warm.addEventListener('change', () => {
        if (warm.checked) {
            cold.checked = false;
            data.profile = 'warm';
        }
    });

    // cold.checked = true;
    // warm.checked = true;
 
    data.name = name.value;
    data.phone = phone.value;











    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    document.body.addEventListener('submit', (e) => {

        formCalc.appendChild(statusMessage);

    let request = new XMLHttpRequest();
        request.open("POST", 'server.php');

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let formData = JSON.stringify(data);

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