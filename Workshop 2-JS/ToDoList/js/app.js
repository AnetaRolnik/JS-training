document.addEventListener("DOMContentLoaded", function(){

  var inputText =  document.querySelector("#taskInput");
  var addTask = document.querySelector("#addTaskButton");
  var removeTask = document.querySelector("#removeFinishedTasksButton");
  var list = document.querySelector("#taskList");
  var span = document.querySelector("#counter");
  var counter = 0;

  addTask.addEventListener("click", function(){
    var inputVal = inputText.value;
    inputText.value = "";

    if (inputVal.length>5 && inputVal.length<100) {
      counter++;
      span.innerText =parseInt(counter);

      var newLi = document.createElement('li');
      newLi.innerHTML = "<h1>"+inputVal+"</h1><button class='delete'>Delete</button><button class='complete'>Complete</button>";
      list.appendChild(newLi);

      var completeBtn = newLi.querySelector(".complete");
      var h1 =  newLi.querySelector("h1");
      var deleteBtn = newLi.querySelector(".delete");

      completeBtn.addEventListener("click", function(){

        if (h1.style.color === "red") {
          h1.style.color = "black";
          newLi.classList.add("incomplete");
          counter++;
          span.innerText =parseInt(counter);
        } else {
          h1.style.color = "red";
          counter--;
          span.innerText =parseInt(counter);
        }
      })

      deleteBtn.addEventListener("click", function(){
        list.removeChild(newLi);
        counter--;
        span.innerText =parseInt(counter);
      })

      removeTask.addEventListener("click", function(){
        if (h1.style.color === "red") {
          list.removeChild(newLi);
        }
      })

    }

  })

})
