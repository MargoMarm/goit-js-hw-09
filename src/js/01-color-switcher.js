const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
const bodyRef = document.body;


btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

let INTERVAL_ID = null;
function onBtnStartClick() {
	  INTERVAL_ID = setInterval(() => {
		 bodyRef.style.backgroundColor = getRandomHexColor();
	  }, 1000);
	
	btnStartRef.disabled = true;
	btnStopRef.disabled = false;


};

function onBtnStopClick() {
	clearInterval(INTERVAL_ID);
	btnStartRef.disabled = false;
	btnStopRef.disabled = true;


};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


