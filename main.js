// Challenger scripts
let punchEl = document.getElementById("punch-el")
let saveEL = document.getElementById("save-el")        
let sumEl = document.getElementById("sum-el")
let punch = 0
let total = 0

function add() {
    punch += 1
    punchEl.textContent = punch
}

function previous() {
    let countStr = punch + " - "
    total += punch
    saveEL.textContent += countStr       
    punch = 0
    punchEl.textContent = 0
    sumEl.textContent = total
}