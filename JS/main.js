
const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Benvenuto Utente',
        source: 'https://unsplash.it/300/300?image'
      }
    }
}).mount('#app')