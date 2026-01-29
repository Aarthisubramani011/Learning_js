import { initializeContent } from "./UIelements.js";

let MatchedCards = [];
let OpenCards = [];

export function displayIcons() {
    if (OpenCards.length < 2 && !this.classList.contains('matched')) {
        this.classList.remove('cardback');
        this.classList.add('active');
        this.innerHTML = this.card.icon;
        OpenCards.push(this);
    }
    if (OpenCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (OpenCards[0].card.name === OpenCards[1].card.name) {
        OpenCards.forEach(card => {
            card.classList.add("matched");
            MatchedCards.push(card);
            if(MatchedCards.length == 8){
               const msg = document.querySelector(".message");
               msg.innerText="Hurray!!!! you did it!";
               msg.style.color="red";
               msg.add.classList("message");
               
             
            }
        });
    } else {
        OpenCards.forEach(card => {
            card.classList.add("cardback");
            card.classList.remove("active");
            card.innerHTML = '';
        });
    }
    OpenCards = [];
}

export function resetButton() {
    MatchedCards.forEach(card => {
        card.classList.remove("matched");
        card.classList.remove("active");
        card.innerHTML = '';
        card.classList.add("cardback");
    });
    OpenCards.forEach(card => {
        card.classList.remove("active");
        card.innerHTML = '';
        card.classList.add("cardback");
    });
    MatchedCards = [];
    OpenCards = [];
  
    
}
