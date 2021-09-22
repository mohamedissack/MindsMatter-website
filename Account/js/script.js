function myfunction() {
    var inputtedusername = document.getElementById("name").value;
    localStorage.setItem("name", inputtedusername);
    var inputuseremail= document.getElementById("exampleInputEmail1").value;
    localStorage.setItem("exampleInputEmail1", inputuseremail);
    var inputpassword = document.getElementById("password").value;
    localStorage.setItem("exampleInputPassword1", inputpassword);
    var confirm = document.getElementById("confirmpassword").value;
    localStorage.setItem("exampleInputpassword1", confirm);

    console.log(inputtedusername);
    console.log(inputuseremail);
    console.log(inputpassword);
    console.log(confirm);


}



// var inputtedusername,
// element = document.getElementById("name");
// if (element != null) {
//     inputtedusername=element.value;
// }
// else{
//     inputtedusername=null;
// }
// console.log(inputtedusername);

// var inputtedname = document.getElementById("name");
// console.log(inputtedname);