import { Auth } from "./Auth";

document.addEventListener("DOMContentLoaded", function () {
  if (Auth.isAuthenticated()) window.location.href = "/index.html";

  const registerBtn = document.getElementById("register-btn");

  if (registerBtn)
    registerBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const username = String(document.getElementById("username").value) || "";
      const email = String(document.getElementById("email").value) || "";
      const password = String(document.getElementById("password").value) || "";
      const errorMsg = document.getElementById("error-msg");
      errorMsg.classList.add("hidden");

      if (!username.length || !email.length || !password.length) return;

      if (!Auth.exists(username)) {
        Auth.register(username, password, email);
        window.location.href = "/login.html";
      } else {
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = `Username ${username} already taken.`;
      }
    });
});
