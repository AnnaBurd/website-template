"use strict";

const popup = document.getElementById("popup");
const btnOpenPopup = document.getElementById("popup-button");
const btnClosePopup = document.getElementById("popup-button-close");

const openPopup = () => {
  popup.classList.add("popup--open");
};

const closePopup = () => {
  popup.classList.remove("popup--open");
};

const isPopupOpen = () => {
  return popup.classList.contains("popup--open");
};

// Open popup with button
btnOpenPopup.onclick = openPopup;

// Close popup with x button
btnClosePopup.onclick = closePopup;

// Close popup by click ouside it
document.onclick = (event) => {
  if (event.target === popup && isPopupOpen()) {
    closePopup();
  }
};

// Close popup with escape button
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isPopupOpen()) {
    closePopup();
  }
});
