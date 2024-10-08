import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const daysEl = document.querySelector('data-days');
const hoursEl = document.querySelector('data-hours');
const minutesEl = document.querySelector('data-minutes');
const secondsEl = document.querySelector('data-seconds');














function onStart() {
  datepicker.element.disabled = true; // Вимикаємо вибір дати
  const intervalId = setInterval(() => {
    const curDate = new Date();
    let diff = selectedDate - curDate; // Перераховуємо різницю кожного разу

    if (diff <= 0) {
      clearInterval(intervalId); // Зупиняємо таймер, коли час спливає
      updateTimer(convertMs(0)); // Обнуляємо таймер
      return;
    }

    const convertedData = convertMs(diff); // Конвертуємо час
    updateTimer(convertedData); // Оновлюємо таймер на екрані
  }, 1000);
}


function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor(
    (((ms % day) % hour) % minute) / second
  ));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}