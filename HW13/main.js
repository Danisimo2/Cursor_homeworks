const btn = document.querySelector(".create");
const res = document.querySelector(".res");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const result = document.querySelector(".result");

function* creatRandomId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ID = creatRandomId();

btn.addEventListener("click", () => {
  res.innerHTML = `Your ID is: ${ID.next().value}`;
});

//Advanced task

let run;
let font = 18;
function* changeFontSize() {
  while (true) {
    if (run == true) {
      yield (font += 2);
    } else {
      yield (font -= 2);
    }
  }
}

const newFontSize = changeFontSize();
const page = document.querySelector("h3");

result.innerHTML = `${font}px`;
plus.addEventListener("click", () => {
  run = true;
  page.style.fontSize = `${newFontSize.next().value}px`;
  result.innerHTML = `${font}px`;
});

minus.addEventListener("click", () => {
  run = false;
  page.style.fontSize = `${newFontSize.next().value}px`;
  result.innerHTML = `${font}px`;
  if (font <= 1) {
    page.style.fontSize = `${2}px`;
    font = 2;
    result.innerHTML = "we can't enter number, lesser than 2";
  }
});