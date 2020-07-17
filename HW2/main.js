let sumAllNumbers = 0;
let enterFirstNum = Math.floor(prompt('What is your first number?'));
let numberOne = parseInt(enterFirstNum);

while(!enterFirstNum){
	enterFirstNum = Number(prompt('Please, enter integer number'));
}

let enterSecondNum = Math.floor(prompt('What is your second number?'));
//let numberTwo = parseInt(enterSecondNum);

while(!enterSecondNum || enterFirstNum >= enterSecondNum){
	enterSecondNum = Number(prompt('Please, enter integer number and more than first number'));
}
console.log(enterSecondNum);
let scapeEvenNum = confirm('Scape even number?')

if(scapeEvenNum){
	while(numberOne <= enterSecondNum){
		if(numberOne % 2 !== 0){
			sumAllNumbers += numberOne;
		}
		numberOne++;
	}
} else {
	while(numberOne <= enterSecondNum){
		sumAllNumbers += numberOne;
		numberOne++;
	}
}

console.log(sumAllNumbers);

const result = `
	<p>first number: ${enterFirstNum}</p>
	<p>second number: ${enterSecondNum}</p>
	<p>sum all numbers: ${sumAllNumbers}</p>
`
document.getElementById("res").innerHTML = result;