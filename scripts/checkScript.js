const switchButton = document.querySelector('.services__navbar h3');
const nextSwitch = document.querySelector('#next');
const logo = document.querySelector('img');

switchButton.addEventListener('click', () => {
    switchButton.classList.toggle('action');
    nextSwitch.classList.remove('action');
});

nextSwitch.addEventListener('click', () => {
    nextSwitch.classList.toggle('action');
    switchButton.classList.remove('action');
});

logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "../index.html";
});