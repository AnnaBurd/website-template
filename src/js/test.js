// let mql = window.matchMedia('(max-width: 600px)');
// document.querySelector(".mq-value").innerText = mql.matches;

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       //document.body.style.backgroundColor = "yellow";
//       //alert("matches media...")
//     } else {
//       //document.body.style.backgroundColor = "pink";
//     }
//   }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x)
// x.addListener(myFunction)

//alert("script loaded!");


// This script mounts Splides with thumbnails on the page.
// Spliders are accessed by classes name 'main-splide' and corresponding 'thumbnail-splide'.
// HTML document must have the same structure as specified in the SplideJS documentation.

// the same script as splide-init => to do rework and organization of JS

// import Splide from '@splidejs/splide';

let thumbTest;
let mainTest;

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
        lazyLoad: 'nearby', // Load next images only when user scrolls slider
    };

    var splideThumbnailsOptions =
    {
        direction: 'ltr', // Direction of sliding from top-to-bottom !! TODO changed
        width: '100%',    // Slider line takes full width of its container (shrinks adaptively for device size)
        height: '100%',   // Slider line takes full height of its container (shrinks adaptively for device size)
        perPage: 8, // Number of the thumbnail images
        rewind: false,
        pagination: false,
        useIndex: true,
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

        mainTest = main;
        thumbTest = thumbnails;
    };
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// delay(1000).then(() => console.log('ran after 1 second1 passed'));

document.getElementById('item-photo-1').onclick = function () {
    document.getElementById('popup_images').classList.add("popup--open");
    console.log("clicked on ph-1");
    // delay(5000).then(() => console.log('ran after 1 second1 passed'));
    mainTest.go(0);
    mainTest.scroll

}

document.getElementById('item-photo-2').onclick = function () {

    document.getElementById('popup_images').classList.add("popup--open");
    console.log("clicked on ph-2");
    // delay(5000).then(() => console.log('ran after 1 second1 passed'));
    mainTest.go(1);
}
document.getElementById('item-photo-3').onclick = function () {

    document.getElementById('popup_images').classList.add("popup--open");

    // delay(5000).then(() => console.log('ran after 1 second1 passed'));
    console.log("clicked on ph-3");
    mainTest.go(2);
}
document.getElementById('item-photo-4').onclick = function () {

    document.getElementById('popup_images').classList.add("popup--open");
    // delay(5000).then(() => console.log('ran after 1 second1 passed'));
    console.log("clicked on ph-4");
    mainTest.go(3);
}

mainTest.on('moved', function (newIndex, prevIndex, destIndex) {
    console.log(newIndex);
});
