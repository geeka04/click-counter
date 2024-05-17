let counter = document.getElementById("counter-el")
let prevCounts = document.getElementById("saved-counts")
let count = 0

function increment(){
    count += 1
    counter.textContent = count
}

function decrement(){
    if(count === 0){
        count = 0
        counter.textContent = count
    }
    else{
        count -= 1
        counter.textContent = count
    }
}

function save(){
    let savedCount = count 
    prevCounts.textContent += savedCount + ", "
    count = 0 
    counter.textContent = 0
}

