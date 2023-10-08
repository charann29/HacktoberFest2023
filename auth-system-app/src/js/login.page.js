import { Auth } from "./Auth";

document.addEventListener("DOMContentLoaded", function () {
  if (Auth.isAuthenticated()) window.location.href = "/index.html";

  const loginBtn = document.getElementById("login-btn");
  if (loginBtn)
    loginBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const username = String(document.getElementById("username").value) || "";
      const password = String(document.getElementById("password").value) || "";
      const errorMsg = document.getElementById("error-msg");
      errorMsg.classList.add("hidden");

      if (!username.length || !password.length) return;

      if (Auth.login(username, password)) {
        window.location.href = "/";
      } else {
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Something went wrong! Please try again";
      }
    });
});
