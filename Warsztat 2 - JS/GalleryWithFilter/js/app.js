document.addEventListener("DOMContentLoaded", function(){

  var images = document.querySelectorAll("img");
  // console.log(images);
  var hideBtn = document.querySelector("#hideButton");
  // console.log(hideBtn);
  var showBtn = document.querySelector("#showButton");
  // console.log(showBtn);
  var tagInput = document.querySelector("#tagInput");
  // console.log(tagInput);

  hideBtn.addEventListener("click", function(){
    var text = tagInput.value;
    console.log(text);
    tagInput.value = ""

    for (var i=0; i<images.length; i++) {
      var dataTag = images[i].dataset.tag;
      images[i].classList.remove("invisible");

      if((dataTag.indexOf(text)) != -1) {
        console.log(dataTag);
        images[i].classList.add("invisible");
      }
    }

  })

  showBtn.addEventListener("click", function(){

    var text = tagInput.value;
    tagInput.value = ""

    for (var i=0; i<images.length; i++) {
      var dataTag = images[i].dataset.tag;
      images[i].classList.remove("invisible");

      if((dataTag.indexOf(text)) === -1) {
        console.log(dataTag);
        images[i].classList.add("invisible");
      }
    }
  })

})
