const buttonArr = document.querySelectorAll(".rate-button"); 

alert("alert"); 

console.log(buttonArr); 

buttonArr.forEach( elem  => {

    console.log(elem); 
    elem.addEventListener("onClick", () => {
        alert("heh"); 
    });
});