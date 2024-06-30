const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const dayNightChange = document.querySelector(".day-night");
const alternateStyles = document.querySelectorAll(".alternate-style");


styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});


dayNightChange.addEventListener("click", () => {
    dayNightChange.querySelector("i").classList.toggle("fa-sun");
    dayNightChange.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});


window.addEventListener("scroll", () => {
    if (document.querySelector('.style-switcher').classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


function setActiveColor(color) {
    localStorage.setItem("color", color);
    changeColor();
}


const changeColor = () => {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
};


window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        dayNightChange.querySelector("i").classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        dayNightChange.querySelector("i").classList.add("fa-moon");
    }


    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        setActiveColor(savedColor);
    }
});
