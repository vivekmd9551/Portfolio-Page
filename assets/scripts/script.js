// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if dark mode was previously enabled in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.querySelector(".navbar").classList.add("navbar-dark-mode");
    darkModeToggle.checked = true;
}

// Toggle Dark Mode on Click
darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        document.querySelector(".navbar").classList.add("navbar-dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        document.querySelector(".navbar").classList.remove("navbar-dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Collapse Navbar on Click (for Mobile)
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992) { // Only collapse on small screens
                let bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
});
