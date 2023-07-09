const cadastro =document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)     

function validaFormulario(){                                                                            
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" 
  && document.getElementById("telefone").value != "" &&
  document.getElementById("informacao").value != ""){
  alert("Cadastro realizado com sucesso!Aguarde a nossa resposta.")

  }else{

    alert("Por favor, preencha os campos obrigatórios!")
  }
}  
validaFormulario()