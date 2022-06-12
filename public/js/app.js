import { getLocalStorage, addLocalStore, createListFromLocalStorage } from "./common.js";
import { showElected } from "./show-name.js";


function app() {
    addLocalStore();
    createListFromLocalStorage();
    let btnPlay = document.getElementById("play");
    btnPlay.addEventListener('click', () => {
        showElected()
    })

}

app();