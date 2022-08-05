let homeEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")
let scoreA = 0
let scoreB = 0

function incrementA1(){
    scoreA += 1
    homeEl.innerText = scoreA
}

function incrementA2(){
    scoreA += 2
    homeEl.innerText = scoreA
}

function incrementA3(){
    scoreA += 3
    homeEl.innerText = scoreA
}

function incrementB1(){
    scoreB += 1
    guestEl.innerText = scoreB
}

function incrementB2(){
    scoreB += 2
    guestEl.innerText = scoreB
}

function incrementB3(){
    scoreB += 3
    guestEl.innerText = scoreB
}

function reset(){
    scoreA = scoreB = 0
    guestEl.innerText = 0
    homeEl.innerText = 0
}