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

});


