function captura1(){
    pass1=document.getElementById("pass1").value;
    console.log(pass1)
}
function captura2(){
    pass2=document.getElementById("pass2").value;
    console.log(pass2)

    if(pass1!==pass2){
    document.getElementById("pass2").value='';
    pass2='';
    window.alert("Las contraseñas no coinciden");
    }
}