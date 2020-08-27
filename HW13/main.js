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
let font = 18;
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
const page = document.querySelector("h3");
result.innerHTML = 18;
plus.addEventListener('click', ()=>{
	run = true;
	page.style.fontSize = `${plusFontSiz.next().value}px`;
	result.innerHTML = font;
});

minus.addEventListener('click', ()=>{
	run = false;
	page.style.fontSize = `${minusFontSiz.next().value}px`;
	result.innerHTML = font;
	if(font <= 1){
		page.style.fontSize = `${2}px`;
		font = 2;
		result.innerHTML = "we can't enter number, lesser than 2";
	}
});