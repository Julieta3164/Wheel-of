import { getLocalStorage, addLocalStore, createListFromLocalStorage } from "./common.js";
import { showElected } from "./show-name.js";


function app() {
    createListFromLocalStorage();
    let btnPlay = document.getElementById("play");
    btnPlay.addEventListener('click', () => {
        showElected()
    })

    let btnAdd = document.getElementById("btnAction");
    btnAdd.addEventListener('click', () => {
        let name = document.getElementById("Name").value.trim();
        if (name != "") {
            addLocalStore(name);
            createListFromLocalStorage();
            document.getElementById("Name").value="";
        }
    })

}

app();