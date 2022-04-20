if (document.readyState === "complete") {
    naissance();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        naissance();
        typewriter();
    });
}

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
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

var aText = new Array(
    "Je recherche actuellement une alternance de 2 ans pour une formation de développeur d'application iOS / Android. "
);
var iSpeed = 30; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

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