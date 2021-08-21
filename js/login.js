document.getElementById("submit-btn").addEventListener("click", function () {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    if (userId.length < 5 || password.length < 5) {
        document.getElementById("valid-warning").style.display = "block";
        document.getElementById("wrong-warning").style.display = "none";
    } else if (userId.toLowerCase() == "computer" && password.toLowerCase() == "1234567") {
         window.location.href = "form.html";
        document.getElementById("wrong-warning").style.display = "none";
        document.getElementById("valid-warning").style.display = "none";

    } else {
        document.getElementById("wrong-warning").style.display = "block";
        document.getElementById("valid-warning").style.display = "none";
    }
});