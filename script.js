const monthlyRadio = document.getElementById("btnradio1");
const yearlyRadio = document.getElementById("btnradio2");
const priceElements = document.querySelectorAll(".pricing-price");

function updatePrices() {
    const isYearly = yearlyRadio.checked;

    priceElements.forEach((price) => {
        price.textContent = isYearly ? price.dataset.yearly : price.dataset.monthly;
    });
}

monthlyRadio.addEventListener("change", updatePrices);
yearlyRadio.addEventListener("change", updatePrices);

updatePrices();