let count = 0;
function counter1 () {
    let showResult = document.getElementById("showCounter-1")
    showResult.innerText = count +=1
}

function saveCounter1 () {
    let saveResult = document.getElementById("saveCounterEl-1")
    saveResult.textContent += count + " - "
    count = 0;
}

function counter2 () {
    let showResult = document.getElementById("showCounter-2")
    showResult.innerText = count +=1
}

function saveCounter2 () {
    let saveResult = document.getElementById("saveCounterEl-2")
    saveResult.textContent += count + " - "
    count = 0;
}