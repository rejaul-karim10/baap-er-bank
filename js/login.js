//step-1: add eventListener to the submit button
document.getElementById("btn-submit").addEventListener('click', function () {
    // step-2: get the email address from the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
   
    // step-3: get the password
    // 3.a: set id on the html element 
    // 3.b: get the element 
    // 3.c: get the value from the element 
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

    //DANGER do not verify email and password on the client site
    // step-4: verify email and password weather valid user or not
    if (email === 'hello@gmail.com' && password === 'hello') {
        console.log('valid user');
        window.location.href = "bank.html";
    }

    else {
        alert('please put the valid info');
    }

})