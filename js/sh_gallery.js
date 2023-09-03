 document.addEventListener("DOMContentLoaded", function(event) {
            var bigImage = document.getElementById("bigImage");
            var smallImages = document.getElementsByClassName("small-image");
            var currentIndex = 0;
            var intervalId; 

            bigImage.src = smallImages[currentIndex].src;


            function changeImage(index) {
                bigImage.src = smallImages[index].src;

            
                for (var i = 0; i < smallImages.length; i++) {
                    smallImages[i].classList.remove("active");
                }

                smallImages[index].classList.add("active");
            }

       
            for (var i = 0; i < smallImages.length; i++) {
                smallImages[i].addEventListener("click", function() {
                    var index = Array.from(smallImages).indexOf(this);
                    currentIndex = index;
                    changeImage(index);
                });
            }

           
            function startAutomaticChange() {
                intervalId = setInterval(function() {
                    currentIndex = (currentIndex + 1) % smallImages.length;
                    changeImage(currentIndex);
                }, 1000); /* set it to 1 second */
            }

           
            startAutomaticChange();
        });