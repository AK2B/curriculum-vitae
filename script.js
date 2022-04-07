if (document.readyState === "complete") {
    naissance();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        naissance();
    });
}

function naissance() {
    var today = new Date();
    console.log(today);
    var birthDate = new Date("11 25 1987");
    console.log(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        console.log(age);
    }
    return (document.getElementById("naissance").innerHTML = age + " ans");
}