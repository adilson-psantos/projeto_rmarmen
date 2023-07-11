const changeThemeBtn = document.querySelector("#change-theme");

//Toogle dark mode
function toggleDarkMode(){
    document.body.classList.toggle("dark");}

//load light or dark mode

changeThemeBtn.addEventListener("change", function(){
   toggleDarkMode();

// Save or remove dark mode
if (document.body.classList.contains("dark")) {  
    localStorage.setItem("dark",1);
}
});


