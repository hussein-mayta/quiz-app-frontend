document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const message = document.getElementById("message");


    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the users array
    users.push({
        name: nameInput,
        email: emailInput,
        password: passwordInput
    });

    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Show success message and redirect to login after a short delay
    message.textContent = "Registration successful! Redirecting to login...";
    message.style.color = "green";

    // Redirect after 1.5 seconds to the login page
    setTimeout(() => {
        window.location.href = "../pages/login.html"; 
    }, 1500);
});
