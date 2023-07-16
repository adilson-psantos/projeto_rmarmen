const arrayTratamentos =[
    {
        titulo:"Radiestesia Magnética Imantada",
        subtitulo : "Entendendo melhor a Radiestesia Magnetica Imantada",
        texto:"A princípio usamos o pêndulo de cristal como principal instrumento radiestésico, pois este emana uma frequência de ondas magnéticas e gravitacional de forma espiral em torno da pessoa, objeto ou local a ser trabalhado. No momento da aplicação a pessoa fica imantada, seu corpo começa se mover espontaneamente e a espiral de Luz entra em ação. Esta é a propriedade inicial da Radiestesia Magnética Imantada, os obstáculos inconscientes são removidos como que aspirados pelos teus chakras… assim é removido aos poucos o peso do medo e vem a conquista da abundância."
    },
    {
        titulo:"Registro da Memória Celular",
        subtitulo: "Entendento Melhor o Registro da Memória Celular",
        texto: "As células são responsáveis por toda nossa formação física, emocional e cerebral. Quando o espermatozoide atinge o óvulo na nossa concepção, o núcleo da célula se forma com todas as informações ancestrais (DNA). A partir desse momento as células se multiplicam e dá informação física… posteriormente o espírito acopla- se para a formação do embrião. A princípio predomina o físico; as informações instintivas vêm com o desenvolvimento do feto."
    },
];

for (let i = 0; i < arrayTratamentos.length; i++) {
    const article = document.createElement("article");
  /*CRIAÇÃO DE ELEMENTOS*/
  console.log(article);
  
  /*Populando elemento de maneira estatica */
  
  article.innerHTML =`<h3>${arrayTratamentos[i].titulo} </h3>
  <p class="subtitulo">${arrayTratamentos[i].subtitulo}</p>
  <p>${arrayTratamentos[i].texto})</p>`
  
  /* RENDERIZAÇÃO  ADCIONAR OS ELEMENTOS AO DOM */
  const main = document.querySelector('main');
  main.appendChild(article);

  /*Criar idpost2*/
article.id = "tratamento" + (i + 2)
}

const main = document.querySelector('main')
console.log(main)
