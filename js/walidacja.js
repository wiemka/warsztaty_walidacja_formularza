'use strict';

var wyslijBtn = document.getElementById("wyślij");
var wszystkieZgody = document.getElementById("zgoda_all");
var zgoda_marketingowa_1 = document.getElementById("zgoda_1");
var zgoda_marketingowa_2 = document.getElementById("zgoda_2");

function stanCheckbox() {

    // this.checked - zwraca true/false

    zgoda_marketingowa_1.checked = this.checked;
    zgoda_marketingowa_2.checked = this.checked;
}

//document.getElementById(zgoda_all).onchange = stanCheckbox;

function waliduj() {
    if (document.getElementById("imie").value.trim() == "") {
        alert("Wypełnij imie i nazwisko");
    }
    if (document.getElementById("email").value.trim() == "") {
        alert("Wypełnij e-mail");
    }
    if (!zgoda_marketingowa_1.checked) {
        alert("Zaznacz pierwszą zgodę")
    }


}

wyslijBtn.addEventListener("click", waliduj);
wszystkieZgody.addEventListener("change", stanCheckbox)
