 document.addEventListener("DOMContentLoaded", function(){

   var tooltips = document.querySelectorAll(".tooltip");
   console.log(tooltips);

   for (var i=0; i<tooltips.length; i++) {

     tooltips[i].addEventListener("mouseover", function(){
       var dataText = this.dataset.text;
       var spanText = document.createElement('span');
       spanText.classList.add('tooltipText');
       spanText.innerText = dataText;
       this.appendChild(spanText);
     })

     tooltips[i].addEventListener("mouseout", function(){
       var spanText = document.querySelector(".tooltipText");
       this.removeChild(spanText);
     })

   }

 })
