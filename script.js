const url = 'api.openweathermap.org/data/2.5/forecast/hourly?id=524901';

fetch(url)
.then(res => res.json())
.then(data => {
	console.log(data);
})