const form = document.getElementById("newsletterForm");

const email = document.getElementById("email");

const message = document.getElementById("message");


form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const value = email.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {

        message.style.color = "#ff5c5c";
        message.textContent = "Please enter a valid email address.";

        return;
    }


    try {

        const response = await fetch(
            "http://localhost:5000/api/newsletter",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: crypto.randomUUID(),
                    email: value,
                    subscribedDate: new Date()
                })
            }
        );


        const data = await response.json();


        if(response.ok){


            message.style.color = "#3ddc84";
            message.textContent = data.message || "Thanks for Subscribing!" ;

            form.reset();

        } else {

            

            message.style.color = "#ff5c5c";
            message.textContent = data.message || "Invalid Email address!";

        }


    } catch(error){

        console.error(error);

        message.style.color = "#ff5c5c";
        message.textContent = "Server connection failed.";

    }

});

console.log("Newsletter JS loaded");