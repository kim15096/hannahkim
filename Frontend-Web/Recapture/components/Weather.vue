<template>
    <div class="weather-container ms-4 mt-3">
      <img class="weather-icon" draggable="false" :src="weatherIconUrl" alt="Weather Icon" />
      <div class="weather-info">
        <p style="font-weight: bold">Davis, CA</p>
        <p>{{ this.weatherData.main.temp.toFixed(0) }}°C</p>
        <p>{{ this.weatherData.weather[0].description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        weatherData: {main: {temp: 0}, weather:[{description: ''}]},
      };
    },
    computed: {
    weatherIconUrl() {
      // Replace 'iconCode' with the actual icon code you get from the API response
      const iconCode = this.weatherData.weather[0].icon;
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    },
  },
    methods: {
      fetchWeatherData() {
        // Make an API request to OpenWeatherMap with your API key
        const apiKey = 'f7da6ab2a645c91c7c3d79eca9f84d5c'; // Replace with your API key
        const lat = 38.546719
        const lon = -121.744339
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
        axios
          .get(apiUrl)
          .then((response) => {
            this.weatherData = response.data;
            console.log(this.weatherData)
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      },
    },
    mounted() {
      this.fetchWeatherData();
    },
  };
  </script>

<style scoped>
p {
    margin-bottom: 0px;
    font-size: 15px;
}
.weather-container {
    display: flex; /* Use flex layout */
    height: 100px;
    align-items: center; /* Vertically center items */
    background-color: rgb(253, 253, 253);
    border-radius: 25px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Add a drop shadow */
  }
  
  .weather-icon {
    width: 50px; /* Set the desired width for the weather icon */
    height: 50px; /* Set the desired height for the weather icon */
    margin-right: 10px; /* Add spacing between the icon and weather info */
  }

  .weather-info {
    margin-right: 10px;
  }
</style>