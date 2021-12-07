let range = document.querySelector('#custom-range');
range.addEventListener('change', function () {
    document.querySelector('#custom-range-value').innerHTML = range.value;
    let cards = document.querySelectorAll('.menu-item-card');
    cards.forEach(element => {
        let elementPrice = element.querySelector('.card-price').innerHTML.replace(/[^0-9]/g, "");
        if (+elementPrice > +range.value) {
            element.classList.add('hidden')
        }
        if (+elementPrice < +range.value) {
            element.classList.remove('hidden')
        }
    });
})