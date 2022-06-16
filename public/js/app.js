import { getLocalStorage, addLocalStore, createListFromLocalStorage } from "./common.js";
import { showElected, addBalloons } from "./show-name.js";


function app() {
    addLocalStore();
    createListFromLocalStorage();
    // addBalloons();
    let btnPlay = document.getElementById("play");
    btnPlay.addEventListener('click', () => {
        showElected()
    })

}

app();