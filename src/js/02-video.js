// Импортируем библиотеку
import Player from '@vimeo/player';

// import throttle
const throttle = require('lodash.throttle');

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeCheck, 1000));

function timeCheck(e) {
  const currentTime = e.seconds;
  console.log(`Время воспроизведения ${currentTime} секунд`);
  localStorage.setItem(CURRENT_TIME, JSON.stringify(currentTime));
}

const timeVideoLocaclStorage = localStorage.getItem(CURRENT_TIME);

if (timeVideoLocaclStorage) {
  const lastVideoPlayedTime = JSON.parse(timeVideoLocaclStorage);
  player.setCurrentTime(lastVideoPlayedTime);

  console.log(`Вы закончили просмотр на ${timeVideoLocaclStorage} секунде`);
} else {
  console.log(`Приятного просмотра`);
}
