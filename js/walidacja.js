'use strict';

var wyslijBtn = document.getElementById("wyślij");
var wszystkieZgody = document.getElementById("zgoda_all");

function stanCheckbox() {
    if (zgoda_all.checked) {
        document.getElementById("zgoda_1").checked = true;
        document.getElementById("zgoda_2").checked = true;
    } else {
        document.getElementById("zgoda_1").checked = false;
        document.getElementById("zgoda_2").checked = false;
    }
}

//document.getElementById(zgoda_all).onchange = stanCheckbox;

function waliduj() {
    if (document.getElementById("imie").value.trim() == "") {
        alert("Wypełnij imie i nazwisko");
    }
    if (document.getElementById("email").value.trim() == "") {
        alert("Wypełnij e-mail");
    }
    if (!document.getElementById("zgoda_1").checked) {
        alert("Zaznacz pierwszą zgodę")
    }


}

wyslijBtn.addEventListener("click", waliduj);
wszystkieZgody.addEventListener("change", stanCheckbox)
