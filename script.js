const url = 'https://api.apixu.com/v1/current.json?key=3a3ab57674994be3977143414190904&q=zoetermeer';
fetch(url)
.then(res => res.json())
.then(data => {
	const { current } = data;
	console.log(current);
	const result = document.querySelector('.result');
	const clouds = document.querySelector('.clouds');
	const temp = document.querySelector('.temp');

	if(current.cloud == 1)
		clouds.innerHTML = `There is ${current.cloud} cloud in the sky`;
	else
		clouds.innerHTML = `There are <b>${current.cloud}</b> clouds in the sky`;

	if(current.condition.text === 'Sunny') {
		result.setAttribute('src', 'images/trump.png');
	}
	else {
		result.setAttribute('src', 'images/rip.png');
	}

	temp.innerText = temperature(current.temp_c);
})


function temperature(temp) {
	switch(temp) {
		case 1:
			return `Thats cold as hell`;
		break;

		case 2:
			return `Might wanna wear a jacket!`
		break;

		case 3:
			return `3 is always better than 2`
		break;

		case 4:
			return `4 is the normal amount in The Netherlands`
		case 5: 
			return `It's still a bit cold but its good and nice`;
		break;
		default:
			return `${temp} degrees outside`;
	}
}