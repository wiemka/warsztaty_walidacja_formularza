'use strict';

var wyslijBtn = document.getElementById("wyślij");

function stanCheckbox {
    alert("działa");
}

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
