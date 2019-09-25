/*
    Fixa text brevid alla fält som säger om inmatninger är korrekt eller inte
    Fixa namn regex mellanslag
*/

var nameBoolean = false;
var mailBoolean = false;
var nummerBoolean = false;
var meddelandeBoolean = false;
$('form').submit(function (event) {
    kollaNamn();
    kollaMail();
    kollaNummer();
    kollaMeddelande();
    if (nameBoolean == true && mailBoolean == true && nummerBoolean == true && meddelandeBoolean == true) {
        event.preventDefault();

        var form = $('form').serialize();
        var jsonform = JSON.stringify($("form").serializeArray());
        $('#test').append(form);
        localStorage.setItem('jsonStorage', jsonform);
        alert("Tack för ditt meddelande");
        var json = JSON.parse(localStorage.getItem('jsonStorage'));
        clearForm(json);
        kollaNamn();
        kollaMail();
        kollaNummer();
        kollaMeddelande();
    } else {
        event.preventDefault();
        alert("Du har skrivit fel i någon av rutorna");
    }
});

$(document).ready(function () {
    var json = JSON.parse(localStorage.getItem('jsonStorage'));
    populateForm(json);
    kollaNamn();
    kollaMail();
    kollaNummer();
    kollaMeddelande();
});

function populateForm(data) {
    for (i in data) {
        $('input[name=' + data[i].name + ']').val(data[i].value);
    }
}

function clearForm(data) {
    for (i in data) {
        console.log(i);
        $('input[name=' + data[i].name + ']').val("");
    }
}

function kollaNamn() {
    var name = $("#name").val();
    var pattern = /^[a-öA-Ö]{3,}\s?([a-öA-Ö]{1,})?$/;
    if (pattern.test(name) == true) {
        nameBoolean = true;
        document.getElementById("namnOk").innerHTML = "Ok";
    } else {
        nameBoolean = false;
        document.getElementById("namnOk").innerHTML = "Ej ok";
    }
}

function kollaMail() {
    var mail = $("#mail").val();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(mail) == true) {
        mailBoolean = true;
        document.getElementById("mailOk").innerHTML = "Ok";
    } else {
        mailBoolean = false;
        document.getElementById("mailOk").innerHTML = "Ej ok";
    }
}

function kollaNummer() {
    var nummer = $("#nummer").val();
    var pattern = /^\d{10}$/;
    if (pattern.test(nummer) == true) {
        nummerBoolean = true;
        document.getElementById("nummerOk").innerHTML = "Ok";
    } else {
        nummerBoolean = false;
        document.getElementById("nummerOk").innerHTML = "Ej ok";
    }
}

function kollaMeddelande() {
    var meddelande = $("#meddelande").val();
    var pattern = /.{1,}/;
    if (pattern.test(meddelande) == true) {
        meddelandeBoolean = true;
        document.getElementById("meddelandeOk").innerHTML = "Ok";
    } else {
        meddelandeBoolean = false;
        document.getElementById("meddelandeOk").innerHTML = "Ej ok";
    }
}

$("#name").keyup(function () {
    kollaNamn();
});

$("#mail").keyup(function () {
    kollaMail();
});

$("#nummer").keyup(function () {
    kollaNummer();
});

$("#meddelande").keyup(function () {
    kollaMeddelande();
}); 