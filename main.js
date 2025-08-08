const countrySelect = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");
const countryError = document.getElementById("countryError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validatePhone(countryCode, phone) {
  if (!phone) return false;
  phone = phone.replace(/\D/g, "");
  return phone.length >= 6 && phone.length <= 15;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return re.test(password);
}

function validateForm() {
  let valid = true;

  if (!countrySelect.value) {
    countryError.textContent = "Please select your country";
    countryError.classList.remove("hidden", "fade-in");
    void countryError.offsetWidth;
    countryError.classList.add("fade-in");
    valid = false;
  } else {
    countryError.classList.add("hidden");
  }

  if (!validatePhone(countrySelect.value, phoneInput.value)) {
    phoneError.textContent = "Invalid phone number";
    phoneError.classList.remove("hidden", "fade-in");
    void phoneError.offsetWidth;
    phoneError.classList.add("fade-in");
    valid = false;
  } else {
    phoneError.classList.add("hidden");
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email address";
    emailError.classList.remove("hidden", "fade-in");
    void emailError.offsetWidth;
    emailError.classList.add("fade-in");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 8 characters including uppercase, lowercase, number, and symbol";
    passwordError.classList.remove("hidden", "fade-in");
    void passwordError.offsetWidth;
    passwordError.classList.add("fade-in");
    valid = false;
  } else {
    passwordError.classList.add("hidden");
  }

  submitBtn.disabled = !valid;
  return valid;
}

countrySelect.addEventListener("change", () => {
  successMsg.classList.add("hidden");
  validateForm();
});

phoneInput.addEventListener("input", () => {
  successMsg.classList.add("hidden");
  validateForm();
});

emailInput.addEventListener("input", () => {
  successMsg.classList.add("hidden");
  validateForm();
});

passwordInput.addEventListener("input", () => {
  successMsg.classList.add("hidden");
  validateForm();
});

document.getElementById("advancedForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    successMsg.classList.remove("hidden");
  }
});