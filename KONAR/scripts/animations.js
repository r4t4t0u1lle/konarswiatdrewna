/* 
            -----------
            ---O NAS---
            ------------   
*/

// Pasek nawigacyjny

document.getElementById("o_nas_nav").addEventListener("click", () =>{ // o nas
    $('html, body').animate({
        scrollTop: $('body').offset().top = 0
    }, 1000, '');
});

document.getElementById("oferta_nav").addEventListener("click", () =>{ // oferta
    $('html, body').animate({
        scrollTop: $('#oferta').offset().top
    }, 1000, '');
});

document.getElementById("galeria_nav").addEventListener("click", () =>{ // galeria
    $('html, body').animate({
        scrollTop: $('#galeria').offset().top
    }, 1000, '');
});

document.getElementById("kontakt_nav").addEventListener("click", () =>{ // kontakt
    $('html, body').animate({
        scrollTop: $('#kontakt').offset().top
    }, 1000, '');
});


/* 
            ------------
            ---OFERTA---
            ------------    
*/

// Karuzela zdjęć do kart w seksji OFERTA
const cardBg = [
    document.getElementById("tarcica"),
    document.getElementById("okleiny"),
    document.getElementById("el_meblowe"),
    document.getElementById("podlogi")
];
cardBg.forEach(element =>{

    var elementId = element.getAttribute("id");
    var slideTime = 6000; // 6 sekund
    var images = [];
    var i = 0;

    images[0] = '../KONAR/images/' + elementId + '/1.jpg';
    images[1] = '../KONAR/images/' + elementId + '/2.jpg';
    images[2] = '../KONAR/images/' + elementId + '/3.jpg';
    function changePicture(){
            document.getElementById(elementId).style.backgroundImage = "url(" + images[i] + ")";
    
            if (i < images.length - 1) {
                i++;
            } else {
                i = 0;
            } 
            setTimeout(changePicture, slideTime);
    }
        document.getElementById("oferta").onload = changePicture();

});

/*
            -------------
            ---GALERIA---
            -------------
*/

document.querySelector("footer a").addEventListener("click", () =>{
    $('html, body').animate({
        scrollTop: $('body').offset().top = 0
    }, 1500, '');
});


/*
            -------------
            ---KONTAKT---
            -------------
*/

// ---Formularz---

// Najechanie na przycisk kursorem
document.getElementById("form_btn").addEventListener("mouseover", () =>{
    document.getElementById("form_btn_bg").style.height = "48px";
    document.querySelector("#form_btn a").style.color = "var(--primary-white)";
});

// Zjechanie z przycisku kursorem
document.getElementById("form_btn").addEventListener("mouseleave", () =>{
    if(document.body.offsetWidth >= 992){
        document.getElementById("form_btn_bg").style.height = "4px";
        document.querySelector("#form_btn a").style.color = "var(--primary-dark)";
    }
});   

/*
            ------------
            ---STOPKA---
            ------------
*/



function screenRes(){
    document.getElementById("o_nas").style.height = `${screen.height}px`;
}

function screenBack(){
    document.getElementById("o_nas").style.height = '100vh';
}

window.addEventListener('onload', () =>{
    if(screen.height > $(document).width()){
        screenRes();
    }
    else{
        screenBack();
    }
});

window.addEventListener('resize', () =>{
    if(screen.height > $(document).width()){
        screenRes();
    }
    else{
        screenBack();
    }
})
