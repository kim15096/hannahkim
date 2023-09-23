<script>
import Clock from "../components/Clock.vue"; // Adjust the path as needed
import Weather from "../components/Weather.vue"

export default {
  data(){
    return {
      show: false
    }
  },
  components: {
    Clock,
    Weather
  },
  methods: {

  },
  mounted() {
    this.show = true
  }
};
</script>

<template>
  <Transition>
    <div v-if="show" class="parent-container">
      <Clock />
      <Weather class="weather"/>
      <img draggable="false" src="../src/assets/tulips-bg.jpg" style="width:150px; height: 75px;">
    </div>
  </Transition>
  
</template>

<style scoped>
.weather {
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
