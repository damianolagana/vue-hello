
const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Benvenuto Utente',
        nome: "",
        cognome: "",
        source: 'https://unsplash.it/300/300?image',
        className: "invisible"
      }
    },
    methods: {
        btnClick(){
            this.className = "visible"
        }
    }
}).mount('#app')