import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
    generateCard();

    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        generateCard();
    });

    const card = document.getElementById("card-display");
    const widthSlider = document.getElementById("width-slider");
    const widthValue = document.getElementById("width-value");

    widthValue.textContent = widthSlider.value;
    card.style.width = `${widthSlider.value}%`;

    widthSlider.addEventListener("input", (e) => {
        card.style.width = `${e.target.value}%`;
        widthValue.textContent = e.target.value;
    });

    const heightSlider = document.getElementById("height-slider");
    const heightValue = document.getElementById("height-value");

    heightValue.textContent = heightSlider.value;
    card.style.height = `${heightSlider.value}%`;

    heightSlider.addEventListener("input", (e) => {
        card.style.height = `${e.target.value}%`;
        heightValue.textContent = e.target.value;
    });
};

const generateCard = () => {
    const suits = ["♦", "♥", "♠", "♣"];
    const suitIndex = Math.floor(Math.random() * 3.99);
    let cardValue = Math.floor(Math.random() * 13.99 + 1);

    switch (cardValue) {
        case 1:
            cardValue = "A";
            break;
        case 11:
            cardValue = "J";
            break;
        case 12:
            cardValue = "Q";
            break;
        case 13:
            cardValue = "K";
            break;
        case 14:
            cardValue = "Joker";
            break;
        default:
            break;
    }
    console.log(cardValue, suits[suitIndex]);
    updateCard(cardValue, suits[suitIndex]);
};

const updateCard = (value, suit) => {
    const cardValueEl = document.getElementById("card-value");
    const suitsEl = document.querySelectorAll(".suit");

    suitsEl.forEach((e) => {
        if (suit === "♥" || suit === "♦") {
            e.classList.replace("text-black", "text-danger");
            cardValueEl.classList.replace("text-black", "text-danger");
        } else {
            e.classList.replace("text-danger", "text-black");
            cardValueEl.classList.replace("text-danger", "text-black");
        }
        e.textContent = suit;
    });
    cardValueEl.textContent = value;
};
