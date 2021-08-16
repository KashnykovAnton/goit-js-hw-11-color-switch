const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

let idInterval = null;

refs.btnStart.addEventListener("click", onStartClick);
refs.btnStop.addEventListener("click", onStopClick);

function onStartClick() {
  console.log("Click on Start button!");
  idInterval = setInterval(() => {
    refs.body.style.backgroundColor = randomColor();
    //   colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.btnStart.disabled = true;
}

function onStopClick() {
  console.log("Click on Stop button!");
  clearInterval(idInterval);
  refs.btnStart.disabled = false;
}

function randomColor() {
  return `rgb(${randomIntegerFromInterval(0, 255)}, 
  ${randomIntegerFromInterval(0, 255)}, 
  ${randomIntegerFromInterval(0, 255)})`;
}
