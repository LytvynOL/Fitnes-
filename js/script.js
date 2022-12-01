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
    setClock('.timer', deadLine);

    const buttModal = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          closeModal = document.querySelector('[data-close]');

          buttModal.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden'
            })
          });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    class MenuCard {
        constructor(src, alt, tittle, description, price, perentSelector) {
            this.src = src;
            this.alt = alt;
            this.tittle = tittle;
            this.description = description;
            this.price = price;
            this.parent = document.querySelector(perentSelector);
            this.transfer = 27;
            this.changeToUAH()
        }

        changeToUAH() {
            return this.price = this.price * this.transfer;
        }

        rander() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__field">
                <div class="container">
                    <div class="menu__item">
                        <img src= ${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.tittle}</h3>
                        <div class="menu__item-descr">${this.description}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                </div>`;
                this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
       ' Меню "Фитнес"',
       'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
       9,
       '.menu .container'
    ).rander();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
       ' Меню “Премиум”',
       'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
       12,
       '.menu .container'
    ).rander();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
       'Меню "Постное"',
       'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
       13,
       '.menu .container'
    ).rander();
});

// 'use strict'
// // function myTest(surname) {
// //     console.log(this);
// //     console.log(this.name + surname)
// // };
// // const user = {
// //     name: 'Jhon'
// // };
// // myTest.call(user, 'smith')
// // myTest.apply(user, [' smith'])
 
// class Profile {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     objectName() {
//         return this.height * this.width;
//     }
// }

// class ProfileTwo extends Profile {
//     constructor(height, width, text, bgColor){
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyProps() {
//         console.log(`Текст ${this.text}, цвет ${this.bgColor}`)
//     }
// }
// const div = new ProfileTwo(25, 10, 'Hello World', 'red');
// div.showMyProps()
// console.log(div.objectName())
// // const scuere = new Profile(10, 30);
// // console.log(scuere.objectName())