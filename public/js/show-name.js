let list = []

function addLocalStore() {
    let name = ["Esther", "Miguel", "Ysabel", "Lucero", "Iria", "Juliet", "Marybell", "Carmen", "Alicia", "Pelayo"];
    localStorage.setItem("entry", JSON.stringify(name))
}

function getLocalStorage() {
    addLocalStore()
    let getList = localStorage.getItem("entry")
    getList = JSON.parse(getList)
    return getList
}


function deleteName(rand_name) {
    let removed = list.splice(rand_name, 1);
}

function nameRandom() {
    if (list.length == 0) {
        list = getLocalStorage()
    }
    let rand_name = Math.floor(Math.random() * list.length)
    let getName = list[rand_name]
    deleteName(rand_name)
    console.log(list)
    return getName
}

function showElected() {
    let getName = nameRandom()
    let div = document.getElementById("name");
    div.innerHTML = `  "${getName}" <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="rgb(192, 0, 0)" class="bi bi-emoji-dizzy-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
  </svg>`
}