document.addEventListener("DOMContentLoaded", (e) => {
  clock();
  setInterval(clock, 500);
});

function clock() {
  var current = new Date();
  const year_text = document.getElementById('current-year');
  const date_text = document.getElementById('current-date');
  const time_text = document.getElementById('current-time');
  const second_object = document.getElementById('current-secs');

  year_text.innerHTML = current.getFullYear();
  date_text.innerHTML = ('0' + (current.getMonth() + 1)).slice(-2) + '/' + ('0' + current.getDate()).slice(-2);
  time_text.innerHTML = ('0' + current.getHours()).slice(-2) + ((current.getMilliseconds() / 500) < 1 ? ':' : '<span style="color: transparent;">:</span>') + ('0' + current.getMinutes()).slice(-2);
  secs = current.getSeconds() / 60 * 100;
  second_object.style = `background: linear-gradient(to right, #fff ${secs}%, transparent ${secs}%);`;
}