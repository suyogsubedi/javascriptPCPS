let hamburger = document.querySelector("#hamBurger")
let ul = document.querySelector(".mobile-nav-item")

console.log(hamburger)
let navbarStatus = 0
hamburger.addEventListener('click',()=>{
    if(navbarStatus==0){
        ul.style.display="block"
        navbarStatus=1
    }else{
        ul.style.display="none"
        navbarStatus=0
    }
   
})