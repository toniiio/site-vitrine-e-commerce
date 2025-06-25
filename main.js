const toggle_menu = document.querySelector(".menuMobile");
const div = document.querySelector(".hide");

toggle_menu.addEventListener("click", function(){

    
    div.classList.toggle("hide");
})