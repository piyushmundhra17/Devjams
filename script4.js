
//SIGNUP


document.getElementById("signupForm").addEventListener("submit", function(event) {
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

    // Here you would typically send a request to your server for registration
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Simulate a successful signup (replace this with actual registration logic)
    alert("Signup successful!");
   
    
});
