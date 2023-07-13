const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit' , (e) => {
  e.preventDefault();
  validaNome();
  validaEmail();
  validaCel();
});

function mostraErro(formulario){
  campos[formulario].style.border='2px solid #e63636';
  spans[formulario].style.display='block';

}

function removeErro(formulario){
  campos[formulario].style.border='';
  spans[formulario].style.display='none';

}

function validaNome(){
  if(campos[0].value.length <3)
  {
    mostraErro(0)
  }else{
    removeErro(0)
  
 }
}
validaNome()

function validaEmail(){
  if(!emailRegex.test(campos[1].value))
  {
    mostraErro(1)
  }else{
    removeErro(1)
 }
}
validaEmail()

function validaCel(){
  if(campos[2].value .length <11) 
 {
    mostraErro(2)
  }else{
    removeErro(2)
 }
}
validaCel()

