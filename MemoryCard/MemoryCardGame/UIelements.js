import { displayIcons, resetButton } from "./logic.js";
document.addEventListener('DOMContentLoaded', initializeContent);

export function initializeContent() {
    const board = document.getElementById('board');
    class Card {
        constructor(name, icon, pairindex) {
            this.name = name;
            this.icon = icon;
            this.isSelected = false;
        }
    }

    let cards = [
        new Card('dog', '<i class="fas fa-dog"></i>',0),
        new Card('crow', '<i class="fa-sharp fa-solid fa-crow"></i>',2),
        new Card('fish', '<i class="fas fa-fish"></i>',5),
        new Card('spider', '<i class="fa-solid fa-spider"></i>',7),
        new Card('crow', '<i class="fa-sharp fa-solid fa-crow"></i>',3),
        new Card('spider', '<i class="fa-solid fa-spider"></i>',6),
        new Card('fish', '<i class="fas fa-fish"></i>',4),
         new Card('dog', '<i class="fas fa-dog"></i>',1),
    ];

    cards.forEach(function(card) {
        let cell = document.createElement('div');
        cell.classList.add('cardback');
        cell.card = card; 
        cell.addEventListener("click", displayIcons);
        cell.addEventListener("click", (card) => displayIcons(card));

        board.appendChild(cell);
    });
}


    