let modal = () => {

    let popup = document.querySelector('.popup'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupBtn = document.querySelector('.header_btn'),
        close = document.querySelectorAll('.popup_close');

    document.body.addEventListener('click', (e) => {
        // e.preventDefault();
        let target = e.target;
        if (target.classList.contains('phone_link')) {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';  
        } 
    });

    popupBtn.addEventListener('click', () => {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';

    });

    [].forEach.call(close, (i) => {
        i.onclick = () => {
            popup.style.display = 'none';
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        };
    });

    window.addEventListener('click', (e) => {
        let target = e.target;
        if (target == popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        } else if (e.target == popupEngineer) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.body.addEventListener('keyup', (e) => {
        let key = e.keyCode;
        if (key == 27) {
            popup.style.display = 'none';
            popupEngineer.style.display = 'none';
        }
    }, false);

    let openModal = () => {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    setTimeout(openModal, 60000);

};

module.exports = modal;