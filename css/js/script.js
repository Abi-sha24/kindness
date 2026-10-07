const amountButtons = document.querySelectorAll(".amount-btn");

const customAmount = document.getElementById("customAmount");

const donationForm = document.getElementById("donationForm");

const successMessage = document.getElementById("successMessage");


let selectedAmount = 0;


amountButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        amountButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedAmount = Number(button.dataset.amount);

        customAmount.value = "";

    });

});


customAmount.addEventListener("input", function() {

    amountButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    selectedAmount = Number(customAmount.value);

});


donationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();


    if (name === "") {

        alert("Please enter your name.");

        return;
    }


    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (selectedAmount <= 0) {

        alert("Please select or enter a donation amount.");

        return;
    }


    successMessage.innerHTML =
        `❤️ Thank you, ${name}!<br><br>
        Your donation of ₹${selectedAmount.toLocaleString("en-IN")}
        has been recorded for this demo campaign.`;


    donationForm.reset();

    customAmount.value = "";

    selectedAmount = 0;


    amountButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

});