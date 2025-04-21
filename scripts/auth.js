
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!name || !email || !password) {
        message.textContent = "Fill all fields";
        message.style.color = "red";
        return;
    }

     //  Admin Check
     if (name === "Hussein" && email === "hussein@admin.com" && password === "admin123") {
        window.location.href = "../pages/dashboard.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email exists
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        // Email exists, check password
        if (existingUser.password === password) {
            // Save the current user to localStorage
            localStorage.setItem("currentUser", JSON.stringify({
                name: existingUser.name,
                email: existingUser.email
            }));
        
            window.location.href = "../pages/home.html";
        }
        
        else {
            message.textContent = "Incorrect password!";
            message.style.color = "red";
        }
    } else {
        message.textContent = "User not found. Redirecting to registration...";
        message.style.color = "red";

        setTimeout(() => {
            window.location.href = "../pages/registration.html";
        }, 1500);
    }
});
