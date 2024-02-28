document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainer = document.querySelector(".slideshow-container");
    const loadingBar = document.getElementById("loading-bar");

    let mediaElements = document.querySelectorAll(".slideshow-container img, .slideshow-container video");
    let totalMedia = mediaElements.length;
    let mediaLoaded = 0;

    function updateLoadingBar() {
        const progress = (mediaLoaded / totalMedia) * 100;
        loadingBar.style.width = progress + "%";

        if (mediaLoaded === totalMedia) {
            // All images and videos are loaded, hide the loading bar or perform any other actions
            setTimeout(function() {
                document.querySelector(".loading-bar-container").style.display = "none";
                startSlideshow();
            }, 500);
        }
    }

    function mediaLoadedCallback() {
        mediaLoaded++;
        updateLoadingBar();
    }

    // Attach the mediaLoadedCallback function to the load event of each image or video
    mediaElements.forEach(function(mediaElement) {
        mediaElement.addEventListener("load", mediaLoadedCallback);
        mediaElement.addEventListener("loadeddata", mediaLoadedCallback);
        mediaElement.addEventListener("error", mediaLoadedCallback); // Handle error cases
    });

    // Function to start the slideshow after all media is loaded
    function startSlideshow() {
        const slides = document.querySelectorAll(".slide");
        let currentIndex = 0;

        function showSlide(index) {
            slides[currentIndex].style.display = "none";
            slides[index].style.display = "block";
            currentIndex = index;
        }

        // Your existing code for handling slides, for example, with onclick events on thumbnails
        // ...

        // Show the first slide initially
        showSlide(0);
    }
});
