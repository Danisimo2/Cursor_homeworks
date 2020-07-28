const numbers = [5, -33, 3, -10, 2, 3.2, 33, 5, 5, 3];

// function getRandonArray(length, min, max){
// 	let randArr = [];
// 	for(let i = 0; i < length; i++){
// 		randArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
// 	}
// 	return randArr
// }
// console.log(getRandonArray(5, 10, 100));

//1
const getRandomArray = (length, min, max) => new Array(length).fill(null).map(() => 
	Math.floor(Math.random() * (max - min + 1) + min))
console.log(getRandomArray(5, 10, 100));

//2
function evenNumbers(...numbers){
	return numbers.filter(item => item % 2 === 0)
}
console.log(evenNumbers(...numbers));

//3
function posNum(...numbers){
	let count = 0;
	numbers.filter(item => {
		if(item > 0) count++;
	}); 
	return count;
}
console.log(posNum(...numbers));

//4
function divFive(...numbers){
	return numbers.filter(item => item % 5 === 0)
}
console.log(divFive(...numbers));

//5
function getAverage(...numbers){
	let filtered = numbers.filter(item => item % 1 === 0);
	let middleValue = filtered.reduce((last, pres) => last + pres) / filtered.length
	return middleValue;
}
console.log(getAverage(...numbers));

//6
function divByThree(word){
	let arr = [];
	for(let i = 0; i < word.length; i+=3){
		arr.push(word.slice(i, i+3));
	}
	return arr;
}
console.log(divByThree('антарктида'));

