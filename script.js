/**
 *Lance nos deux fonctions une fois la page chargée
 */
if (document.readyState === "complete") {
    naissance();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        naissance();
    });
}

/**
 * Calcule dynamique de l'age
 */
function naissance() {
    var today = new Date();
    var birthDate = new Date("11 25 1987");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (document.getElementById("naissance").innerHTML = age + " ans");
}

var text = document.getElementById("poste");
var newDom = "";
var animationDelay = 6;

for (let i = 0; i < text.innerText.length; i++) {
    newDom +=
        '<p class="char">' +
        (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
        "</p>";
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style["animation-delay"] = animationDelay * i + "ms";
}