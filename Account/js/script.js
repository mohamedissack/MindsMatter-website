$("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
    }
    else {
        alert("Please provide your correct name and email!");
    }

});