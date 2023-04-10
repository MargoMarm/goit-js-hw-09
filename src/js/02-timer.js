import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datetimePicker = document.querySelector("#datetime-picker");
const btnStart = document.querySelector('button[data-start]');
const daysRef = document.querySelector(".value[data-days]");
const hoursRef = document.querySelector(".value[data-hours]");
const minutesRef = document.querySelector(".value[data-minutes]");
const secondsRef = document.querySelector(".value[data-seconds]");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] < new Date()) {
			Notiflix.Report.warning('Oops', 'Choose the date in the future', 'Got it!');
			btnStart.disabled = true;
		} else {
			btnStart.disabled = false;
		}

  },
};

let intervalId = null;

btnStart.addEventListener('click', countdown);

flatpickr(datetimePicker, options );

function countdown() {
	intervalId = setInterval(setTime, 1000);
}


function setTime() {
	const selectedDate = new Date(datetimePicker.value);
	const nowDate = new Date();
	
	if ( selectedDate - nowDate < 1000) {
		clearInterval(intervalId);
		Notiflix.Report.success('Time is up', 'Countdown is over', 'ok');
	}

	const { days, hours, minutes, seconds } = convertMs(dif);

	daysRef.textContent = addLeadingZero(days);
	hoursRef.textContent = addLeadingZero(hours);
	minutesRef.textContent = addLeadingZero(minutes);
	secondsRef.textContent = addLeadingZero(seconds);

	btnStart.disabled = true;
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
	return  value.toString().padStart(2, '0');
};

