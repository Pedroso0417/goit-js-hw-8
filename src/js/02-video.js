import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// Define handleThrottle before using it in player.on()
const handleThrottle = function (data) {
  const timeInSeconds = data.seconds;
  console.log(timeInSeconds);
  localStorage.setItem('videoplayer-current-time', timeInSeconds.toString());
};

player.on('timeupdate', throttle(handleThrottle, 100));

// Use parseFloat when setting the current time
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player
    .setCurrentTime(parseFloat(savedTime))
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;
        default:
          // some other error occurred
          break;
      }
    });
}

// import Vimeo from '@vimeo/player';
// import throttle from 'lodash.throttle';

// // Get the Vimeo player element by its ID
// const iframe = document.getElementById('vimeo-player');

// // Initialize the Vimeo player
// const player = new Vimeo(iframe);

// // Add an event listener for timeupdate
// player.on('timeupdate', data => {
//   const currentTime = data.seconds;

//   // Save the playback time to local storage
//   localStorage.setItem('videoplayer-current-time', currentTime);
// });

// // Get the saved playback time from local storage
// const savedTime = localStorage.getItem('videoplayer-current-time');

// // Check if there is a saved time and set it
// if (savedTime) {
//   player.setCurrentTime(parseFloat(savedTime));
// }

// // Throttle the function to update storage once a second
// const savePlaybackTime = throttle(time => {
//   localStorage.setItem('videoplayer-current-time', time);
// }, 1000);

// // Add an event listener for timeupdate with throttled function
// player.on('timeupdate', data => {
//   const currentTime = data.seconds;
//   console.log(currentTime); // Corrected variable name

//   // Save the playback time to local storage using throttled function
//   savePlaybackTime(currentTime);
// });

// import VimeoPlayer from 'vimeo-player';
// import throttle from 'lodash.throttle';

// const player = new VimeoPlayer('myPlayer', {
//   // Options here if needed
// });

// player.on(
//   'timeupdate',
//   throttle(data => {
//     const currentTime = data.seconds; // Current playback time in seconds
//     localStorage.setItem('videoplayer-current-time', currentTime.toString());
//   }, 1000)
// ); // Throttle to at most once per second

// // Resume playback from the saved position
// const savedTime = localStorage.getItem('videoplayer-current-time');
// if (savedTime) {
//   player.setCurrentTime(parseFloat(savedTime));
// }
