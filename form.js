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
    }
    else {
        event.preventDefault();
        alert("DU SKREV FEL FITTNOOB");
    }
});

$(document).ready(function () {
    var json = JSON.parse(localStorage.getItem('jsonStorage'));
    populateForm(json);
});


function populateForm(data) {
    for (i in data) {
        $('input[name=' + data[i].name + ']').val(data[i].value);
    }
}

function kollaNamn() {
    var name = $("#name").val();
    var pattern = /[a-öA-Ö]{3}/;
    if (pattern.test(name) == true) {
        nameBoolean = true;
    }
    else {
        nameBoolean = false;
    }
}

function kollaMail() {
    var mail = $("#mail").val();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(mail) == true) {
        mailBoolean = true;
    }
    else {
        mailBoolean = false;
    }
}

function kollaNummer() {
    var nummer = $("#nummer").val();
    var pattern = /^\d{10}$/;
    if (pattern.test(nummer) == true) {
        nummerBoolean = true;
    }
    else {
        nummerBoolean = false;
    }
}

function kollaMeddelande() {
    var meddelande = $("#meddelande").val();
    var pattern = /.{1,}/;
    if (pattern.test(meddelande) == true) {
        meddelandeBoolean = true;
    }
    else {
        meddelandeBoolean = false;
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