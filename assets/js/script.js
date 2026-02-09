// JavaScript Here

function toggleHamburgerIcon(x) {
    x.classList.toggle("change");
}

//---------- Toggle Monile menu when hamburger icon is clicked ----------//

let hamburgerIcon = document.getElementById("hamburgerIcon")

if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function () {
        let mobileMenu = document.getElementById("mobile-menu")
        if (mobileMenu) {
            if (mobileMenu.style.display === "block") {
                mobileMenu.style.display = "none"

            } else {
                mobileMenu.style.display = "block"
            }
        } else {
            console.error("Element with ID 'mobileMenu'Not Found")
        }
    })
} else {
    console.error("Element with ID 'hamburgerIcon'Not Found")
}

// Banner slide script

let slideIndex = 1;

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("banner-wrapper");

    console.log(slides.length);

    if(n > slides.length){
        slideIndex = 1
    }

    if(n < 1){
        slideIndex = slides.length
    }


    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }

    slides[slideIndex-1].style.display = "flex"
}
showSlides(slideIndex)

//Car img model//

let modal = document.getElementById("myModal")
let modalImg = document.getElementById("img01")
let img = document.getElementsByClassName("myImg")

for(let i = 0; i<img.length; i++){
    img[i].addEventListener("click",function(){
        modal.style.display = "block";
        modalImg.src = this.src
    })
}

let closeBtn = document.getElementsByClassName("close")[0]
closeBtn.addEventListener("click",function(){
    modal.style.display = "none"
})

// Car Grid Info script

let carDesc = document.getElementsByClassName("cars-grid-item-desc")
let carBtn = document.getElementsByClassName("cars-grid-item-btn")
let carCloseDescBtn = document.getElementsByClassName("cars-grid-item-desc-x")

for(let i = 0; i< carBtn.length; i++){
    carBtn[i].addEventListener("click",function(){
        carDesc[i].style.display = "block"
    })
}
for(let i = 0; i< carCloseDescBtn.length; i++){
    carCloseDescBtn[i].addEventListener("click",function(){
        carDesc[i].style.display = "none"
    })
}

// Accordion 

let acc = document.getElementsByClassName("accordion-btn")

for(let i = 0; i< acc.length; i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active")
        let panel = this.nextElementSibling
        if(panel.style.display === "block"){
            panel.style.display = "none"
        }else{
            panel.style.display = "block"
        }
    })
}

// Back to top

let myBtt = document.getElementById("myBtt")

function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        myBtt.style.display = "block"
    }else{
        myBtt.style.display ="none"
    }
}

function backToTop(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

window.onscroll = function(){
    scrollFunction()
}







