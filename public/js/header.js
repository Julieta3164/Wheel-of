import { addLocalStore, createListFromLocalStorage } from "./common.js";

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

const navMenuItem = document.querySelectorAll(".nav-menu-item")
let lastAction = "";

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});


function Lista()
{
    document.getElementById("Name").value.trim() != "" ? addLocalStore(document.getElementById("Name").value.trim()) : null;
    createListFromLocalStorage();
}

// function Añadir(obj){
//     alert("Añadir");
// }

// function Borrar(obj){
//     alert("Eliminar");
// }

// function Modificar(obj){
//     alert("Modificar");
// }




// select action for each menu item
navMenuItem.forEach(item => {
    item.addEventListener("click", (obj) => {
        try{
            document.querySelector(".nav-menu-link_active").classList.remove("nav-menu-link_active");
        }
       catch{} 
       obj.target.classList.add("nav-menu-link_active");
        document.querySelector("#spamname").innerHTML = obj.target.innerHTML;
        // document.querySelector("#btnAction").replaceWith(document.querySelector("#btnAction").cloneNode(true));
        // document.querySelector("#btnAction").addEventListener("click", (obj2) => {
        //    eval(obj.target.dataset.action);
        // });
    })
})

