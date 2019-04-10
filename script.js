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
		clouds.innerHTML = `Er is ${current.cloud} wolk in de lucht`;
	else
		clouds.innerHTML = `Er zijn <b>${current.cloud}</b> wolken in de lucht`;

	if(current.condition.text === 'Sunny' ** current.temp_c > 12) {
		result.setAttribute('src', 'images/trump.png');
	}
	else {
		result.setAttribute('src', 'images/rip.png');
	}

	temp.innerText = temperature(current.temp_c);
})


function temperature(temp) {
	return `Het is ${temp} graden buiten`;
}