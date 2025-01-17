function togglemenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " nav--open";
    } else {
        x.className = "nav";
    }
    var element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
}

function modeSwitch() {
    let element = document.body;
    if (element.className == "light-mode") {
        darkMode();
        document.getElementById("mode-icon").src = "images/icon-light-mode.png";
    }
    else {
        lightMode();
        document.getElementById("mode-icon").src = "images/icon-dark-mode.png";
    }
}

function darkMode() {
    let element = document.body;
    let footer = document.getElementsByTagName("footer")[0];
    //let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    footer.className = "footer-dark-mode";
    //content.innerText = "Dark Mode is ON";
}

function lightMode() {
    let element = document.body;
    let footer = document.getElementsByTagName("footer")[0];
    //let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    footer.className = "footer-light-mode";
    //content.innerText = "Dark Mode is OFF";
}