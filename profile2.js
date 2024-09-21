document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let hostelBlock = document.getElementById("hostelBlock").value;
    let roomNumber = document.getElementById("roomNumber").value;

    if (!validatePhone(phone)) {
        displayError("Invalid Phone Number");
        return;
    }

    if (!validateRoomNumber(roomNumber)) {
        displayError("Invalid Room Number");
        return;
    }

    if (!validateHostelBlock(hostelBlock)) {
        displayError("Invalid Hostel Block");
        return;
    }

    if (!validateDateOfBirth(dob)) {
        displayError("Invalid Date of Birth");
        return;
    }

    displaySuccess("Profile created successfully!");
});

// Validation functions

function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}

function validateRoomNumber(roomNumber) {
    return /^\d{3}$/.test(roomNumber);  // Exactly 3 digits
}

function validateHostelBlock(hostelBlock) {
    return /^[A-Za-z]$/.test(hostelBlock);  // Exactly 1 letter
}

function validateDateOfBirth(dob) {
    let dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    return dobRegex.test(dob);
}

// Display functions

function displayError(message) {
    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");

    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    successMessage.style.display = "none";

    setTimeout(function() {
        errorMessage.style.display = "none";
    }, 3000);
}

function displaySuccess(message) {
    let successMessage = document.getElementById("successMessage");
    let errorMessage = document.getElementById("errorMessage");

    successMessage.textContent = message;
    successMessage.style.display = "block";
    errorMessage.style.display = "none";

    setTimeout(function() {
        successMessage.style.display = "none";
    }, 3000);
}