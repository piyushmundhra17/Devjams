// SIGNUP

document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Send signup request to the backend
    const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
        if (response.ok) {
            alert(data.message); // Successful signup
        } else {
            alert(data.message); // Show error message (e.g., user already exists)
        }

    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    alert("Signup successful! You can now log in.");

    // Regex for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayMessage("Please enter a valid email address.", "error");
        return;
    }

    // Simulate a successful signup (replace this with actual registration logic)
    console.log("Username:", username);
    console.log("Email:", email);
    // Avoid logging the password in production

    // Simulate signup success
    displayMessage("Signup successful!", "success");
    // Redirect to another page (e.g., login page)
    // window.location.href = 'login page.html'; // Uncomment for real use
;

// Function to display messages
function displayMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.className = type; // Apply a class for styling
    document.body.appendChild(messageDiv);
    
    // Remove message after some time
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
})
