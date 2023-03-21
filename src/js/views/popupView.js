export default class PopupView {
  #parentElement;
  #open = false;
  #openbtnID;
  #closebtnID;

  constructor(parentID, openbtnID, closebtnID) {
    this.#parentElement = document.getElementById(parentID);
    this.#openbtnID = openbtnID;
    this.#closebtnID = closebtnID;
  }

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
    const btnOpenEl = document.getElementById(this.#openbtnID);
    btnOpenEl?.addEventListener("click", this.showPopup.bind(this));

    // Close popup window on button click
    const btnCloseEl = document.getElementById(this.#closebtnID);
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
