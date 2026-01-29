document.addEventListener("DOMContentLoaded",initializeContent);
let OpenCards=[];
let MatchedCards=[];
function initializeContent(){
    class Boards{
       static board=document.getElementById("board");
        constructor(){
         this.cards= 
         [new Card('dog', '<i class="fas fa-dog"></i>'),
            new Card('crow', '<i class="fa-sharp fa-solid fa-crow"></i>'),
            new Card('fish', '<i class="fas fa-fish"></i>'),
            new Card('spider', '<i class="fa-solid fa-spider"></i>'),
            new Card('crow', '<i class="fa-sharp fa-solid fa-crow"></i>'),
            new Card('spider', '<i class="fa-solid fa-spider"></i>'),
            new Card('fish', '<i class="fas fa-fish"></i>'),
            new Card('dog', '<i class="fas fa-dog"></i>')];
            this.shuffleCard();
        }; 
        shuffleCard() {
            const order=[1,5,3,0,2,4,6,7]
            let newCards = [];

            for (let i = 0; i < order.length; i++) {
                newCards.push(this.cards[order[i]]);
            }

            this.cards = newCards;
        }
        }
        

        class Card{
            constructor(name, icon){
                this.name=name;
                this.icon=icon;
                this.createCard();
                
    
            }
            createCard() {
                this.cell = document.createElement('div');
                Boards.board.appendChild(this.cell);
                this.cell.classList.add('cell');
                this.cell.addEventListener("click",()=>
                this.displayIcons( this.icon, this.cell));
            }
            displayIcons(icon, cell){
                if (OpenCards.length<2 ){
                    this.cell.classList.remove('cell');
                    this.cell.classList.add('active');
                    this.cell.innerHTML = icon;
                    OpenCards.push(this);
                }
                if(OpenCards.length === 2){
                    this.checkMatch()
                }
            }
            checkMatch(){
                if (OpenCards[0].name === OpenCards[1].name) {
                    OpenCards.forEach(cell => {
                    this.classList.add("matched");
                    MatchedCards.push(this);
                    this.Result();
                   });
                }
                 
                else {
                OpenCards.forEach(cell=> {
                    this.cell.classList.remove('active');
                    cell.classList.add('cell');
                    cell.innerHTML = '';
                });
            }
            OpenCards = [];
        }
        Result(){
    
            if(MatchedCards.length == 8){
                const msg = document.querySelector(".message");
                msg.innerText="Hurray!!!! you did it!";
                msg.style.color="red";
                msg.add.classList("message");
            }
        }

            
        }
    
                
        




 const obj = new Boards();
}