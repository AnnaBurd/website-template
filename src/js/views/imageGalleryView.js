import Splide from "@splidejs/splide";

// TODO remount image gallery for new pages instead of creating new instance

export default class ImageGalleryView {
  #parentElement = document
    .getElementById("popupGallery")
    .querySelector(".popup__content");

  mainSplide;
  thumbnailSplide;

  // TODO center thumbnail when not enough slides

  #generateMainSplideTrack(plot) {
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
  }

  #generateThumbnailSplideTrack(plot) {
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
  }

  #generateHTML(plot) {
    let html = `<div class="image-gallery">
          <div
            id="mainCarousel"
            class="splide main-splide image-gallery__main-splide"
            aria-label="Land photos"
          >
            <div class="splide__track">
              <ul class="splide__list">
                ${this.#generateMainSplideTrack(plot)}
              </ul>
            </div>
          </div>
          <div
            id="thumbnailCarousel"
            class="splide thumbnail-splide image-gallery__thumbnail-splide"
            aria-label="Thumbnail buttons for the property item carousel"
          >
            <div class="splide__track">
              <ul class="splide__list">
                ${this.#generateThumbnailSplideTrack(plot)}
              </ul>
            </div>
          </div>
        </div>`;

    return html;
  }

  render(plot) {
    let html = this.#generateHTML(plot);
    this.#parentElement.insertAdjacentHTML("afterbegin", html);

    // INIT SLIDERS

    // This script mounts Splides with thumbnails on the page.
    // Spliders are accessed by classes name 'main-splide' and corresponding 'thumbnail-splide'.
    // HTML document must have the same structure as specified in the SplideJS documentation.

    // the same script as splide-init => to do rework and organization of JS

    let splideMainOptions = {
      type: "slide",
      //arrowPath: 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z', // Arrow ">" path from the svg file, svg must be 40x40
      arrowPath:
        "M25.0132 20.0001L9.84961 35.0808C8.71683 36.2062 8.71683 38.0308 9.84961 39.156C10.9822 40.2813 12.8189 40.2813 13.9518 39.156L31.0186 22.1824C31.6223 21.5828 31.8939 20.7852 31.8542 20.0001C31.8939 19.2149 31.6223 18.4173 31.0186 17.8176L13.9518 0.844067C12.8189 -0.281354 10.9825 -0.281354 9.84961 0.844067C8.71676 1.96949 8.71683 3.79398 9.84961 4.91911L25.0132 20.0001Z",
      rewind: false, // Do not jump from end to start
      speed: 0,
      perPage: 1, // Number of the images per slide
      perMove: 1,
      // width: '100%',    // Slider line takes full width of its container (shrinks adaptively for device size)
      // height: '100%',   // Slider line takes full height of its container (shrinks adaptively for device size)
      updateOnMove: true,
      autoplay: false,
      arrows: true,
      pagination: false, // No dots with progress
      useIndex: true,
      drag: true,
      keyboard: true,
      lazyLoad: "nearby", // Load next images only when user scrolls slider
    };

    let splideThumbnailsOptions = {
      direction: "ltr", // Direction of sliding from top-to-bottom !! TODO changed
      width: "100%", // Slider line takes full width of its container (shrinks adaptively for device size)
      height: "100%", // Slider line takes full height of its container (shrinks adaptively for device size)
      perPage: 8, // Number of the thumbnail images
      rewind: false,
      pagination: false,
      useIndex: true,
      focus: "top", // Must be 'top' so if there is not enough thumbnail images for full height of the vertical thumbnail images are alligned on top
      isNavigation: true, // Makes thumbnails clickable
      arrows: false,
      updateOnMove: true, //Updates the is-active status class just before moving the carousel for nicer transition
    };

    let thumbnails = new Splide(
      document.getElementById("thumbnailCarousel"),
      splideThumbnailsOptions
    );

    let main = new Splide(
      document.getElementById("mainCarousel"),
      splideMainOptions
    );

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    this.mainSplide = main;
    this.thumbnailSplide = thumbnails;
  }

  addClickHandler(handler, caller) {
    document
      .querySelector(".item__photos")
      .addEventListener("click", function (event) {
        console.log("CLICKED ON PHOTOS", event);

        let targetImg = event.target.closest(".item__photo-wrapper");

        if (!targetImg) return;

        console.log(targetImg, targetImg[0]);

        // caller
        handler(targetImg.id, caller);
      });
  }
}
