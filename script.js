const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("All fields are required!");
        return;
    }

    let contacts =
        JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push({
        name: name,
        email: email,
        message: message
    });

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    alert("Form submitted successfully!");

    form.reset();
});

}
