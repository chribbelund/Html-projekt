$('form').submit(function (event) {
    event.preventDefault();

    var form = $('form').serialize();
    var jsonform = JSON.stringify($("form").serializeArray());
    $('#test').append(form);
    console.log(jsonform);
    localStorage.setItem('jsonStorage', jsonform);
});

$(document).ready(function () {
    var json = JSON.parse(localStorage.getItem('jsonStorage'));
    console.log(json);
    populateForm('#theform', json);
});


function populateForm(form, data) {
    for(i in data){
        console.log(data[i].name);
        console.log(data[i].value);
        $('input[name=' + data[i].name + ']').val(data[i].value);
    }
}