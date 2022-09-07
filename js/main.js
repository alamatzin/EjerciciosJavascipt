let btn = document.getElementById("btnVal");
let campo1 = document.getElementById("n1");
let resul = document.getElementById("alerta");

btn.addEventListener("click", function(e){
    e.preventDefault();
    
    if (campo1.value < 201 && campo1.value > 99){
        campo1.classList.remove("is-invalid");
        campo1.classList.add("is-valid");
    } else {
        campo1.classList.remove("is-valid");
        campo1.classList.add("is-invalid");
    }//campo1


    if((campo1.value % 3)==0){
        resul.innerHTML=`${campo1.value} es multiplo de 3`
    }else{
        resul.innerHTML=`${campo1.value} no es multiplo de 3`
    }
})
