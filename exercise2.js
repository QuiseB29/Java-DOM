function Form(username, email, message) {
    this.username = username;
    this.email = email;
    this.message = message;
}

Form.prototype.displayInfo = function() {
    return `<strong>Name:</strong> ${this.username}, <strong>Email:</strong> ${this.email}, <strong>Message:</strong> ${this.message}`;
}

document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let newForm = new Form(username, email, message);
    let formElement = document.createElement("div");
    formElement.innerHTML = newForm.displayInfo();
    document.getElementById("infoList").appendChild(formElement);
});
