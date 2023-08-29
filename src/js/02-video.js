import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
// console.log(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdata', throttle(onPlay, 1000));

const currentSeconds = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(currentSeconds);
