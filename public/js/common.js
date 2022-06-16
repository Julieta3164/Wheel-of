import { addBalloons } from "./show-name.js";

function getLocalStorage() {
    //addLocalStore()
    let getList = localStorage.getItem("entry")
    getList = JSON.parse(getList)
    if (getList[0] === null) {
        getList = []
    }
    return getList
}

function deleteName(rand_name) {
    let list = getLocalStorage();
    let removed = list.splice(rand_name, 1);
    addBalloons(list)
    localStorage.setItem("entry", JSON.stringify(list))
}

// helper for develop data in localStorage initially
function addLocalStore(nombre) {
    let getList = getLocalStorage()
    getList.indexOf(nombre) == -1 ? getList.push(nombre) : null
    localStorage.setItem("entry", JSON.stringify(getList))
}

function createListFromLocalStorage(editar = "none", eliminar = "none") {
    let list = getLocalStorage()
    let ul = document.querySelector("#list")

    ul.innerHTML = "";

    list.forEach(item => {
        let li = document.createElement("li")
        li.classList.add("list-group-item")
        let div = document.createElement("div")
        div.classList.add("col-xs-12")
        div.classList.add("col-sm-9")

        let span = document.createElement("span")
        span.innerHTML = item

        //botones
        let spanmod = document.createElement("span")
        spanmod.classList.add("fa-solid")
        spanmod.classList.add("fa-pencil")
        spanmod.dataset.name = item
        spanmod.style.display = editar

        spanmod.addEventListener('click', (elm) => {
            //implement this
            console.log(elm.path[1])
        })

        let spandel = document.createElement("span")
        spandel.classList.add("fa-solid")
        spandel.classList.add("fa-trash-can")
        spandel.dataset.name = item
        spandel.style.display = eliminar

        spandel.addEventListener('click', (elm) => {
            console.log(elm)
            deleteName(elm.srcElement.dataset.name)
            createListFromLocalStorage("none", "")
                /*elm.originalTarget[2].remove()*/
        })

        div.appendChild(span)
        div.appendChild(spanmod)
        div.appendChild(spandel)
        let div2 = document.createElement("div")
        div2.classList.add("clearfix")
        li.appendChild(div)
        li.appendChild(div2);

        ul.appendChild(li)
    })
    return ul
}



export { getLocalStorage, addLocalStore, createListFromLocalStorage, deleteName };