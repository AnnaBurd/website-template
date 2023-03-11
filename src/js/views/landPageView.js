export class LandPageView {
  #parentElement = document.querySelector("main");

  render(plot) {
    // console.log("Rendering page for: ", plot);

    this.#parentElement.innerHTML = "";

    // TODO Launch circle render

    this.#parentElement.insertAdjacentHTML(
      "afterbegin",
      this.#generateHTML(plot)
    );

    document.querySelector("header").remove();
  }

  #generateHTML(plot) {
    let html = this.#generateItemHTML(plot);

    // console.log(html);

    return html;
  }

  #generateItemHTML(plot) {
    return `<section class="item container__padding">
        <div class="container">
          <div class="item__intro">
            <div class="nice-h2-p middle-arrow">
              <span class="filter-by">Xem tất cả</span>
              <span class="material-symbols-outlined middle-arrow__icon"
                >keyboard_arrow_right</span
              >
              <span class="sort-by">${plot.title}</span>
            </div>
            <!--TODO fix arrow style and animation and use as a separate component breadcrumps, change text according to dropdown choice, and add links -->
          </div>
          <div class="grid-1-4 item__visual-info">
            <div class="left-area item__mini-map">map</div>
            <div class="right-area item__photos">
              <div class="right-area__top-left">
                <div class="item__photo-wrapper" id="item-photo-1">
                  <img src="/plots/${plot.id}/view_1.jpg" alt="" />
                </div>
              </div>
              <div class="right-area__top-right" id="item-photo-2">
                <div class="item__photo-wrapper">
                  <img src="/plots/${plot.id}/view_2.jpg" alt="" />
                </div>
              </div>
              <div class="right-area__bottom-left" id="item-photo-3">
                <div class="item__photo-wrapper">
                  <img src="/plots/${plot.id}/view_3.jpg" alt="" />
                </div>
              </div>
              <div class="right-area__bottom-right" id="item-photo-4">
                <div class="item__photo-wrapper">
                  <img src="/plots/${plot.id}/view_4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="item__text-info">
            <div class="item__description">
              <div class="description-box">
                <h2 class="description-box__heading nice-h3">
                  ${plot.title}
                </h2>
                ${this.#generateLongDescriptionHTML(plot.longDescription)}
              </div>
            </div>
            <div class="item__sidebar">
              <div class="land-parameters nice-h3-l">
                <div class="land-location">
                  <span class="material-symbols-outlined land-location__icon"
                    >location_on</span
                  >
                  <span class="land-location__text"
                    >${plot.location}</span
                  >
                </div>
                <div class="land-area">
                  <span class="material-symbols-outlined land-area__icon"
                    >square_foot</span
                  >
                  <span class="land-area__text">${plot.area} m&sup2</span>
                </div>
                <div class="land-size">
                  <div class="land-height">
                    <span class="material-symbols-outlined land-height__icon"
                      >straighten</span
                    >
                    <span class="land-height__text">${plot.height} m</span>
                  </div>
                  <div class="land-width">
                    <span class="material-symbols-outlined land-width__icon"
                      >straighten</span
                    >
                    <span class="land-width__text">${plot.width} m</span>
                  </div>
                </div>
                <div class="land-papers">
                  <span class="material-symbols-outlined land-papers__icon"
                    >description</span
                  >
                  <span class="land-papers__text">${plot.papers}</span>
                </div>
                <div class="land-direction">
                  <span class="material-symbols-outlined land-direction__icon"
                    >explore</span
                  >
                  <span class="land-direction__text">${plot.direction}</span>
                </div>
                <div class="land-price">
                  <span class="material-symbols-outlined land-price__icon"
                    >payments</span
                  >
                  <span class="land-price__text">${plot.price}</span>
                </div>
                <div class="land-link">
                  <!-- TODO-->
                  <span class="land-link__text">Sở Quy hoạch</span>
                </div>
              </div>
              <!-- TODO add link to third-party site and arrow-->
              <!-- <div class="sidebar"> 
                            <div class="sidebar__link nice-h3-l">
                                <span>Sở Quy hoạch</span><svg width="15" height="10" viewBox="0 0 32 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M31.6091 11.0995L20.9005 0.390884C20.3794 -0.130295 19.5343 -0.130295 19.0132 0.390884C18.492 0.912063 18.492 1.75703 19.0132 2.27821L27.4917 10.7567H1.28641C0.575936 10.7567 0 11.3327 0 12.0431C0 12.7536 0.575978 13.3295 1.28641 13.3295H27.4917L19.0132 21.8081C18.492 22.3292 18.492 23.1742 19.0132 23.6954C19.2738 23.9559 19.6153 24.0862 19.9569 24.0862C20.2984 24.0862 20.6399 23.9559 20.9005 23.6954L31.6091 12.9868C31.733 12.8628 31.8313 12.7157 31.8984 12.5538C31.9655 12.3919 32 12.2184 32 12.0431C32 11.8679 31.9655 11.6943 31.8984 11.5324C31.8313 11.3705 31.733 11.2234 31.6091 11.0995Z"
                                        fill="#292823" fill-opacity="0.8" />
                                </svg>
                            </div>
                        </div> -->
            </div>
          </div>
        </div>
      </section>`;
  }

  #generateLongDescriptionHTML(longDescription) {
    // console.log(longDescription);

    return longDescription
      .map((obj) => {
        // console.log(obj);
        if (obj.paragraph) {
          return `<p class="description-box__p nice-h3-p">
                    ${obj.paragraph}
                </p>`;
        }
        if (obj.bulletPoints) {
          return ` <ul class="description-box__l nice-h3-p"> ${obj.bulletPoints
            .map((bp) => {
              return `<li>${bp}</li>`;
            })
            .join("")} </ul>`;
        }
        return "";
      })
      .join("");
  }

  addClickHandlers(handler) {}
}

export default new LandPageView();
