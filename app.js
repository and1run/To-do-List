const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
const addButton = document.getElementById("add");
const allButton = document.getElementById("all");
const doneButton = document.getElementById("done");
const undoneButton = document.getElementById("undone");
showTask();

const allElemnts = document.querySelectorAll("li");

function addTask() {
    if (inputBox.value === '') {
        alert("Be a man, write a task");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value.trim();
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}

addButton.addEventListener('click',addTask);

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

function showDone() {
    for (i=0;i<allElemnts.length;i++){
        if (allElemnts[i].classList.contains("checked")) {
            allElemnts[i].classList.remove("hidden");
        } else {
            allElemnts[i].classList.add("hidden")
        }
    }
}

function showUndone() {
    for (i=0;i<allElemnts.length;i++){
        if (allElemnts[i].classList.contains("checked")) {
            allElemnts[i].classList.add("hidden");
        } else {
            allElemnts[i].classList.remove("hidden")
        }
    }
}

function showAll() {
    for (i=0;i<allElemnts.length;i++) {
        allElemnts[i].classList.remove("hidden");
    }
}



