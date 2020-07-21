function getMaxNumber(num){
	let number = String(num);
	number = number.split('');
	number = number.sort();
	number = number.reverse();
	return number;
}
document.writeln(`<p>Function #1 max number:  ${getMaxNumber(3124694)[0]}</p>`);

function pow(x, n){
	let number = 1;
	for(let i = 1; i <= n; i++){
		number *= x;
	}
	return number;
}
document.writeln(`<p>Function #2 number in power: ${pow(-2, 4)}</p>`);

function removeName(name){
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
document.writeln(`<p>Function #3 remove name: ${removeName('daNylo')}</p>`);

function convertMoney(howMuch, currency){
	let suma;
	if(currency === '$'){
		 suma = howMuch * 25 + 'grn';
	} else if(currency === 'UAH' || currency === 'uah'){
		suma = howMuch / 25 + '$';
	} else{
		return 'i dont know this currency, please enter "uah" or "$"'
	}
	return suma;
}
document.writeln(`<p>Function #4 convert money: ${convertMoney(2500, 'uah')}</p>`);

debugger;
function getRandomPassword(numberDigits){
	let pass = [];
	for(let i = 0; i < numberDigits; i++){
		let value = Math.floor(Math.random()*10);
		pass.push(`${value}`);
	}
	return pass.join('');
}
document.writeln(`<p>Function #5 get random password: ${getRandomPassword(10)}</p>`);


function isPalindrom(str){
        str = str.toLowerCase().replace(/\s/g, '');
        let str2 = str.split('').reverse().join('');
        console.log(str);
        console.log(str2);
        if(str === str2){
            return true;
        }
        else{
            return false;
        }
}
document.writeln(`<p>Function #6 is words palindrom?: ${isPalindrom('я несу гусеня')}</p>`);

