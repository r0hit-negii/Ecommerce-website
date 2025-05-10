let bar = document.querySelector("#bar")
let navbar = document.querySelector(".nav-link")
let close = document.querySelector(".close-btn")



if(bar){
    bar.addEventListener("click",()=>{
        navbar.classList.add("show")
    })
    
}

close.addEventListener("click",()=>{
    navbar.classList.remove("show")
});










