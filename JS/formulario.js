const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function validaNome(){
  if(campos[0].value.length <3)
  {
    console.log('NOME DEVE TER 3 CARACTERES');
  }else{
    console.log('VALIDADO O NOME');
 }
}
validaNome()

function validaEmail(){
  if(emailRegex[0].value =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
  {
    console.log('DIGITE UM EMAIL VALIDO');
  }else{
    console.log('VALIDADO O NOME');
 }
}