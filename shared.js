
let choosePlanButtons = document.querySelectorAll('.plan button')
let modal = document.getElementsByClassName('modal')[0];
let backdrop = document.getElementsByClassName('backdrop')[0];
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

let noButton = document.querySelector('.modal__action--negative');

for(let button of choosePlanButtons) {
    button.addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    },10)
        modal.classList.add('open');
    })
}

backdrop.addEventListener('click', clearModal.bind(this));

if(noButton) {
    noButton.addEventListener('click', clearModal.bind(this));
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    },10)
})

function clearModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    // mobileNav.style.display = 'none';
    
    // backdrop.classList.remove('open');
    backdrop.style.display = 'none';
    setTimeout(() => {
        backdrop.classList.remove('open');
    },200)
    if(modal) {
        modal.classList.remove('open');
    }
    mobileNav.classList.remove('open');
}