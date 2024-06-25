let toggleBtn = document.querySelector(`.container .sub-card .toggle-btn`);
let priceText = document.querySelector(`.container .sub-card .p2 :first-child`);
let durationText = document.querySelector(`.container .sub-card .p2 :last-child`);
let pageViewsNumber = document.querySelector(`.container .sub-card .p1 :first-child`);
let rangeValue = document.querySelector(`.container .sub-card .range`);
let discountText = document.querySelector(`.container .sub-card .p4 span`);

let price = function () {
    if (toggleBtn.classList.contains("active-btn")) {
        durationText.innerHTML = "/ year";
        if (rangeValue.value === "1") priceText.innerHTML = "$6.00";
        else if (rangeValue.value === "2") priceText.innerHTML = "$9.00";
        else if (rangeValue.value === "3") priceText.innerHTML = "$12.00";
        else if (rangeValue.value === "4") priceText.innerHTML = "$18.00";
        else if (rangeValue.value === "5") priceText.innerHTML = "$27.00";
    } else {
        durationText.innerHTML = "/ month";
        if (rangeValue.value === "1") priceText.innerHTML = "$8.00";
        else if (rangeValue.value === "2") priceText.innerHTML = "$12.00";
        else if (rangeValue.value === "3") priceText.innerHTML = "$16.00";
        else if (rangeValue.value === "4") priceText.innerHTML = "$24.00";
        else if (rangeValue.value === "5") priceText.innerHTML = "$36.00";
    };
};

let resizeDiscText = () => {
    window.innerWidth <= 480
        ? discountText.innerHTML = "-25%"
        : discountText.innerHTML = "25% discount";
};

toggleBtn.addEventListener("click", function () {
    this.classList.toggle(`active-btn`);
    this.children[0].classList.toggle(`active-switch`);
    price();
});

rangeValue.addEventListener("input", function () {
    if (rangeValue.value === "1") pageViewsNumber.innerHTML = "10K";
    else if (rangeValue.value === "2") pageViewsNumber.innerHTML = "50K";
    else if (rangeValue.value === "3") pageViewsNumber.innerHTML = "100K";
    else if (rangeValue.value === "4") pageViewsNumber.innerHTML = "500K";
    else if (rangeValue.value === "5") pageViewsNumber.innerHTML = "1M";
    price();
});

window.onload = window.onresize = resizeDiscText;

