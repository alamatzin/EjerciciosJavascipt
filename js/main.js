let btn = document.getElementById("btnVal");
let campo1 = document.getElementById("n1");
let campo2 = document.getElementById("n2");
let campo3 = document.getElementById("n3");
let resul = document.getElementById("alerta");

btn.addEventListener("click", function(e){
    e.preventDefault();
    if (campo1.value < campo2.value && campo1.value < campo3.value ){
        resul.innerHTML = `El numero menor es ${campo1.value}`
    } 
    if (campo2.value < campo1.value && campo2.value < campo3.value ){
        resul.innerHTML = `El numero menor es ${campo2.value}`
    } 
    if (campo3.value < campo1.value && campo3.value < campo2.value ){
        resul.innerHTML = `El numero menor es ${campo3.value}`
    } 

    if (campo1.value < 101 && campo1.value > 0){
        campo1.classList.remove("is-invalid");
        campo1.classList.add("is-valid");
    } else {
        campo1.classList.remove("is-valid");
        campo1.classList.add("is-invalid");
    }//campo1
    if (campo2.value < 101 && campo2.value > 0){
        campo2.classList.remove("is-invalid");
        campo2.classList.add("is-valid");
    } else {
        campo2.classList.remove("is-valid");
        campo2.classList.add("is-invalid");
    }//campo2
    if (campo3.value < 101 && campo3.value > 0){
        campo3.classList.remove("is-invalid");
        campo3.classList.add("is-valid");
    } else {
        campo3.classList.remove("is-valid");
        campo3.classList.add("is-invalid");
    }//campo3

    
})
