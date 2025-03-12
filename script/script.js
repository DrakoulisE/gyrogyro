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
    expand_close_sandwich_func();
    expand_close_portions_func();
    expand_close_salads_func();
    expand_close_more_func();
})

const nav_button_close = document.getElementById("mobile_menu_close");

nav_button_close.addEventListener("click" , () => {
    let nav_menu = document.getElementById("mobile_nav_menu");
    nav_menu.style.display = "none";
    mobile_menu_open.style.display = "block";
    mobile_menu_close.style.display = "none";
})

//menu portions
const menu_portions = document.getElementById("portions");
const portions_expand = document.getElementById("portions_expand");

menu_portions.addEventListener("click" , () => {
    portions_expand.style.display = "block";
    setTimeout(() => {
        portions_expand.style.visibility = "visible";
        portions_expand.style.opacity = "1";
    }, 10)

})

const expand_close_portions = document.getElementById("expand_close_portions");

expand_close_portions.addEventListener("click" , () => {
    expand_close_portions_func();
})

const expand_close_portions_func = () => {
    portions_expand.style.visibility = "hidden";
    portions_expand.style.opacity = "0";  
    setTimeout(() => {
        portions_expand.style.display = "none";
    }, 300)
}

//menu sandwich
const menu_sandwich = document.getElementById("sandwich");
const sandwich_expand = document.getElementById("sandwich_expand");

menu_sandwich.addEventListener("click" , () => {
    sandwich_expand.style.display = "block";
    setTimeout(() => {
        sandwich_expand.style.visibility = "visible";
        sandwich_expand.style.opacity = "1";
    }, 10)

})

const expand_close_sandwich = document.getElementById("expand_close_sandwich");

expand_close_sandwich.addEventListener("click" , () => {
    expand_close_sandwich_func();
})

const expand_close_sandwich_func = () => {
    sandwich_expand.style.visibility = "hidden";
    sandwich_expand.style.opacity = "0";  
    setTimeout(() => {
        sandwich_expand.style.display = "none";
    }, 300)
}

//menu salads
const menu_salads = document.getElementById("salads");
const salads_expand = document.getElementById("salads_expand");

menu_salads.addEventListener("click" , () => {
    salads_expand.style.display = "block";
    setTimeout(() => {
        salads_expand.style.visibility = "visible";
        salads_expand.style.opacity = "1";
    }, 10)

})

const expand_close_salads = document.getElementById("expand_close_salads");

expand_close_salads.addEventListener("click" , () => {
    expand_close_salads_func();
})

const expand_close_salads_func = () => {
    salads_expand.style.visibility = "hidden";
    salads_expand.style.opacity = "0";  
    setTimeout(() => {
        salads_expand.style.display = "none";
    }, 300)
}

//menu more
const menu_more = document.getElementById("more");
const more_expand = document.getElementById("more_expand");

menu_more.addEventListener("click" , () => {
    more_expand.style.display = "block";
    setTimeout(() => {
        more_expand.style.visibility = "visible";
        more_expand.style.opacity = "1";
    }, 10)

})

const expand_close_more = document.getElementById("expand_close_more");

expand_close_more.addEventListener("click" , () => {
    expand_close_more_func();
})

const expand_close_more_func = () => {
    more_expand.style.visibility = "hidden";
    more_expand.style.opacity = "0";  
    setTimeout(() => {
        more_expand.style.display = "none";
    }, 300)
}