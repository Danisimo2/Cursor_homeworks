function getMaxNumber(num){
	return num = String(num).split('').sort().reverse()
}
document.writeln(`<p>Function #1 max number:  ${getMaxNumber(14532564682)[0]}</p>`);

function pow(x, n){
	let number = 1;
	for(let i = 0; i < n; i++){
		number *= x;
	}if(x === 0 && n === 0) return 'it is an unsolved mystery';
	else if(n === 0) return 1;
	else if(x === 0) return 0;
	else if(n < 0){
		for(let i = 0; i < -n; i++){
		number *= x;
		} return number = 1/number;
	} else return number;
}
document.writeln(`<p>Function #2 number in power: ${pow(2, -3)}</p>`);

function removeName(name){
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
document.writeln(`<p>Function #3 remove name: ${removeName('daNylo')}</p>`);

function convertMoney(howMuch){
	let suma;
	const priceForDollar = 25;
	howMuch = howMuch.toLowerCase();
	if(howMuch.indexOf('$') === -1 && howMuch.indexOf('uah') === -1){
		return 'wrong currency';
	} else if(howMuch.indexOf('uah') !== -1){
		return suma = howMuch.replace('uah','') / priceForDollar + '$';
	} else if(howMuch.indexOf('$') !== -1){
		return suma = howMuch.replace('$','') * priceForDollar + 'UAH';
	} 
	return suma;
}
document.writeln(`<p>Function #4 convert money: ${convertMoney('250$')}</p>`);

function getRandomPassword(numberDigits = 8){
	let pass = [];
	for(let i = 0; i < numberDigits; i++){
		let value = Math.floor(Math.random()*10);
		pass.push(`${value}`);
	}
	return pass.join('');
}
document.writeln(`<p>Function #5 get random password: ${getRandomPassword()}</p>`);

function isPalindrom(str){
        str = str.toLowerCase().replace(/\s/g, '');
        return str === str.split('').reverse().join('');
}
document.writeln(`<p>Function #6 is words palindrom?: ${isPalindrom('я несу гусеня')}</p>`);

function getCounter(word, letter){
	let count = 0;
	word = word.toLowerCase();
	letter = letter.toLowerCase();
	for(let i = 0; i < word.length; i++){
		if(word[i] === letter){
			count++;
		}
	}
	return count;
}
document.writeln(`<p>Function #7 how many letter?: ${getCounter('hello how are you', 'o')}</p>`);