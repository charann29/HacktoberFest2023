import { Auth } from "./Auth";

document.addEventListener("DOMContentLoaded", function () {
  if (!Auth.isAuthenticated()) window.location.href = "/login.html";

  const redirectDiv = document.getElementById("redirect-div");
  redirectDiv.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://hacktoberfest.com/";
  });
});
