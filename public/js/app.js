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
            document.getElementById("Name").value = "";
        }
    })
    let btnreset = document.getElementById("reset");
    btnreset.addEventListener('click', () => {
        reset()
    })


}


function reset() {
    let ul = document.querySelector("#list");

    let h1 = document.querySelector("h1#name");
    h1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="red"
    class="bi bi-person-x-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
        d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
</svg>`
    let getList = [];
    localStorage.setItem("entry", JSON.stringify(getList))
    createListFromLocalStorage();
}


app();