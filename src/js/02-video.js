import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe)


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
}

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)));