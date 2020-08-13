function generateBlock(){
	const allBlocks = document.querySelector('.allBlocks');
	return allBlocks.style.display = 'block';
}

function getRandomColor() {
  let symbols = "0123456789ABCDEF";
  let color = [];
  for (let i = 0; i < 6; i++) {
    color.push(symbols[Math.floor(Math.random() * 16)]);
  }
  return `#${color.join('')}`;
}

function setColor(){
	const block = document.querySelectorAll('.block');
	for(let i = 0; i < block.length; i++){
		block[i].style.backgroundColor = `${getRandomColor()}`; 
	}
}

function startInterval(){
	timer = setInterval(() => setColor(), 1000);
}

function stopInterval(){
	clearInterval(timer);
}