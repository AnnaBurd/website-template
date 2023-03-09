class PopupView {
  #parentElement = document.getElementById("popupForm");
  #open = false;

  showPopup() {
    if (this.#open) return; // Popup is already visible

    this.#parentElement.classList.add("popup--open");
    this.#open = true;
  }

  hidePopup() {
    if (!this.#open) return; // Popup is already hidden

    this.#parentElement.classList.remove("popup--open");
    this.#open = false;
  }

  addHandlers() {
    // Open popup window on button click
    const btnOpenEl = document.getElementById("popupFormOpenBtn");
    btnOpenEl.addEventListener("click", this.showPopup.bind(this));

    // Close popup window on button click
    const btnCloseEl = document.getElementById("popupFormCloseBtn");
    btnCloseEl.addEventListener("click", this.hidePopup.bind(this));

    // Close popup window on click ouside its boundaries
    document.addEventListener(
      "click",
      function (ev) {
        if (ev.target === this.#parentElement && this.#open) {
          this.hidePopup();
        }
      }.bind(this)
    );

    // Close popup window on Esc press
    document.addEventListener(
      "keydown",
      function (ev) {
        if (ev.key === "Escape" && this.#open) {
          this.hidePopup();
        }
      }.bind(this)
    );
  }
}

export default new PopupView();
