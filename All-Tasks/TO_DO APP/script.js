const inputBox = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');

function addTask() {
  if (inputBox.value === '') {
    alert("First! Schedule your task")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li)
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = ""
  storeDataInBrowser()
}

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    storeDataInBrowser();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    storeDataInBrowser()
  }
}, false)

function storeDataInBrowser() {
  localStorage.setItem("data", taskContainer.innerHTML)
}

function displayData() {
  taskContainer.innerHTML = localStorage.getItem("data")
}

displayData()