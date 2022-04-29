const search = document.querySelector('.form__button');

search.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "./Pages/search.html";
});