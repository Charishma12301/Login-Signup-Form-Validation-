const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");

let savedUser = {};

showLogin.onclick = () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
};

showSignup.onclick = () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
};

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = signupName.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();
    const msg = signupMessage;

    msg.style.color = "red";

    if (!name || !email || !password) {
        msg.textContent = "All fields are required";
        return;
    }

    if (!validateEmail(email)) {
        msg.textContent = "Invalid email format";
        return;
    }

    if (password.length < 6) {
        msg.textContent = "Password must be at least 6 characters";
        return;
    }

    savedUser = { name, email, password };

    msg.style.color = "green";
    msg.textContent = "Signup successful! Please login";
    signupForm.reset();
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();
    const msg = loginMessage;

    msg.style.color = "red";

    if (!email || !password) {
        msg.textContent = "All fields are required";
        return;
    }

    if (email !== savedUser.email) {
        msg.textContent = "Email not registered";
        return;
    }

    if (password !== savedUser.password) {
        msg.textContent = "Wrong password";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Login successful!";
    loginForm.reset();
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
