<template>
    <div class="clock">
        <h1 class="inline" style="font-size: 100px; color: #e0218a;">{{ this.welcomePhrase }}<h1 class="inline" style="font-size: 100px; color: #242424"> Hannah</h1></h1>
        <h1 class="mt-4" style="font-size: 75px; color: #444444; margin-bottom: 0px;">{{ currentTime }}</h1>
        <h5 style="color: grey">{{ currentDate }}</h5>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        currentTime: new Date().toLocaleTimeString([], {
        hour12: false,
        welcomePhraseDict: [],
        welcomePhrase: '',
      }),
        currentDate: new Date().toLocaleDateString([], {dateStyle: 'full'}),
      };
    },
    beforeMount(){
        this.getWelcomePhrase();
        this.setPageTitle();
    },

    mounted() {
      this.updateTime();
      this.timer = setInterval(this.updateTime, 1000);
    },
    methods: {
      updateTime() {
        this.currentTime = new Date().toLocaleTimeString([], { hour12: false });
      },
      getWelcomePhrase() {
        this.welcomePhraseDict = ['Hello', 'Hi', 'Welcome', 'Hey', 'Hiya', '안녕']
        const randomIndex = Math.floor(Math.random() * this.welcomePhraseDict.length);
        this.welcomePhrase = this.welcomePhraseDict[randomIndex]
      },
      setPageTitle() {
        document.title = "Today 🌷"
      }
    },
    beforeDestroy() {
      clearInterval(this.timer); // Clear the timer when the component is destroyed
    },
  };
  </script>
  
  <style scoped>
  .inline {
    display: inline
  }
  /* Add your CSS styles here if needed */
  </style>