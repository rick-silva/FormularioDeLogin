function password_length(event){
    const bar = document.getElementById("password-length")
    var length = event.target.value.length;
    bar.className = ""

    let carac = ["@","#","$","%","&","*"];
    
    if (length >= 2 && length <= 5){
      bar.classList.add('bad');
      console.log(`add class 'bad'`)

    }else if(length >= 5 && length < 10){
      bar.classList.add('good');
      
    }else if(length >= 10){
      bar.classList.add('perfect')

    }

}

function login(){
  let email = document.getElementById('email').value
  alert(`Bem-Vindo(a) de volta ${email}`)
  limpaCampo('email', 'senha')
}

function limpaCampo(idEmail, idSenha){
  document.getElementById(idEmail).value = '';
  document.getElementById(idSenha).value = '';
}