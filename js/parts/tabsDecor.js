let tabsDecor = () => {

    let tabDecor = document.querySelectorAll('.no_click'),
        link = document.getElementsByClassName('text'),
        info = document.querySelector('.decoration_slider'),
        tabContent = document.querySelectorAll('.decorat');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabDecor[i].classList.remove('after_click');

            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabDecor[b].classList.add('after_click');
            
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('no_click') || target.classList.contains('text')) {
            for (let i = 0; i < tabDecor.length; i++) {
                if (target == tabDecor[i] || target == link[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

};

module.exports = tabsDecor;