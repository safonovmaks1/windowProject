let ajax = () => {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let form = document.querySelector('.form'),
        input = document.querySelectorAll('form > input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    for (let i = 1; i < 16; i = i + 2) {
        input[i].oninput = e => e.target.value = e.target.value.replace(/\D/g, '');
    }

    document.body.addEventListener('submit', (event) => {
        let target = event.target;

        if (target.classList.contains('form')) {
            for (let i = 0; i < 8; i++) {
                if (target == form[i]) {
                    event.preventDefault();

                    form[i].appendChild(statusMessage);

                let request = new XMLHttpRequest();
                    request.open("POST", 'server.php');
                    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                let formData = new FormData(form);
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
                }
            }
        }
    });
};
    
module.exports = ajax;