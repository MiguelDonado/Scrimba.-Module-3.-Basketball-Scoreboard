let pointsHomeEl =document.getElementById("points-home")
let pointsGuestEl =document.getElementById("points-guest")
let pointsHome = 0
let pointsGuest = 0

let faultHomeEl = document.getElementById("fault-home")
let faultGuestEl = document.getElementById("fault-guest")
let faultHome = 0
let faultGuest = 0

let periodNumberEl = document.getElementById("period-number")
let periodNumber = 1


function highlightleader(){
    // Remove the 'highlight' class from both elements
    pointsHomeEl.classList.remove('highlight-leader');
    pointsGuestEl.classList.remove('highlight-leader');

    //Add the 'highlight' class to the team with the higher score
    if (pointsHome>pointsGuest){
        pointsHomeEl.classList.add('highlight-leader');
    }else if (pointsGuest>pointsHome){
        pointsGuestEl.classList.add('highlight-leader')
    }
}




function sumOneHome(){
    pointsHome+=1
    pointsHomeEl.textContent=pointsHome
    highlightleader()
}

function sumTwoHome(){
    pointsHome+=2
    pointsHomeEl.textContent=pointsHome
    highlightleader()
}

function sumThreeHome(){
    pointsHome+=3
    pointsHomeEl.textContent=pointsHome
    highlightleader()
}
function sumOneGuest(){
    pointsGuest+=1
    pointsGuestEl.textContent=pointsGuest
    highlightleader()
}

function sumTwoGuest(){
    pointsGuest+=2
    pointsGuestEl.textContent=pointsGuest
    highlightleader()
}

function sumThreeGuest(){
    pointsGuest+=3
    pointsGuestEl.textContent=pointsGuest
    highlightleader()
}
function newGame(){
    pointsHome = 0
    pointsGuest = 0
    pointsHomeEl.textContent = pointsHome
    pointsGuestEl.textContent = pointsGuest
    highlightleader()
    faultHome = 0
    faultGuest = 0
    faultHomeEl.textContent = faultHome
    faultGuestEl.textContent = faultGuest
    periodNumber = 1
    periodNumberEl.textContent = periodNumber
}

function sumOneFaultHome(){
    faultHome+=1
    faultHomeEl.textContent = faultHome
}

function sumOneFaultGuest(){
    faultGuest+=1
    faultGuestEl.textContent = faultGuest
}

function sumOnePeriod(){
    periodNumber+=1
    if (periodNumber>4){
        newGame()
    }else{
    periodNumberEl.textContent = periodNumber
    }

}



