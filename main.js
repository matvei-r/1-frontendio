const buttonArr = document.querySelectorAll(".rate-button")
const rating = document.querySelector("#final-rating")

buttonArr.forEach( elem  => {

    elem.addEventListener("click", () => {

        buttonArr.forEach( elem  => {elem.classList.remove("active")})

        rating.innerHTML = elem.innerHTML 
        elem.classList.add("active")
    })
})      

const state1 = document.querySelector("#rate-state")
const state2 = document.querySelector("#thankyou-state")
const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", () => { 

    if (rating.innerHTML){
        state1.classList.add("hidden")
        state2.classList.remove("hidden")
    }
})

