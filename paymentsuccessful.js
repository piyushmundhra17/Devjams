// Extract delivery partner ID from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const deliveryPartnerId = parseInt(urlParams.get("deliveryPartnerId"));

async function processPayment() {
  const response = await fetch("http://localhost:5000/process-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ deliveryPartnerId }),
  });

  const data = await response.json();
  if (data.success) {
    const partner = data.deliveryPartner;
    document.getElementById("delivery-partner-details").innerHTML = `
            <p><strong>Delivery Partner:</strong> ${partner.name}</p>
            <p><strong>Contact:</strong> ${partner.phone}</p>
        `;
  } else {
    document.getElementById("delivery-partner-details").textContent =
      "Error retrieving delivery partner details.";
  }
}

// Call the payment processing function
processPayment();
