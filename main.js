const buttonArr = document.querySelectorAll(".rate-button")
const rating = document.querySelector("#final-rating")

const state1 = document.querySelector("#rate-state")
const state2 = document.querySelector("#thankyou-state")

let lastClicked; 

buttonArr.forEach( elem  => {

    elem.addEventListener("click", () => {
        lastClicked = elem.innerHTML 
        rating.innerHTML = lastClicked
    })

})  

const submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", () => { 

})

