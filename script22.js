

//LOGIN PAGE


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation (You can add more complex validation)
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Here you would typically send a request to your server for authentication
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Simulate a successful login (replace this with actual authentication)
    alert("Login successful!");

});