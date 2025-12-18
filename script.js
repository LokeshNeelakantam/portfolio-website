/* Typing Animation */
const text = ["Frontend Developer", "Web Developer", "IoT Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 150);
})();

/* Dark Mode */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

/* Scroll Reveal */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

/* EmailJS */
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(() => {
    alert("Message Sent Successfully!");
    this.reset();
  });
});
