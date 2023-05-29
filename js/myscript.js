const {createApp} = Vue;

createApp({
    data(){
        return {
            mails: [],

        }
    },
    mounted() {
        
        // ciclo per generare 10 mail
        for (let i = 0; i < 10; i++) {
            
            // chiamata axios
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(
                risposta => {

                    // pusho la mail nell'array
                    const mail = risposta.data.response;
                    this.mails.push(mail);
                   
            });
        } console.log(this.mails);   
    }
    
}).mount("#app");

