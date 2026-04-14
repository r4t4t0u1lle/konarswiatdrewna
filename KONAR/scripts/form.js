function sendForm(){
    function validEmail(email){
        var validEmail = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if(validEmail === null){
            return null;
        }
        else{
            return validEmail[0];
        }
        
    }
    
    var params = {
        name: document.getElementById("name").value,
        email: validEmail(document.getElementById("email").value),
        message: document.getElementById("message").value,
    };

    const serviceID = "service_9q1ksgt";
    const templateID = "template_0r8m7kd";

    var result = document.getElementById("form_result"); // Blok z wynikiem
    if(params.name === "" || params.email === null){
        result.textContent = "Wypełnij dane prawidłowo!";
        result.style.display = "grid";
        result.style.color = "var(--primary-white)";
    }
   
    else{
            let btnbg = document.getElementById("form_btn_bg")
            let btn = document.getElementById("form_btn");
            btn.removeAttribute('onclick', ''); 
              
        
     

        emailjs
            .send(serviceID,templateID,params)
            .then((res) =>{
                
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";

                    console.log(res);

                    // Informacja odnośnie wysłąnia formularza
                    result.style.display = "none";
                    btn.querySelector('a').textContent ="Wysłano!";
                    btnbg.style.height = "48px";
                    btn.querySelector('a').style.color = "var(--primary-white)";
                    
                    // Przywrócenie domyślnego wyglądu przycisku
                    setTimeout(() => {
                        btn.setAttribute('onclick', 'sendForm()');
                        btn.querySelector('a').textContent ="Wyślij";
                        if(document.body.offsetWidth >= 992){
                            btnbg.style.height = "4px";
                        btn.querySelector('a').style.color = "var(--primary-dark)";
                        }
                    }, 10000);     
                })
            .catch((err)=>console.log(err));
           
          
    }
  
}

