document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const welcomeMessage = document.getElementById("welcome-message");
    const welcomeUsername = document.getElementById("welcome-username");
    const loginBtn = document.getElementById("login-btn");

    loginBtn.addEventListener("click", function(event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value;

        welcomeUsername.textContent = "Welcome " + username;
        welcomeMessage.style.display = "block";

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
         loginForm.style.display = "none";
    });
});