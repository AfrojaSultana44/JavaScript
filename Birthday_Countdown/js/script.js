const birthDay = '19 December 2023';
function countDown() {
  const birthDate = new Date(birthDay);
  const currentDate = new Date();
  const totalSeconds = (birthDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  document.getElementById('days').innerHTML = formatTime(days);
  document.getElementById('hours').innerHTML = formatTime(hours);
  document.getElementById('minutes').innerHTML = formatTime(minutes);
  document.getElementById('seconds').innerHTML = formatTime(seconds);
}
countDown();
setInterval(countDown, 1000);
function formatTime(time) {
  if (time < 10) {
    return '0' + time;
  }
  return time;
}
