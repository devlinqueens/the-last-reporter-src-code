document
.getElementById("newsletterForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;

    await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id: crypto.randomUUID(),
            email: email,
            subscribedDate: new Date()
        })
    });

});