document.getElementById("submit-btn").addEventListener("click", function () {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const userIdWrong = document.getElementById("userid-wrong-warning");
    const passwordWrong = document.getElementById("password-wrong-warning");
    const emptyWarning = document.getElementById("no-input-warning");

    if (userId.toLowerCase().trim() == "computer" && password.trim() == 1234567) {
        window.location.href = "form.html";
        userIdWrong.style.display = "none";
        passwordWrong.style.display = "none";
        emptyWarning.style.display = "none";
    } else if (userId.toLowerCase().trim() != "computer" && password.trim() != 1234567) {
        userIdWrong.style.display = "none";
        passwordWrong.style.display = "none";
        emptyWarning.style.display = "block";
    } else if (userId.toLowerCase().trim() != "computer") {
        userIdWrong.style.display = "block";
        passwordWrong.style.display = "none";
        emptyWarning.style.display = "none";
    } else if (password.trim() != 1234567) {
        userIdWrong.style.display = "none";
        passwordWrong.style.display = "block";
        emptyWarning.style.display = "none";
    } else {
        userIdWrong.style.display = "none";
        passwordWrong.style.display = "none";
        emptyWarning.style.display = "block";
    }
});