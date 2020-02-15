let mp3Btn = document.getElementById('mp3')
let	mp4Btn = document.getElementById('mp4')
let URLinput = document.querySelector('.URL-input')

mp3Btn.addEventListener('click', () => {
  redirectMp3(URLinput.value);
});

mp4Btn.addEventListener('click', () => {
  redirectMp4(URLinput.value);
});

function redirectMp3(query) {
  let url = window.location.href
  window.location.href = `${url}mp3?url=${query}`;
}

function redirectMp4(query) {
  let url = window.location.href
  window.location.href = `${url}mp4?url=${query}`;
}