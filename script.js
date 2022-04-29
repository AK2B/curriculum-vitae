/**
 *Lance la fonction une fois la page chargée
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