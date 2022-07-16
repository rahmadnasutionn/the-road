Array.from(document.querySelectorAll('.nav-btn')).forEach((item) => {
    item.addEventListener('click', function() {
        item.parentElement.parentElement.classList.toggle('change');
    });
});