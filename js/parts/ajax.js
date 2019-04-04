let ajax = () => {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    function formSend(elem) {
        let input = elem.getElementsByTagName('input');
        // elem.addEventListener('submit', function (e) {
            // elem.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);
            let obj = {};

            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();

                request.open("POST", 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); // JSON
                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                request.send(json); // JSON
                });
            } // end postData

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
                .then(setTimeout(() => {
                    statusMessage.remove();
                }, 2000));

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = ''; // Очищаем инпуты  
                }
            }
        // });
    }

    let callForm = document.querySelectorAll('.form');

    callForm.forEach((item) => {
        item.addEventListener('submit', () => {
            formSend(item);
        });
    });

    let tel = document.querySelectorAll('[name = user_phone]');

    let checkValidSum = (input) => {
        return /^(8|\+7|\+)\d{0,10}$/.test(input);
        // return /^\d{0,11}$/.test(input.value);
    };

    tel.forEach(function (item) {
        item.addEventListener('input', function () {
            if (item != 0) {
                if (!checkValidSum(item.value)) {
                    item.value = item.value.slice(0, -1);
                }
            }
        });
    });

    


};
    
module.exports = ajax;