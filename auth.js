// Add more username and passwords here
const username = ["Thomas", "May",];
const password = ["thomas28@", "may12345@"];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (username.includes(usernameInput) && password.includes(passwordInput)) {
        alert("Login successful!")
        const db_button = document.getElementById("db_button");
        db_button.style.display = "block";
    }
    else if(usernameInput == "" || passwordInput == "") {
        alert("Please enter a valid username and password.")
    }
}

document.getElementById("loginButton").addEventListener("click", login);