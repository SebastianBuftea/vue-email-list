const { createApp } = Vue;

createApp({
        data(){
            return{
                arrayMail:[],
            }
        },
        //alla creazione della pagina eseguo un ciclo for al cui interno carichero attraverso la libreria axios un API mail
        created(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response)=> {
                    this.arrayMail.push(response.data.response)
                })
            }
        },
        methods:{

        }
}).mount("#app")