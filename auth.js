// Add more username and passwords here
// const username = ["Thomas", "May", "it is what it is", "Obnoxious234", "T1n4"];
// const password = ["thomas28@", "may12345@", "14152400", "hwpdrjc123()", "123456"];

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Retrieve user credentials from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered credentials match any user in the array
    const matchedUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (matchedUser) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", usernameInput);
        const db_button = document.getElementById("db_button");
        db_button.style.display = "block";

        syncToGoogleSheet(usernameInput, passwordInput);
    } 
    
    else {
        alert("Invalid username or password.");
    }
}

document.getElementById("loginButton").addEventListener("click", login);

function syncToGoogleSheet(username, password) {
    console.log(`Syncing to Google Sheets - Username: ${username}, Password: ${password}`);
}

function syncGoogleSheetToLocalStorage() {
    // Retrieve data from Google Sheets and update localStorage
    const dataFromGoogleSheet = fetchDataFromGoogleSheet();
    localStorage.setItem("username", dataFromGoogleSheet.username);
    localStorage.setItem("password", dataFromGoogleSheet.password);
}

function fetchDataFromGoogleSheet() {
    // For educational purposes only - replace with actual implementation
    // Use Google Sheets API to read data from the sheet
    return { username: "fetched_username", password: "fetched_password" };
}