// ===============================
// EmailJS Initialization
// ===============================
emailjs.init({
    publicKey: "3I8FyBn6PwaQvBLDX",
});

// ===============================
// Contact Form
// ===============================
function handleContactRouting(event) {
    event.preventDefault();

    const form = document.getElementById("portfolioContactForm");
    const button = form.querySelector("button[type='submit']");
    const alertBox = document.getElementById("formSuccessAlert");

    button.disabled = true;
    button.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span>Sending...</span>
    `;

    const params = {
        from_name: document.getElementById("usrName").value,
        from_email: document.getElementById("usrEmail").value,
        message: document.getElementById("usrMsg").value,
    };

    emailjs.send(
        "service_5hzd1gi",
        "template_fawlj1x",
        params
    )

    .then(function () {

        alertBox.classList.remove("hidden");

        alertBox.className =
            "mt-4 p-3 rounded-lg text-center text-sm border bg-green-500/10 border-green-500/30 text-green-500";

        alertBox.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Message sent successfully!
        `;

        form.reset();

    })

    .catch(function (error) {

        console.error(error);

        alertBox.classList.remove("hidden");

        alertBox.className =
            "mt-4 p-3 rounded-lg text-center text-sm border bg-red-500/10 border-red-500/30 text-red-500";

        alertBox.innerHTML = `
            <i class="fa-solid fa-circle-xmark"></i>
            Failed to send message. Please try again.
        `;

    })

    .finally(function () {

        button.disabled = false;

        button.innerHTML = `
            <i class="fa-solid fa-paper-plane"></i>
            <span>Send Message</span>
        `;

        setTimeout(() => {
            alertBox.classList.add("hidden");
        }, 5000);

    });
}