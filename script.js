const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;
    var errorMsg = document.getElementById("error-msg");
    var successMsg = document.getElementById("success-msg");

    if (name == "" || email == "" || phone == "" || message == "") {
        errorMsg.textContent = "Veuillez remplir tous les champs.";
        successMsg.textContent = "";
        return false;
    } else {
        errorMsg.textContent = "";
        successMsg.textContent = "Formulaire soumis avec succès!";
    }
}

function resetError() {
    document.getElementById("error-msg").textContent = "";
    document.getElementById("success-msg").textContent = "";
}