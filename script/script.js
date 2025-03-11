const about_button = document.getElementById("about_button");
const about_target = document.getElementById("about_target");

about_button.addEventListener("click" , () => {
    about_target.scrollIntoView({behavior: "smooth"});
})

const menu_button = document.getElementById("menu_button");
const menu_target = document.getElementById("menu_target");

menu_button.addEventListener("click" , () => {
    menu_target.scrollIntoView({behavior: "smooth"});
})

const logo_button = document.getElementById("logo_button");

logo_button.addEventListener("click" , () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})