const buttonArr = document.querySelectorAll(".rate-button")
const rating = document.querySelector("#final-rating")

let lastClicked; 

buttonArr.forEach( elem  => {

    elem.addEventListener("click", () => {
        lastClicked = elem.innerHTML 
        rating.innerHTML = lastClicked
    })

})  