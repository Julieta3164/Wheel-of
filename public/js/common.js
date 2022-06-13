function getLocalStorage() {
    //addLocalStore()
    let getList = localStorage.getItem("entry")
    getList = JSON.parse(getList)
    return getList
}

// helper for develop data in localStorage initially
function addLocalStore() {
    let name = ["Esther", "Miguel", "Ysabel", "Lucero", "Iria", "Juliet", "Marybell", "Carmen", "Alicia", "Pelayo"];
    localStorage.setItem("entry", JSON.stringify(name))
}

function createListFromLocalStorage() {
    let list = getLocalStorage()
    let ul = document.querySelector("#list")

    ul.innerHTML="";

    list.forEach(item => {
        let li = document.createElement("li")
        li.classList.add("list-group-item")
        let div = document.createElement("div")
        div.classList.add("col-xs-12")
        div.classList.add("col-sm-9")

        let span = document.createElement("span")
        span.innerHTML = item
        div.appendChild(span)
        let div2 = document.createElement("div")
        div2.classList.add("clearfix")
        li.appendChild(div)
        li.appendChild(div2);

        ul.appendChild(li)
    })
    return ul
}



export { getLocalStorage, addLocalStore, createListFromLocalStorage };