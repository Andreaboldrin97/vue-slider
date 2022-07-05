// collego js a vue con la variabile 

const app = new Vue({
    //! colego tramite id
    el : '#app' , 
    //! creo i dati che poi inserirò
    data : {
        //? dichiaro l'index come parametro di riferimento
        index : 0,
        elementActive : '',
        //? creo la instruzione timingfunction
        timingFunction : '',
        //* creo il contenitore slides contenente tutte le indicazione delle img
        slides :  [
                        {
                            image: 'img/01.jpg',
                            title: 'Svezia',
                            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                        },
                        {
                            image: 'img/02.jpg',
                            title: 'Svizzera',
                            text: 'Lorem ipsum.',
                        },
                        {
                            image: 'img/03.jpg',
                            title: 'Gran Bretagna',
                            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                        },
                        {
                            image: 'img/04.jpg',
                            title: 'Germania',
                            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                        },
                        {
                            image: 'img/05.jpg',
                            title: 'Paradise',
                            text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                        }
                ]
    },
    //! creo i methods
    methods : {
        //? creo la funzione per i btn
         btnScrolling : function(isNext){
             
            //* creo un ternary operetor per vedere se il btn e next o previus
            this.index = (isNext) ? (this.index + 1) : (this.index - 1);
            //* creo un if per il ciclo infinito
            if(this.index === this.slides.length){
                this.index = 0 ;
            } else if (this.index === -1){
                this.index = this.slides.length -1;
            }
            
            return this.index;
         },

         //? creo le funzioni per ogni singola img associandogli il valore inerente
         thumbnail1 : function(){
             this.index = 0;
         },
         thumbnail2 : function(){
            this.index = 1;
         },
         thumbnail3 : function(){
            this.index = 2;
         },
         thumbnail4 : function(){
            this.index = 3;
         },
         thumbnail5 : function(){
            this.index = 4;
         },

         //? creo la funzione per il setINterval
         timer : function(){
            this.timingFunction = setInterval( this.btnScrolling  , 3000 , true);
        },
          //? creo la funzione per lo stop del setINterval
          timer : function(){
            this.timingFunction = setInterval( this.btnScrolling  , 3000 , true);
        },

    },
    //! creata l'istanza Vue, l'hook created () ,
    //! consente di aggiungere codice da eseguire direttamente sulla pagina
    created (){
        this.timer();
    }
})