function timer() {
    
    let deadline = 'April 03 2019 21:00:00 GMT+0300';

    let getTimeRemaining = endtime => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / 1000 / 60 / 60 / 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),

            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

        let  updateClock = () => {
            let t = getTimeRemaining(endtime);

            days.textContent = timeForm(t.days);
            hours.textContent = timeForm(t.hours);
            minutes.textContent = timeForm(t.minutes);
            seconds.textContent = timeForm(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        };

        let timeInterval = setInterval(updateClock, 1000);

        let timeForm = (time) => {
            let t = time;
            if (time < 0) {
                t = '00';
            } else if (time < 10) {
                t = '0' + time;
            }
            return t;
        };
    };
    setClock('timer', deadline);
    
}

module.exports = timer;