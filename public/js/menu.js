// let menu = document.querySelector(".navbar")
// document.querySelector("#menu-icon").onclick =() => {
//     menu.classList.toggle("open-menu")

// }

// document.addEventListener("DOMContentLoaded", () => {
//     let menu = document.querySelector(".navbar")
//     let menuIcon = document.querySelector("#menu-icon")

//     menuIcon.onclick = () => {
//         menu.classList.toggle("open-menu")
//     }
// })


document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".navbar");
    const menuIcon = document.querySelector("#menu-icon");

    menuIcon.addEventListener("click", () => {
        menu.classList.toggle("open-menu");
    });
});