const burger = document.querySelector('.burger');
const shadow = document.querySelector('.shadow');
const modal = document.querySelector('.modal');
const arrAnchor = document.querySelectorAll('.modal-menu > li > a');
const message = document.querySelector('.message');
const btnExit = document.querySelector('.btn-exit');


function scroll(e) {
    e.preventDefault();
    const target = document.querySelector(`.${e.target.innerHTML.split(' ')[0].toLowerCase()}`);
    if (target) {
        menuToggle();
        target.scrollIntoView();
    }
    if (!target) {
        if (e.target.innerHTML.split(' ')[0].toLowerCase() === 'for') {
            console.log('chath')
            showMessage();
        } else {
            alert(`this would be the ${e.target.innerHTML} section`);
        }
    }
}

function menuToggle() {
    burger.classList.toggle('rotate');
    shadow.classList.toggle('shadow--active');
    modal.classList.toggle('modal--show');
    message.classList.remove('message--show');
}

function showMessage() {
    if (message.classList.contains('message--show')) {
        message.classList.remove('message--show');
    } else {
        message.classList.add('message--show');
    }
}

burger.addEventListener('click', menuToggle);
btnExit.addEventListener('click', showMessage);

arrAnchor.forEach((item) => {
    item.addEventListener('click', (e) => scroll(e));
});