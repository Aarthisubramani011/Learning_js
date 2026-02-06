document.addEventListener('DOMContentLoaded', initialize_page);

class Board {
    constructor() {
        this.board = document.getElementById('board');

        this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];

        this.rowLabelContainer = document.createElement('div');
        this.rowLabelContainer.classList.add('row-labels');
        this.board.parentNode.appendChild(this.rowLabelContainer);

        this.rowlabelreverseContainer = document.createElement('div');
        this.rowlabelreverseContainer.classList.add('row-reverse-label');
        this.board.parentNode.appendChild(this.rowlabelreverseContainer);

        this.colLabelContainer = document.createElement('div');
        this.colLabelContainer.classList.add('col-labels');
        this.board.parentNode.appendChild(this.colLabelContainer);

        this.colLabelreverseContainer = document.createElement('div');
        this.colLabelreverseContainer.classList.add('col-reverse-label');
        this.board.parentNode.appendChild(this.colLabelreverseContainer);

        this.coordinates();
        this.boardMatrix = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]

        ];
        this.Pieces = new ChessPiece();
        this.displaychessPiece();

    }

    Buildboard() {

        this.board.innerHTML = "";
        const tbody = document.createElement('tbody');

        for (let i = 1; i <= 8; i++) {
            const row = document.createElement('tr');

            for (let j = 1; j <= 8; j++) {
                const col = document.createElement('td');
                if (i % 2 == 0) {
                    if (j % 2 === 0) {
                        this.BackgroundWhite(col);
                    } else {
                        this.BackgroundBlack(col);
                    }

                }
                else {
                    if (j % 2 === 1) {
                        this.BackgroundWhite(col);
                    } else {
                        this.BackgroundBlack(col);
                    }

                }


                row.appendChild(col);
            }

            tbody.appendChild(row);
        }

        this.board.appendChild(tbody);


    }
    coordinates() {
        for (let i = 0; i < 8; i++) {
            const num = document.createElement('div');
            num.innerText = this.numbers[i];
            num.classList.add('coordinate');
            this.rowLabelContainer.appendChild(num);
        }

        for (let i = 7; i >= 0; i--) {
            const num = document.createElement('div');
            num.innerText = this.numbers[i];
            num.classList.add('coordinate');
            this.rowlabelreverseContainer.appendChild(num);
        }

        for (let j = 0; j < 8; j++) {
            const letter = document.createElement('div');
            letter.innerText = this.letters[j];
            letter.classList.add('coordinate');
            this.colLabelContainer.appendChild(letter);
        }
        for (let j = 7; j >= 0; j--) {
            const letter = document.createElement('div');
            letter.innerText = this.letters[j];
            letter.classList.add('coordinate');
            this.colLabelreverseContainer.appendChild(letter);
        }
    }


    BackgroundWhite(col) {
        col.classList.add('white');
    }

    BackgroundBlack(col) {
        col.classList.add('black');
    }
    displaychessPiece() {
     for(let i = 0 ; i<2 ;i++){
         for (let j = 0; j < 8; j++) {
            this.boardMatrix[i][j] = this.Pieces.whitePiece[j];

        }

     }
       

    }

}

class ChessPiece {
    constructor() {

        this.whitePiece = [
            { 'W-Rook': 1 },
            { 'W-Knight': 3 },
            { 'W-Bishop': 5 },
            { 'W-Queen': 7 },
            { 'W-King': 9 },
            { 'W-Bishop': 11 },
            { 'W-Knight': 13 },
            { ' W-Rook': 15 }

        ]



        this.BlackPiece = [
            { 'B-Rook': 2 },
            { 'B-Knight': 4 },
            { 'B-Bishop': 6 },
            { 'B-Queen ': 8 },
            { 'B-King': 10 },
            { 'B-Bishop': 12 },
            { 'B-Knight': 14 },
            { 'B-Rook': 16 }

        ]


    }





}




function initialize_page() {
    const board = new Board();
    board.Buildboard();
}
