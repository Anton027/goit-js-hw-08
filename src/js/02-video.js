import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe)


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
}

// player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)));
// console.log(player);

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)))
    .then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});