// KARTY Z OFERTAMI
const tarcicaCard = document.getElementById("tarcica");
const okleinyCard = document.getElementById("okleiny");
const elMebloweCard = document.getElementById("el_meblowe");
const podlogiCard = document.getElementById("podlogi");

// Wyświetlanie kontenera z opisem
const descContainer = document.getElementById("description_container");
const card = document.querySelector(".card-container").querySelectorAll(".card");

card.forEach(element =>{
    element.addEventListener("click", () =>{
        var elementId = element.getAttribute("id");     
        
        // Funkcja, która usuwa klasę ACTIVE każdemu kontenerowi z opisem produktu
        function deleteActiveClassFromDesc(){
            document.getElementById("tarcica_opis").className = "description";
            document.getElementById("okleiny_opis").className = "description";
            document.getElementById("el_meblowe_opis").className = "description";
            document.getElementById("podlogi_opis").className = "description";
        }

       switch (elementId){
        case "tarcica":
            /*
                ---Sprawdzenie, czy kontener wraz z kartą
                ---TARCICA SUCHA nie zawiera klasy ACTIVE

                Jeśli żadedem element nie zawiera, przypisuje
                kontenerowi klase ACTIVE.

                Jeśli jakiś element z nich zawiera, zwraca pustą
                klase kontenerowi.
            */
            if(descContainer.className === "" && tarcicaCard.className === "card"){
                descContainer.classList.add("active");
                setTimeout(() => {
                    document.getElementById("tarcica_opis").classList.add("active");
                }, 1100);
            } else {
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }

            /*
                ---Sprawdzenie, czy karta tylko TARCICA 
                ---SUCHA nie zawiera klasy ACTIVE

                Jeśli jej nie zawiera, to ją dodaje a innym
                kartom z produktami usuwa, a kontenerowi przypisuje
                klase ACTIVE po 1 sekundzie, aby animacja zamykania się
                kontenera zdązyła się wykonać
            */

            if(tarcicaCard.className === "card"){
                tarcicaCard.classList.add("active");
                okleinyCard.className = "card";
                elMebloweCard.className = "card";
                podlogiCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                    setTimeout(() => {
                        document.getElementById("tarcica_opis").classList.add("active");
                    }, 1100);
                }
            } 
            
            /*
                ---Jeśli karta TARCICA SUCHA zawiera klase
                ---ACTIVE, to zostaje ona usunięta, wraz z 
                ---usunięciem klasy ACTIVE z kontenera 
            */
            
            else {
                tarcicaCard.className = "card";
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }
            break;
       
        case "okleiny":
            if(descContainer.className === "" && okleinyCard.className === "card"){
                descContainer.classList.add("active");
                setTimeout(() => {
                    document.getElementById("okleiny_opis").classList.add("active");
                }, 1100);
            } else {
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }

            if(okleinyCard.className === "card"){
                okleinyCard.classList.add("active");
                tarcicaCard.className = "card";
                elMebloweCard.className = "card";
                podlogiCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                    setTimeout(() => {
                        document.getElementById("okleiny_opis").classList.add("active");
                    }, 1100);
                }
            } else {
                okleinyCard.className = "card";
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }
            break;

        case "el_meblowe":
            if(descContainer.className === "" && elMebloweCard.className === "card"){
                descContainer.classList.add("active");
                setTimeout(() => {
                    document.getElementById("el_meblowe_opis").classList.add("active");
                }, 1100);
            } else {
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }

            if(elMebloweCard.className === "card"){
                elMebloweCard.classList.add("active");
                okleinyCard.className = "card";
                tarcicaCard.className = "card";
                podlogiCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                    setTimeout(() => {
                        document.getElementById("el_meblowe_opis").classList.add("active");
                    }, 1100);
                }
            } else {
                elMebloweCard.className = "card";
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }
            break;

        case "podlogi":
            if(descContainer.className === "" && podlogiCard.className === "card"){
                descContainer.classList.add("active");
                setTimeout(() => {
                    document.getElementById("podlogi_opis").classList.add("active");
                }, 1100);
            } else {
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }
            
            if(podlogiCard.className === "card"){
                podlogiCard.classList.add("active");
                okleinyCard.className = "card";
                tarcicaCard.className = "card";
                elMebloweCard.className = "card";
                if(descContainer.className === ""){
                    setTimeout(() => {
                        descContainer.classList.add("active");
                    }, 1000);
                    setTimeout(() => {
                        document.getElementById("podlogi_opis").classList.add("active");
                    }, 1100);
                }
            } else {
                podlogiCard.className = "card";
                descContainer.className = "";
                deleteActiveClassFromDesc();
            }
            break;
       }
        
       if(element.classList.contains("active")){
        $('html, body').animate({
            scrollTop: $(descContainer).offset().top - 50
        }, 1500, '');
       } else {
        $('html, body').animate({
            scrollTop: $(document.getElementById("oferta")).offset().top
        }, 1500, '');
       }
    
    });
});



