const punchEl = document.getElementById("punch-el");
const saveEL = document.getElementById("save-el");
const sumEl = document.getElementById("sum-el");
let punch = 0;
let total = 0;

// Load values from local storage
if (localStorage.getItem("savedText")) {
    saveEL.textContent = localStorage.getItem("savedText");
}

if (localStorage.getItem("total")) {
    total = parseInt(localStorage.getItem("total"));
    sumEl.textContent = total;
}

function add() {
    punch += 1;
    punchEl.textContent = punch;
}

function previous() {
    let countStr = punch + " - ";
    total += punch;
    saveEL.textContent += countStr;
    punch = 0;
    punchEl.textContent = 0;
    sumEl.textContent = total;

    // Save values to local storage
    localStorage.setItem("savedText", saveEL.textContent);
    localStorage.setItem("total", total);
}

function reset() {
    // Reset values and clear local storage
    punch = 0;
    total = 0;
    punchEl.textContent = 0;
    sumEl.textContent = 0;
    saveEL.textContent = "Previous Count: ";
    localStorage.removeItem("savedText");
    localStorage.removeItem("total");
}