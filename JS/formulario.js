const submitButton = document.querySelector("#submit-button");
const form =document.querySelector("#cadastro");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#telefone");
const textInput = document.querySelector("#descricao")
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//const erroMsg = document.querySelector(".msg");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
   
  console.log(e)

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const telValue = telInput.value;
  const textValue = textInput.value;

// if (nameValue === ""|| emailValue === "" || telValue === "" || textValue === ""){
//  return alert ("Por favor, preencha todos os campos corretamente");

  validaNome();
  validaEmail();
  validaCel();
  //validaDescricao();


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


  console.log("clicked!");
 });