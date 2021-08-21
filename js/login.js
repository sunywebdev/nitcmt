document.getElementById("submit-btn").addEventListener("click", function () {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    if (userId.length < 5 || password.length < 5) {
        document.getElementById("valid-warning").style.display = "block";
        document.getElementById("wrong-warning").style.display = "none";
    } else if (userId == "computer" && password == "1234567") {
        window.location.href = "form.html";
    } else {
        document.getElementById("wrong-warning").style.display = "block";
        document.getElementById("valid-warning").style.display = "none";
    }
});