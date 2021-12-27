let counterDisplayEl = document.getElementsByClassName('counter-display');
let counterMinusEl = document.getElementsByClassName('counter-minus');
let counterPlusEl = document.getElementsByClassName('counter-plus');

let count = 0;

function updateDisplay () {
    counterDisplayEl[0].innerHTML = count;
}

counterMinusEl[0].addEventListener('click', () => {
    count--;
    updateDisplay();
});

counterPlusEl[0].addEventListener('click', () => {
    count++;
    updateDisplay();
});
