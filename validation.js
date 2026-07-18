const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check for empty fields
    if(name === "" || email === "" || phone === "" || message === ""){

        alert("Please complete all fields.");

        return;
    }

    // Validate name
    const namePattern = /^[A-Za-z\s]+$/;

    if(!namePattern.test(name)){

        alert("Name should contain letters only.");

        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return;
    }

    // Validate phone number
    const phonePattern = /^[0-9]{11}$/;

    if(!phonePattern.test(phone)){

        alert("Phone number must contain exactly 11 digits.");

        return;
    }

    // Validate message length
    if(message.length < 10){

        alert("Message should contain at least 10 characters.");

        return;
    }

    alert("Thank you! Your message has been submitted successfully.");

    contactForm.reset();

});