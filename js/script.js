(function(){
    emailjs.init({
      publicKey: "7G2F3Up6ptJaUL9MV",
    });
 })();

 const msg = document.querySelector(".form-message");

 window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_79uh4b9', 'template_18btfhq', this)
            .then(function() {
                document.getElementById("contact-form").reset();
                msg.innerHTML = "";
                msg.innerHTML += "<span class='success-message text-white'>email sent successfully!!</span>";
            },
            function(error) {
                msg.innerHTML += "<span class='error-message text-white'>email sent failed</span>";
            });
    });
}