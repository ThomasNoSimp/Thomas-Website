import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvZW7wzTE8MpOkCDzyPYNoJpxc3H5YhZI",
    authDomain: "thomas-website-4bb58.firebaseapp.com",
    projectId: "thomas-website-4bb58",
    storageBucket: "thomas-website-4bb58.appspot.com",
    messagingSenderId: "746030468116",
    appId: "1:746030468116:web:dd51592d5d56b76a7e2b01",
    measurementId: "G-5KR538JLHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Function to handle Google sign-in
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log("User signed in with Google:", user);
            window.location.href = "index.html";
            localStorage.setItem("GoogleUser", user);
        })
        .catch((error) => {
            // Handle errors here
            console.error("Google Sign-In Error:", error);
        });
}

// Add event listener for Google Sign-In button click
document.getElementById("googleSignInButton").addEventListener("click", signInWithGoogle);

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