import scrollSizeParameters from "../../sass/abstracts/exp.module.scss";

console.log("SCROLLPAR", scrollSizeParameters);

export class LandPageView {
  #parentElement = document.querySelector("main");

  // #currSuggestionsPage;
  // #numSuggestionsPages;
  // #data;

  render(plot, suggestions, currSuggestionsPage = 1, numSuggestionsPages = 1) {
    // this.#data = plot;
    // console.log("Rendering page for: ", plot);

    // this.#currSuggestionsPage = 1;
    // this.#numSuggestionsPages = 1;

    this.#parentElement.innerHTML = "";

    // TODO Launch circle render

    this.#parentElement.insertAdjacentHTML(
      "afterbegin",
      this.#generateHTML(plot, suggestions)
    );

    document.querySelector("header")?.remove();
  }

  #generateHTML(plot, suggestions) {
    let html = this.#generateItemHTML(plot);

    if (suggestions.length > 0) {
      // console.log(
      //   "GENERATING SUGGESTIONS FOR SECTIONS",
      //   this.#generateSuggestionsHTML()
      // );
      html = html.concat(this.#generateSuggestionsHTML(suggestions));
    }

    // console.log("GENERATED HTML IN PAGE VIEW", html);

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
                </div>
                <div class="land-papers">
                  <span class="material-symbols-outlined land-papers__icon"
                    >description</span
                  >
                  <span class="land-papers__text">${plot.papers}</span>
                </div>
                <div class="land-price">
                  <span class="material-symbols-outlined land-price__icon"
                    >payments</span
                  >
                  <span class="land-price__text">${plot.price}</span>
                </div>
                <div class="land-link">
                  <!-- TODO-->
                  <span class="land-link__text">Quy hoạch</span>
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

  // TODO optional sidebar parameters -> only render those parameters that are specified for object, e.g. height/width or direction are not necessary (example here https://batdongsan.com.vn/ban-dat-duong-phan-thanh-gian-phuong-long-tam/ba-ria-xa-lo-400trieu-cho-lo-mat-tien-ngay-pho-di-bo-va-cong-vien-30-4-ba-ria-pr36683737)

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

  #generateSuggestionsHTML(suggestions) {
    // this.#numSuggestionsPages = Math.ceil(suggestions.length / 3);

    return `      <section class="suggestions">
        <div class="container__padding">
          <div class="suggestions__intro container">
            <h2 class="nice-h2">Dự án tưởng tượng</h2>
            <div class="nice-h2-p">
              Dự án khác bạn có thể thích tot dep nhat cua cung toi
            </div>
          </div>
        </div>
        <div class="suggestions__cards">
          <div
            class="scrolling-wrapper container__padding moveleft"
            id="suggestionsScroll"
          >
            <div class="scrolling-wrapper__content container">
              <div class="scrolling-wrapper__grid" id="suggestionsGrid"></div>
            </div>
          </div>
          <div class="container__padding">
            <div class="scrolling-controls container">
              <!-- <span class="material-symbols-outlined ">
                            arrow_back
                        </span>
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span> -->
              <svg
                class="arrow-left btn-suggestions"
                id="arrow-left"
                data-goto="0"
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.390879 12.9867L11.0995 23.6953C11.6206 24.2165 12.4657 24.2165 12.9868 23.6953C13.508 23.1741 13.508 22.3291 12.9868 21.808L4.50831 13.3295L30.7136 13.3295C31.4241 13.3295 32 12.7535 32 12.0431C32 11.3326 31.424 10.7567 30.7136 10.7567L4.50826 10.7567L12.9868 2.27813C13.508 1.75699 13.508 0.91198 12.9868 0.3908C12.7262 0.130232 12.3847 -5.34058e-05 12.0431 -5.34058e-05C11.7016 -5.34058e-05 11.3601 0.130232 11.0995 0.3908L0.390879 11.0994C0.266956 11.2233 0.168653 11.3705 0.101585 11.5324C0.0345192 11.6943 0 11.8678 0 12.0431C0 12.2183 0.0345192 12.3919 0.101585 12.5538C0.168653 12.7157 0.266956 12.8628 0.390879 12.9867Z"
                  fill="#292823"
                />
              </svg>
              <svg
                class="arrow-right btn-suggestions"
                id="arrow-right"
                data-goto="2"
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.6091 11.0995L20.9005 0.390884C20.3794 -0.130295 19.5343 -0.130295 19.0132 0.390884C18.492 0.912063 18.492 1.75703 19.0132 2.27821L27.4917 10.7567H1.28641C0.575936 10.7567 0 11.3327 0 12.0431C0 12.7536 0.575978 13.3295 1.28641 13.3295H27.4917L19.0132 21.8081C18.492 22.3292 18.492 23.1742 19.0132 23.6954C19.2738 23.9559 19.6153 24.0862 19.9569 24.0862C20.2984 24.0862 20.6399 23.9559 20.9005 23.6954L31.6091 12.9868C31.733 12.8628 31.8313 12.7157 31.8984 12.5538C31.9655 12.3919 32 12.2184 32 12.0431C32 11.8679 31.9655 11.6943 31.8984 11.5324C31.8313 11.3705 31.733 11.2234 31.6091 11.0995Z"
                  fill="#292823"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>`;
  }

  addClickArrowSuggestionsHandler(state) {
    this.#updateArrows(state.currSuggestionsPage, state.numSuggestionsPages);

    this.#parentElement
      .querySelector(".scrolling-controls")
      .addEventListener("click", function (event) {
        // console.log("Clicked on arrows", event);

        const arrowClicked = event.target.closest(".btn-suggestions");
        // const arrowRight = event.target.closest(".arrow-right");

        console.log(arrowClicked, this);

        if (!arrowClicked) return; // Did not click on arrows

        let goto = Number(arrowClicked.dataset.goto);

        console.log(
          `Current state: ${
            state.currSuggestionsPage + ", " + state.numSuggestionsPages
          }, clicked to go to: ${goto}`
        );

        // Already on first page or already on last page
        if (goto < 1 || goto > state.numSuggestionsPages) return;

        // Scroll page
        document.querySelector("#arrow-left").dataset.goto = goto - 1;
        document.querySelector("#arrow-right").dataset.goto = goto + 1;
        state.currSuggestionsPage = goto;

        let scroll = document.querySelector("#suggestionsScroll");

        let scrollContentWidth = scroll.querySelector(
          ".scrolling-wrapper__content"
        ).offsetWidth;

        // transform: translateX(calc(-1 * (min(100vw - #{$main-container-padding} * 2, #{$main-container-width}) + #{$gutter-columns--medium})))

        // console.log(
        //   window.innerWidth,
        //   scrollSizeParameters.scrollexppadding,
        //   scrollSizeParameters.scrollexpwidth,
        //   scrollSizeParameters.scrollexpgutter
        // );

        // TODO refactor
        scroll.style.transform = `translateX(calc(-${
          goto - 1
        } * (min(${"100vw"} - ${scrollSizeParameters.scrollexppadding} * 2, ${
          scrollSizeParameters.scrollexpwidth
        }) + ${scrollSizeParameters.scrollexpgutter})))`;

        // TODO refactor -> toggle arrows
        if (state.currSuggestionsPage <= 1) {
          document
            .querySelector("#arrow-left")
            .classList.add("btn-suggestions--blocked");
        } else {
          document
            .querySelector("#arrow-left")
            .classList.remove("btn-suggestions--blocked");
        }

        // Toggle block of right arrow for last page
        if (state.currSuggestionsPage >= state.numSuggestionsPages) {
          document
            .querySelector("#arrow-right")
            .classList.add("btn-suggestions--blocked");
        } else {
          document
            .querySelector("#arrow-right")
            .classList.remove("btn-suggestions--blocked");
        }
      });
  }

  #updateArrows(currSuggestionsPage, numSuggestionsPages) {
    // console.log(
    //   "Updating arrows",
    //   this.#currSuggestionsPage,
    //   this.#numSuggestionsPages
    // );

    // Toggle block of left arrow for first page
    if (currSuggestionsPage <= 1) {
      document
        .querySelector("#arrow-left")
        .classList.add("btn-suggestions--blocked");
    } else {
      document
        .querySelector("#arrow-left")
        .classList.remove("btn-suggestions--blocked");
    }

    // Toggle block of right arrow for last page
    if (currSuggestionsPage >= numSuggestionsPages) {
      document
        .querySelector("#arrow-right")
        .classList.add("btn-suggestions--blocked");
    } else {
      document
        .querySelector("#arrow-right")
        .classList.remove("btn-suggestions--blocked");
    }
  }
}

export default new LandPageView();
