function hoverOut(){
    img = document.getElementById("box")
    img.src = "../assets/C1/FotoAku-01.png"
    // var button = document.getElementById("invis-button")
    // button.disabled = "disabled"
}
function changeToBlack(){
    img = document.getElementById("box")
    img.src = "../assets/C1/grey.png"
    // var button = document.getElementById("invis-button")
    // button.disabled = false
}

function smoothScroll(href){
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
}

function activeClass(a){
    for (let i = 1; i <=4; i++) {
        document.getElementById(`a${i}`).className = ""
    }
    
    if (a === 'a1'){
        document.getElementById('a1').className = "navactive"
        } else if (a === "a2") {
            document.getElementById('a2').className = "navactive"
        } else if (a === "a3"){
            document.getElementById('a3').className = "navactive"
        } else {
        document.getElementById('a4').className = "navactive"
    }
}

function firstProject() {
    document.location = "https://github.com/ValentinoTriadi/Dicedu---Tubes-Pengkom-2022.git"
}

function secondProject() {
    document.location = "https://github.com/ValentinoTriadi/Bondowoso---Tubes-Daspro-2023.git"
}
function thirdProject() {
    document.location = "https://github.com/ValentinoTriadi/PNC-Challenge-2023.git"
}
function github() {
    document.location = "https://github.com/ValentinoTriadi"
}
function instagram() {
    document.location = "https://www.instagram.com/valentinotriadi"
}
function linkedin() {
    document.location = "https://www.linkedin.com/in/valentino-triadi-47b30a263"
}




if (screen.width < 3300) {
    document.getElementById("nameContainer").style.transform = "translateY(-25%)"
}


// let sections = document.getElementsByTagName('section');
// // tracks index of current section
// let currentSectionIndex = 0;

// document.addEventListener('scroll', function() {
//     let C1height = document.getElementById("C1").clientHeight
//     let C2height = document.getElementById("C2").clientHeight
//     let C3height = document.getElementById("C3").clientHeight
//     let C4height = document.getElementById("C4").clientHeight
//     var scrollPosition = document.documentElement.scrollTop
//     if ( scrollPosition <= C1height) {
//         history.pushState({},"", "C1")
//     } else if ( scrollPosition <= (C2height + C1height) && scrollPosition > C1height) {
//         history.pushState({},"", "C2")
//     } else if ( scrollPosition <= (C3height + C2height + C1height) && scrollPosition > (C2height + C1height)) {
//         history.pushState({},"", "C3")
//     } else {
//         history.pushState({},"", "C4")
//     }
// });
