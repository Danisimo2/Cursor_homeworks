const btn = document.querySelector('.create');
const res = document.querySelector('.res');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const result = document.querySelector('.result');

function* creatRandomId(){
	let id = 1;
	while(true){
		yield id++;
	}
}

const ID = creatRandomId();

btn.addEventListener('click', ()=>{
	res.innerHTML = ID.next().value;
});

//Advanced task

let run = true;
let font = 14;
function* plusFontSize(){
	while(run === true){
		yield font += 2;
	}
}

function* minusFontSize(){
	while(run === false){
		yield font -= 2
	}
}

const plusFontSiz = plusFontSize();
const minusFontSiz = minusFontSize();

result.innerHTML = 14;
plus.addEventListener('click', ()=>{
	run = true;
	result.innerHTML = plusFontSiz.next().value;
});

minus.addEventListener('click', ()=>{
	run = false;
	result.innerHTML = minusFontSiz.next().value;
	if(result.innerHTML <= 0){
		result.innerHTML = "sorry, we can't enter number lesser than 1";
	}
});