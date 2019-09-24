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
    populateForm(json);
});


function populateForm(data) {
    for(i in data){
        $('input[name=' + data[i].name + ']').val(data[i].value);
    }
}


$("#name").keyup(function(){
    var namn = $("#name").val();
    if (namn.length < 10) {
        console.log("kort namn");
    }
    else {
        console.log("namn ok");
    }
});