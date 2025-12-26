/* EMAILJS INIT */
(function(){
  emailjs.init("NnwnMhZt0hQe9tG4F");
})();

/* SEND EMAIL */
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_ltg079p",
    "template_lsaln1u",
    this
  ).then(
    function() {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      document.getElementById("contact-form").reset();
    },
    function(error) {
      document.getElementById("status").innerText = "❌ Failed to send message";
      console.log(error);
    }
  );
});

/* SLIDE ANIMATION ON SCROLL */
const slides = document.querySelectorAll(".slide");

window.addEventListener("scroll", () => {
  slides.forEach(slide => {
    const rect = slide.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      slide.classList.add("show");
    }
  });
});
