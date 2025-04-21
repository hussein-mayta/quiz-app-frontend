
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
