// Add more username and passwords here
// const username = ["Thomas", "May", "it is what it is", "Obnoxious234", "T1n4"];
// const password = ["thomas28@", "may12345@", "14152400", "hwpdrjc123()", "123456"];

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        alert("Login successful!")
        localStorage.setItem("loggedInUser", usernameInput);
        const db_button = document.getElementById("db_button");
        db_button.style.display = "block";
    }
    else if(usernameInput === "" || passwordInput === "") {
        alert("Please enter a valid username and password.")
    }

}

document.getElementById("loginButton").addEventListener("click", login);