window.addEventListener('load',function(){
  var usuarios=[{email:"miiriampc@gmail.com", pswd: "20xxM23"},
                {email:"cinthia@gmail.com", pswd: "cinthi89"},
                {email:"karito@gmail.com", pswd: "alejos32"}];

  document.getElementById('btnlogin').onclick=function(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var msj1=document.getElementById('msj-email');
    var msj2=document.getElementById('msj-pswd');

    function validaEmail(valor){
      if(valor == ""){
        msj1.innerHTML="Debe ingresar su email";
        //msj1.innerHTML="";
        return false;
      }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))) {
        msj1.innerHTML="Ingrese en el formato adecuado";
        return false;
      }
      msj1.innerHTML="";
      validaPassword(password);
    }
    function validaPassword(valor){
      if(valor.length < 6){
        msj2.innerHTML="Ingrese su password, debe ser más de 6 carateres";
        return false;
      }else{
        for (var i in usuarios) {
          if(usuarios[i].email!=email && usuarios[i].pswd!=password){
            msj2.innerHTML="El email y/o password ingresados son incorrectos";
            return false;
          }else {
            alert("aki");
            alert("sii"+usuarios[i].email+"--"+ usuarios[i].pswd);// break;
          }
        }
        msj2.innerHTML="";
        window.location="index.html";
      }
    }

    validaEmail(email);
  };
});
