/**
 *Lance nos deux fonctions une fois la page chargée
 */
if (document.readyState === "complete") {
    naissance();
    typewriter();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        naissance();
        typewriter();
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

/**
 * Affichage animation phrase d'accroche
 */
var aText = new Array(
    "Je recherche actuellement une alternance de 2 ans pour une formation de développeur d'application iOS / Android. "
);
var iSpeed = 30;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = "";
var iRow;

function typewriter() {
    sContents = " ";
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("poste");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br />";
    }
    destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}