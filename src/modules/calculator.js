const calculator = () => {
    const form = document.getElementById('card_order'),
        priceTotal = document.querySelector('#price-total'),
        promo = document.querySelector('input[placeholde = "Промокод"]'),
        mozaika = document.querySelector('#card_leto_mozaika'),
        schelkovo = document.querySelector('#card_leto_schelkovo'),
        prices = {
            mozaika: {
                1: 1999,
                6: 9900,
                9: 13900,
                12: 19900,
            },
            schelkovo: {
                1: 2999,
                6: 14990,
                9: 21990,
                12: 24990,
            },
            discount: 0,
        };

    const caclPrice = (priceClient, discount = 0) => {
        priceTotal.textContent = priceClient - Math.floor(priceClient * (discount / 100));
    };

    let amount;
    // change price
    form.addEventListener('change', (event) => {
        console.log(event.target.value);

        if (schelkovo.checked && event.target.matches('#card_leto_schelkovo')) {
            priceTotal.innerHTML = prices.schelkovo[amount];
        } else if (mozaika.checked && event.target.matches('#card_leto_mozaika')) {
            priceTotal.innerHTML = prices.mozaika[amount];
        } else {
            if (mozaika && mozaika.checked) {
                amount = event.target.value;
                priceTotal.innerHTML = prices.mozaika[event.target.value];
            }
            if (schelkovo && schelkovo.checked) {
                amount = event.target.value;
                priceTotal.innerHTML = prices.schelkovo[event.target.value];
            }
        }
    })
}

export default calculator;