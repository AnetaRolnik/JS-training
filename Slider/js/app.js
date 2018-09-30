document.addEventListener("DOMContentLoaded", function(){
  var prev = document.querySelector("#prevPicture");
  console.log(prev);
  var next = document.querySelector("#nextPicture");
  console.log(next);
  var listElements =  document.querySelectorAll("li");
  console.log(listElements);
  var indexImage = 0;

  listElements[indexImage].classList.add("visible");

  prev.addEventListener("click", function(){
    console.log("Kliknięto przycisk prev!");
    listElements[indexImage].classList.remove("visible");
    indexImage--;

    if (indexImage < 0) {
      indexImage = listElements.length-1;
    }

    listElements[indexImage].classList.add("visible");

  })

  next.addEventListener("click", function(){
    console.log("Kliknięto przycisk next!");
    listElements[indexImage].classList.remove("visible");
    indexImage++;

    if (indexImage >= listElements.length-1) {
      indexImage = 0;
    }

    listElements[indexImage].classList.add("visible");

  })

})
