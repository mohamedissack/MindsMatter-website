function register() {
    var inputtedusername = document.getElementById("name").value;
    // localStorage.setItem("name", inputtedusername);
    var inputuseremail = document.getElementById("exampleInputEmail1").value;
    // localStorage.setItem("exampleInputEmail1", inputuseremail);
    var inputpassword = document.getElementById("password").value;
    // localStorage.setItem("exampleInputPassword1", inputpassword);
    var confirm = document.getElementById("confirmpassword").value;
    // localStorage.setItem("exampleInputpassword1", confirm);

    console.log(inputtedusername);
    console.log(inputuseremail);
    console.log(inputpassword);
    console.log(confirm);


    let person = {
        inputtedusername,
        inputuseremail,
        inputpassword,
        confirm
    };
    localStorage.setItem("Person", JSON.stringify(person));

    console.log(JSON.parse(retrievePerson.confirm));

    if (inputtedusername)

    window.location.href = "/login.html";
    return true;
    
    

}








//login form function
function login() {
    //getting login credentials
    var useremail = document.getElementById("l-email").value;
    var loginpassword = document.getElementById("l-password").value;
    console.log(useremail + "," + loginpassword);

    //retrieve store value
    var user = JSON.parse(localStorage.getItem("Person"))
    console.log(user.inputtedusername)

    //login form validation
    if (useremail != user.inputuseremail) {
        alert("Incorrect user email")
        return false;

    }
    if (loginpassword != user.inputpassword) {
        alert("incorrect password");
        return false;

    }

    window.location.href = "../index.html";
    return true;



}

// function mydata() {
//     var user = JSON.parse(localStorage.getItem("Person"))
//     console.log(user.inputtedusername);
//     document.getElementById('username').innerHTML = user.inputuseremail;
// }