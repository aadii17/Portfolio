function sendEmail() {
    alert("helloo");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "aadarshchoudhari17@gmail.com",
        Password: "checkpass@1",
        To: 'saileekadam794@gmail.com',
        From: document.getElementById("email").value, Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Pnone no:" + document.getElementById("phone").value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}
