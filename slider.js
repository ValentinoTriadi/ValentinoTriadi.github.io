let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
showSlides();

function showSlides() {
    let i;
    let slides1 = document.getElementsByClassName("ProjectImgContainer1");
    let slides2 = document.getElementsByClassName("ProjectImgContainer2");
    let slides3 = document.getElementsByClassName("ProjectImgContainer3");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
    slides1[slideIndex1-1].style.display = "flex";  

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
    slides2[slideIndex2-1].style.display = "flex";  

    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
    slides3[slideIndex3-1].style.display = "flex";  
    setTimeout(showSlides, 1500); // Change image every 2 seconds
}