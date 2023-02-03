// This script mounts Splides with thumbnails on the page.
// Spliders are accessed by classes name 'main-splide' and corresponding 'thumbnail-splide'.
// HTML document must have the same structure as specified in the SplideJS documentation.

var mainSplideElements = document.getElementsByClassName('main-splide');
if (mainSplideElements.length > 0) { // Proceed if there are splide elements on the page 
    var thumbnailSplideElements = document.getElementsByClassName('thumbnail-splide');

    var splideMainOptions =
    {
        type: 'slide',
        //arrowPath: 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z', // Arrow ">" path from the svg file, svg must be 40x40
        arrowPath: 'M25.0132 20.0001L9.84961 35.0808C8.71683 36.2062 8.71683 38.0308 9.84961 39.156C10.9822 40.2813 12.8189 40.2813 13.9518 39.156L31.0186 22.1824C31.6223 21.5828 31.8939 20.7852 31.8542 20.0001C31.8939 19.2149 31.6223 18.4173 31.0186 17.8176L13.9518 0.844067C12.8189 -0.281354 10.9825 -0.281354 9.84961 0.844067C8.71676 1.96949 8.71683 3.79398 9.84961 4.91911L25.0132 20.0001Z',
        rewind: false, // Do not jump from end to start
        perPage: 1,    // Number of the images per slide
        autoplay: false,
        arrows: true,
        pagination: false, // No dots with progress
        drag: true,
        keyboard: true,
        lazyLoad: 'nearby', // Load next images only when user scrolls slider
    };

    var splideThumbnailsOptions =
    {
        direction: 'ttb', // Direction of sliding from top-to-bottom
        width: '100%',    // Slider line takes full width of its container (shrinks adaptively for device size)
        height: '100%',   // Slider line takes full height of its container (shrinks adaptively for device size)
        perPage: 5, // Number of the thumbnail images
        rewind: false,
        pagination: false,
        focus: 'top',    // Must be 'top' so if there is not enough thumbnail images for full height of the vertical thumbnail images are alligned on top
        isNavigation: true, // Makes thumbnails clickable
        arrows: false,
        updateOnMove: true, //Updates the is-active status class just before moving the carousel for nicer transition
    };

    for (var i = 0; i < mainSplideElements.length; i++) {
        var thumbnails = new Splide(thumbnailSplideElements[i], splideThumbnailsOptions);
        var main = new Splide(mainSplideElements[i], splideMainOptions);
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
    };
}