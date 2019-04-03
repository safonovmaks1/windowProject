let form = () => {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let form = document.getElementsByClassName('form'),
        input = document.querySelectorAll('form > input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        for (let i = 1; i < 16; i = i + 2) {
            input[i].oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
        }

        
    document.body.addEventListener('submit', e => {

        let target = e.target;

        if (target.classList.contains('form')) {
            for (let i = 0; i < 8; i++) {
                e.stopPropagation();
                if (target == form[i]) {

                    form[i].appendChild(statusMessage);

                let request = new XMLHttpRequest();
                    request.open("POST", 'server.php');
                    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

                let formData = new FormData(form);
                    // request.send(formData);

                let obj = {};
                    formData.forEach = (value, key) => {
                        obj[key] = value;
                    };
                    
                let json = JSON.stringify(obj);
                    request.send(json); // JSON

                    request.addEventListener('onreadystatechange', () => {
                        if (request.readyState < 4) {
                            statusMessage.innerHTML = message.loading;
                        } else if (request.status == 200 && request.status < 300) {
                            statusMessage.innerHTML = message.success;
                        } else {
                            statusMessage.innerHTML = message.failure;
                        }
                    });
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = ''; // Очищаем инпуты  
                    }
                }
            }
        }
    });

};

module.exports = form;