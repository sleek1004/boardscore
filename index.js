homeScoreEl = document.getElementById("homescore-el")

guestScoreEl = document.getElementById("guestscore-el")


let homeScore = 0
function plus1h(){
   homeScore +=  1 
  homeScoreEl.textContent = homeScore
}

function plus2h(){
    homeScore +=  2
   homeScoreEl.textContent = homeScore
 }
 function plus3h(){
    homeScore +=  3
   homeScoreEl.textContent = homeScore
 }


 let guestScore = 0
 function plus1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
 }

 function plus2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
 }

 function plus3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
 }





