let tabsGlazing = () => {

    let tabTitle = document.querySelectorAll('.tab'), 
        info = document.querySelector('.glazing_slider'),
        tabContent = document.querySelectorAll('.tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            
            tabContent[i].classList.remove('show');
            tabTitle[i].classList.remove('active');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tabTitle[b].classList.add('active');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains('tab')) {
            for (let i = 0; i < tabTitle.length; i++) {
                if (target == tabTitle[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
      
};

module.exports = tabsGlazing;