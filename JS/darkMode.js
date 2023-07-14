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

    var theme = target.checked ? "dark" : "light"
    
    //Color background Nav
    document.getElementsByClassName("sidebar")[0].style.backgroundColor = (theme == "dark" ? "#44475a" :  "#ffffff")
    
    //Color Font Nav
    var sidebar = document.querySelector(".sidebar");
    var links = sidebar.getElementsByTagName("a");
    
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = (theme == "dark" ? "#ffffff" : "#7a7676");
    }
    
    //Color Body
    var body = document.getElementsByTagName("body")[0];
    body.className = theme;

    //Color Header
    var header = document.getElementsByTagName("header")[0];
    header.style.backgroundColor = (theme == "dark" ? "#000000" :  "#ffffff");
    header.style.color  = (theme == "dark" ? "#000000" :  "#ffffff");

    //Color Footer
    var footer = document.getElementsByClassName("footerContainer")[0];
    footer.style.backgroundColor = (theme == "dark" ? "#000000" :  "#ffffff");

    var elemntIFooter = document.getElementsByClassName("footerContainer")[0].getElementsByTagName("i")
    for (var i = 0; i < elemntIFooter.length; i++) {
        elemntIFooter[i].style.color = (theme == "dark" ? "#ffffff" : "#7a7676");
    }

    var elementAFooter = document.getElementsByClassName("footerContainer")[0].getElementsByTagName("a")
    for (var i = 0; i < elementAFooter.length; i++) {
        elementAFooter[i].style.color = (theme == "dark" ? "#ffffff" : "#7a7676");
    }

    var elementPFooter = document.getElementsByClassName("footerContainer")[0].getElementsByTagName("p")
    for (var i = 0; i < elementPFooter.length; i++) {
        elementPFooter[i].style.color = (theme == "dark" ? "#ffffff" :"#7a7676" );
    }



    var fontcopyrights = document.getElementsByClassName("footerContainer")[0].getElementsByClassName("footer_copyrights")[0].getElementsByTagName("p")
    for (var i = 0; i < fontcopyrights.length; i++) {
        fontcopyrights[i].style.color = (theme == "dark" ? "#ffffff" : "#747676");
        fontcopyrights[i].style.backgroundColor = (theme == "dark" ? "#000000" : "#747676")
        fontcopyrights[i].style.backgroundColor = (theme == "dark" ? "#000000" : "#747676")
    }
    var fontcopyrights = document.getElementsByClassName("footerContainer")[0].getElementsByClassName("footer_copyrights")[0].getElementsByClassName("footer_copyrights")
    for (var i = 0; i < fontcopyrights.length; i++) {
        fontcopyrights[i].style.backgroundColor = (theme == "dark" ? "#000000" : "#f4f4f4")
    } 

})

// function changeTheme() {
//     var theme = document.getElementById("input[name=theme]").value;
//     var body = document.getElementsByTagName("body")[0];
//     body.className = theme;
//   }



