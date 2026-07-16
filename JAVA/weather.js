fetch("http://localhost:5000/api/weather")
.then(res=>res.json())
.then(data=>{

        document.getElementById("location").innerHTML=data.location.name;

        document.getElementById("temp").innerHTML=
        Math.round(data.current.temp_f)+"°F";

        document.getElementById("condition").innerHTML=
        data.current.condition.text;

        document.getElementById("icon").src=
        "https:"+data.current.condition.icon;

        document.getElementById("feelsLike").innerHTML=
        Math.round(data.current.feelslike_f)+"°F";

        document.getElementById("humidity").innerHTML=
        data.current.humidity+"%";

        document.getElementById("wind").innerHTML=
        data.current.wind_mph+" mph";

        document.getElementById("uv").innerHTML=
        data.current.uv;

const forecast=document.getElementById("forecast");

        forecast.innerHTML="";

        data.forecast.forecastday.forEach(day=>{

const date=new Date(day.date);

        forecast.innerHTML+=`
            <div class="day">
            <div>${date.toLocaleDateString('en-US',{weekday:'short'})}</div>

            <img src="https:${day.day.condition.icon}">

            <div>${Math.round(day.day.maxtemp_f)}°</div>

</div>
`;

});

});