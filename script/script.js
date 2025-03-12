const about_button = document.getElementById("about_button");
const about_target = document.getElementById("about_target");

about_button.addEventListener("click" , () => {
    about_target.scrollIntoView({behavior: "smooth"});
})

const mobile_about_button = document.getElementById("mobile_about_button");

mobile_about_button.addEventListener("click" , () => {
    about_target.scrollIntoView({behavior: "smooth"});
    mobile_menu_close.style.display = "none";
    mobile_menu_open.style.display = "block";
    mobile_nav_menu.style.display = "none";
})

about_button.addEventListener("click" , () => {
    about_target.scrollIntoView({behavior: "smooth"});
})

const menu_button = document.getElementById("menu_button");
const menu_target = document.getElementById("menu_target");

menu_button.addEventListener("click" , () => {
    menu_target.scrollIntoView({behavior: "smooth"});
})

const mobile_menu_button = document.getElementById("mobile_menu_button");

mobile_menu_button.addEventListener("click" , () => {
    menu_target.scrollIntoView({behavior: "smooth"});
    mobile_menu_close.style.display = "none";
    mobile_menu_open.style.display = "block";
    mobile_nav_menu.style.display = "none";
})

const logo_button = document.getElementById("logo_button");

logo_button.addEventListener("click" , () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})

const nav_button_open = document.getElementById("mobile_menu_open");

nav_button_open.addEventListener("click" , () => {
    let nav_menu = document.getElementById("mobile_nav_menu");
    nav_menu.style.display = "flex";
    mobile_menu_open.style.display = "none";
    mobile_menu_close.style.display = "block";
})

const nav_button_close = document.getElementById("mobile_menu_close");

nav_button_close.addEventListener("click" , () => {
    let nav_menu = document.getElementById("mobile_nav_menu");
    nav_menu.style.display = "none";
    mobile_menu_open.style.display = "block";
    mobile_menu_close.style.display = "none";
})

const menu_portions = document.getElementById("portions");
const menu_expand = document.getElementById("menu_expand");

menu_portions.addEventListener("click" , () => {
    menu_expand.style.display = "block";    
})

const expand_close = document.getElementById("expand_close");

expand_close.addEventListener("click" , () => {
    menu_expand.style.display = "none";
})
