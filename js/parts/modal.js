function modal() {

    let popup = document.querySelector('.popup'),
        popupLink = document.querySelectorAll('.phone_link'),

        popupEngineer = document.querySelector('.popup_engineer'),
        popupBtn = document.querySelector('.header_btn'),

        closeP = document.getElementsByClassName('popup_close')[0],
        closeE = document.getElementsByClassName('popup_close')[1];

    popupLink.forEach(function (item) {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';

        });
    });


    popupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';

    });

    let openModal = () => {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    setTimeout(openModal, 6000);
    
    closeP.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });
    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    closeE.addEventListener('click', () => {
        popupEngineer.style.display = 'none';
        document.body.style.overflow = '';
    });
    window.addEventListener('click', (e) => {
        if (e.target == popupEngineer) {
            popupEngineer.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

}

module.exports = modal;
