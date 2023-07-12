const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


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
    mostraErro([0])
  }else{
    removeErro[0]
  
 }
}
validaNome()

function validaEmail(){
  if(campos[1].value .length =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
  {
    console.log('DIGITE UM EMAIL VALIDO');
  }else{
    console.log('VALIDADO O NOME');
 }
}
validaEmail()

function validaCel(){
  if(campos[2].value .length <11)
  {
    console.log('DIGITE UM TELEFONE VÁLIDO');
  }else{
    console.log('TELEFONE VALIDADO');
 }
}
validaCel()

