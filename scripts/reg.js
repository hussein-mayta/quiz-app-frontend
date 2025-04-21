document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const message = document.getElementById("message");


    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
