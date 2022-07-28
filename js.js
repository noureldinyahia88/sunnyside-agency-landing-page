let arrow = document.querySelector('.arrow_down')

arrow.onclick  = function () {
    window.scrollTo({
        top:1000,
        behavior:"smooth",
    });
};