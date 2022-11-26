    window.addEventListener('DOMContentLoaded', () => {
        const tabs = document.querySelectorAll('.tabheader__item'),
            tabContent = document.querySelectorAll('.tabcontent'),
            tabHeader = document.querySelector('.tabheader__items')

    function hideContent() {
        tabContent.forEach(elem => {
            elem.style.display = 'none'
            });
        tabs.forEach(elem => {
            elem.classList.remove('tabheader__item_active')
            })
        };

    function addContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active')
        };
        hideContent();
        addContent();

    tabHeader.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item){
                    hideContent();
                    addContent(i);
                }
            })
        }
    });
    //timer

    const deadLine = '2022-11-30';

    function getTimeRemaning(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60 ),
              seconds = Math.floor((t / 1000) % 60 );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }else {
            return num
        }
    }

    function setClock(selector, entime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000)

              updateClock();

        function updateClock(){
            const t = getTimeRemaning(entime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock('.timer', deadLine)
});


