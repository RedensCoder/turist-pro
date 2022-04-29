const button_check = document.querySelector('.but_block');
const logo = document.querySelector('img');

button_check.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "../Pages/check.html";
});

logo.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "../index.html";
});