function validateForm(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        console.log("Form submission failed");
        window.alert("INVALID: You must enter a username, an email address, AND a password, you silly goose!");
        return;
    }

    if (!/^[0-9a-zA-Z]+$/.test(username)) {
        console.log("Form submission failed");
        window.alert("INVALID: Usernames can only have letters and numbers, you silly goose!");
        return;
    }

    if (!email.includes("@")) {
        console.log("Form submission failed");
        window.alert("INVALID: Emails must include @ symbol, you silly goose!");
        return;
    }

    if (password.length < 8){
        console.log("Form submission failed");
        window.alert("INVALID: Passwords must be 8 characters or more, you silly goose!");
        return;
    }

    console.log("Form submitted successfully");
    window.alert("BRAVO!!! You can fill out a form properly");
}