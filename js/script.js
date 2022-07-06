// collego js a vue con la variabile 

const app = new Vue({
    //! colego tramite id
    el : '#app' , 
    //! creo i dati che poi inserirò
    data : {
        //? dichiaro l'index come parametro di riferimento
        index : 0,
        //? creo la instruzione timingfunction
        timingFunction : null,
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
         //? creo le funzione dove associo il valore di index dell'array al volare index degli elementi della thuberList
         thunber : function(indexElement){
             this.index = indexElement;
         },
         //? creo la funzione per il setINterval
         timer : function(){
            // this.timingFunction = setInterval( this.btnScrolling  , 3000 , true);
            if (this.timingFunction === null){
                this.timingFunction = setInterval(()=> {
                    this.btnScrolling(true);
                }, 3000);
            } 
        },
          //? creo la funzione per lo stop del setINterval
        stopTimer : function(){
            clearInterval(this.timingFunction);
            this.timingFunction = null;
        },
        //? creo la funzione isActive indocando :
        //? ce se il valore di index è uguale allo stesso valore dell'index della thumbs,
        //? allora isActive ha come valore true 
        isActive : function(indexElement){
            if(this.index === indexElement){
                return true;
            }
        }

    },
    //! creata l'istanza Vue, l'hook created () ,
    //! consente di aggiungere codice da eseguire direttamente sulla pagina
    created (){
        this.timer();
    }
})