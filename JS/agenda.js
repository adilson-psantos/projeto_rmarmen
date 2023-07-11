let meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro","Novembro", "Dezembro"]


let data = new Date()
let diaNumero = data.getDay()
let dia = data.getDate()
let mes = meses[data.getMonth()]
let ano = data.getFullYear()

let ativo = document.querySelector(".semana li:nth-child(" + (diaNumero + 1) + ")")
ativo.classList.add("atual")

let h1 = document.createElement("h1")
h1.innerHTML = dia
ativo.appendChild(h1)

console.log(ativo)

let h5 = document.createElement("h5")
h5.innerHTML = mes
ativo.appendChild(h5)

let h3 = document.createElement("h3")
h3.innerHTML = ano
ativo.appendChild(h3)