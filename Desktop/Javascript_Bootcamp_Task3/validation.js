document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const resendBtn = document.getElementById("resendBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    document
      .querySelectorAll(".error-message")
      .forEach((span) => (span.textContent = " "));
    document
      .querySelectorAll("input")
      .forEach((input) => (input.style.border = ""));

    const username = document.getElementById("username");
    if (username.value.trim() === "") {
      document.getElementById("username-error").textContent =
        "Username required";
      username.style.border = "2px solid red";
      valid = false;
    }
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      document.getElementById("email-error").textContent = "Email required";
      email.style.border = "2px solid red";
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      document.getElementById("email-error").textContent =
        "Invalid email format";
      email.style.border = "2px solid red";
      valid = false;
    }
    const password = document.getElementById("password");
    if (password.value.trim().length < 8) {
      document.getElementById("password-error").textContent =
        "Password must be 8+ characters";
      password.style.border = "2px solid red";
      valid = false;
    }
    const terms = document.getElementById("terms");
    if (!terms.checked) {
      document.getElementById("terms-error").textContent = "You must agree";
      terms.style.outline = "2px solid red";
      valid = false;
    }
    if (valid) {
      alert("Form submitted successfully!");
    }
  });

  let timeLeft = 10;
  resendBtn.disabled = true;
  resendBtn.textContent = `Resend Verification (${timeLeft}s)`;
  const timer = setInterval(() => {
    timeLeft--;
    resendBtn.textContent = `Resend Verification (${timeLeft}s)`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      resendBtn.disabled = false;
      resendBtn.textContent = "Resend Verification";
    }
  }, 1000);
});
