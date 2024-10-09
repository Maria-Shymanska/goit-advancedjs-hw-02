import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


let userSelectedDate = null;
let timerInterval = null;

const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const dateTimePicker = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startButton.disabled = true;
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        color: 'red',
      })
    } else {
      userSelectedDate = selectedDates[0];
      startButton.disabled = false;
      iziToast.show({
        title: 'Success',
        message: 'Lets go',
        position: 'topRight',
        color: 'green',
      })
    }
  },
}

// Ініціалізація flatpickr
flatpickr(dateTimePicker, options);


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Функція для конвертації часу
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Оновлення інтерфейсу таймера
function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}


// Запуск таймера
startButton.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startButton.disabled = true;
  dateTimePicker.disabled = true;

  timerInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = userSelectedDate - now;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      dateTimePicker.disabled = false;
      return;
    }

    const time = convertMs(timeLeft);
    updateTimerDisplay(time);
  }, 1000);
});
















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