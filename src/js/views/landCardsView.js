// import images from "../../img/plot-1/**";

// console.log("images:", images);

export class LandCardsView {
  #parentElement = document.getElementById("projectCards");

  #generateHTML(plots) {
    // Convert path to image in src folder to path to image in dist bundle (Parcel)
    // let imgsrc = new URL("../../img/popup.jpg", import.meta.url);

    return plots.map((plot) => this.#generateSingleCardHTML(plot)).join("");
  }

  #generateSingleCardHTML(plot) {
    // Link to image in dist folder:
    let imgsrc = `/plots/${plot.id}/view_1.jpg`;

    return `<div class="card-land" id="${plot.id}">
            <div class="card-land__image">
              <img src="${imgsrc}" alt="${plot.title}" />
            </div>
            <div class="card-land__description">
              <div class="card-land__name nice-h4">${plot.title}</div>
              <div class="card-land__note nice-h4-p">${plot.briefDescription}</div>
              <div class="card-land__parameters land-parameters nice-h4-l">
                <div class="land-area">
                  <span class="material-symbols-outlined land-area__icon"
                    >square_foot</span
                  >
                  <span class="land-area__text">${plot.area}</span>
                </div>
                <div class="land-price">
                  <span class="material-symbols-outlined land-price__icon"
                    >payments</span
                  >
                  <span class="land-price__text">${plot.price}</span>
                </div>
              </div>
            </div>
          </div>`;
  }

  render(plots, parentID = "projectCards") {
    this.#parentElement = document.getElementById(parentID);
    // console.log("Starting to render land cards based on data:", plots);
    let html = this.#generateHTML(plots);
    // console.log("Generated html: ", html);
    // console.log("TRYING TO INCERT", document.body);
    // console.log("Parent element for id: ", parentID, this.#parentElement);
    this.#parentElement.insertAdjacentHTML("beforeend", html);
    // console.log(
    //   "Inserted land cards html in parent element ",
    //   this.#parentElement
    // );
  }

  addClickHandlers(handler) {
    // When user clicks on land card, determine card id and pass it to handler
    this.#parentElement.addEventListener("click", function (e) {
      const cardElement = e.target.closest(".card-land");
      if (!cardElement) return;
      handler(cardElement.id);
    });
  }
}

export default new LandCardsView();
