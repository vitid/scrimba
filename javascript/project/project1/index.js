let scoreHome = 0
let scoreGuest = 0

function addScore(side, score){
    if(side === 'home'){
        scoreHome += score
    } else{
        scoreGuest += score
    }

    document.getElementById("score-home").textContent = scoreHome
    document.getElementById("score-guest").textContent = scoreGuest
}

addScore('home', 0)
addScore('guest', 0)