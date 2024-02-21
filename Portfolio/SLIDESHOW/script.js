  let currentSlide = 0;
      const slides = document.querySelectorAll('.slide');
      // console.log("s:" + slides.length);
      const thumbnails = document.querySelectorAll('.thumbnail');
      // console.log("t:" + thumbnails.length);

      function showSlide(index) {
        //NEW
        // Remove 'active' class from all thumbnails
        thumbnails.forEach((thumbnail) => {
          thumbnail.classList.remove('active');
        });



        if (index < 0) {
          index = slides.length + 1;
        } else if (index >= slides.length) {
          index = 0;
        }

        console.log("DAINDEXHERE " + index)
        // Add 'active' class to the currently selected thumbnail
        document.getElementById(`thumbnail${index}`).classList.add('active');

        slides.forEach((slide, i) => {
          slide.classList.remove('active');
        });
        slides[index].classList.add('active');
        currentSlide = index;
      }

      function changeSlide() {
        showSlide(currentSlide + 1);
      }

      // Function to start the slideshow and change images every 3 seconds
      function startSlideshow() {
        showSlide(0);
        setInterval(changeSlide, 1200); // Change the interval to 3000ms (3 seconds)
      }


      // Add click event listeners to the thumbnails
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
          showSlide(index);
        });
      });


      // Start the slideshow when the page is loaded
      window.onload = startSlideshow;