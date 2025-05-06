document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate each .education-item with staggered slide-in from left
    gsap.utils.toArray(".education-item").forEach((item, index) => {
        gsap.from(item, {
            x: -100,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });
    });

        // Update active class on click
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });
    
        // Optional: Highlight based on scroll position
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY + 80; // Adjust for navbar height
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });


   // ======================
// Contact Form Validation
// ======================

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const successAlert = document.getElementById("contact-alert");
    const errorAlert = document.getElementById("contact-alert-error");

    // Ensure the form exists before adding an event listener
    if (!contactForm) {
        console.error("Contact form not found!");
        return;
    }

    // Handle form submission
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are filled
        if (name && email && message) {
            // Show success alert
            successAlert.classList.remove("d-none");
            errorAlert.classList.add("d-none");

            // Optionally, reset the form after submission
            contactForm.reset();
            
            // Hide the success alert after 4 seconds (optional)
            setTimeout(() => {
                successAlert.classList.add("d-none");
            }, 4000);
        } else {
            // Show error alert if fields are missing
            errorAlert.classList.remove("d-none");
            successAlert.classList.add("d-none");
        }
    });
});
});
function viewCart() {
    // Logic to view cart
    alert("Viewing Cart!");
}
