const url = 'http://api.apixu.com/v1/current.json?key=3a3ab57674994be3977143414190904&q=zoetermeer';
fetch(url)
.then(res => res.json())
.then(data => {
	console.log(data);
	const { current, location } = data;

	const result = document.querySelector('.result');

	if(current.condition.text === 'Sunny') {
		result.innerText = 'Ja';
	}
	else {
		result.innerText = 'Nee';
	}
})