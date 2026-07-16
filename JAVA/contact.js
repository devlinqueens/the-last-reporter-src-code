document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

e.preventDefault();


const data = {

firstname:
document.getElementById("fname").value,


lastname:
document.getElementById("lname").value,


email:
document.getElementById("email").value,


country:
document.getElementById("country").value,


message:
document.getElementById("subject").value

};



const response = await fetch(
"http://localhost:5000/api/contact",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});


const result = await response.json();


alert(result.message);


});