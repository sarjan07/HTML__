function printData() {
    // get values
    var userName = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    //print values
    document.getElementById("pUser").textContent= userName;
    document.getElementById("pPass").textContent= password;
    //show deatils below
    document.getElementById("printArea").style.display = "bolck";
}