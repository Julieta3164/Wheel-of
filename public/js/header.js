const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

const navMenuItem = document.querySelectorAll(".nav-menu-item")
let lastAction = "";

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});


function Lista(obj)
{
    console.log(obj);
    alert("Lista");
}

function Añadir(obj){
    alert("Añadir");
}

function Borrar(obj){
    alert("Eliminar");
}

function Modificar(obj){
    alert("Modificar");
}




// select action for each menu item
navMenuItem.forEach(item => {
    item.addEventListener("click", (obj) => {
        document.querySelector(".nav-menu-link").classList.remove("nav-menu-link");
        obj.target.classList.add("nav-menu-link");
        document.querySelector("#spamname").innerHTML = obj.target.innerHTML;
        document.querySelector("#btnAction").replaceWith(document.querySelector("#btnAction").cloneNode(true));
        document.querySelector("#btnAction").addEventListener("click", (obj2) => {
           eval(obj.target.dataset.action);
        });
    })
})

