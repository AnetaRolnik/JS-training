document.addEventListener("DOMContentLoaded", function(){

  var listElements = document.querySelectorAll("li");
  console.log(listElements);
  var tagBody = document.querySelector("body");
  console.log(tagBody);

  for (var i=0; i<listElements.length; i++) {
    listElements[i].addEventListener("click", function(){
      var src = this.children[0].getAttribute("src");

      var div = document.createElement('div');
      div.classList.add('fullScreen');
      div.innerHTML = "<img src="+src+"><button class='close'>Close</button>";
      tagBody.appendChild(div);

      var closeBtn = document.querySelector(".close");
      closeBtn.addEventListener("click", function(){
        tagBody.removeChild(div);
      })

    })
  }

})
