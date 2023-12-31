// Add more username and passwords here
const username = ["Thomas", "May", "it is what it is", "Obnoxious234", "T1n4"];
const password = ["thomas28@", "may12345@", "14152400", "hwpdrjc123()", "123456"];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (username.includes(usernameInput) && password.includes(passwordInput)) {
        alert("Login successful!")
        localStorage.setItem("loggedInUser", usernameInput);
        const db_button = document.getElementById("db_button");
        db_button.style.display = "block";
    }
    else if(usernameInput == "" || passwordInput == "") {
        alert("Please enter a valid username and password.")
    }
}

document.getElementById("loginButton").addEventListener("click", login);