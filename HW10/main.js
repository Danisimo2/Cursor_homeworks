function sound(source){
	let audio = new Audio();
	audio.src = source;
	audio.play();
}

function playSound(item){
	switch(item.keyCode){
		case 65:
			sound('audio/au1.mp3');
			break;
		case 83:
			sound('audio/au2.mp3');
			break;
		case 68:
			sound('audio/au3.mp3');
			break;
		case 70:
			sound('audio/au4.mp3');
			break;
		case 71:
			sound('audio/au5.mp3');
			break;
		case 72:
			sound('audio/au6.mp3');
			break;
	}
}

document.addEventListener('keyup', playSound);

let butt = document.querySelectorAll('button');
//можливо цей спосіб є дуже поганий, але я кращого не придумав
butt[0].addEventListener('click', () =>{
	sound('audio/au1.mp3');
});

butt[1].addEventListener('click', () =>{
	sound('audio/au2.mp3');
});

butt[2].addEventListener('click', () =>{
	sound('audio/au3.mp3');
});

butt[3].addEventListener('click', () =>{
	sound('audio/au4.mp3');
});

butt[4].addEventListener('click', () =>{
	sound('audio/au5.mp3');
});

butt[5].addEventListener('click', () =>{
	sound('audio/au6.mp3');
});
