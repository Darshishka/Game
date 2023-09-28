console.log("test");
var gender = "not chosen";
var name = "";
// var message = "message test";
var messageLength = message.length;
var count = 0;
var mainP = document.getElementById("mainP");


function slowType() {
    console.log(messageLength);
    document.getElementById("mainP").textContent += message;
    // while (count < messageLength) {
    //     setTimeout(1000);
    //     console.log(message[count])
    //     ++count;
    // }
}


function game() {
    var message = "What would you like to be called?";
    console.log("game test")
    document.getElementById("start").style.display = "none";
    // slowType();
    
    document.getElementById("mainP").textContent += message;
    var x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("id", "input")
    document.body.appendChild(x);
    var submit = document.createElement("button");
    submit.setAttribute("id", "submit");
    submit.innerHTML = "Submit";
    document.body.appendChild(submit);

    function gender() {
        console.log(name);
    }

// name is set
    submit.onclick = function() {
        name = document.getElementById("input").value
// hides elements
        document.getElementById("input").style.display = "none";
        document.getElementById("submit").style.display = "none"
        // document.getElementById("mainP").style.display = "none";   
        // gender(name)
        document.getElementById("mainP").textContent = "What pronouns would you like to use?";
        
    }   
}