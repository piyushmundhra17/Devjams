// LOGIN PAGE

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send login request to the backend
    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
        window.location.href = "index_signedin.html"; // Redirect on successful login
    } else {
        alert(data.message);
    }

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and passwords match
    if (user && user.email === email && user.password === password) {
        alert("Login successful!");
        window.location.href = "index_signedin.html"; // Redirect to signed-in home page
    } else {
        alert("Invalid credentials. Please sign up or check your details.");
    }

    // Regex for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayMessage("Please enter a valid email address.", "error");
        return;
    }

    // Simulate a successful login (replace this with actual authentication)
    console.log("Email:", email);
    console.log("Password:", password);

    // Simulate login success
    alert("Login successful!");
    // Redirect to another page (e.g., dashboard)
    // window.location.href = 'dashboard.html'; // Uncomment for real use
});

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
