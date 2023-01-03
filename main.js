import {getPokemon} from "./api.js";
import styles from "./style.css";

document.getElementById("fetch").addEventListener("click", function() {
    getPokemon().then(function(pokemon) {
        alert(pokemon.name);
    })
})