document.addEventListener('DOMContentLoaded', initializeContent);
let MatchedCards = [];
let OpenCards = [];
let icons = [
    { name: 'dog', 
      icon: '<i class="fas fa-dog"></i>'
    },
    { name: 'fish',
       icon: '<i class="fas fa-fish"></i>'
    },
    { name: 'spider',
      icon: '<i class="fa-solid fa-spider"></i>'
     },
    { name: 'crow',
      icon: '<i class="fa-sharp fa-solid fa-crow"></i>' 
    },
    { name: 'dog',
     icon: '<i class="fas fa-dog"></i>'
     },
    { name: 'fish', 
     icon: '<i class="fas fa-fish"></i>' 
    },
    { name: 'spider',
      icon: '<i class="fa-solid fa-spider"></i>'
    },
    { name: 'crow',
     icon: '<i class="fa-sharp fa-solid fa-crow"></i>'
     },
    { name: 'dog', 
     icon: '<i class="fas fa-dog"></i>' 
    },
    { name: 'fish',
     icon: '<i class="fas fa-fish"></i>' 
    },
    { name: 'spider', 
      icon: '<i class="fa-solid fa-spider"></i>'
     },
    { name: 'crow',
    icon: '<i class="fa-sharp fa-solid fa-crow"></i>' 
    },
    { name: 'dog',
      icon: '<i class="fas fa-dog"></i>'
     },
    { name: 'fish',
     icon: '<i class="fas fa-fish"></i>' 
    },
    { name: 'spider',
     icon: '<i class="fa-solid fa-spider"></i>'
     },
    { name: 'crow', 
    icon: '<i class="fa-sharp fa-solid fa-crow"></i>' 
 }
];

function initializeContent() {
    const board = document.getElementById('board');
    shuffleCards();
    function shuffleCards() {
    for (let i = icons.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [icons[i], icons[random]] = [icons[random], icons[i]];
    }
};
    icons.forEach((curr) => {
        let cell = document.createElement('div');
        cell.classList.add('cardback');
        cell.dataset.icon = curr.icon;
        cell.dataset.name = curr.name;
        cell.addEventListener("click", displayIcons);
        board.appendChild(cell);
    });
}


function displayIcons() {
    if (OpenCards.length < 2 && !this.classList.contains('matched')) {
        this.classList.remove('cardback');
        this.classList.add('active');
        this.innerHTML = this.dataset.icon;
        OpenCards.push(this);
    }
    if (OpenCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (OpenCards[0].dataset.name === OpenCards[1].dataset.name) {
        OpenCards.forEach(card => {
            card.classList.add("matched");
            MatchedCards.push(card);
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

function resetButton() {
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
    const board = document.getElementById('board');
    board.innerHTML = '';
    initializeContent();
    shuffleCards();
 
}






         


   













//     let cards = [new Card(), new Card()]

//   class Card
//   {
//     constructor(){
//         this.Name = "";
//         this.IsSelected = "";
//         this.PairIndex = 2;
//     }
//   }