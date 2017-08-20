'use strict';

var wyslijBtn = document.getElementById("wyślij");

function waliduj(){
    if(document.getElementById("imie").value.trim() == ""){
        alert("Wypełnij imie i nazwisko");
    }
    
}

wyslijBtn.addEventListener("click", waliduj);