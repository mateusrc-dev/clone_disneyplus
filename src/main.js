document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]'); // let's select through the attribute
    const questions = document.querySelectorAll('[data-faq-question]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const abaATarget = button.target.dataset.tabButton; // other form for get data is with property 'getAttribute'
            const aba = document.querySelector(`[data-tab-id=${abaATarget}]`);
            
            hiddenAllAbas();
            aba.classList.add('shows__list--is-active');
            
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
});

function openOrCloseAnswer(event) { // this event is send implicitly in before function
    const classThatLetsUse = 'faq__questions__item--is-open';
    const fatherElement = event.target.parentNode;
    fatherElement.classList.toggle(classThatLetsUse);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hiddenAllAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}