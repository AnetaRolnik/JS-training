document.addEventListener("DOMContentLoaded", function(){

    //Dropdown menu in header
    var dropdown = document.querySelectorAll(".page-nav-list>li");

    for (var i=0; i<dropdown.length; i++) {

      dropdown[i].addEventListener("mouseenter", function(){
          var dropdownContent = this.querySelector(".page-nav-sublist");
          if (dropdownContent!=null) {
              dropdownContent.style.opacity = "1";
              dropdownContent.style.visibility = "visible";
          }
      })

      dropdown[i].addEventListener("mouseleave", function(){
          var dropdownContent = this.querySelector(".page-nav-sublist");
          if (dropdownContent!=null) {
              dropdownContent.style.opacity = "0";
              dropdownContent.style.visibility = "hidden";
          }
      })

    }

    // Hiding a block with the name after hovering over the image
    var boxImg = document.querySelectorAll(".box-image");

    for (var i=0; i<boxImg.length; i++) {

        boxImg[i].addEventListener("mouseenter", function(){
            var boxTitle = this.querySelector(".image-title");
            boxTitle.style.opacity = "0";
            boxTitle.style.transition = "opacity 0.8s";
        })

        boxImg[i].addEventListener("mouseleave", function(){
            var boxTitle = this.querySelector(".image-title");
            boxTitle.style.opacity = "1";
            boxTitle.style.transition = "opacity 1.5s";
        })

    }


})
