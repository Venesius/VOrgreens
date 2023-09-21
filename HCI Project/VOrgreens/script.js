const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const genders = document.getElementsByName("gender");
    const message = document.getElementById("message").value;
    const checkbox = document.getElementById("checkbox");
    
    let checked = false;
    for (gender of genders) {
        if (gender.checked) {
            checked = true;
        }
    }

    if (!name) {
        alert("Please enter your name");
    }
    else if (name.length < 3) {
        alert("Your name must be at least 3 characters");
    }
    else if (!email) {
        alert("Please enter your email");
    }
    else if (email.indexOf("@") == -1) {
        alert("Please enter a valid email address");
    }
    else if (!email.endsWith(".com")) {
        alert("Email must ends with .com");
    }
    else if (!checked){
        alert("Please choose your gender");
    }
    else if (!message) {
        alert("Please write your message");
    }
    else if (message.length < 5) {
        alert("Your message must be at least 5 characters");
    }
    else if (!checkbox.checked) {
        alert("You must be subscribed");
    }
    else {
        alert("Your message has been sent");
    }
}) 