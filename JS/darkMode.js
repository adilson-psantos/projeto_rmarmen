const html = document.querySelector('html')
const checkbox = document.querySelector("input[name=theme]")
const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bodyColor: getStyle(html, '--body-color'),
    headerColor: getStyle(html, '--header-color'),
    headerButton: getStyle(html, '--header-button'),
    colorWeekdays: getStyle(html, '--color-weekdays'),
    backButton: getStyle(html, '--button-color'),
    nextButton: getStyle(html, '--button-color'),
    currentDay: getStyle(html, '--current-day'),
    eventColor: getStyle(html, '--event-color'),
    eventColor: getStyle(html, '--event-color'),
    colorDay: getStyle(html, '--color-day'),
    modalEvent: getStyle(html, '--modal-event')
}

const darkMode = {
    bodyColor:'#282a36',
    headerColor: '#000000',
    headerButton:'#ffffff',
    backButton: '#363636' ,
    nextButton: '#363636' ,
    colorWeekdays: '#ffffff' ,
    currentDay: '#f8f8f2',
    eventColor: '#6272a4',
    colorDay: '#44475a'
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key]) 
        console.log(transformKey(key), colors[key])
      }
    )
    console.log(colors)
}



checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)

    let theme = target.checked ? "dark" : "light"
    
    //Color background Nav
    document.getElementsByClassName("sidebar")[0].style.backgroundColor = (theme == "dark" ? "#000000" :  "#ffffff")
    
    //Color Font Nav
    let sidebar = document.querySelector(".sidebar");
    let links = sidebar.getElementsByTagName("a");
    
    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = (theme == "dark" ? "#000000" : "#ffffff");
        links[i].style.color = (theme == "dark" ? "#ffffff" : "#7a7676");
    }    

    //Color Body
    let body = document.getElementsByTagName("body")[0];
    body.className = theme;

    //Color Header
    let header = document.getElementsByTagName("header")[0];
    header.style.backgroundColor = (theme == "dark" ? "#000000" :  "#ffffff");
    header.style.color  = (theme == "dark" ? "#000000" :  "#ffffff");

    //Color Footer
    let footer = document.getElementsByClassName("footerContainer")[0];
    footer.style.backgroundColor = (theme == "dark" ? "#000000" :  "#ffffff");

    let elemntIFooter = document.getElementsByClassName("footerContainer")[0].getElementsByTagName("i")
    for (let i = 0; i < elemntIFooter.length; i++) {
        elemntIFooter[i].style.color = (theme == "dark" ? "#ffffff" : "#7a7676");
    }

    let elementAFooter = document.getElementsByClassName("footerContainer")[0].getElementsByTagName("a")
    for (let i = 0; i < elementAFooter.length; i++) {
        elementAFooter[i].style.color = (theme == "dark" ? "#ffffff" : "#7a7676");
    }

    let elementPFooter = document.getElementsByClassName("footerContainer")[0].getElementsByTagName("p")
    for (let i = 0; i < elementPFooter.length; i++) {
        elementPFooter[i].style.color = (theme == "dark" ? "#ffffff" :"#7a7676" );
    }
    let fontcopyrights = document.getElementsByClassName("footerContainer")[0].getElementsByClassName("footer_copyrights")[0].getElementsByTagName("p")

    document.getElementsByClassName("footerContainer")[0].getElementsByClassName("footer_copyrights")[0].style.backgroundColor = (theme == "dark" ? "black" : "#f4f4f4");
    for (let i = 0; i < fontcopyrights.length; i++) {
        fontcopyrights[i].style.color = (theme == "dark" ? "#ffffff" : "#747676");
        //fontcopyrights[i].style.backgroundColor = (theme == "dark" ? "#000000" : "#747676")
    }

    page_eventos(theme);
    page_depoimentos(theme);
    page_tratamentos(theme);    
    page_cursos(theme);
    page_cadastro(theme);
});


function page_eventos(theme){
    /*Botões superior do calendario*/
    if(document.getElementById('backButton') !== null){
        document.getElementById('backButton').style.color = (theme == "dark" ? "#241f1f" : "#ffffff");
        document.getElementById('nextButton').style.color = (theme == "dark" ? "#241f1f" : "#ffffff");
        document.getElementById('currentDay').style.color = (theme == "dark" ? "#747676" : "#ffffff");
        document.getElementById('monthDisplay').style.color = (theme == "dark" ? "#747676" : "#ffffff");
    }
}

function page_depoimentos(theme){
    let containers = document.getElementsByClassName("container");

    if(containers.length > 0){
        for (let i = 0; i < containers.length; i++) {
            let card = containers[i].getElementsByClassName("card")[0];

            if(card !== undefined){
                if(theme == "dark")
                    card.classList.add("cardDarkMode");
                else
                    card.classList.remove("cardDarkMode");
            }
        }    
    }    
}

function page_tratamentos(theme){
    let cards = document.getElementsByClassName("card");

    if(cards.length > 0){
        for (let i = 0; i < cards.length; i++) {            
            if(theme == "dark"){
                cards[i].classList.add("cardDarkMode");
                cards[i].style.backgroundColor = "black";
            }                
            else{
                cards[i].classList.remove("cardDarkMode");
                cards[i].style.backgroundColor = "#ffffff";
            }   
        }    
    }    
}

function page_cadastro(theme){
    let container = document.getElementsByClassName("container")[0];

    if(container !== undefined){
        if(theme == "dark"){            
            container.classList.add("formulario_cardDarkMode");
        }                
        else{            
            container.classList.remove("formulario_cardDarkMode");
            document.getElementById('submit-button').style.background = "#ffffff";
        }    
    }    
}

function page_cursos(theme){
    let buttons = document.getElementsByClassName("btn");

    if(buttons.length > 0){
        for (let i = 0; i < buttons.length; i++) {            
            if(theme == "dark"){            
                buttons[i].style.backgroundColor = "#6272a4"
                buttons[i].style.border = "none"
            }                
            else{            
                buttons[i].style.backgroundColor = "#0abab5"
            }    
        }    
    }    
}

//Hover nos menus nav
function changeHoverColor_darkMode(element) {
    const isChecked = checkbox.checked;
    if(isChecked){
        element.style.backgroundColor = "#a7a6a6";
        element.style.color = "#ffffff"
        //element.style.color = "white";
    }
    else{
        element.style.backgroundColor = "#0abab5";
        element.style.color = "white";
    }    
  }

  function restoreDefaultColor_darkMode(element) {
    const isChecked = checkbox.checked;
    if(isChecked){ 
        element.style.backgroundColor = "black";
        //element.style.color = "black";
    }
    else{
        element.style.backgroundColor = "#ffffff";
        element.style.color = "#7a7676";
    }    
  }



  



