import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const btnStart = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
	onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};


flatpickr(datetimePicker, {options});