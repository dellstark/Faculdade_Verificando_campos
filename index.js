var email = document.getElementById("email");
var senha = document.getElementById("senha");
var logar = document.getElementById("logar");
var msgerro = document.getElementById("msgerro");

logar.addEventListener("click" , function (){

    if(email.value == "" || senha.value == ""){
        alert("Os campos estão vazios!");
        msgerro.innerText = "Por favor, preencha todos os campos.";
    } else{
        alert(`Olá ${email.value}, os campos foram preenchidos corretamente!`);
    }

});
