const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','1','2','3','4','5','6','7','8','9','!','@','$','^','%','*','#',',',' '];
let p = 'luuk waar ben je nou mee bezig, ik word echt gek door jou';

let codeString;

let guessString = [];

const input = document.querySelector('.inputCode');
const btn = document.querySelector('.secretBtn');
const code = document.querySelector('.code');



btn.addEventListener('click', start);

function createEncryption() {
	for(i = 0; i < p.length; i++) {
		let random = Math.floor(Math.random() * letters.length);
		guessString.push(letters[random])
		let cheese = guessString.toString().replace(/,/g, '')
		document.querySelector('.key').innerText = cheese;
	}
}

function changeEncryption() {
	guessString.forEach((letter, i) => {
		//If the letter is not the same as the other letter of the same index, then change it.
		if(letter !== codeString[i]) {
			let random = Math.floor(Math.random() * letters.length);
			guessString.splice(i, 1, letters[random]);

			let cheese = guessString.toString().replace(/,/g, '')
			document.querySelector('.key').innerText = cheese;
		}
	})
}

function start() {
	p = input.value;
	codeString = p.split("");
	code.innerText = codeString.toString().replace(/,/g, '');
	createEncryption();
	console.log(p);
	setInterval(changeEncryption, 100);
}


// createEncryption();