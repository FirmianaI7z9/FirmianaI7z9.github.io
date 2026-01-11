var clock_counter = 0;
var current_sp = 0;

document.addEventListener("DOMContentLoaded", (e) => {
  clock();
  setInterval(clock, 500);
  const credit_text = document.getElementById('current-credit');
  const current = new Date();
  const birth = new Date('2005-05-30 00:00:00Z');
  var diff = Math.floor((current - birth) / 60000) * 60;
  credit_text.innerText = diff.toLocaleString();
});

function clock() {
  const current = new Date();
  const year_text = document.getElementById('current-year');
  const date_text = document.getElementById('current-date');
  const time_text = document.getElementById('current-time');
  const second_object = document.getElementById('current-secs');
  const sp_text = document.getElementById('current-sp');
  year_text.innerText = current.getFullYear();
  date_text.innerText = ('0' + (current.getMonth() + 1)).slice(-2) + '/' + ('0' + current.getDate()).slice(-2);
  time_text.innerHTML = ('0' + current.getHours()).slice(-2) + ((current.getMilliseconds() / 500) < 1 ? ':' : '<span style="color: transparent;">:</span>') + ('0' + current.getMinutes()).slice(-2);
  secs = current.getSeconds() / 60 * 100;
  if (current.getMinutes() % 2 == 0) {
    second_object.style = `background: linear-gradient(to right, #fff ${secs}%, transparent ${secs}%);`;
  }
  else {
    second_object.style = `background: linear-gradient(to right, transparent ${secs}%, #fff ${secs}%);`;
  }

  if (clock_counter % 240 == 0 && current_sp < 240) {
    current_sp = Math.round(clock_counter / 240);
    sp_text.innerText = `${current_sp}/240`;
  }

  clock_counter++;
}