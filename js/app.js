window.onscroll = function() {
    displayToTopBtn();
};

function displayToTopBtn() {
    const toTheTopBtn = document.getElementById('top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTheTopBtn.style.display = 'block';
    } else {
        toTheTopBtn.style.display = 'none';
    }
}
