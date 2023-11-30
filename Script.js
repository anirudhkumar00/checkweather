const apiKey ="3cb486331cbe6dfcd60f902987593831";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const surchBox=document.querySelector(".search input");
const surchBtn=document.querySelector(".search button");
const wetherIcon=document.querySelector(".Weather-icon");


async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if(response.status == 404){
		document.querySelector(".error").style.display = "block"
	}
	else{
		var data = await response.json();

	document.querySelector(".city").innerHTML =data.name;
	document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
	document.querySelector(".wind").innerHTML =data.wind.speed +" km/h";

	if(data.weather[0].main == "Clouds"){
		wetherIcon.src = "images/clouds.png";
	}
	else if(data.weather[0].main == "Clear"){
		wetherIcon.src = "images/clear.png";
	}
	else if(data.weather[0].main == "Rain"){
		wetherIcon.src = "images/rain.png";
	}
	else if(data.weather[0].main == "Drizzle"){
		wetherIcon.src = "images/drizzle.png";
	}
	else if(data.weather[0].main == "Mist"){
		wetherIcon.src = "images/mist.png";
	}

	document.querySelector(".Weather").style.display = "block";
	document.querySelector(".error").style.display = "none";
	}
	

}
surchBtn.addEventListener("click",()=>{
	checkWeather(surchBox.value);
})