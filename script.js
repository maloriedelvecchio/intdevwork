function validateForm(){
    username = "jane.doe";
    email = "jane.doe@gmail.com";
    password = "iAmJaNeDoE";
}

function submitLoginForm(event){
    event.preventDefault();
    console.log(event.target['username'].value);
    console.log(event.target['email'].value)
    console.log(event.target['password'].value);
}


/* a. Create a function called validateForm that takes no parameters. 
b. Inside the validateForm function, get the value of the username, email, and password input fields.
c. Use if-else statements to validate each input field. The validation rules are as follows:
d. The username field must not be empty, and must contain only letters and numbers.
e. The email field mustnot be empty, and must contain '@' character. (Bonus points for REGEX validation)
f. The password field must not be empty, and must be at least 8 characters long.
g. If all input fields are valid, console.log a message to the user saying "Form submitted successfully". If any input field is invalid, console.log a message to the user saying "Form submission failed"*/