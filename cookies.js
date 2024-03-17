document.addEventListener("DOMContentLoaded", function() {
    const cookieAlert = document.getElementById("cookie-alert");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        cookieAlert.style.display = "block";
    }

    acceptCookiesButton.addEventListener("click", function() {
        cookieAlert.style.display = "none";
        localStorage.setItem("cookiesAccepted", true);
    });
});