document.addEventListener("DOMContentLoaded", function() {

  var listElements = document.querySelector(".nav ul").children;
  console.log(listElements);

  for (var i=0; i<listElements.length; i++) {
    listElements[i].addEventListener("mouseover", function(){
      var childrenList = this.children[0];
      if(childrenList != null) {
        childrenList.style.display= "inline-block";
      }
    })

    listElements[i].addEventListener("mouseout", function(){
      var childrenList = this.children[0];
      if(childrenList != null) {
        childrenList.style.display= "none";
      }
    })
  }

})
