<template>
    <div class="music-player-container me-4 mt-3">
      <img class="music-player-img" draggable="false" src="../src/assets/yiruma-maybe-icon.jpg"/>
      <div class="weather-info">
        <p style="font-weight: bold">Yiruma - May Be</p>
        <audio ref="audioPlayer" loop="true">
          <source src="../src/assets/yiruma-maybe.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <button type="button" class="btn btn-light mt-2" @click="playAudio()">Play</button>
        <button type="button" class="btn btn-light mt-2" @click="pauseAudio()">Pause</button>
      </div>
      <div class="music-bars"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    computed: {

  },
    methods: {
        
      playAudio() {
      // Get the reference to the audio element
      const audioPlayer = this.$refs.audioPlayer;

      // Check if the audio element is available and not paused
      if (audioPlayer && audioPlayer.paused) {
        audioPlayer.play(); // Play the audio
      }
    },
      pauseAudio() {
        // Get the reference to the audio element
        const audioPlayer = this.$refs.audioPlayer;
        audioPlayer.pause();
      },
    },
  };
  </script>

<style scoped>
p {
    margin-bottom: 0px;
    font-size: 15px;
}
.music-player-container {
    display: flex; /* Use flex layout */
    height: 100px;
    align-items: center; /* Vertically center items */
    background-color: rgb(253, 253, 253);
    border-radius: 25px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Add a drop shadow */
  }
  
  .music-player-img {
    width: 65px; /* Set the desired width for the weather icon */
    height: 65px; /* Set the desired height for the weather icon */
    margin-right: 20px; /* Add spacing between the icon and weather info */
    margin-left: 10px;
    border-radius: 10px;
  }

  .weather-info {
    margin-right: 10px;
  }
  .music-bars {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 100px;
    background-color: grey; /* Change the color as needed */
    display: flex;
    justify-content: space-between;
    animation: musicBarsAnimation 0.5s infinite alternate;
  }
  
  @keyframes musicBarsAnimation {
    0% {
      height: 20px;
    }
    100% {
      height: 100px;
    }
  }
</style>