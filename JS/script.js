function carregaPage() {
    let principal = {
        conteudo:{
            decricao:"Ármen Degurmedjian, é Socióloga e Geográfa por formação, atualmente trabalha como Psicoterapeuta, Palestrante, e Facilitadora em Seminários, Cursos, Workshops e Vivências.Tem a rara propriedade de canalizar o subconsciente da pessoa e por ele perceber a causa de todas as frustrações, desajustes, desconforto que desarmonizam a pessoa, que irão levá-la a sérias somatizações futuras como documentepressão, ansiedade, angústia, transtornos graves com sequelas de difícil reversão. Auto Iniciada desde 1985, na Medicina Enérgética do Terceiro Milênio, que é sustentada por três pilares: Energia Fria Vibracional Curadora, Radiestesia Magnética Imantada e Registro da Memória celular (DNA).",
            imagem:"IMG\InstitutoADcorpo.png"
        }, 
    }   
     console.log(principal)

     let logo = document.getElementById("logo");
     for (let conteudo in principal){
     logo.innerHTML +=     
     "<article>" +
     "<p>" +
     principal[conteudo].descricao +
     "</p>" +
     "<div class = round-container>" +
     "<img src =>" +
     principal[conteudo].imagem +
     "</>" +
     "</div>" +
     "</article>";
 }
}
carregaPage();

