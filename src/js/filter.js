import { JSSLIDERAREA, JSSLIDERPRICE } from "./sliders-init";

import Splide from "@splidejs/splide";
import model from "./model";

console.log("Hello from filter");
console.log("Filter has access to sliders: ", JSSLIDERAREA, JSSLIDERPRICE);

let formEl = document.querySelector("#filterForm");
let priceSliderEl = formEl.querySelector("#priceSlider");
let areaSliderEl = formEl.querySelector("#areaSlider");

console.log(formEl, priceSliderEl, areaSliderEl);

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // Read values from form
  console.log(e);
  console.log(JSSLIDERAREA.get(), JSSLIDERPRICE.get());

  let [priceMin, priceMax] = JSSLIDERPRICE.get();
  console.log(priceMin, priceMax);

  let [areaMin, areaMax] = JSSLIDERAREA.get();

  let sortOption = formEl.querySelector(
    'input[name="button_group"]:checked'
  ).value;

  console.log(sortOption);

  /// Load data for corresponding land plots

  let data = model.loadFilteredLandplots(
    priceMin,
    priceMax,
    areaMin,
    areaMax,
    sortOption
  );

  //// Render land plots

  console.log("GOT DATA FOR PLOTS", data);

  let parentContainer = document.querySelector(".search-results__cards");
  console.log(parentContainer);

  parentContainer.innerHTML = "";

  let generateMainSplideTrack = function (plot) {
    let html = "";

    // Generate HTML element for each image link
    for (let i = 1; i <= plot.images; i++) {
      html += `<li class="splide__slide">
                  <img data-splide-lazy="/plots/${plot.id}/view_${i}.jpg" />
                </li>`;
    }

    // Also generate HTML for each video link
    for (let i = 1 + plot.images; i <= plot.videos + plot.images; i++) {
      html += `<li class="splide__slide">
                  <video
                    width="100%"
                    height="100%"
                    preload="none"
                    muted
                    controls
                  >
                    <source
                      src="/plots/${plot.id}/view_${i}.mp4"
                      type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </li>`;
    }

    console.log(html);
    return html;
  };

  let generateThumbnailSplideTrack = function (plot) {
    let html = "";

    // Generate HTML element for each image link
    for (let i = 1; i <= plot.images; i++) {
      html += `<li class="splide__slide">
                  <img src="/plots/${plot.id}/view_${i}.jpg" />
                </li>`;
    }

    // Also generate HTML for each video link
    for (let i = 1 + plot.images; i <= plot.videos + plot.images; i++) {
      html += `<li class="splide__slide">
                  <img src="/plots/${plot.id}/view_${i}.jpg" />
                </li>`;
    }

    console.log(html);
    return html;
  };

  let generateHtml = function (plot) {
    return `<div class="card-land-full" id="${plot.id}">
            <div class="card-land-full__photo-carousel">
              <div
                id="main-carousel-${plot.id}"
                class="splide main-splide"
                aria-label="Land photos"
              >
                <div class="splide__track">
                  <ul class="splide__list">                                  
                    ${generateMainSplideTrack(plot)}
                  </ul>
                </div>
              </div>
              <div
                id="thumbnail-carousel-${plot.id}"
                class="splide thumbnail-splide"
                aria-label="Thumbnail buttons for the property item carousel"
              >
                <div class="splide__track">
                  <ul class="splide__list">
                    ${generateThumbnailSplideTrack(plot)}
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-land-full__info">
            <a class="card-land-full__link" href="/${plot.id}">
              <div class="card-land-full__name nice-h4">${plot.title}</div>
              <div class="card-land-full__description nice-h4-p">${
                plot.briefDescription
              }</div>
              <div class="land-parameters nice-h4-l">
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
                  <span class="land-area__text">${plot.area} m2</span>
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
                <div class="land-price">
                  <span class="material-symbols-outlined land-price__icon"
                    >payments</span
                  >
                  <span class="land-price__text">${
                    plot.price
                  } ty (200 trieu/m2)</span>
                </div>
              </div>
              </a>
            </div>
          </div>`;
  };

  let html = data.map((plot) => generateHtml(plot)).join("");

  parentContainer.insertAdjacentHTML("beforeend", html);

  /// Remount  carousels

  // This script mounts Splides with thumbnails on the page.
  // Spliders are accessed by classes name 'main-splide' and corresponding 'thumbnail-splide'.
  // HTML document must have the same structure as specified in the SplideJS documentation.

  let mainSplideElements = document.getElementsByClassName("main-splide");
  if (mainSplideElements.length > 0) {
    // Proceed if there are splide elements on the page
    let thumbnailSplideElements =
      document.getElementsByClassName("thumbnail-splide");

    let splideMainOptions = {
      type: "slide",
      //arrowPath: 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z', // Arrow ">" path from the svg file, svg must be 40x40
      arrowPath:
        "M25.0132 20.0001L9.84961 35.0808C8.71683 36.2062 8.71683 38.0308 9.84961 39.156C10.9822 40.2813 12.8189 40.2813 13.9518 39.156L31.0186 22.1824C31.6223 21.5828 31.8939 20.7852 31.8542 20.0001C31.8939 19.2149 31.6223 18.4173 31.0186 17.8176L13.9518 0.844067C12.8189 -0.281354 10.9825 -0.281354 9.84961 0.844067C8.71676 1.96949 8.71683 3.79398 9.84961 4.91911L25.0132 20.0001Z",
      rewind: false, // Do not jump from end to start
      perPage: 1, // Number of the images per slide
      autoplay: false,
      arrows: true,
      pagination: false, // No dots with progress
      drag: true,
      keyboard: true,
      lazyLoad: "nearby", // Load next images only when user scrolls slider
    };

    let splideThumbnailsOptions = {
      direction: "ttb", // Direction of sliding from top-to-bottom
      width: "100%", // Slider line takes full width of its container (shrinks adaptively for device size)
      height: "100%", // Slider line takes full height of its container (shrinks adaptively for device size)
      perPage: 5, // Number of the thumbnail images
      rewind: false,
      pagination: false,
      focus: "top", // Must be 'top' so if there is not enough thumbnail images for full height of the vertical thumbnail images are alligned on top
      isNavigation: true, // Makes thumbnails clickable
      arrows: false,
      updateOnMove: true, //Updates the is-active status class just before moving the carousel for nicer transition
    };

    for (let i = 0; i < mainSplideElements.length; i++) {
      var thumbnails = new Splide(
        thumbnailSplideElements[i],
        splideThumbnailsOptions
      );
      var main = new Splide(mainSplideElements[i], splideMainOptions);
      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    }
  }
});

// Add links to cards after cards are reloaded (remove old listener)

// document
//   .querySelector(".search-results__cards")
//   .addEventListener("click", function (event) {
//     // console.log(event.target.closest(".card-land-full__info"));

//     let targetInfo = event.target.closest(".card-land-full__info");
//     if (!targetInfo) return;

//     let idGoTo = targetInfo.parentNode.id;

//     console.log(idGoTo);
//   });

// <script>
//   // TODO remove this and assign links in loop when backend is ready
//   document
//     .getElementById("item1")
//     .querySelector(".card-land-full__info").onclick = function () {
//     location.href = "item.html";
//   };
//   document
//     .getElementById("item2")
//     .querySelector(".card-land-full__info").onclick = function () {
//     location.href = "item.html";
//   };
//   document
//     .getElementById("item3")
//     .querySelector(".card-land-full__info").onclick = function () {
//     location.href = "item.html";
//   };
// </script>

// TODO refactor and add render waiting circle
